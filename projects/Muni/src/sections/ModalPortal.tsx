import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useModal from '../hooks/useModal';
import LinkFooterModal from '../components/footer/LinkFooterModal.tsx';
import TemplateFooterModal from '../components/footer/TemplateFooterModal.tsx';
import AvisoFooterModal from '../components/footer/AvisoFooterModal.tsx';

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
  const ciudadLista = ["El Intendente", "Secretaría de Gobierno", "Reseña Histórica", "Dirección de Patrimonio Histórico"];
  const muniLista = ['Turismo', 'Cultura', 'Deportes', 'Medio Ambiente', 'Dirección de la Juventud', 'Oficina de Empleo', 'Diversidad y Géneros', 'Higiene y Seguridad', 'Bromatología', 'Tránsito', 'Zoonosis', 'Vectores'];
  const tramiteLista = ['Trámites de tránsito', 'Trámites de bromatología', 'Trámites del cementerio', 'Trámites de pensión por invalidez', 'Trámites de fiscalización'];

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
      <ul className={`bg-white text-black fixed top-0 left-0 pt-5 w-[250px] md:w-[300px] h-screen md:text-[13px] text-[15px] overflow-auto z-20 ${isOpen ? "visible" : "invisible"}`}>
        {menuLista.map((item) => (
          <React.Fragment key={item}>
            <li key={item} onClick={() => toggleDropdown(item)} className={`flex items-center justify-between w-full md:h-[43.66px] hover:bg-[#019f48] hover:text-white px-5 ${openDropdowns.includes(item) ? '' : 'border-b border-gray-300'} h-[47.3px]`}>
              {item}
              <span className="w-5 flex justify-end"><i className={`fa-solid ${openDropdowns.includes(item)?"fa-caret-up" :"fa-caret-down"} fa-lg`}></i></span>
            </li>
            <ul className={`${openDropdowns.includes(item) ? '' : 'hidden'}`}>
              {item==='La Ciudad' && ciudadLista.map((art) => (
                <li key={art} className='h-[40.0938px] border-b border-gray-300 flex items-center px-5 text-[11.05px] hover:bg-[#019f48] hover:text-white'>
                  <a href="">
                    {art}
                  </a>
                </li>
              ))}
              {item==='La Municipalidad' && muniLista.map((art) => (
                <li key={art} className='h-[40.0938px] border-b border-gray-300 flex items-center px-5 text-[11.05px] hover:bg-[#019f48] hover:text-white'>
                  <a href="">
                    {art}
                  </a>
                </li>
              ))}
              {item==='Trámites' && tramiteLista.map((art) => (
                <li key={art} className='h-[40.0938px] border-b border-gray-300 flex items-center px-5 text-[11.05px] hover:bg-[#019f48] hover:text-white'>
                  <a href="">
                    {art}
                  </a>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
        <li className="flex items-center justify-between w-full md:h-[43.66px] hover:bg-[#019f48] hover:text-white px-5 border-b border-gray-300 h-[47.3px]"><a href="#">Webmail</a></li>
        <li className="flex items-center justify-between w-full md:h-[43.66px] hover:bg-[#019f48] hover:text-white px-5 h-[47.3px]"><a href="#">Contacto</a></li>
      </ul>
    </>,
    "Cómo llegar": 
    <>
      <span onClick={closeModal} className={`size-[50px] bg-green-700 fixed top-2 right-4 z-50 rounded-full flex justify-center items-center hover:bg-green-600 hover:cursor-pointer ${isOpen ? "visible" : "invisible"} transition-all duration-300`}><i className="fa-solid fa-xmark text-[38px] text-white"></i></span>
      <div onClick={closeModal} className={`fixed inset-0 z-40 bg-black opacity-80 ${isOpen ? "visible" : "invisible"} transition-all duration-300`}></div>
      <div className={`fixed m-auto w-[70%] h-screen inset-0 z-50 p-[10px] box-border rounded-md bg-white max-h-[620px] lg:max-h-[820px] lg:max-w-[800px] transition-all duration-500 ${isOpen ? 'scale-100' : 'scale-0'} ${isOpen ? "visible" : "invisible"}`}>
        <iframe className='size-full' src="https://maps.google.com/maps?q=Puerto%20Iguaz%C3%BA%2C%20Misiones&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="Puerto Iguazú, Misiones" aria-label="Puerto Iguazú, Misiones"></iframe>
      </div>
    </>,
    "Horarios de atención":
      <TemplateFooterModal isOpen={isOpen} closeModal={closeModal}>
        <AvisoFooterModal content='Hemos vuelto a normalizar los horarios de atención al público.' />
      </TemplateFooterModal>,
    "Teléfonos útiles":
    <TemplateFooterModal isOpen={isOpen} closeModal={closeModal}>
        <h1>text</h1>
      </TemplateFooterModal>,
    "Formularios y documentos":
    <TemplateFooterModal isOpen={isOpen} closeModal={closeModal}>
        <AvisoFooterModal content='Una vez que hayas rellenado el formulario, acércate a nuestras oficinas (en el Iturem) para concretar el trámite.' />
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
