import BasicTab from "../components/BasicTab.tsx";
import LeaderboardTable from "../components/LeaderBoardTable.tsx";


export default function LeaderBoard() {
    return (
        <div className="p-8 space-y-6 min-h-screen">
            <div>
                <h2 className="text-large font-semibold">Leaderboard</h2>
                <p className="text-small mt-1 text-muted">Compete with other candidates and climb the ranks</p>
            </div>
            <div className="flex gap-2">
                <BasicTab label={'Weekly'} isActive={true}/>
                <BasicTab label={'Monthly'} isActive={false}/>
                <BasicTab label={'All-time'} isActive={false}/>
            </div>
            <div className="w-full border-border border rounded-[16px]">
                <LeaderboardTable/>
            </div>
        </div>
    )
}