import { Header } from "@/shared/components/shared";

export const metadata = {
    title: "Profile",
    description: "",
  };
  
  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <html lang="en">
          <body>
            <Header />
            {children}</body>
        </html>
      </>
    );
  }