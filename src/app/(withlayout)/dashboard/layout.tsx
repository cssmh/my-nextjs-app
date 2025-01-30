import DashFooter from "@/app/Component/DashFooter";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <DashFooter />
    </div>
  );
};

export default DashboardLayout;
