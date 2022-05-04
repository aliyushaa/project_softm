import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";
import Link from 'next/link';

export default function Home() {

    const router = useRouter();
    const {status, data: session} = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/auth/signin")
        }
    });

    if (status === "loading") {
        return <Loader/>;
    }

    console.log(session);

    return (
        <div className="">
            <Head>
                <title>SOFTM</title>
                <link rel="" href=""/>
            </Head>
            n
            <Dashboard/>

        </div>
    );
}

