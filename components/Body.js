import {useSession} from "next-auth/react";
import {useState} from "react";
import {useEffect} from "react";
import Seacrh from "./Search";
import Poster from "./Poster";
import Track from "./Track";
import Dropdown from "./Dropdown";

function Body({spotifyApi, chooseTrack}) {
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
            <div className="absolute float-right top-0 right-7 pt-0">
                <Dropdown/>
            </div>
            <div className="rounded-2xl py-10 pb-10 bg-[#8c82a15e] shadow-2xl drop-shadow-2xl mr-">
                <div className="grid overflow-y-scroll scrollbar-hide py-2 grid-cols-3 lg:grid-cols-4
            xl:grid-cols-5 gap-x-3 gap-y-1 p-14 sm:grid-cols-3 h-[500px]">
                    {searchResults.length === 0 ? newReleases.slice(0, 10).map((track) => (
                        <Poster
                            key={track.id}
                            track={track}
                            chooseTrack={chooseTrack}
                        />
                    )) : searchResults.slice(0, 10).map((track) => (
                        <Poster
                            key={track.id}
                            track={track}
                            chooseTrack={chooseTrack}
                        />
                    ))}
                </div>

                <div>
                    <h2 className="text-white font-bold mb-3 ml-11 text-[20px] mt-3">
                        {searchResults.length === 0 ? "New Releases" : "Tracks"}
                    </h2>
                    <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-2
                bg-neutral-800 overflow-y-scroll h-[1000px] md:h-96 scrollbar-thin 
                scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500
                w-[1390px] ml-4 shadow-xl drop-shadow-xl">
                        {searchResults.length === 0
                            ? newReleases
                                .slice(10, newReleases.length)
                                .map((track) => (
                                    <Track
                                        key={track.id}
                                        track={track}
                                        chooseTrack={chooseTrack}
                                    />
                                ))
                            : searchResults
                                .slice(10, searchResults.length)
                                .map((track) => (
                                    <Track
                                        key={track.id}
                                        track={track}
                                        chooseTrack={chooseTrack}
                                    />
                                ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;