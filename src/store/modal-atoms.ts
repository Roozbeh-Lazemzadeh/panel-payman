import { atom, useAtom } from 'jotai';

export const modalAtom = atom<boolean>(false);

export const useAuthAtom = () => {
  const [modal, setModal] = useAtom(modalAtom);
  return { modal, setModal };
};
