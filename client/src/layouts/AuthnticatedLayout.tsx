import Navbar from "../ui/Navbar";

const AuthnticatedLayout = () => {
  return (
    <div className="h-100vh mx-auto">
      <Navbar />
      <div className="overflow-y-auto h-[calc(100vh-64px)]"></div>
    </div>
  );
};

export default AuthnticatedLayout;
