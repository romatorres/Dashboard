"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center fixed top-0 left-0 w-full h-20 z-30 lg:bg-gray-50 bg-primary shadow-md"></div>
  );
};

export default Navbar;
