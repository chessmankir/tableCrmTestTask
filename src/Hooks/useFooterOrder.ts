import {BASE_URL} from "@/src/api/Backend";
import {toast} from "sonner";
import {useCheckoutStore} from "@/src/store/useCheckouteStore";

export function useFooterOrder() {
    const selectedProducts = useCheckoutStore((state) => state.selectedProducts);
    const selectedContragent = useCheckoutStore((state) => state.selectedContragent);
    const selectedOrganization = useCheckoutStore((state) => state.selectedOrganization);
    const selectedWarehouse = useCheckoutStore((state) => state.selectedWarehouse);
    const selectedPriceType = useCheckoutStore((state) => state.selectedPriceType);
    const token = useCheckoutStore((state) => state.token);
    const selectedPaybox = useCheckoutStore((state) => state.selectedPaybox);

    const onMakeSale = async () => {
        console.log("Make sale");
        try {
            const total = selectedProducts.reduce(
                (sum, product) =>
                    sum + Number(product.price) * Number(product.quantity),
                0
            );

            const payload = [
                {
                    priority: 0,
                    dated: Math.floor(Date.now() / 1000),
                    operation: "Заказ",
                    tax_included: true,
                    tax_active: true,

                    goods: selectedProducts.map((product) => ({
                        price: Number(product.price),
                        quantity: Number(product.quantity),
                        unit: product.unit || 116,
                        discount: 0,
                        sum_discounted: 0,
                        nomenclature: Number(product.id),
                    })),

                    settings: {},

                    warehouse: Number(selectedWarehouse),
                    contragent: Number(selectedContragent),
                    paybox: Number(selectedPaybox),
                    organization: Number(selectedOrganization),

                    status: false,
                    paid_rubles: total.toFixed(2),
                    paid_lt: 0,
                },
            ];
            console.log(selectedContragent);
            console.log(selectedPaybox);
            console.log(selectedOrganization);
            console.log(selectedWarehouse);

            const response = await fetch(
                `${BASE_URL}/api/v1/docs_sales/?token=${token}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            console.log(payload);
            const data = await response.json();
            console.log(data);
            if (data?.length > 0) {
                toast.success("Продажа создана", {
                    description: `ID: ${
                        data?.[0]?.id ?? data?.id ?? "—"
                    }, сумма: ${total.toFixed(2)} ₽`,
                });
            }

            console.log("SALE RESPONSE:", data);
        } catch (e) {
            console.log(e);
        }
    };

    return {onMakeSale, selectedProducts}
}