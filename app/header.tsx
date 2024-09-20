export function Header() {
    return (
        <div className="grid grid-cols-4 p-4 md:p-6 relative">
            <span className="col-span-1 text-xs md:text-sm text-left">
                <a href="/sponsors" className='link-animation'>Sponsors</a>
            </span>
            <span className="col-span-2 text-xs md:text-base text-center">HACK CWRU 2025</span>
            <span className="col-span-1 text-xs md:text-sm text-right">
                <a href='/linktree' className='link-animation'>Follow us</a>
            </span>

            <div className="absolute top-0 left-1/4 min-h-screen w-px bg-white bg-opacity-10 block" />
            <div className="absolute top-0 left-2/4 min-h-screen w-px bg-white bg-opacity-10 block" />
            <div className="absolute top-0 left-3/4 min-h-screen w-px bg-white bg-opacity-10 block" />
        </div>
    );
}
