import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {playState, playingTrackState} from "../atoms/playerAtom";
import SpotifyPlayer from 'react-spotify-web-playback';


function Player({accessToken, trackUri}) {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

    useEffect(() => {
        if (trackUri) {
            setPlay(true);
        }
    }, [trackUri]);
    if (!accessToken) return null;
    return (
        <SpotifyPlayer
            styles={{
                activeColor: "#986aab",
                bgColor: "#181818",
                color: "#fff",
                loaderColor: "#fff",
                sliderColor: "#986aab",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
                height: "70px",
                sliderTrackColor: "#644a6fc4",
                sliderTrackBorderRadius: "4px",
                sliderHandleColor: "#fff",
                errorColor: "#fff",
            }}
            token={accessToken}
            showSaveIcon
            callback={(state) => {
                setPlay(state.isPlaying);
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
            //magnifySliderOnHover={true}
            autoPlay={true}
        />
    )
}

export default Player;