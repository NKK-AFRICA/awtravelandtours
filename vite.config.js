import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { copyFileSync } from "fs";
import { join } from "path";

export default defineConfig({
	plugins: [
		vue(),
		{
			name: "copy-404",
			closeBundle() {
				// Copy index.html to 404.html for GitHub Pages SPA routing
				const distPath = join(__dirname, "dist");
				copyFileSync(join(distPath, "index.html"), join(distPath, "404.html"));
			},
		},
	],
	server: {
		port: 4000,
	},
	base: "/",
});
