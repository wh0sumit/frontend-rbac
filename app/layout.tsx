import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + TypeScript + Tailwind CSS",
  description: "Next.js + TypeScript + Tailwind CSS template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ReactQueryDevtools />
          <Layout>{children}</Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

