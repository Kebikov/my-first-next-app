/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/vi/**'
            },
            {
                protocol: 'https',
                hostname: 's0.rbk.ru',
                port: '',
                pathname: '/v6_top_pics/media/img/0/68/346871734328680.webp'
            },
        ]
    }
}

module.exports = nextConfig
