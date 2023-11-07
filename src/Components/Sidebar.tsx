"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-white.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillGearFill,
  BsFillHouseFill,
  BsFillLightningFill,
  BsFillHeartPulseFill,
} from "react-icons/bs";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex items-center text-white">
      {/* Moblie Button */}
      <div className="block lg:hidden z-50 cursor-pointer ml-6 mt-6">
        {openSidebar ? (
          <AiOutlineClose
            onClick={() => setOpenSidebar(false)}
            size={32}
            className="text-white"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setOpenSidebar(true)}
            size={32}
            className="text-white"
          />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 bottom-0  sm:none duration-200 z-40 flex w-64 h-screen flex-col bg-purple transition-all text-white
           ${openSidebar ? "translate-x-0" : "-translate-x-96 lg:translate-x-0"}
           `}
      >
        <div className="flex justify-center">
          <Image
            src={Logo}
            alt="Logomarca da empresa MoveMentor"
            className="w-40 mt-20"
          />
        </div>

        {/*Lista Sidebar*/}
        <div className="mt-14">
          <ul className="flex flex-col font-semibold text-lg">
            <li className="hover:bg-purple-hover transition-all duration-200 p-5">
              <Link href="/#home" className="flex flex-row items-center">
                <BsFillHouseFill className="mr-2 text-2xl text-secondary" />
                Home
              </Link>
            </li>
            <li className="hover:bg-purple-hover  transition-all duration-200 p-5">
              <Link href="/#exercicios" className="flex flex-row items-center">
                <BsFillLightningFill className="mr-2 text-2xl text-secondary" />
                Exercícios
              </Link>
            </li>
            <li className="hover:bg-purple-hover  transition-all duration-200 p-5">
              <Link
                href="/#grupo_muscular"
                className="flex flex-row items-center"
              >
                <BsFillGrid3X3GapFill className="mr-2 text-2xl text-secondary" />
                Grupo muscular
              </Link>
            </li>
            <li className="hover:bg-purple-hover  transition-all duration-200 p-5">
              <Link href="/#alunos" className="flex flex-row items-center">
                <BsPeopleFill className="mr-2 text-2xl text-secondary" /> Alunos
              </Link>
            </li>
            <li className="hover:bg-purple-hover  transition-all duration-200 p-5 mt-20">
              <Link href="/#alunos" className="flex flex-row items-center">
                <BsFillGearFill className="mr-2 text-2xl text-secondary" />
                Configurações
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
