import { useState } from "react";
import MissionCard from "../components/MissionCard.tsx";

const missions = {
    daily: [
        { title: "Complete 3 React Challenges", desc: "Finish three coding challenges focused on React hooks", xp: "+150 XP", progress: 66 },
        { title: "Pass JavaScript Quiz", desc: "Score at least 80% on the advanced JavaScript quiz", xp: "+100 XP", progress: 100 },
        { title: "Code Review Challenge", desc: "Review and provide feedback on 5 peer submissions", xp: "+200 XP", progress: 0 },
    ],
    weekly: [
        { title: "Build a Full Stack App", desc: "Complete a full stack project using React and Node", xp: "+500 XP", progress: 30 },
        { title: "Contribute to Open Source", desc: "Submit a pull request to any open source project", xp: "+300 XP", progress: 0 },
    ]
}



export default function Missions() {
    const [tab, setTab] = useState<"daily" | "weekly">("daily")

    return (
        <div className="p-8 space-y-6">
            <div>
                <h2 className="text-large font-semibold">Missions</h2>
                <p className="text-small mt-1 text-muted">Complete missions to earn XP and level up</p>
            </div>

            <div className="flex gap-2">
                {(["daily", "weekly"] as const).map(t => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-6 py-2 rounded-full text-small font-medium capitalize transition-colors ${tab === t ? "bg-primary-normal text-white" : "border border-border text-muted"}`}
                    >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
                {missions[tab].map((m, i) => (
                    <MissionCard key={i} mission={m} />
                ))}
            </div>
        </div>
    )
}