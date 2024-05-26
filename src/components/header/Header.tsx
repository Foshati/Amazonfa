"use client"

import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
//import lucide icons
import { Shirt } from 'lucide-react';



function Header() {
    const pathname = usePathname();

    return (
        <header className='w-full mx-auto'>

            {/* navbar */}
            <div className="navbar bg-black bg-opacity-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li className="hover:text-red-500">
                                <Link
                                    href="/"
                                    className={pathname === "/" ? "text-red-500" : ""}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="hover:text-red-500">
                                <Link
                                    href="/about"
                                    className={pathname === "/about" ? "text-red-500" : ""}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="hover:text-red-500">
                                <Link
                                    href="/contact"
                                    className={pathname === "/contact" ? "text-red-500" : ""}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="hover:text-red-500">
                                <Link
                                    href="/blog"
                                    className={pathname === "/blog" ? "text-red-500" : ""}
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Shirt className="m-3 text-yellow-500 size-7" />
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li className="hover:text-red-500">
                            <Link
                                href="/"
                                className={pathname === "/" ? "text-red-500" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-red-500">
                            <Link
                                href="/about"
                                className={pathname === "/about" ? "text-red-500" : ""}
                            >
                                About
                            </Link>
                        </li>
                        <li className="hover:text-red-500">
                            <Link
                                href="/contact"
                                className={pathname === "/contact" ? "text-red-500" : ""}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="hover:text-red-500">
                            <Link
                                href="/blog"
                                className={pathname === "/blog" ? "text-red-500" : ""}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* navbar-end */}
                <div className="navbar-end flex gap-4">
                    {/* Search */}
                    <div className="form-control hidden lg:block">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    {/* Profile */}
                    <div className="dropdown dropdown-end hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    {/* Sing in */}
                    <a className="btn">Sing in</a>

                </div>
            </div >
        </header>
    )
}

export default Header