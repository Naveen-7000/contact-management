import { useLocation, Link } from "react-router-dom";

interface navProps {
  show: boolean;
}

function Nav({ show }: navProps) {
  const inactiveLink = "flex gap-1 p-2 font-semibold";
  const activeLink = inactiveLink + " bg-slate-200 text-black rounded-lg";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = inactiveIcon + "text-primary";
  const { pathname } = useLocation();

  return (
    <aside
      className={
        (show ? "left-0" : "-left-full") +
        " top-0 text-gray-400 p-4 fixed w-full bg-black h-screen md:static md:w-auto transition-all shadow-sm "
      }
    >
      <div className="mb-4 mx-auto text-white font-semibold text-2xl text-center">
        ContactLink
      </div>
      <nav className="mt-6 flex flex-col gap-4">
        <Link to={"/"} className={pathname === "/" ? activeLink : inactiveLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={pathname === "/" ? activeIcon : inactiveIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard
        </Link>
        <Link
          to={"/charts"}
          className={pathname === "/charts" ? activeLink : inactiveLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={pathname === "/" ? activeIcon : inactiveIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          Charts and Maps
        </Link>
      </nav>
    </aside>
  );
}

export default Nav;
