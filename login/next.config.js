/** @type {import('next').NextConfig} */

// const { NextFederationPlugin } = require('@module-federation/nextjs-mf'); // Generated a problem with the react-dom module
const { ModuleFederationPlugin } = require('webpack').container;

const nextConfig = {
    webpack(config, options){
        config.plugins.push(
            new ModuleFederationPlugin({
                name: 'login',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    tasks:'tasks@http://localhost:3001/_next/static/chunks/remoteEntry.js',
                    taskList:'taskList@http://localhost:3002/_next/static/chunks/remoteEntry.js',
                    createTaskList:'taskList@http://localhost:3003/_next/static/chunks/remoteEntry.js',
                },
                exposes: {
                    './navbar': './components/navbar.jsx',
                },
            })
        );
        return config;
    },
    distDir: 'out',
}

module.exports = nextConfig;