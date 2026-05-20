export default function BasicTab({label, isActive}: { label: string, isActive: boolean }) {
    return <button className={isActive
        ? "block bg-primary-normal hover:bg-primary-hover focus:bg-primary-focused text-white px-[30px] text-left py-[18px] text-small font-bold rounded-full cursor-pointer border border-border"
        : "block bg-white hover:bg-primary-hover/10 focus:bg-primary-focused/50 text-left hover:text-primary-normal text-muted px-[30px] py-[18px] text-small font-bold rounded-full cursor-pointer border border-border"
    }>
        {label}
    </button>
}