import SpotifyWebApi from "spotify-web-api-node";
import {useRecoilState} from "recoil";
import {playingTrackState} from "../atoms/playerAtom";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import Player from "../components/Player";
import {useState} from "react";
import Sidebar from "../components/Sidebar";
import CategoriesBody from "../components/CategoriesBody";


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});

function categories() {
    const {data: session} = useSession();
    const accessToken = session?.accessToken;
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        setShowPlayer(true);
    }, []);

    const chooseTrack = (track) => {
        setPlayingTrack(track);
    };
    return (
        <main className="flex min-h-screen min-w-max bg-neutral-800 lg:pb-5">
            <Sidebar/>
            <CategoriesBody spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>
            {showPlayer && (
                <div className="fixed bottom-0 left-0 right-0 z-101">
                    <Player accessToken={accessToken} trackUri={playingTrack.uri}/>
                </div>
            )}
        </main>
    );
}

export default categories;