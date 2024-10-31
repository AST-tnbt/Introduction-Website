import {Link} from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
        <div className="w-screen z-20 opacity-90 bg-white fixed flex justify-between md:justify-around lg:justify-around items-center p-4 font-robo shadow-lg select-none">
            <div>
                <Link to="/" className="h-20 flex items-center space-x-6"> 
                    <img className="h-20" src={logo} />
                    <h1 className="text-3xl text-[#333] font-medium ">The Wolf Pack</h1>
                </Link>
            </div>
            <ul className={ showMenu ? "text-xl space-y-6 fixed right-0 bg-white h-full md:flex md:space-x-8 lg:flex lg:space-x-8": "hidden md:flex md:space-x-8 lg:flex lg:space-x-8" }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#707070] fixed top-10 right-5 cursor-pointer md:hidden lg:hidden hover:text-[#333]" onClick={() => setShowMenu(false)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <Link to="/groups">
                    <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                        Nhóm
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                        Đồ án
                    </li>
                </Link>
                <Link to="/contracts">
                    <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                        Hợp đồng
                    </li>
                </Link>
                <Link to="/plans">
                    <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                        Kế hoạch
                    </li>
                </Link>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer md:hidden lg:hidden" onClick={() => setShowMenu(true)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <ul className={ showMenu ? "text-xl transition-all fixed z-40 top-0 right-0 pt-16 pl-10 pr-14 border-l-8 border-black space-y-6 bg-white h-full" : "hidden"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#707070] fixed top-10 right-5 cursor-pointer md:hidden lg:hidden hover:text-[#333]" onClick={() => setShowMenu(false)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                    <Link to="/groups">Nhóm</Link>
                </li>
                <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                    <Link to="/projects">Đồ án</Link>
                </li>
                <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                    <Link to="/contracts">Hợp đồng</Link>
                </li>
                <li className="text-[#333] text-2xl font-normal hover:-translate-y-1 hover:font-semibold transition-transform" onClick={() => setShowMenu(false)}>
                    <Link to="/plans">Kế hoạch</Link>
                </li>
            </ul>
        <div className={showMenu ? "w-screen h-screen bg-[#333] z-10 fixed top-0 opacity-40"
        : "hidden"} onClick={() => setShowMenu(false)}></div>
        <div className="w-screen h-screen bg-[#f0f0f0] z-40 fixed top-0 invisible animate-fadeOut items-center flex">
            <img src={logo} className="h-1/2 m-auto animate-spin" />
        </div>
    </>
  )
}
