export const metadata = {
  title: "OHSTOCK - 메인페이지",
  description: "메인페이지",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
