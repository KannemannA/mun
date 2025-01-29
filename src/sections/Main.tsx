import { useState } from "react";
import Search from "@/components/main/Search";
import Tabla from "@/components/main/Tabla";

const Main: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false)
  const search = () => {setIsSearch(true)}

  return (
    <>
      <section className={`flex flex-col ${isSearch ? "" :"translate-y-1/2"} transition-all duration-500 ease-in-out`}>
        <Search search={search} isSearch={isSearch} />
      </section>
      <Tabla isSearch={isSearch} />
    </>
  );
}
export default Main;