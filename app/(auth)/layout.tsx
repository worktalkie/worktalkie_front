import { NavBar } from "@/packages/ui";

const AuthenticatedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
      <NavBar />
    </>
  );
};

export default AuthenticatedLayout;
