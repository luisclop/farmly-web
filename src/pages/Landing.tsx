import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="mt-20 flex flex-col items-center gap-4 text-indigo-950">
        <h1 className="text-6xl font-bold">Farmly</h1>
        <h2 className="text-4xl font-bold">Urban agriculture in your pocket</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          accumsan sed metus.
        </p>
        <Link
          className="mt-8 flex h-12 w-40 items-center justify-center rounded-lg bg-teal-700 text-slate-100"
          to="/login"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
