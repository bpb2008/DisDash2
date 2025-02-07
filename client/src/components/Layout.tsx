import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
