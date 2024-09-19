export function Header() {
    return (
        <div className="grid grid-cols-4 p-4 md:p-6 relative">
            <span className="col-span-1 text-xs md:text-sm text-left">Sponsors</span>
            <span className="col-span-2 text-xs md:text-sm text-center">HackCWRU 2025</span>
            <span className="col-span-1 text-xs md:text-sm text-right">Follow us</span>

            <div className="absolute top-0 left-1/4 min-h-screen w-px bg-white bg-opacity-10 block" />
            <div className="absolute top-0 left-2/4 min-h-screen w-px bg-white bg-opacity-10 block" />
            <div className="absolute top-0 left-3/4 min-h-screen w-px bg-white bg-opacity-10 block" />
        </div>
    );
}
