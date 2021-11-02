import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
/**
 * @returns
 */
export function getSdkConfig(hash = true) {
  const env = process.env.NODE_ENV;
  const __DEV__ = env === "development";

  return {
    mode: env,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    build: {
      minify: !__DEV__,
      lib: {
        entry: resolve(__dirname, "../src/index_sdk.js"),
        name: "notifysdk",
        formats: ["umd"],
        fileName: () => (hash ? "notifysdk-[hash].js" : "notifysdk.js"),
      },
      rollupOptions: {
        output: {
          assetFileNames: hash
            ? "notifysdk-[name]-[hash].[ext]"
            : "notifysdk-[name].[ext]",
        },
      },
      outDir: "./dist-sdk",
      emptyOutDir: false,
    },
    plugins: [vue(), jsx()],
  };
}
