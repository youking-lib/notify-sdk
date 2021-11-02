import { defineConfig } from "vite";
import { getSdkConfig } from "./base";

process.env.NODE_NEV = "development";

// https://vitejs.dev/config/
export default defineConfig(getSdkConfig());
