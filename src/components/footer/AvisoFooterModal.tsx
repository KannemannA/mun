
interface AvisoFooterModalProps{
    content: string
}

const AvisoFooterModal: React.FC<AvisoFooterModalProps> = ({content}) =>{
    return (
        <div className='m-[15px] border-2 border-[#0072BB] rounded-[5px] p-5'>
            <h2 className='mb-[10px] font-semibold text-[1.1rem]'>Aviso</h2>
            <p className='text-[#444444]'>{content}</p>
        </div>
    )
}
export default AvisoFooterModal;