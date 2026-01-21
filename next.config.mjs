import nextra from 'nextra'

const withNextra = nextra({
    contentDirBasePath: '/'
})

export default withNextra({
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    }
})
