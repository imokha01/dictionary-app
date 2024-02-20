
const Home = () => {
    return (
        <div>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl  font-semibold">Dictionary</h1>
                <div className="flex flex-col">
                    <input className="bg-gray-200 rounded-md h-9 pl-3 pb-1 mb-3" type="text" placeholder="search here" />
                    <button className="bg-blue-500 text-white rounded-md px-3 py-1.5 w-fit">Search</button>
                    <i className="text-gray-600 pl-">such as: sun, nature, programme</i>
                </div>
            </div> 
        </div>
    )
}

export default Home
