import nextra from 'nextra'

const withNextra = nextra({
    contentDirBasePath: '/'
})

export default withNextra({
    basePath: '/docs',
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    }
})
