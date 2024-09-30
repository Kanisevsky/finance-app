import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3">
        <div>{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
