import { useState } from "react";
import Search from "@/components/main/Search";
import Tabla from "@/components/main/Tabla";

const Main: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false)
  const search = () => {setIsSearch(true)}

  const handleData = (datos: string) =>{
    let response = fetch(`/api/proxy?data=${datos}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(console.error)
  }

  return (
    <>
      <Search data={(datos)=> handleData(datos)}  className={`flex flex-col ${isSearch ? "" :"translate-y-1/2"} transition-all duration-500 ease-in-out`} isFound={isSearch} />
      <Tabla isSearch={isSearch} />
    </>
  );
}
export default Main;