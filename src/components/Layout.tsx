import React, { useState } from "react";
import Nav from "./Nav";
interface layoutProps {
  children: React.ReactNode;
}

// Seting up a Layout to add sidebar and navigation
function Layout({ children }: layoutProps) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className=" min-h-screen ">
      <div className="block md:hidden flex items-center p-4 ">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6 text-black font-semibold text-2xl">
          ContactLink
        </div>
      </div>
      <div className="flex">
        <div className="fixed">
          <Nav show={showNav} />
        </div>
        <div className="flex-1 p-4 bg-white lg:pl-52 md:pl-52 h-screen ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
