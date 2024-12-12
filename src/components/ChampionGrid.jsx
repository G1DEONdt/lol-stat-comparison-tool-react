import { use } from 'react';
import { useState, useEffect } from 'react'


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

function ChampionGridIcons(data){
  
  useEffect(() => {
    getData().then((data) => {
      const array = Object.values(data);
      // console.log(array);
      return(
        <div className='flex'>
          <h2>WORKING</h2>
          {/* {array.map((champion) => {
            let source = "https://ddragon.leagueoflegends.com/cdn/14.23.1/img/champion/" + champion.image.full;
            <div>
              <p>{champion.name}</p>
            </div>
          })} */}
        </div>
      )
    })
  }, [])
}

function GridIcons() {
  const [data, setData] = useState(null);
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    getData()
    .then((response) => setData(response))
    .then(setDataArray(Object.values(data))).then(console.log(dataArray));
    // .then(() => { setDataArray(Object.values(data))})
    // .then(console.log(dataArray));
  }, []);
  return(<></>)
}



export default function ChampionGrid() {

  

  return (
    <div className=' col-start-2 col-end-5 row-start-3 -row-end-3 '>
      <div className='flex justify-between py-4 px-8'>
        <h2 className='text-3xl font-bold text-amber-600'>First Champion</h2>
        <input className=" w-1/2 border-2 border-amber-600 bg-transparent px-4 text-amber-600 " placeholder="Search..." type="text" name="champion" id="champion" />
      </div>
      <div className='bg-gray-900 w-full h-full shadow-[inset_0px_0px_25px_0px_rgb(0,0,0)]'>
        <GridIcons />
      </div>
    </div>
  )
}
