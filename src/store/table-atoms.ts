import { atom } from 'jotai';
// Atom to hold selected columns globally
export const selectedColumnsAtom = atom<string[]>([]);

// Create an atom to hold the current tab
export const currentTabAtom = atom<string>('');

// Create an atom to hold the selected count of table records
export const selectedCountAtom = atom('20');
