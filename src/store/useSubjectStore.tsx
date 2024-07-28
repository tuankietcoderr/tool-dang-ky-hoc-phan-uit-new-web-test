import { IRowOnlyId } from "@/interface/row";
import { Mutate, StoreApi, create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SubjectStore {
  subjects: any[];
  setSubjects: (subjects: any[]) => void;
  selectedSubjects: IRowOnlyId[];
  addSelectedSubject: (selectedSubject: IRowOnlyId) => void;
  removeSelectedSubject: (selectedSubjectId: string) => void;
}

export const useSubjectStore = create<SubjectStore>()(
  persist(
    (set, get) => ({
      subjects: [],
      setSubjects: (subjects: any[]) => set({ subjects, selectedSubjects: [] }),

      selectedSubjects: [] as IRowOnlyId[],
      addSelectedSubject: (selectedSubject: IRowOnlyId) =>
        set({ selectedSubjects: [...get().selectedSubjects, selectedSubject] }),
      removeSelectedSubject: (selectedSubjectId: string) =>
        set({
          selectedSubjects: get().selectedSubjects.filter(
            (subject) => subject.id !== selectedSubjectId
          ),
        }),
    }),
    {
      name: "subject-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

type StoreWithPersist = Mutate<
  StoreApi<SubjectStore>,
  [["zustand/persist", unknown]]
>;
export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate();
    }
  };
  window.addEventListener("storage", storageEventCallback);
  return () => {
    window.removeEventListener("storage", storageEventCallback);
  };
};

withStorageDOMEvents(useSubjectStore);
