"use client";

import React, { ReactNode } from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
