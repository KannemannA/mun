interface SearchProps {
  isSearch: boolean;
  search: ()=> void;
}

const Search: React.FC<SearchProps> = ({search, isSearch}) => {
  return (
    <div className={`relative max-w-[570px] md:min-w-[570px] mb-[40px] ${isSearch ? "md:mx-0"  : "md:mx-auto"} transition-all duration-500 ease-in-out`}>
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
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
    </div>
  );
};
export default Search;
