"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import Button from "@/app/components/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef:any = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="Container w-full mx-auto  z-10 overflow-hidden">
      {/* Navbar for Large Screens */}
      <div className="bg-[#043873] w-full h-[92px] hidden md:flex justify-between gap-10 text-white px-[25px] sm:px-[50px] md:px-[70px] lg:px-[90px] 2xl:px-[220px] py-4 items-center">
        <div>
          <Image
            className="w-[120px] object-cover h-[20px] md:w-[180px] lg:w-[190px] 2xl:w-[191px] md:h-[34px]"
            src="/images/Logo.png"
            alt="Logo-pic"
            width={80}
            height={34}
          />
        </div>
        <div className="flex gap-6 lg:gap-10 2xl:gap-14 2xl:w-[735px]">
          <ul className="flex gap-7 lg:gap-14 items-center">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resource</li>
            <li>Pricing</li>
          </ul>
          <Button btntext="Login" />
        </div>
      </div>

      {/* Navbar for Small Screens */}
      <div className="bg-[#043873] w-full h-[92px] flex md:hidden justify-between items-center text-white px-[25px] py-4">
        <div>
          <Image
            className="w-[120px] object-cover h-[20px]"
            src="/images/Logo.png"
            alt="Logo-pic"
            width={80}
            height={34}
          />
        </div>
        <div className="flex items-center">
          <div className="flex text-4xl gap-5">
            {!isOpen ? <FaBars onClick={toggle} /> : <IoMdClose onClick={toggle} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen bg-[#4F9CF9] w-[70%] transition-all duration-500 ease-in-out py-20 px-6 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="py-4 text-lg" onClick={toggle}>
          Products
        </li>
        <li className="py-4 text-lg" onClick={toggle}>
          Solutions
        </li>
        <li className="py-4 text-lg" onClick={toggle}>
          Resource
        </li>
        <li className="py-4 text-lg" onClick={toggle}>
          Pricing
        </li>
        <div className="mt-10">
          <Button btntext="Login" />
        </div>
      </ul>
    </div>
  );
}

export default Header;
