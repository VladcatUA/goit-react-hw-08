import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const linkColor = ({ isActive }) => {
  return clsx(css.navigationEl, isActive && css.active);
};
export default function AuthNav() {
  return (
    <>
      <ul className={css.navigationBox}>
        <li>
          <NavLink to="/register" className={linkColor}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={linkColor}>
            Log in
          </NavLink>
        </li>
      </ul>
    </>
  );
}