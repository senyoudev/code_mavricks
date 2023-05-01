import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const { route } = useRouter();
  if (route === "/token") {
    return (
      <>
        <Header />
        <main className="w-full bg-linearPurple flex items-center" style={{height:'70vh'}}>
          {children}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-linearPurple">{children}</main>
      <Footer />
    </>
  );
}
