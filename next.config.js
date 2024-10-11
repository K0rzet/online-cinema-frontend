/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	// reactStrictMode: true,
	// experimental: {
	// 	newNextLinkBehavior: false,
	// },
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://api.cinema.ilyacode.ru/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://api.cinema.ilyacode.ru/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
