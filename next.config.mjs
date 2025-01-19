/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: "export", // Outputs a Single-Page Application (SPA).
	// output: "standalone", // for some reason its the only thing that works when npm start it
	distDir: "./dist", // Changes the build output directory to `./dist/`.
	basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
};

export default nextConfig;
