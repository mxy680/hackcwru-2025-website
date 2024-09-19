export function Footer() {
    return (
        <div className="absolute grid grid-cols-4 p-4 md:p-6 bottom-0 w-full">
            <span className="col-span-1 text-xs md:text-sm text-left">Case Western Reserve University</span>
            <span className="col-span-2 text-xs md:text-sm text-center">February 2025</span>
            <span className="col-span-1 text-xs md:text-sm text-right">
                <a href="/about" className="link-animation">Learn more</a>
            </span>
        </div>
    );
}
