/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
    // reactSrictMode: true,
    // webpack(config, options){
    //     config.plugins.push(
    //         new NextFederationPlugin({
    //             name: 'login',
    //             filename: 'static/chunks/remoteEntry.js',
    //             remotes: {
    //                tasks:'tasks@http://localhost:3001/_next/static/chunks/remoteEntry.js',
    //             },
    //         })
    //     );
    //     return config;
    // },
    distDir: 'out',
}

module.exports = nextConfig;