import { create } from "zustand";

const defaultValues = { id: "", title:"" };

interface IRenamenModal {   
    isOpen: boolean;
    initialValues: typeof defaultValues;
    onOpen: (id: string, title: string) => void;
    onClose: () => void;
}; 

export const useRenamenModal = create<IRenamenModal>((set) => ({
    isOpen: false,
    onOpen: (id: string, title: string) => set({
         isOpen: true, 
         initialValues: { 
            id, 
            title 
        } 
    }),
    onClose: () => set({ 
        isOpen: false, 
        initialValues: defaultValues 
    }),
    initialValues: defaultValues,
}));