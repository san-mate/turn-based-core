import defaultConfig from './../defaultConfig.js';

class ConfigManager {
    constructor() {
        this.config = { ...defaultConfig };
    }

    setCampaignConfig(campaignConfig) {
        // Apply campaign-specific configuration here
        this.config = { ...this.config, ...campaignConfig };
    }

    getConfig() {
        return this.config;
    }
}

const Rules = new ConfigManager();

export { Rules };