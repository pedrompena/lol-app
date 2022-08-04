import { useEffect, useState } from "react";

import nameFilter from "./NameFilter";
import style from "./Champs.module.css"

const Champs = () => {
    const [champions, setChampions] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json")
        const data = await response.json()
        setChampions(data.data)
      }
  
      fetchData()
    }, []);

    return (
      <div className="bg-gradient-to-br from-slate-300 to-slate-100">
        <h1 className={style.title}>League of Legends Champions</h1>
        <div className="grid grid-cols-4 gap-3 m-4">
          {
            Object.entries(champions).map(champion => {
              return (
                <div key={champion[1].key} className={style.card}>
                  <img className={style.img} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nameFilter(champion[1].name)}_0.jpg`} alt={champion[1].name} />
                  <h3 className={style.difficulty}>{champion[1].info.difficulty}</h3>
                  <h2 className={style.name}>{champion[1].name}</h2>
                  <h3 className={style.subtitle}>({champion[1].title})</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    );
}
 
export default Champs;