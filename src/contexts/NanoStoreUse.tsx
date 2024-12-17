import { useStore } from "@nanostores/react";
import { modalState, openModal } from "./NanoStoreContext";

interface LinkModalFooterProps {
    content: string;
}

const LinkModalFooter: React.FC<LinkModalFooterProps> = ({content}) => {
    const isOpen = useStore(modalState);

    return (
        <a className="hover:text-green-600 cursor-pointer" onClick={openModal}>{content}</a>
    )
}
export default LinkModalFooter;