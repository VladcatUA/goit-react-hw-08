import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const linkColor = ({ isActive }) => {
  return clsx(css.navigationEl, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <nav>
          <ul className={css.navigationBox}>
            <li>
              <NavLink to="/" className={linkColor}>
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink to="/contacts" className={linkColor}>
                  Contacts
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}