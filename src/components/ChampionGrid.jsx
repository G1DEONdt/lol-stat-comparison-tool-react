import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


async function getData() {
    const url = "https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json";

    try {
        const response = await fetch(url, {mode: "cors"});

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const data = await response.json();

        return(data.data);

      } catch (error) {
        console.error(error.message);
      }
}

export default function ChampionGrid() {
  const [data, setData] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData()
    .then((response) => setData(Object.values(response)))
  }, []);

  useEffect(() => {
    if (selectedChampions.length == 2) {
      navigate("/stats", {state: {c1: selectedChampions[0], c2: selectedChampions[1]}});
    }
  }, [selectedChampions]);
  
  return (
    <div className=' col-start-2 col-end-8 row-start-3 -row-end-3 '>
      <div className='flex justify-between py-4 px-8'>
        <h2 className='text-3xl font-bold text-amber-600'>Select Champions</h2>
        <input className=" w-1/2 border-2 border-amber-600 bg-transparent px-4 text-amber-600 " placeholder="Search..." type="text" name="champion" id="champion" />
      </div>
      <div className='bg-gray-900 w-full h-full shadow-[inset_0px_0px_25px_0px_rgb(0,0,0)] p-6 overflow-y-scroll'>
        <div className='flex flex-wrap justify-between gap-2 box-border '>
          {data.map((champion, index) => {
            let source = "https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/" + champion.image.full;
            return (
              <div key={index} >
                <img className={selectedIndex.includes(index) ? " cursor-pointer outline outline-amber-600" : "cursor-pointer"} src={source} onClick={() => {
                  if(selectedChampions.length > 1){
                    return;
                  }
                  if (selectedIndex.includes(index)){
                    setSelectedIndex([]);
                    setSelectedChampions([]);
                    return;
                  }
                  
                  setSelectedIndex(s => [...s, index]);
                  setSelectedChampions(s => [...s, data[index]]);
                }}></img>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
