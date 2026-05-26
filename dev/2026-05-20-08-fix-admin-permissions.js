/**
 * Fixes Super Admin role permissions after a strapi import.
 *
 * `strapi import` can leave the Super Admin role without field-level
 * permissions for imported content types, causing "No permissions to
 * see this field" in the admin panel.
 *
 * Bootstraps the running Strapi instance, reads all registered content
 * types and action patterns, then rebuilds the Super Admin role's
 * permissions to grant full access — matching the exact runtime state.
 */

require("ts-node").register({ transpileOnly: true });

const path = require("path");
const strapiFactory = require("@strapi/strapi");

const ADMIN_EMAIL = "indigobuildops@gmail.com";

async function main() {
  console.log("Bootstrapping Strapi to fix admin permissions...");

  const app = await strapiFactory
    .createStrapi({ appDir: path.resolve(__dirname, "..", "strapi"), distDir: "./dist" })
    .load();

  try {
    const role = await ensureSuperAdminRole(app);
    console.log(`Super Admin role: id=${role.id} code=${role.code}`);

    const count = await rebuildPermissions(app, role);
    console.log(`Rebuilt ${count} permissions for Super Admin role.`);

    await linkUserToRole(app, role);
    console.log("\nAdmin permissions fixed.");
  } catch (err) {
    console.error("Error fixing permissions:", err);
    process.exit(1);
  } finally {
    await app.destroy();
  }
}

async function ensureSuperAdminRole(app) {
  let role = await app.db.query("admin::role").findOne({
    where: { code: "strapi-super-admin" },
  });
  if (role) return role;

  role = await app.db.query("admin::role").findOne({
    where: { name: "Super Admin" },
  });
  if (role) {
    await app.db.query("admin::role").update({
      where: { id: role.id },
      data: { code: "strapi-super-admin" },
    });
    return app.db.query("admin::role").findOne({ where: { id: role.id } });
  }

  return app.db.query("admin::role").create({
    data: {
      name: "Super Admin",
      code: "strapi-super-admin",
      description: "Super Admins can access and manage all features and settings.",
    },
  });
}

