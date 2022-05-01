import Image from "next/image";
import Link from "next/link";
import {
    IoHome,
    IoSearch,
    IoEnter,
} from "react-icons/io5";

function Sidebar() {
    return (
        <section className="fixed top-0 z-100 flex flex-col p-4 items-center w-[90px]
    h-screen space-y-8 bg-neutral-800">
            <Image
                src="/softm_logo.png"
                width={100}
                height={100}
                objectFit="contain"
                className="absolute flex w-14"
            />
            <div className="flex flex-col space-y-10 py-9">
                <Link href="/"><a><IoHome
                    className="sidebarIcon text-5xl active transition ease-in-out delay-100 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-200"/></a></Link>
                <Link href="/categories"><a><IoSearch
                    className="sidebarIcon text-5xl transition ease-in-out delay-100 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-200"/></a></Link>
                <Link href="/cabinet"><a><IoEnter
                    className="sidebarIcon text-5xl transition ease-in-out delay-100 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-200"/></a></Link>
            </div>
        </section>
        //<Link href="/"><a>Home</a></Link>
        //<Link href="/about"><a>About</a></Link>
        //<Link href="/categories"><a>Categories</a></Link>
    );
}

export default Sidebar;