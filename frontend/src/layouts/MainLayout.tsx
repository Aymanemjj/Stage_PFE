import {Outlet} from "react-router"
import logo from "../assets/Web4Jobs-Logo.png";
import logo2 from "../assets/Web4Jobs-Logo-Word.png";
import avatar from "../assets/avatar.png";
import {FiMenu} from "react-icons/fi";
import {useState} from "react";
import FullMenu from "../components/FullMenu.tsx";
import CollapsedMenu from "../components/CollapsedMenu.tsx";


export default function MainLayout() {

    const [menu, setMenu] = useState(true)

    return (
        <>

            <header className="flex justify-between items-center bg-white rounded-3xl px-6 py-3 shadow-sm">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="Web4Jobs" className="h-8"/>
                    <img src={logo2} alt="Web4Jobs" className="h-4"/>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center border border-border rounded-full px-4 py-2 w-80">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 outline-none text-sm text-gray-500"
                        />
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
                        </svg>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={avatar} alt="avatar" className="w-9 h-9 rounded-full object-cover"/>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800">Mouatassim ADAB</span>
                            <span className="text-xs text-gray-400">Admin</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </div>

            </header>

            <div className="flex min-h-screen gap-8 mt-8">
                <aside
                    className={`border-r-2 border-border flex flex-col gap-12 p-6 bg-white rounded-3xl transition-all duration-300 ${menu ? "w-64" : "w-20"}`}>
                    <button
                        className={`cursor-pointer flex gap-2 items-center ${menu ? "justify-start" : "justify-center w-full"}`}
                        onClick={() => setMenu(m => !m)}>
                        <span className="text-2xl"><FiMenu/></span>
                        {menu && (
                            <span className="transition-all duration-300 overflow-hidden whitespace-nowrap">
                                Menu
                            </span>
                        )}
                    </button>

                    {menu ? <FullMenu/> : <CollapsedMenu/>}

                </aside>
                <main className="flex-1 bg-white rounded-3xl">
                    <Outlet/>
                </main>
            </div>
        </>
    )
}