import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		"process.env.IS_PREACT": JSON.stringify("false"),
		"process.env.NODE_ENV": JSON.stringify("production"),
		"process.env.__NEXT_PRIVATE_PREBUNDLED_REACT": "next",
	},
});
