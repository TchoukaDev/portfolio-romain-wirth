import { create } from "zustand";

type ProjectFiltersStore = {
    filter: string;
    setFilter: (filter: string) => void;
}

const useProjectFiltersStore = create<ProjectFiltersStore>((set) => ({
    filter: "all",
    setFilter: (filter) => set({ filter }),
}))

export default useProjectFiltersStore;