async function rebuildPermissions(app, role) {
  // Wipe existing permissions for this role
  await app.db.query("admin::permission").deleteMany({
    where: { role: { id: role.id } },
  });

  const roleId = role.id;
  const allContentTypes = Object.keys(app.contentTypes);
  const locales = await getLocales(app);
  let count = 0;

  // Content manager explorer actions for every content type
  const explorerActions = [
    "plugin::content-manager.explorer.create",
    "plugin::content-manager.explorer.read",
    "plugin::content-manager.explorer.update",
    "plugin::content-manager.explorer.delete",
    "plugin::content-manager.explorer.publish",
  ];

  for (const uid of allContentTypes) {
    const ct = app.contentTypes[uid];
    const fields = getAllFields(ct);

    for (const action of explorerActions) {
      // Skip publish for content types without draft/publish
      if (action.includes("publish") && !ct.options?.draftAndPublish) continue;

      await app.db.query("admin::permission").create({
        data: {
          action,
          subject: uid,
          role: { id: roleId },
          properties: { fields, locales },
          conditions: [],
        },
      });
      count++;
    }
  }

  // Soft-delete plugin actions for every content type
  const softDeleteActions = [
    "plugin::soft-delete.explorer.read",
    "plugin::soft-delete.explorer.restore",
    "plugin::soft-delete.explorer.delete-permanently",
  ];

  for (const uid of allContentTypes) {
    for (const action of softDeleteActions) {
      await app.db.query("admin::permission").create({
        data: {
          action,
          subject: uid,
          role: { id: roleId },
          properties: { locales },
          conditions: [],
        },
      });
      count++;
    }
  }

  // Upload plugin
  const uploadActions = [
    "plugin::upload.read",
    "plugin::upload.configure-view",
    "plugin::upload.assets.create",
    "plugin::upload.assets.update",
    "plugin::upload.assets.download",
    "plugin::upload.assets.copy-link",
    "plugin::upload.settings.read",
  ];
  for (const action of uploadActions) {
    await app.db.query("admin::permission").create({
      data: { action, subject: null, role: { id: roleId }, properties: {}, conditions: [] },
    });
    count++;
  }

  // Content manager layout/config actions
  const cmActions = [
    "plugin::content-manager.single-types.configure-view",
    "plugin::content-manager.collection-types.configure-view",
    "plugin::content-manager.components.configure-layout",
  ];
  for (const action of cmActions) {
    await app.db.query("admin::permission").create({
      data: { action, subject: null, role: { id: roleId }, properties: {}, conditions: [] },
    });
    count++;
  }

  // Global admin actions
  const adminActions = [
    "admin::marketplace.read",
    "admin::webhooks.create", "admin::webhooks.read", "admin::webhooks.update", "admin::webhooks.delete",
    "admin::users.create", "admin::users.read", "admin::users.update", "admin::users.delete",
    "admin::roles.create", "admin::roles.read", "admin::roles.update", "admin::roles.delete",
    "admin::api-tokens.access", "admin::api-tokens.create", "admin::api-tokens.read",
    "admin::api-tokens.update", "admin::api-tokens.regenerate", "admin::api-tokens.delete",
    "admin::project-settings.update", "admin::project-settings.read",
    "admin::transfer.tokens.access", "admin::transfer.tokens.create", "admin::transfer.tokens.read",
    "admin::transfer.tokens.update", "admin::transfer.tokens.regenerate", "admin::transfer.tokens.delete",
  ];
  for (const action of adminActions) {
    await app.db.query("admin::permission").create({
      data: { action, subject: null, role: { id: roleId }, properties: {}, conditions: [] },
    });
    count++;
  }

  // Plugin settings/config actions
  const pluginActions = [
    "plugin::content-type-builder.read",
    "plugin::email.settings.read",
    "plugin::i18n.locale.create", "plugin::i18n.locale.read", "plugin::i18n.locale.update", "plugin::i18n.locale.delete",
    "plugin::seo.read",
    "plugin::users-permissions.roles.create", "plugin::users-permissions.roles.read",
    "plugin::users-permissions.roles.update", "plugin::users-permissions.roles.delete",
    "plugin::users-permissions.providers.read", "plugin::users-permissions.providers.update",
    "plugin::users-permissions.email-templates.read", "plugin::users-permissions.email-templates.update",
    "plugin::users-permissions.advanced-settings.read", "plugin::users-permissions.advanced-settings.update",
    "plugin::content-manager-organizer.settings.read", "plugin::content-manager-organizer.settings.update",
    "plugin::config-sync.settings.read", "plugin::config-sync.menu-link",
    "plugin::navigation.read", "plugin::navigation.update", "plugin::navigation.settings",
    "plugin::documentation.read", "plugin::documentation.settings.update",
    "plugin::documentation.settings.regenerate", "plugin::documentation.settings.read",
    "plugin::soft-delete.read", "plugin::soft-delete.settings",
  ];
  for (const action of pluginActions) {
    await app.db.query("admin::permission").create({
      data: { action, subject: null, role: { id: roleId }, properties: {}, conditions: [] },
    });
    count++;
  }

  return count;
}

function getAllFields(contentType) {
  const { attributes } = contentType;
  return Object.keys(attributes).filter((key) => {
    const attr = attributes[key];
    // Skip relation fields that are managed by Strapi internally
    if (attr.type === "relation" && attr.target === "admin::user") return false;
    return true;
  });
}

async function getLocales(app) {
  try {
    const i18nPlugin = app.plugin("i18n");
    if (!i18nPlugin) return undefined;
    const locales = await i18nPlugin.service("locales").find({});
    return locales.map((l) => l.code);
  } catch {
    return undefined;
  }
}

async function linkUserToRole(app, role) {
  const user = await app.db.query("admin::user").findOne({
    where: { email: ADMIN_EMAIL },
    populate: ["roles"],
  });

  if (!user) {
    console.log(`Admin user ${ADMIN_EMAIL} not found — created via CLI.`);
    return;
  }

  const hasRole = user.roles?.some((r) => r.id === role.id);
  if (hasRole) {
    console.log(`${ADMIN_EMAIL} already linked to Super Admin role.`);
    return;
  }

  await app.db.query("admin::user").update({
    where: { id: user.id },
    data: { roles: [...(user.roles || []), role.id] },
  });
  console.log(`Linked ${ADMIN_EMAIL} to Super Admin role.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
