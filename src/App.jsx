import { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'

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

export default function App() {

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getData().then((data) => setData(data)).then(console.log(data));
  // }, []);

  return (
    <div className='w-screen h-screen bg-gray-800 grid grid-cols-5 grid-rows-12 gap-12'>
      <Homepage />
    </div>
  )
}
