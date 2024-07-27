import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import React from "react";
import StoreProvider from "./StoreProvider";
import Aside from "@/components/Aside";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me A Chai - A Funding App for Coders",
  description:
    "Get Me A Chai is a Funding website where the people from all over the world can fund for their loved Programmer or Coder",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className="w-screen text-black overflow-x-hidden"
          style={{
            background: "rgb(254,236,255)",
            background:
              "linear-gradient(90deg, rgba(254,236,255,1) 0%, rgba(255,248,255,1) 25%, rgba(255,243,255,1) 48%, rgba(255,246,255,1) 75%, rgba(255,234,255,1) 100%)",
            overflowX: "hidden",
            width: "100vw",
          }}
        >
          <SessionWrapper>
            {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
            <NavBar />
            <aside>
              <Aside />
            </aside>
            {children}
          </SessionWrapper>
        </body>
      </html>
    </StoreProvider>
  );
}
