import {IoPlay, IoPause} from "react-icons/io5"
import {useRecoilState} from "recoil";
import {playState} from "../atoms/playerAtom";
import {playingTrackState} from "../atoms/playerAtom";

function Poster({track, chooseTrack}) {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

    const handlePlay = () => {
        chooseTrack(track);

        if (track.uri === playingTrack.uri) {
            setPlay(!play);
        }
    };
    return (
        <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden 
        relative text-white/80 cursos-pointer hover:scale-105 hover:text-white/100
        transition duration-200 ease-out group mx-auto shadow-xl drop-shadow-xl" onClick={handlePlay}>
            <img src={track.albumUrl} alt=""
                 className="h-full w-full absolute inset-0 object-cover rounded-xl opacity-80
            group-hover:opacity-100"/>

            <div className="absolute bottom-6 inset-x-0 ml-4 flex items-center space-x-3">
                <div className="h-10 w-10 bg-[#986aab] rounded-full flex items-center justify-center
                group-hover:bg-[#b986cf] flex-shrink-0">
                    {track.uri === playingTrack.uri && play ? (
                        <IoPause className="text-xl"/>
                    ) : (
                        <IoPlay className="text-xl ml-[1px]"/>
                    )}


                </div>
                <div className="text-[14px]">
                    <h4 className="font-bold truncate w-32">{track.title}</h4>
                    <h6>{track.artist}</h6>
                </div>
            </div>
        </div>
    );
}

export default Poster;