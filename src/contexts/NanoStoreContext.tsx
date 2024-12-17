import { atom } from "nanostores";

export const modalState = atom<boolean>(false);

export const openModal = () => modalState.set(true);
export const closeModal = () => modalState.set(false);
export const toggleModal = () => {
	modalState.set(!modalState.get());
};
