import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useModal from '@/hooks/useModal';
import LinkFooterModal from '@/components/footer/LinkFooterModal.tsx';
import TemplateFooterModal from '@/components/footer/TemplateFooterModal.tsx';
import AvisoFooterModal from '@/components/footer/AvisoFooterModal.tsx';

interface ModalPortalProps {
  trigger: string;
  content: string;
}

const ModalPortal: React.FC<ModalPortalProps> = ({trigger, content}) => {
  const {isOpen, openModal, closeModal, toggleModal} = useModal();
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdowns(prev => 
      prev.includes(dropdown) 
        ? prev.filter(item => item !== dropdown)
        : [...prev, dropdown]
    );
  };

  const menuLista = ['La Ciudad', 'La Municipalidad', 'Trámites'];
  const ciudadLista = [["El Intendente", "https://www.iguazu.gob.ar/intendente/"], ["Secretaría de Gobierno", "https://www.iguazu.gob.ar/secretaria-de-gobierno/"], ["Reseña Histórica", "https://www.iguazu.gob.ar/historia/"], ["Dirección de Patrimonio Histórico", "https://historiadeiguazu.org/", "_blank"]];
  const muniLista = [['Turismo', "https://visitiguazu.travel/", "_blank"], ['Cultura', "https://www.iguazu.gob.ar/cultura/"], ['Deportes', "https://www.iguazu.gob.ar/deportes-2/"], ['Medio Ambiente', "https://www.iguazu.gob.ar/medio-ambiente/"], ['Dirección de la Juventud', "https://www.iguazu.gob.ar/direccion-de-la-juventud/"], ['Oficina de Empleo', "https://www.iguazu.gob.ar/oficina-de-empleo/"], ['Diversidad y Géneros', "https://www.iguazu.gob.ar/diversidadygeneros/"], ['Higiene y Seguridad', "https://www.iguazu.gob.ar/higiene-y-seguridad/"], ['Bromatología', "https://www.iguazu.gob.ar/bromatologia/"], ['Tránsito', "https://www.iguazu.gob.ar/transito/"], ['Zoonosis', "https://www.iguazu.gob.ar/zoonosis/"], ['Vectores', "https://www.iguazu.gob.ar/vectores/"]];
  const tramiteLista = [['Trámites de tránsito', "https://www.iguazu.gob.ar/tramites-de-transito/"], ['Trámites de bromatología', "https://www.iguazu.gob.ar/tramites-de-bromatologia/"], ['Trámites del cementerio', "https://www.iguazu.gob.ar/tramites-del-cementerio/"], ['Trámites de pensión por invalidez', "https://www.iguazu.gob.ar/tramites-de-pension-por-invalidez/"], ['Trámites de fiscalización', "https://www.iguazu.gob.ar/tramites-de-fiscalizacion/"]];
  const horarioLista = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado", "Domingo"];
  const telefonoLista = [["Dirección de Cultura", "Tel: (03757) 415-358", "tel:+5493757415358"],["Cementerio", "Tel: (03757) 423-007", "tel:+5493757423007"], ["Iguazú Turismo Ente Municipal (ITUREM)", "Tel: (03757) 423-951", "tel:+5493757423951"], ["Oficina de Empleo", "Tel: (03757) 421-515", "tel:+5493757421515"], ["Rentas de Misiones", "Tel: (03757) 422-649", "tel:+5493757422649"], ["Honorable Concejo Deliberante", "Tel: (03757) 421-518", "tel:+5493757421518"], ["Juzgado de Faltas", "Únicamente atención presencial."]];
  const bromatologíaLista = [["Libreta Sanitaria", "Libreta Sanitaria.pdf", "https://www.iguazu.gob.ar/libreta-sanitaria/"], ["Examen Médico (Anexo)", "Examen Médico (Anexo).pdf", "https://www.iguazu.gob.ar/anexo-examen-medico/"]];
  const fiscalizaciónLista = [["Solicitud de Habilitación e Inscripción o Traslado", "Solicitud de Habilitación e Inscripción o Traslado.pdf", "https://www.iguazu.gob.ar/solicitud-de-habilitacion-e-inscripcion-o-traslado/"], ["Solicitud de Habilitación e Inscripción Profesional", "Solicitud de Habilitación e Inscripción Profesional.pdf", "https://www.iguazu.gob.ar/solicitud-de-habilitacion-e-inscripcion-profesional/"], ["Solic. de Hab. e Inscrip. de Farm., Clín., San., C. de Salud y Lab.", "Solicitud de Habilitación e Inscripción de Farmacias, Clínicas, Sanatorios, Centros de Salud y Laboratorios.pdf", "https://www.iguazu.gob.ar/solicitud-de-habilitacion-e-inscripcion-de-farmacias-clinicas-sanatorios-centros-de-salud-y-laboratorios/"], ["Solic. de Hab. e Inscripción de Parada de Remises", "Solicitud de Habilitación e Inscripción de Parada de Remises.pdf", "https://www.iguazu.gob.ar/solicitud-de-habilitacion-e-inscripcion-de-parada-de-remises/"], ["Solicitud de Habilitación e Inscripción de Hoteles", "Solicitud de Habilitación e Inscripción de Hoteles.pdf", "https://www.iguazu.gob.ar/solicitud-de-habilitacion-e-inscripcion-de-hoteles/"], ["Solic. de Hab. e Inscripción de Empresas Constructoras", "Solicitud de Habilitación e Inscripción de Empresas Constructoras.pdf", "https://www.iguazu.gob.ar/solicitud-de-habilitacion-e-inscripcion-de-empresas-constructoras/"]];

  const triggerOptions = {
    "menu movil":
    <button onClick={toggleModal} className="text-white mr-4 flex flex-col size-[26px] justify-around lg:hidden">
      <div className={`bg-white h-[2px] w-full transition-all origin-left duration-[400ms] ${isOpen ? "rotate-[45deg]": ""}`}></div>
      <div className={`bg-white h-[2px] w-full transition-all origin-left duration-[400ms] ${isOpen ? "opacity-0" : ""}`}></div>
      <div className={`bg-white h-[2px] w-full transition-all origin-left duration-[400ms] ${isOpen ? "rotate-[-45deg]" : ""}`}></div>
    </button>,
    "Cómo llegar": 
    <LinkFooterModal content={content} openModal={openModal}/>,
    "Horarios de atención":
    <LinkFooterModal content={content} openModal={openModal}/>,
    "Teléfonos útiles":
    <LinkFooterModal content={content} openModal={openModal}/>,
    "Formularios y documentos":
    <LinkFooterModal content={content} openModal={openModal}/>
  }

  const contentOptions = {
    "menu movil":
    <>
      <div className={`fixed inset-0 bg-black opacity-5 z-10 ${isOpen ? "visible" : "invisible"}`} onClick={closeModal}></div>
      <ul className={`bg-white text-black fixed top-0 left-0 pt-5 w-[250px] md:w-[300px] h-screen md:text-[13px] text-[15px] overflow-auto z-20 transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-[100vw]"}`}>
        {menuLista.map((item) => (
          <React.Fragment key={item}>
            <li key={item} onClick={() => toggleDropdown(item)} className={`flex items-center justify-between w-full md:h-[43.66px] hover:bg-[#019f48] hover:text-white px-5 ${openDropdowns.includes(item) ? '' : 'border-b border-gray-300'} h-[47.3px]`}>
              {item}
              <span className="w-5 flex justify-end"><i className={`fa-solid ${openDropdowns.includes(item)?"fa-caret-up" :"fa-caret-down"} fa-lg`}></i></span>
            </li>
            <ul className={`${openDropdowns.includes(item) ? '' : 'hidden'}`}>
              {item==='La Ciudad' && ciudadLista.map((art) => (
                <li key={art[0]}>
                  <a href={art[1]} target={`${art[2] ? art[2] : "_self"}`} className='h-[40.0938px] border-b border-gray-300 flex items-center px-5 text-[11.05px] hover:bg-[#019f48] hover:text-white' >
                    {art[0]}
                  </a>
                </li>
              ))}
              {item==='La Municipalidad' && muniLista.map((art) => (
                <li key={art[0]}>
                <a href={art[1]} target={`${art[2] ? art[2] : "_self"}`} className='h-[40.0938px] border-b border-gray-300 flex items-center px-5 text-[11.05px] hover:bg-[#019f48] hover:text-white' >
                  {art[0]}
                </a>
              </li>
              ))}
              {item==='Trámites' && tramiteLista.map((art) => (
                <li key={art[0]}>
                <a href={art[1]} target={`${art[2] ? art[2] : "_self"}`} className='h-[40.0938px] border-b border-gray-300 flex items-center px-5 text-[11.05px] hover:bg-[#019f48] hover:text-white' >
                  {art[0]}
                </a>
              </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
        <li><a className='flex items-center justify-between w-full md:h-[43.66px] hover:bg-[#019f48] hover:text-white px-5 border-b border-gray-300 h-[47.3px]' href="https://vps-1656188-x.dattaweb.com:2094/login.php?idn">Webmail</a></li>
        <li><a className="flex items-center justify-between w-full md:h-[43.66px] hover:bg-[#019f48] hover:text-white px-5 h-[47.3px]" href="https://www.iguazu.gob.ar/contacto/">Contacto</a></li>
      </ul>
    </>,
    "Cómo llegar": 
    <>
      <span onClick={closeModal} className={`size-[50px] bg-green-700 fixed top-2 right-4 z-50 rounded-full flex justify-center items-center hover:bg-green-600 hover:cursor-pointer ${isOpen ? "visible" : "invisible"} transition-all duration-500`}><i className="fa-solid fa-xmark text-[38px] text-white"></i></span>
      <div onClick={closeModal} className={`fixed inset-0 z-40 bg-black opacity-80 ${isOpen ? "visible" : "invisible"} transition-all duration-500`}></div>
      <div className={`fixed m-auto w-[70%] h-screen inset-0 z-50 p-[10px] box-border rounded-md bg-white max-h-[620px] lg:max-h-[820px] lg:max-w-[800px] transition-all duration-700 ${isOpen ? 'scale-100' : 'scale-0'} ${isOpen ? "visible" : "invisible"}`}>
        <iframe className='size-full' src="https://maps.google.com/maps?q=Puerto%20Iguaz%C3%BA%2C%20Misiones&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="Puerto Iguazú, Misiones" aria-label="Puerto Iguazú, Misiones"></iframe>
      </div>
    </>,
    "Horarios de atención":
      <TemplateFooterModal isOpen={isOpen} closeModal={closeModal}>
        <AvisoFooterModal content='Hemos vuelto a normalizar los horarios de atención al público.' />
        <h2 className='p-[10px] ml-5 text-4xl'>Nuestros horarios de atención</h2>
        <ul className='p-[30px] ml-5'>
          {horarioLista.map((item, index) => (
            <li key={item} className={`${index === horarioLista.length-1 ? "" :"mb-[35px]"}`}>
              <div className='flex mb-[10px] items-center'>
                <span className='font-medium text-[19px]'>{item}</span>
                <span className='flex-grow border-b h-0 mx-[10px]'></span>
              </div>
              {index >= horarioLista.length - 2 ? <p className='text-sm text-[#707070]'>No atendemos</p> : <p className='text-sm text-[#707070]'>De 7:30 a 12:30 horas</p>}
            </li>
          ))}
        </ul>
      </TemplateFooterModal>,
    "Teléfonos útiles":
    <TemplateFooterModal isOpen={isOpen} closeModal={closeModal}>
        <h2 className='p-[10px] ml-5 text-4xl mt-5'>Teléfonos útiles</h2>
        <ul className='p-[30px] ml-5'>
          {telefonoLista.map((item, index) => (
            <li key={item[0]} className={`${index === horarioLista.length-1 ? "" :"mb-[35px]"}`}>
              <a href={item[2]}>
                <div className='flex mb-[10px] items-center'>
                  <span className='font-medium text-[19px]'>{item[0]}</span>
                  <span className='flex-grow border-b h-0 mx-[10px]'></span>
                </div>
                <p className='text-sm text-[#707070]'>{item[1]}</p>
              </a>
            </li>
          ))}
        </ul>
      </TemplateFooterModal>,
    "Formularios y documentos":
    <TemplateFooterModal isOpen={isOpen} closeModal={closeModal}>
        <AvisoFooterModal content='Una vez que hayas rellenado el formulario, acércate a nuestras oficinas (en el Iturem) para concretar el trámite.' />
        <h2 className='p-[10px] ml-5 text-4xl'>Bromatología</h2>
        <ul className='p-[30px] ml-5'>
        {bromatologíaLista.map((item, index) => (
            <li key={item[0]} className={`${index === bromatologíaLista.length-1 ? "" :"mb-[35px]"}`}>
              <a href={item[2]} target='_blank'>
                <div className='flex mb-[10px] items-center'>
                  <span className='font-medium text-[19px]'>{item[0]}</span>
                  <span className='flex-grow border-b h-0 mx-[10px]'></span>
                </div>
                <p className='text-sm text-[#707070]'>{item[1]}</p>
              </a>
            </li>
          ))}
        </ul>
        <h2 className='p-[10px] ml-5 text-4xl'>Fiscalización</h2>
        <ul className='p-[30px] ml-5'>
        {fiscalizaciónLista.map((item, index) => (
            <li key={item[0]} className={`${index === fiscalizaciónLista.length-1 ? "" :"mb-[35px]"}`}>
              <a href={item[2]} target='_blank'>
                <div className='flex mb-[10px] items-center'>
                  <span className='font-medium text-[19px] max-w-[410px]'>{item[0]}</span>
                  <span className='flex-grow border-b h-0 mx-[10px]'></span>
                </div>
                <p className='text-sm text-[#707070]'>{item[1]}</p>
              </a>
            </li>
          ))}
        </ul>
      </TemplateFooterModal>
  }

  return (
    <>
      {triggerOptions[trigger]}
      {createPortal(
        contentOptions[content]
      , document.getElementById("modal"))}
    </>
  );
};

export default ModalPortal;
