import ChakraWrapper from "@/components/ChakraWrapper";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
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
      <body>
        <ChakraWrapper>
          <Navbar />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
