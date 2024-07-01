class Config {
  readonly mode: string;
  readonly isStaging: boolean;
  readonly isTest: boolean;
  readonly isDev: boolean;
  readonly isProduction: boolean;
  readonly serviceUrl: URL;
  readonly apiEndpoint: string;

  constructor() {
    this.mode = process.env.NUXT_PUBLIC_MODE ?? "development";
    this.isTest = this.mode === "test";
    this.isStaging = this.mode === "staging";
    this.isDev = this.isStaging
      ? false
      : process.env.NUXT_PUBLIC_DEV === "true";
    this.isProduction = process.env.NUXT_PUBLIC_PROD === "true";
    this.serviceUrl = new URL(
      process.env.NUXT_PUBLIC_SERVICE_URL ?? "http://localhost:5001"
    );
    this.apiEndpoint = process.env.API_URL ?? "http://localhost:8080";
  }
}

export const config = new Config();
