import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then((res) => {
                setData(res.data);
                setSearch(false);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [search]);

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };


    return (
    <div className="flex flex-col h-full  gap-5">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-3xl font-semibold">Dictionary</h1>
        <div className="flex flex-col ">
          <input
            className="bg-gray-200 rounded-md h-9 pb-1 pl-3 mb-3"
            onChange={handleChange}
            type="text"
            placeholder="search here"
          />
          <button
            onClick={() => setSearch(true)}
            className="bg-blue-500 w-fit text-white rounded-md px-3 py-1.5"
          >
            Search
          </button>
          <i className="text-gray-600 text-sm">
            such as: sun, nature, programme
          </i>
        </div>
      </div>
      <div className={${data ? "" : "hidden"}}>
        <ul className="flex flex-col gap-3 ">
          {data?.map((words, index) => (
            <li
              className="flex flex-col p-2 bg-slate-50 text-slate-700 text-xs"
              key={index}
            >
              <span className="text-base  capitalize">
                {words.word} - <span className="text-sm font-semibold">{words.phonetic || words.phonetics[2].text} - {words.meanings[0].partOfSpeech}</span>
              </span>
              {words.meanings[0].definitions[0].definition}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Recents</h3>
        <ul className="">
          <li>Bear</li>
          <li>Transportat ion</li>
        </ul>
      </div>
    </div >
    </
  );
};

export default Home;
        
    )
}

export default Home


