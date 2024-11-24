"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import navData from "../../public/data/navData";

const Header = () => {

    const pathName = usePathname();
    const links = navData;

  return (
    <header className="bg-gray-900 text-white shadow-lg px-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-lg font-bold">
          <Link href="/">
            <p className="hover:text-gray-300">FDBMS</p>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {links.map(link => (
                <li key={link.name}>
                  <Link href={link.path}>
                    <p className={`block transition duration-100 hover:text-gray-300 ${pathName === link.path? 'text-orange-400' : ''}`}>{link.name}</p>
                  </Link>
                </li>
  
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
