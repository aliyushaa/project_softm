import axios from "axios";
import {getToken} from "next-auth/jwt";
import react, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});

const SpotifyGetPlaylist = () => {
    const {data: session} = useSession();
    const accessToken = session?.accessToken;
    const [data, setData] = useState({});
    const [token, setToken] = useState("");


    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

    const handlePlaylists = () => {
        axios
            .get(PLAYLISTS_ENDPOINT, {
                headers: {
                    Authorization: "Bearer" + getToken,
                },
            })
            .then((responce) => {
                setRevalidateHeaders(responce.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    return (
        <>
            <button onClick={handlePlaylists}>Get Playlist</button>
            {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        </>
    )
}
export default SpotifyGetPlaylist;