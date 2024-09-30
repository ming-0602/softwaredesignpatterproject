'use client'
import React from 'react';
import {Button} from "@/components/ui/button";

export default function NavigationMenuDemo() {
    const toggleMenu = () => {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    };

    return (
        <nav className="bg-black border-b shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold">Clothing</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex sm:items-center space-x-4">
                        {/*<a href="#" className="text-gray-700 hover:text-blue-500">Home</a>*/}
                        {/*<a href="#" className="text-gray-700 hover:text-blue-500">About</a>*/}
                        {/*<a href="#" className="text-gray-700 hover:text-blue-500">Services</a>*/}
                        {/*<a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>*/}
                        <Button variant={"outline"}>Home</Button>
                        <Button variant={"outline"}>About</Button>
                        <Button variant={"outline"}>Services</Button>
                        <Button variant={"outline"}>Contact</Button>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden flex items-center">
                        {/*<button onClick={toggleMenu} className="text-gray-500 hover:text-blue-500">*/}
                        {/*    Menu*/}
                        {/*</button>*/}
                        <Button variant={"outline"} onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <Button variant={"ghost"} size={"lg"} className={"block w-full"}>Home</Button>
                    <Button variant={"ghost"} size={"lg"} className={"block w-full"}>About</Button>
                    <Button variant={"ghost"} size={"lg"} className={"block w-full"}>Services</Button>
                    <Button variant={"ghost"} size={"lg"} className={"block w-full"}>Contact</Button>
                </div>
            </div>
        </nav>
    );
}
