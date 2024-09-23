import React, { useState } from 'react';

const InteractiveHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdowns(prev => 
      prev.includes(dropdown) 
        ? prev.filter(item => item !== dropdown)
        : [...prev, dropdown]
    );
  };

  return (
    <>
      {/* Encabezado móvil */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/src/assets/img/LOGO-ISOTIPO-MUNI-BLANCO-2.svg" alt="Logo del Municipio" className="h-8 w-8 mr-2" />
        </div>
        <button onClick={toggleMobileMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden bg-green-600 text-white ${mobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="p-4">
          {['ciudad', 'municipalidad', 'tramites'].map((item) => (
            <li key={item} className="mb-2">
              <button 
                onClick={() => toggleDropdown(item)} 
                className="flex items-center justify-between w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <svg className={`w-4 h-4 transform ${openDropdowns.includes(item) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`ml-4 mt-2 ${openDropdowns.includes(item) ? '' : 'hidden'}`}>
                <li><a href="#" className="block py-2">Elemento del Submenú 1</a></li>
                <li><a href="#" className="block py-2">Elemento del Submenú 2</a></li>
              </ul>
            </li>
          ))}
          <li><a href="#" className="block py-2">Webmail</a></li>
          <li><a href="#" className="block py-2">Contacto</a></li>
        </ul>
      </div>
    </>
  );
};

export default InteractiveHeader;