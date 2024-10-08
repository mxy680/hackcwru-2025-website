export function EmailSignUp() {
    return (
        <div className="absolute grid grid-cols-4 bottom-[15vh] w-full z-10">
            <div className="col-span-2 col-start-2 flex items-center border-b border-white justify-between w-full max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Your Email"
                    className="py-2 px-0 bg-transparent text-white focus:outline-none placeholder-gray-400 text-sm w-full"
                />
                <button className="text-white text-sm ml-4 whitespace-nowrap transition transform hover:scale-105 px-4 py-2 rounded-md">
                    Sign Up
                </button>
            </div>
        </div>
    );
}
