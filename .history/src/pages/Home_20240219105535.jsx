
const Home = () => {
    return (
        <div>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl  font-semibold">Dictionary</h1>
                <div>
                    <input className="bg-gray-200 rounded-md h-9 pl-3 pb-1" type="text" placeholder="search here" />
                    <button className="bg-blue-500 text-white rounded-md px-3 py">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home
