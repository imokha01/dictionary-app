import { useEffect, useState } from "react"
import axios from "axios";

const Home = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(false)


    useEffect(() => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then(res => {
                setData(res.data)
                setSearch()
            })
            .catch(err => console.log(err))
    }, [input]);

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    return (
        <div className="flex flex-col justify-between h-full gap-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl  font-semibold">Dictionary</h1>
                <div className="flex flex-col">
                    <input className="bg-gray-200 rounded-md h-9 pl-3 pb-1 mb-3" onClick={} type="text" placeholder="search here" />
                    <button className="bg-blue-500 text-white rounded-md px-3 py-1.5 w-fit">Search</button>
                    <i className="text-gray-600 text-sm">such as: sun, nature, programme</i>
                </div>
            </div> 
            <div>
                <h2 className="text-xl font-semibold">Recents</h2>
                <ul>
                    <li>Bear</li>
                    <li>Transport</li>
                </ul>
            </div>
        </div>
        
    )
}

export default Home
