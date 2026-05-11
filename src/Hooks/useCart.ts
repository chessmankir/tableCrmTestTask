import {useEffect, useState} from "react";
import {ApiProduct} from "@/src/types/ApiProductType";
import {useCheckoutStore} from "@/src/store/useCheckouteStore";
import {BASE_URL} from "@/src/api/Backend";
import {ApiList} from "@/src/types/AppListType";

export function useCart(){
    const [products, setProducts] = useState<ApiProduct[]>([]);
    const addProduct = useCheckoutStore((state) => state.addProduct);
    const token = useCheckoutStore((state) => state.token);

    useEffect(() => {
        (async ()=> {
            try {
                const [
                    productsRes,
                ] = await Promise.all([
                    fetch(`${BASE_URL}/api/v1/nomenclature/?token=${token}`),
                ]);

                const productsData: ApiList<ApiProduct> = await productsRes.json();
                if (productsData?.count > 0) {
                    setProducts(productsData.result);
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [token]);

    return {products, addProduct};
}