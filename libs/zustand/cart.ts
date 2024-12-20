import { CartItem } from "@/type";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clear: () => void;
  deleteFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // to check if the item is already in the cart
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            return {
              items: state.items.map((i) => {
                return i.id === item.id ? { ...i, qty: i.qty + 1 } : i;
              }),
            };
          }

          return { items: [...state.items, { ...item, qty: 1 }] };
        }),
      removeItem: (id: number) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === id);
          if (existingItem && existingItem.qty > 1) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, qty: i.qty - 1 } : i
              ),
            };
          }
          return { items: state.items.filter((i) => i.id !== id) };
        }),
      clear: () => set({ items: [] }),
      deleteFromCart: (id) => {
        return set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
