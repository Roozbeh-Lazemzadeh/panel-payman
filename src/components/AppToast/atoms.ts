import { atom } from 'jotai';

type Felan = {
  name: string;
};

export const felanAtom = atom<Felan>();
