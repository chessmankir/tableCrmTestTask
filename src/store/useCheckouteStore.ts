import { create } from "zustand";
import { Product } from "@/src/types/ProductType";
import { ApiProduct } from "@/src/types/ApiProductType";

type Id = number | string;

type CheckoutStore = {
    token: string;
    setToken: (token: string) => void;

    selectedContragent: string | null;
    setSelectedContragent: (selectedContragent: string) => void;

    selectedOrganization: string | null;
    setSelectedOrganization: (selectedOrganization: string) => void;

    selectedWarehouse: string | null;
    setSelectedWarehouse: (selectedWarehouse: string) => void;

    selectedPriceType: string | null;
    setSelectedPriceType: (selectedPriceType: string) => void;

    selectedPaybox: string | null;
    setSelectedPaybox: (selectedPaybox: string) => void;

    selectedProducts: Product[];

    addProduct: (product: ApiProduct) => void;
    removeProduct: (product: Product) => void;
    changeQuantity: (productId: Id, quantity: number) => void;
    changePrice: (productId: Id, price: number) => void;
    clearProducts: () => void;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
    token: "",
    setToken: (token) => set({ token }),

    selectedContragent: null,
    setSelectedContragent: (selectedContragent) => set({ selectedContragent }),

    selectedOrganization: null,
    setSelectedOrganization: (selectedOrganization) =>
        set({ selectedOrganization }),

    selectedWarehouse: null,
    setSelectedWarehouse: (selectedWarehouse) => set({ selectedWarehouse }),

    selectedPriceType: null,
    setSelectedPriceType: (selectedPriceType) => set({ selectedPriceType }),

    selectedPaybox: null,
    setSelectedPaybox: (selectedPaybox) => set({ selectedPaybox }),

    selectedProducts: [],

    addProduct: (value) =>
        set((state) => {
            const exist = state.selectedProducts.find(
                (product) => product.id === value.id
            );

            if (exist) {
                return {
                    selectedProducts: state.selectedProducts.map((product) =>
                        product.id === value.id
                            ? {
                                ...product,
                                quantity: product.quantity + 1,
                            }
                            : product
                    ),
                };
            }

            return {
                selectedProducts: [
                    ...state.selectedProducts,
                    {
                        ...value,
                        price: 0,
                        quantity: 1,
                    },
                ],
            };
        }),

    removeProduct: (value) =>
        set((state) => ({
            selectedProducts: state.selectedProducts.filter(
                (product) => product.id !== value.id
            ),
        })),

    changeQuantity: (productId, quantity) =>
        set((state) => ({
            selectedProducts: state.selectedProducts.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        quantity: quantity < 1 ? 1 : quantity,
                    }
                    : product
            ),
        })),

    changePrice: (productId, price) =>
        set((state) => ({
            selectedProducts: state.selectedProducts.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        price: price < 0 ? 0 : price,
                    }
                    : product
            ),
        })),

    clearProducts: () => set({ selectedProducts: [] }),
}));