/** @type {import('next').NextConfig} */
const nextConfig = {}

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'task-list-view',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './home': './app/page.js',
          },
          remotes: remotes(options.isServer),
          shared: {},
          extraOptions:{
            
            exposePages: true
          }
        }),
      );
  
      return config;
    },
  };
//
module.exports = nextConfig;  
