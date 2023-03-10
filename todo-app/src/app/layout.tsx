"use client";
import ChakraWrapper from "@/components/ChakraWrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ minHeight: "100vh" }}>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
