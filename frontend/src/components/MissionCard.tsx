import { FiPlay, FiClock, FiCheckCircle } from "react-icons/fi";



type Mission = {
    title: string;
    desc: string;
    xp: string;
    progress: number;
}

export default function MissionCard({mission}: { mission: Mission }) {
    const completed = mission.progress === 100
    const started = mission.progress > 0 && !completed

    return (
        <div className="border border-border rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-base">{mission.title}</h3>
                    <p className="text-muted text-small mt-1">{mission.desc}</p>
                </div>
                <span className="text-primary-normal text-small font-medium whitespace-nowrap ml-4">{mission.xp}</span>
            </div>

            <div className="space-y-1">
                <div className="flex justify-between text-small text-muted">
                    <span>Progress</span>
                    <span className="font-medium text-foreground">{mission.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all ${completed ? "bg-teal-500" : "bg-primary-normal"}`}
                        style={{width: `${mission.progress}%`}}
                    />
                </div>
            </div>

            {completed ? (
                <button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-teal-400 text-teal-500 text-small font-medium">
                    <FiCheckCircle/> Completed
                </button>
            ) : started ? (
                <button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary-normal text-white text-small font-medium">
                    <FiClock/> Continue
                </button>
            ) : (
                <button
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-primary-normal text-primary-normal text-small font-medium">
                    <FiPlay/> Start
                </button>
            )}
        </div>
    )
}