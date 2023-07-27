export const metadata = {
  title: "OHSTOCK - 대시보드",
  description: "대시보드",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
