/** @type {import('next').NextConfig} */

const ModuleFederationPlugin = require('webpack').container

const nextConfig = {/*
  webpack(config, options) {
  config.plugins.push(
    new NextFederationPlugin({
      name: 'task-list',
      filename: 'static/chunks/remoteEntry.js',
      
      remotes:{
        //tasks:'tasks@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        //login:'taskList@http://localhost:3000/_next/static/chunks/remoteEntry.js',
        //create_task_list:'create-task-list@http://localhost:3001/_next/static/chunks/remoteEntry.js',
      },

      exposes: {
        './taskListView': './app/page.js',
      },
    })
  );
  return config;
  },*/
};


module.exports = nextConfig;  
