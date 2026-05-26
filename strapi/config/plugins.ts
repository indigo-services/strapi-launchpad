export default () => ({
  mcp: {
    enabled: true,
    config: {
      session: {
        type: "memory",
      },
    },
  },
  "content-manager-organizer": {
    enabled: true,
  },
  "config-sync": {
    enabled: true,
  },
  navigation: {
    enabled: true,
  },
  documentation: {
    enabled: true,
    config: {
      swagger: {
        additionalConfigs: {},
      },
    },
  },
  "soft-delete": {
    enabled: true,
  },
});
