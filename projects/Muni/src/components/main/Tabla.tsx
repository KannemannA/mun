interface TablaProps {
  isSearch: boolean;
}

const Tabla: React.FC<TablaProps> = ({isSearch}) => {
  return (
    <div className={`overflow-x-auto ${isSearch ? "visible" : "invisible"} transition-all delay-500`}>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nº Expediente</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nº ASA</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Apellido</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total de UM</th>
          </tr>
        </thead>
    
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">423234</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">234234</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Juan</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Lopez</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$ 100.00</td>
          </tr>
    
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">340594</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">234234</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Martina</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Perez</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$200.00</td>
          </tr>
    
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">283934</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">234324</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Belen</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Ramirez</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$00.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Tabla;