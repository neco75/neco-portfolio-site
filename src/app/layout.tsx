import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "./header";
import Footer from "./footer";
import PageChangeMotion from "@/components/motionWrapper/pageChangeMotion";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "NECO Portfolio Site",
  description: "ポートフォリオサイトです。",
  icons:
    "https://pbs.twimg.com/profile_images/1633107636395581440/S2D-Uz8q_400x400.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>NECO Portfolio Site</title>
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ocen_UoA30C2" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1633107636395581440/S2D-Uz8q_400x400.jpg"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <Box m={5}>
            <PageChangeMotion>
              <Box>{children}</Box>
            </PageChangeMotion>
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
