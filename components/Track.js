import {IoHeartOutline, IoHeart} from 'react-icons/io5'
import {IoPlay, IoPause} from "react-icons/io5"
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {playState, playingTrackState} from "../atoms/playerAtom"


function Track({track, chooseTrack}) {
    const [hasLiked, setHasLiked] = useState(false);
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

    const handlePlay = () => {
        chooseTrack(track);

        if (track.uri === playingTrack.uri) {
            setPlay(!play);
        }
    };

    return (
        <div className="flex items-center justify-between space-x-20 cursor-default
    hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out table-auto">
            <div className="flex items-center">
                <img src={track.albumUrl} alt="" className="rounded-md h-12 w-12 object-cover
            mr-3"/>
                <div>
                    <h4 className="text-white text-sm font-semibold truncate w-[1000px]">{track.title}</h4>
                    <p className="text-[rgb(179,179,179)]">{track.artist}</p>
                </div>
            </div>

            <div className="md:ml-auto flex items-center space-x-2.5">
                <div className="flex items-center w-[85px] h-10 relative cursor-pointer">
                    <IoHeart className={`text-xl ml-3 icon ${hasLiked ? "text-[#986aab]" : "text-[#868686]"}`}
                             onClick={() => setHasLiked(!hasLiked)}/>
                    {track.uri === playingTrack.uri && play ? (
                        <div
                            className="h-10 w-10 rounded-full border border-[#986aab] flex items-center justify-center absolute -right-1 bg-[#986aab] icon hover:scale-110"
                            onClick={handlePlay}>
                            <IoPause className='text-white text-xl'/>
                        </div>
                    ) : (
                        <div
                            className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-1 hover:bg-[#986aab] hover:border-[#986aab] icon hover:scale-110"
                            onClick={handlePlay}
                        >
                            <IoPlay className="text-white text-xl ml-[1px]"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Track;