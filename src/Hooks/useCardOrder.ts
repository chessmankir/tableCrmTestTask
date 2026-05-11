import {useCheckoutStore} from "@/src/store/useCheckouteStore";
import {Product} from "@/src/types/ProductType";

export function useCardOrder() {
    //const token = useCheckoutStore((state) => state.token);
    const removeProduct = useCheckoutStore((state) => state.removeProduct);
    const changeQuantity = useCheckoutStore((state) => state.changeQuantity);
    const changePrice = useCheckoutStore((state) => state.changePrice);
    const selectedProducts = useCheckoutStore((state) => state.selectedProducts);

    return {removeProduct, changeQuantity, changePrice, selectedProducts};
}