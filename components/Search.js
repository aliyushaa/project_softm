
function Seacrh({search, setSearch}) {
    return (

        <div className="max-w-xl bg-[#3f3f3f7a] rounded-3xl overflow-hidden border-1 border-neutral-600  p-1
            px-6 pr-8 flex items-center shadow-xl drop-shadow-xl">
            <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse"/>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#3f3f3f00] bg-opacity-30 text-white border-none lg:w-full focus:ring-0 outline-none
                    placeholder-[#fafafa] text-sm"
                placeholder="Search..."
            />

        </div>


    )
}

export default Seacrh;