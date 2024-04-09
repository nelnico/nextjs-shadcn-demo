import { atom } from "jotai";
import { FormValues } from "./_components/filters";

export type FilterValues = {
  query?: string;
  gender?: string;
};
// Define the atom
export const filterAtom = atom<FilterValues>({
  query: "",
  gender: "",
});

// const handleSearchChange = atom(
//     null,
//     (get, set, update: FormValues) => {
//        if(get(filterAtom)) {
//           set(filterAtom, (prev) => ({ ...prev, {
//             query: update.query,
//             gender: update.gender
//           }}));
//        }
//     }
//   );

export const appliedFiltersAtom = atom((get) => get(filterAtom));
