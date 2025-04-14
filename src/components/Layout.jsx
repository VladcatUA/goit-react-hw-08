import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
export default function Layout() {
  return (
    <>
      <AppBar />
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}