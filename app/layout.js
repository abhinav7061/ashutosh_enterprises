import { Roboto } from 'next/font/google'
import "../styles/globals.scss";
import Providers from "@/context/Providers";
import { DrawerContext } from "@/context/DrawerContext";
import OnlineStatusContext from "@/context/OnlineStatusContext";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Ashutosh Enterprises | Admin Dashboard",
  description: "Dashboard for managing works at Ashutosh Enterprises",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" >
      <body className={roboto.className}>
        <OnlineStatusContext>
          <DrawerContext>
            <Providers>
              {children}
            </Providers>
          </DrawerContext>
        </OnlineStatusContext>
      </body>
    </html>
  );
}
