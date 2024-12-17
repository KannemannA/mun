interface LinkFooterModalProps {
    content: string;
    openModal: () => void;
}

const LinkFooterModal: React.FC<LinkFooterModalProps> = ({content, openModal}) => {
    return (
        <a className="hover:text-green-600 cursor-pointer" onClick={openModal}>{content}</a>
    )
}
export default LinkFooterModal;
