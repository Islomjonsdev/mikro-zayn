// next.config.js
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app/scss")],
    prependData: `@import "variable.scss";`
  },
};

export default nextConfig;