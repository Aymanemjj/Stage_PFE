export type Mission = {
    title: string
    desc: string
    xp: number
    progress: number
}

export type LeaderBoardRow = {
    rank: number
    name: string
    xp: string
    change: number | null
    isYou?: boolean
}