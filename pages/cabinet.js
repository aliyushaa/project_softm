import Sidebar from "../components/Sidebar";
import Seacrh from "../components/Search";
import CabinetPlaylists from "../components/CabinetPlaylists";

function cabinet() {
    return (
        <main className="flex min-h-screen min-w-max bg-neutral-800 lg:pb-5">
            <Sidebar/>
            <CabinetPlaylists/>
        </main>
    )
}

export default cabinet;