import {getProviders, signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {useEffect} from "react";
import Loader from "../../components/Loader";

function Signin({providers}) {
    const {data: session} = useSession();
    const router = useRouter();


    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session]);

    if (session) return <Loader/>;

    return (
        <div className="bg-neutral-800 h-screen flex flex-col items-center pt-20 space-y-8">
            <Head>
                <title>Log In</title>
                <link rel="icon" href=""/>
            </Head>
            <div
                className="place-content-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 bg-[#8c82a15e] shadow-2xl drop-shadow-2xl w-[1000px] h-[600px]">
                {/**<Image
                 src="/bg-spiritedaway.jpg"
                 height={600}
                 width={1000}
                 objectFit="cover"
                 className="absolute inset-0 object-cover rounded-xl"

                 />*/}
                <img src="/softm_logo.png" className="py-52 px-80"/>
                {Object.values(providers).map((provider) => (
                    <div key={provider.id}>
                        <button
                            className="absolute left-96 top-[350px] text-white py-4 px-6 rounded-full bg-[#36319a]
              transition duration-300 ease-out border border-transparent 
              uppercase font-bold text-xs md:text-base tracking-wider 
              hover:scale-105 hover:bg-[#b27ec9] shadow-xl drop-shadow-xl" onClick={() => signIn(provider.id)}
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}

            </div>


        </div>

    );
}

export default Signin;

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {providers},
    };
}

