import {NavLink} from "react-router";
import {type ReactNode} from "react";

export default function NavItem({to, label, icon, collapsed}: {
    to: string,
    label?: string,
    icon: ReactNode,
    collapsed?: boolean
}) {
    return (
        <NavLink to={to} className={({isActive}) => isActive
            ? `bg-primary-normal hover:bg-primary-hover focus:bg-primary-focused text-white py-4.5 w-full text-small font-bold rounded-full cursor-pointer flex gap-2 items-center ${collapsed ? "justify-center px-4" : "px-7.5"}`
            : `w-full bg-white hover:bg-primary-hover/10 focus:bg-primary-focused/50 hover:text-primary-normal text-muted py-4.5 text-small font-bold rounded-full cursor-pointer flex gap-2 items-center ${collapsed ? "justify-center px-4" : "px-7.5"}`
        }>
            <span>{icon}</span>
            {!collapsed && (
                <span className="overflow-hidden whitespace-nowrap transition-all duration-300">
                    {label}
                </span>
            )}
        </NavLink>
    )
}