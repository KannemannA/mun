import { useState } from "react";

interface SearchProps {
  isFound: boolean;
  noResult: boolean;
  isSearching: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  className: string;
  data: (datos: string) => void;
}

const Search: React.FC<SearchProps> = ({data, isFound, className, isSearching, noResult}) => {
  const [selectInput, setSelectInput] = useState("dominio");
  const [lengthInput, setLengthInput] = useState(0);
  const [searching, setSearching] = isSearching;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearching(true);
    data(e.target[1].value);
  }
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectInput(e.target.value);
  };
  const handleMaskInput = (e) =>{
    let value = e.currentTarget.value;
    let newValue = '';

    if (selectInput === "dominio"){
      // guia de patrones.
      // regexPattern1 = /^[a-zA-Z]{2}\d{3}[a-zA-Z]{2}$/;
      // regexPattern2 = /^[a-zA-Z]{3}\d{3}$/; 
      let togglePatern = 0;

      for (let i = 0; i < value.length; i++) {
        let char = value[i];
        if (i <= 1) { newValue += char.replace(/[^a-zA-Z0-9]/, ""); }
        if (i === 2) {
          newValue += char.replace(/[^a-zA-Z0-9]/, "");
          /\d/.test(char)? togglePatern = 1 : togglePatern = 2;
        }
        if (i >= 3 && i <= 6 && togglePatern === 1) {newValue += char.replace(/[^a-zA-Z0-9]/, ""); }
        if (i >= 3 && i <= 5 && togglePatern === 2) { newValue += char.replace(/[^a-zA-Z0-9]/, ""); }
      }

      e.currentTarget.value = newValue;
    } else if (selectInput === "cuit"){
      value = value.replace(/[^\d]/g, "");
      let isTyping = true;

      if (lengthInput > value.length) {
        isTyping = false;
      }
      if (value.length >= 2 && value.search("-") !== 2) { value = value.slice(0, 2) + "-" + value.slice(2); }
      if (value.endsWith("-") && value.length === 3 && !isTyping){ value = value.slice(0,2); }
      if(value.length >= 11 && value.search("-") !== 11) { value = value.slice(0, 11) + "-" + value.slice(11); }
      if (value.endsWith("-") && value.length === 12 && !isTyping){ value = value.slice(0,11); }

      for (let i = 0; i < value.length; i++){
        let char = value[i];

        if (i <= 12) { newValue += char; }
      }

      e.currentTarget.value = newValue;
      setLengthInput(newValue.length)
    } else {
      value = value.replace(/[^\d]/g, "");

      for (let i = 0; i < value.length; i++){
        let char = value[i];

        if (i <= 7) { newValue += char; }
      }

      e.currentTarget.value = newValue;
    }
  }

  return (
    <form
    className={`max-w-[570px] md:min-w-[570px] mb-[40px] ${isFound ? "md:mx-0"  : "md:mx-auto"} transition-all duration-500 ease-in-out ${className}`}
    onSubmit={handleSubmit}>
      <label
      className={`flex mb-7 text-xl font-semibold md:text-2xl ${isFound ? "justify-start" : "justify-center"} transition-all duration-500 ease-in-out lg:text-[30px] text-[#333333]`}
      htmlFor="Buscador">
        Ingrese su 
        <select 
        id="type" 
        className="bg-fondoBlanco cursor-pointer ml-1 lg:translate-y-[-4px] border-slate-300 border rounded-md" 
        value={selectInput}
        onChange={handleSelectChange}>
          <option className="text-lg" value="dominio">Dominio</option>
          <option className="text-lg" value="dni">DNI</option>
          <option className="text-lg" value="cuit">CUIT</option>
        </select>
      </label>
      <div className="relative">
      <input
        type="text"
        id="Buscador"
        placeholder={`${selectInput === "dominio" ? "Ingrese su Dominio" : selectInput === "dni" ? "Ingrese su DNI" : "Ingrese su CUIT"}`}
        className="w-full rounded-md py-2.5 pe-10 shadow-sm sm:text-sm pl-2"
        onInput={handleMaskInput}/>
      <button 
      type="submit" 
      className="bg-verdeFuerte text-lg text-gray-200 hover:text-gray-700 w-10 rounded-r-md absolute inset-y-0 end-0 cursor-pointer" >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      </div>
      <span className={`text-xs ml-3 mt-1 ${searching ? "visible" : "invisible"}`} >Buscando...</span>
      <h3 className={`${noResult ? "visible": "invisible"}`}>No se encontraron resultados</h3>
    </form>
  );
};
export default Search;
