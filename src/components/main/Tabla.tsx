interface TablaProps {
  isFound: boolean;
  data: Array<any>;
}

const Tabla: React.FC<TablaProps> = ({isFound, data}) => {
  return (
    <div className={`overflow-x-auto ${isFound ? "visible" : "invisible"} transition-all ${isFound ? "delay-500" : ""}`}>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha de carga</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nº Dominio</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nº Documento</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Apellido</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total de UM</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((datos) => {
            return (
              <tr key={datos.dominio}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{new Date(datos.fecha).toLocaleDateString("es-AR")}</td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{datos.dominio}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{datos.numeroDocumento}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{datos.nombre}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{datos.apellido}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{datos.unidadMonetariaTotal}</td>
          </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Tabla;