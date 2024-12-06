import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Mangalib",
};


export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        {children}
        {modal}
      </body>
    </html>
  );
}
