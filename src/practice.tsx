class ConfigManager {
  private static instance: ConfigManager;
  private settings: Map<string, string> = new Map();

  private constructor() {
    // Simulate loading config from file/env
    this.settings.set("apiUrl", "https://api.example.com");
    this.settings.set("timeout", "5000");
  }

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  get(key: string): string | undefined {
    return this.settings.get(key);
  }
}

// Usage — same instance everywhere
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();
console.log(config1); // true
