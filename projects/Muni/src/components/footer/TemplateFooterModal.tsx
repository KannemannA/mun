interface TemplateModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const TemplateFooterModal: React.FC<TemplateModalProps> = ({children, isOpen, closeModal}) => {

  return (
    <section className="text-[#333333]">
      <span onClick={closeModal} className={`size-[50px] bg-green-700 fixed top-2 right-4 z-50 rounded-full flex justify-center items-center hover:bg-green-600 hover:cursor-pointer ${isOpen ? "visible" : "invisible"} transition-all duration-300`}><i className="fa-solid fa-xmark text-[38px] text-white"></i></span>
      <div onClick={closeModal} className={`fixed inset-0 z-40 bg-black opacity-80 ${isOpen ? "visible" : "invisible"} transition-all duration-300`}></div>
      <div className={`fixed m-auto w-[70%] h-screen inset-0 z-50 box-border rounded-md bg-white max-h-[620px] lg:max-h-[820px] lg:max-w-[800px] transition-all duration-500 ${isOpen ? 'scale-100' : 'scale-0'} ${isOpen ? "visible" : "invisible"}`}>
        {children}
      </div>
</section>
  )
}
export default TemplateFooterModal;
