import "./globals.css";

export const metadata = {
  title: "Book Store",
  description: "A book store where every tech related new books is available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
