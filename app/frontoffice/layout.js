import SideBar from "./components/SideBar";
export default function Layout({ children }) {
  return (
    <>
    <div>
        <SideBar></SideBar>
        {children}
    </div>
    </>
  );
}