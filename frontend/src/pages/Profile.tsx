
export default function Profile(){
    return (
        <div className="p-8 space-y-6 min-h-screen">
            <div>
                <h2 className="text-large font-semibold">Profile</h2>
                <p className="text-small mt-1 text-muted">Your journey and achievements</p>
            </div>
            <div className="w-full grid grid-cols-3">
                <div className="border border-border flex flex-col">
                    <div>
                    <div className="rounded-full bg-primary-normal size-24"></div>
                        <h3>Alex Morgan</h3>
                        <p>@alexmorgan</p>
                    </div>
                    <div className="flex justify-between">
                        <h4>level</h4>
                        <h4>24</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}