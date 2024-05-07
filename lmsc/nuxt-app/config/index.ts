class Config {
  readonly mode: string;

  readonly isStaging: boolean;

  readonly isTest: boolean;

  readonly isDev: boolean;

  readonly isProduction: boolean;

  readonly serviceUrl: URL;

  readonly apiEndpoint: string;

  readonly apiMocking: boolean;

  constructor() {
    this.mode = process.env.NEXT_PUBLIC_MODE ?? "development";
    this.isTest = this.mode === "test";
    this.isStaging = this.mode === "staging";
    this.isDev = this.isStaging
      ? false
      : process.env.NEXT_PUBLIC_DEV === "true";
    this.isProduction = process.env.NEXT_PUBLIC_PROD === "true";
    this.serviceUrl = new URL(
      process.env.NEXT_PUBLIC_VITE_SERVICE_URL ?? "http://localhost:5001"
    );
    this.apiEndpoint =
      process.env.NEXT_PUBLIC_BC_API_ENDPOINT ?? "http://localhost:8080";
    this.apiMocking = process.env.NEXT_PUBLIC_VITE_API_MOCKING === "true";
  }
}

export const config = new Config();
