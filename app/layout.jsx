import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import logo from '../assets/cos-03.png'
import '../styles/global.css'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: {
        default: 'Commerce OS Open API',
        template: '%s | Commerce OS'
    }
}

export default async function RootLayout({ children }) {
    return (
        <html lang="ko" dir="ltr" suppressHydrationWarning>
            <Head backgroundColor={{ dark: '#0f172a', light: '#ffffff' }} />
            <body>
                <Layout
                    navbar={<Navbar logo={<Image src={logo} alt="Commerce OS" height={64} />} />}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com"
                    darkMode={false}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
