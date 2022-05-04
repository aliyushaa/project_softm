import {useSession} from "next-auth/react";
import {useState} from "react";
import {useEffect} from "react";
import Seacrh from "./Search";
import Track from "./Track";
import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";


function CategoriesBody({spotifyApi, chooseTrack}) {
    const {data: session} = useSession();
    const {accessToken} = session;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    //searching...
    useEffect(() => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;

        spotifyApi.searchTracks(search).then((res) => {
            setSearchResults(res.body.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: track.album.images[0].url,
                        popularity: track.popularity,
                    };
                })
            );
        });
    }, [search, accessToken]);


    //new releases...
    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.getNewReleases().then((res) => {
            setNewReleases
            (res.body.albums.items.map((track) => {
                    return {
                        id: track.id,
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: track.images[0].url,
                    };
                })
            );
        });
    }, [accessToken]);

    console.log(newReleases);

    return (
        <section className="bg-neutral-800 ml-24 py-4 space-y-8 md:max-w-8xl flex-grow md:mr-2.5 mb-14">
            <Seacrh search={search} setSearch={setSearch}/>
            <div className="rounded-2xl py-7 bg-[#8c82a15e] shadow-2xl drop-shadow-2xl">
                <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-2 
                bg-neutral-800 overflow-y-scroll h-[1000px] md:h-[510px] scrollbar-thin 
                scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500
                w-[1390px] ml-4 shadow-xl drop-shadow-xl table-auto">
                    {searchResults.length === 0 ? newReleases.slice(0, 50).map((track) => (
                            <Track
                                key={track.id}
                                track={track}
                                chooseTrack={chooseTrack}
                            />
                        ))
                        : searchResults.slice(0, 50)
                            .map((track) => (
                                <Track
                                    key={track.id}
                                    track={track}
                                    chooseTrack={chooseTrack}
                                />
                            ))}
                </div>
            </div>
        </section>

    );
}
export default CategoriesBody;