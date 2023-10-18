import type { Metadata } from 'next'
import { Providers } from "./providers";
import Header from "./header"
import Footer from './footer';
import PageChangeMotion from '@/components/motionWrapper/pageChangeMotion'
import { Box } from "@chakra-ui/react";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <head>
        <title>NECO Portfolio Site</title>
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="../../public/logo.jpg" />
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
