import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Marketplace: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <header className="flex h-20 w-full items-center justify-between bg-teal-700 px-16">
        <div>
          <p className="text-2xl font-bold text-indigo-100">Farmly</p>
        </div>
        <div className="flex gap-8">
          <FaShoppingCart size="28" color="white" />
          <FaUser size="28" color="white" />
        </div>
      </header>
    </div>
  );
};

export default Marketplace;
