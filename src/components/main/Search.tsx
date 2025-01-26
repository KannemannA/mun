interface SearchProps {
  isSearch: boolean;
  search: ()=> void;
}

const Search: React.FC<SearchProps> = ({search, isSearch}) => {
  return (
    <form className={`relative max-w-[570px] md:min-w-[570px] mb-[40px] ${isSearch ? "md:mx-0"  : "md:mx-auto"} transition-all duration-500 ease-in-out`}>
      
      <label htmlFor="Search" className="sr-only">
        {" "}
        Budcar por Dni{" "}
      </label>

      <input
        type="text"
        id="Search"
        placeholder="Ingrese su DNI, CUIT o Dominio"
        className="w-full rounded-md py-2.5 pe-10 shadow-sm sm:text-sm"
        onInput={(e) => {
          const value = e.currentTarget.value;
          e.currentTarget.value = value.replace(/[^0-9]/g, "");
        }}
      />

      <span className="absolute inset-y-0 end-0 grid rounded-md">
        <button type="button" className="bg-verdeFuerte text-lg font-semibold text-gray-200 hover:text-gray-700 w-10 place-content-center rounded-r-md" onClick={()=> search()}>
          <span className="sr-only">Search</span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </span>
    </form>
  );
};
export default Search;
{/* <form className="max-w-sm mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></select> */}