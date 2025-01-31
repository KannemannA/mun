import { useState, useEffect } from "react";
import Search from "@/components/main/Search";
import Tabla from "@/components/main/Tabla";

const Main: React.FC = () => {
  const [isFound, setIsFound] = useState(false);
  const [dataFetch, setDataFetch]= useState([]);
  const [noResult, setNoResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleData = (datos: string) =>{
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://45.174.150.1:56368/api/Registro?Filtro=${datos}`)}`)
    .then((res) => res.json())
    .then((data) => {
      let dataClean = JSON.parse(data.contents);
      setDataFetch(dataClean);
      setNoResult(dataClean.length === 0);
      setIsFound(dataClean.length > 0);
    })
    .catch(console.error)
    .finally(() => setIsSearching(false))
  }

  return (
    <>
      <Search data={(datos)=> handleData(datos)}  className={`flex flex-col ${isFound ? "" :"translate-y-1/2"} transition-all duration-500 ease-in-out`} isFound={isFound} noResult={noResult} isSearching={[isSearching, setIsSearching]} />
      <Tabla isFound={isFound} data={dataFetch}/>
      <h4 className="text-sm mt-[5%]">Para mas consultas, acerquese a las oficinas del Juzgado De Faltas.</h4>
    </>
  );
}
export default Main;