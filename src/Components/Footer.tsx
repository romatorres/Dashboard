"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillGearFill,
  BsFillHouseFill,
  BsFillLightningFill,
  BsFillHeartPulseFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex items-center justify-center fixed bottom-0 left-0 w-full h-24 z-30 border-primary border-t-2 shadow-md lg:hidden">
      <ul className="flex md:gap-24 sm:gap-16 gap-0 font-semibold">
        <li className="hover:bg-gray-200 transition-all duration-200 p-3">
          <Link
            href="/#home"
            className="flex flex-col items-center justify-center"
          >
            <BsFillHouseFill className="text-2xl md:text-3xl text-primary" />
            <span className="text-sm md:text-md text-primary">Home</span>
          </Link>
        </li>
        <li className="hover:bg-gray-200 transition-all duration-200 p-3">
          <Link
            href="/#alunos"
            className="flex flex-col items-center justify-center"
          >
            <BsPeopleFill className="text-2xl md:text-3xl text-primary" />
            <span className="text-sm md:text-md text-primary">Alunos</span>
          </Link>
        </li>
        <li className="hover:bg-gray-200 transition-all duration-200 p-3">
          <Link
            href="/#exercicios"
            className="flex flex-col items-center justify-center"
          >
            <BsFillHeartPulseFill className="text-2xl md:text-3xl text-primary" />
            <span className="text-sm md:text-md text-primary">Exercícios</span>
          </Link>
        </li>
        <li className="hover:bg-gray-200 transition-all duration-200 p-3">
          <Link
            href="/#configuracoes"
            className="flex flex-col items-center justify-center"
          >
            <BsFillGearFill className="text-2xl md:text-3xl text-primary" />
            <span className="text-sm md:text-md text-primary">
              Configurações
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;