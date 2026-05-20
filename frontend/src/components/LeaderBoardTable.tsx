export default function LeaderboardTable() {
    return (
        <table className="w-full text-small ">
            <thead className="text-smaller text-muted ">
            <tr>
                <th className="text-left p-4 font-normal">RANK</th>
                <th className="text-left p-4 font-normal">USER</th>
                <th className="text-left p-4 font-normal">XP POINTS</th>
                <th className="text-left p-4 font-normal">CHANGE</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">🥇 #1</td>
                <td className="p-4 font-medium">Sarah Chen</td>
                <td className="p-4">12,450 XP</td>
                <td className="p-4 text-green-600">↑ 2</td>
            </tr>
            <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">🥈 #2</td>
                <td className="p-4 font-medium">Marcus Johnson</td>
                <td className="p-4">11,890 XP</td>
                <td className="p-4 text-green-600">↑ 1</td>
            </tr>
            <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">🥉 #3</td>
                <td className="p-4 font-medium">Elena Rodriguez</td>
                <td className="p-4">11,230 XP</td>
                <td className="p-4 text-green-600">↑ 1</td>
            </tr>
            <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">#4</td>
                <td className="p-4 font-medium">David Kim</td>
                <td className="p-4">10,875 XP</td>
                <td className="p-4 text-gray-400">—</td>
            </tr>
            <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">#5</td>
                <td className="p-4 font-medium">Aisha Patel</td>
                <td className="p-4">10,420 XP</td>
                <td className="p-4 text-green-600">↑ 3</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
                <td className="p-4 text-gray-500">#6</td>
                <td className="p-4 font-medium text-primary-normal">You</td>
                <td className="p-4">9,850 XP</td>
                <td className="p-4 text-green-600">↑ 1</td>
            </tr>
            <tr className="border-b border-gray-100">
                <td className="p-4 text-gray-500">#7</td>
                <td className="p-4 font-medium">James Wilson</td>
                <td className="p-4">9,640 XP</td>
                <td className="p-4 text-green-600">↑ 2</td>
            </tr>
            </tbody>
        </table>
    )
}