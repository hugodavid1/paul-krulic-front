import Image from "next/image";
import React, { useState } from "react";
import classNames from "classnames";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen w-80">
      <Image src="/logo.png" alt="Logo" width={215} height={75} />
      <div className="mt-10">
        <div
          onClick={toggleDropdown}
          className={classNames("cursor-pointer transition-all", {
            underline: isDropdownOpen,
            "hover:underline": !isDropdownOpen,
          })}
        >
          TRAVAUX
        </div>
        {isDropdownOpen && (
          <div className="ml-4 mt-2 space-y-0.5 transition-all ease-in-out">
            <div>Projet 1</div>
            <div>Projet 2</div>
            <div className="last:mb-2">Projet 3</div>
          </div>
        )}
        <div>SCULPTURES</div>
        <div>EXPOSITIONS</div>
        <div>TEXTES</div>
      </div>
    </div>
  );
}
