// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            // destination: 'https://api.example.com/:path*',
            destination: 'http://172.16.0.30:8090/:path*',
          },
        ]
      },
  };