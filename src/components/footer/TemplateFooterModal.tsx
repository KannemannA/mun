interface TemplateModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const TemplateFooterModal: React.FC<TemplateModalProps> = ({children, isOpen, closeModal}) => {

  return (
    <section className="text-[#333333]">
      <span onClick={closeModal} className={`size-[50px] bg-green-700 fixed top-2 right-4 z-20 rounded-full flex justify-center items-center hover:bg-green-600 hover:cursor-pointer ${isOpen ? "visible" : "invisible"} transition-all duration-500 ease-in-out`}><i className="fa-solid fa-xmark text-[38px] text-white"></i></span>
      <div onClick={closeModal} className={`fixed inset-0 z-10 bg-black opacity-80 ${isOpen ? "visible" : "invisible"} transition-all duration-500 ease-in-out`}></div>
      <div className={`fixed m-auto w-screen md:w-[70%] h-screen inset-0 z-10 box-border rounded-md bg-white lg:max-h-[820px] lg:max-w-[800px] transition-all duration-700 scale-100 md:translate-y-0 ${isOpen ? 'translate-y-0' : 'translate-y-[100vh]'} ${isOpen ? 'md:scale-100' : 'md:scale-0'} ${isOpen ? "visible" : "invisible"} ease-in-out overflow-auto`}>
        {children}
      </div>
</section>
  )
}
export default TemplateFooterModal;
