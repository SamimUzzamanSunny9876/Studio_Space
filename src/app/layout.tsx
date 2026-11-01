import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/sharedComponents/Navbar";
import Footer from "@/sharedComponents/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const workSans = Work_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Studio Space",
  description: "Studio Space has best studios",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${workSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        
        {children}
        <ToastContainer position="bottom-right" theme="colored" />
        <Footer></Footer>
        </body>

    </html>
  );
}
