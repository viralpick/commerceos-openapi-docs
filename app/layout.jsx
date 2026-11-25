import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import logo from "../assets/cos-03.png";
import "../styles/global.css";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "AgentOS Open API",
    template: "%s | AgentOS",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      {/* Synapse: bg = --sy-bg-page, primary = --sy-action-brand-fg-on-page (#0D61B5 / #7BBBFC) 를 HSL 로 환산 */}
      <Head
        backgroundColor={{ dark: "#09090B", light: "#FFFFFF" }}
        color={{
          hue: 210,
          saturation: { light: 87, dark: 95 },
          lightness: { light: 38, dark: 74 },
        }}
      />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<Image src={logo} alt="AgentOS" height={64} />}
              logoLink="https://os.enhans.ai/docs"
            />
          }
          pageMap={await getPageMap()}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
