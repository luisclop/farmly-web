import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex h-20 w-4/5 flex-row items-center">
      <div className="flex h-full w-40 items-center justify-center">
        <p className="text-2xl font-bold text-indigo-950">Farmly</p>
      </div>
      <nav className="flex h-full w-full flex-row-reverse items-center px-4">
        <ul className="flex flex-row gap-16">
          <li className="h-10 w-40 rounded-lg border-2 border-teal-700 bg-slate-50">
            <Link
              to="/login"
              className="flex h-full w-full items-center justify-center text-gray-500"
            >
              Login
            </Link>
          </li>
          <li className="h-10 w-40 rounded-lg bg-teal-700">
            <Link
              to="/register"
              className="flex h-full w-full items-center justify-center text-slate-100"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
// #20908A

export default Header;
