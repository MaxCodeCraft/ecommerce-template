import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import Provider from "@/utils/Provider";
import ReduxProvider from "@/utils/ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="retro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organise tous les éléments les uns sous les autres */}
        <div className="flex min-h-screen flex-col">
          <ReduxProvider>
            <Provider>
              <Header />
              {/* Pas besoin de min-h-screen, avec flex-1 les children prendront toute la hauteur restante entre header et footer */}
              <div className="flex-1">{children}</div>
              <Footer />
            </Provider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
