"use client";

import {useState} from "react";
import {BASE_URL} from "@/src/api/Backend"
import { toast } from "sonner";

type ApiList<T = unknown> = {
    result: T[];
    count: number;
};

export function useOrder(){
    const [token, setToken] = useState('');
    const [organizations, setOrganizations] = useState([]);
    const [selectOrganization, setSelectOrganization] = useState(null)
    //Склады
    const [warehouses, setWarehouses] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [products, setProducts] = useState([]);
    const [availableOrder, setAvailableOrder] = useState(false);
    const [phone, setPhone] = useState('');
    const [contragents, setContragents] = useState([]);
    const [selectContragent, setSelectContragent] = useState(0);

    //Типы цен
    const [priceTypes, setPriceTypes] = useState([]);
    const [selectPriceType, setSelectPriceType] = useState(null);

    const [payboxes, setPayboxes] = useState([]);
    const [selectedPaybox, setSelectedPaybox] = useState(null);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const onSelectContragent = (contragentIndex) => {
        setSelectContragent(contragentIndex);
    }

    const onSelectPriceType = (value) => {
        setSelectPriceType(value);
    }

    const onClickToken = () => {
        (async ()=> {
            try{

                const [orgsRes, warehousesRes, productsRes, payboxRes,priceTypesRes] = await Promise.all([
                    fetch(
                        `${BASE_URL}/api/v1/organizations/?token=${token}`
                    ),
                    fetch(
                        `${BASE_URL}/api/v1/warehouses/?token=${token}`
                    ),
                    fetch(
                        `${BASE_URL}/api/v1/nomenclature/?token=${token}`
                    ),
                    fetch(
                        `${BASE_URL}/api/v1/payboxes/?token=${token}`
                    ),
                    fetch(
                        `${BASE_URL}/api/v1/price_types/?token=${token}`
                    ),
                ]);

                const orgs = await orgsRes.json();
                const warehousesData = await warehousesRes.json();
                const productsData = await productsRes.json();
                const payboxesData = await payboxRes.json();
                const priceTypesData = await priceTypesRes.json();
                if(orgs?.count > 0){
                    console.log(orgs);
                    setOrganizations(orgs.result);
                    toast.success("Продажа создана", {
                        description: `Касса подключена`,
                    });
                }
                setWarehouses(warehousesData.result);
                setProducts(productsData.result);
                setAvailableOrder(true);
                setPayboxes(payboxesData.result);
                setPriceTypes(priceTypesData.result);
                console.log(productsData);
            }
            catch (e){
                console.log(e);
            }
        })();
    }

    const findNumber = async () => {
        console.log('findNumber', phone);
        console.log(phone);
        const urlParams = new URLSearchParams();
        urlParams.set('phone', phone);
        urlParams.set('token', token);
        try{
            const backend = `${BASE_URL}/api/v1/contragents/?` + urlParams.toString();
            const response = await fetch(backend);
            const data = await response.json();
            console.log(data);
            if(data?.count > 0){
                console.log(data);
                console.log(data.result);
                setContragents(data.result);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const onChangeOrganization = (value) => {
        console.log(value);
        setSelectOrganization(value);
    }

    const onChangeWarehouse = (value) => {
        console.log(value);
        setSelectedWarehouse(value);
    }

    const onChangePayboxes = (value) => {
        console.log(value);
        setSelectedPaybox(value);
    }

    const onAddProduct = (value) => {
        setSelectedProducts((prev) => {
            const exist = prev.find(
                (product) => product.id === value.id
            );

            if (exist) {
                return prev.map((product) => {
                    if (product.id === value.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }

                    return product;
                });
            }

            return [
                ...prev,
                {
                    ...value,
                    price: 0,
                    quantity: 1,
                },
            ];
        });
    };

    const onRemoveProduct = (value) => {
        setSelectedProducts((prev) => {
       /*     if (value.quantity > 1) {
                return prev.map((product) => {
                    if (product.id === value.id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }
                    return product;
                });
            }
*/
            return prev.filter(
                (product) => product.id !== value.id
            );
        });
    };


    const changeQuantity = (productId, quantity) => {
        console.log(productId, quantity);
        setSelectedProducts((prev) =>
            prev.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        quantity: quantity < 1 ? 1 : quantity,
                    }
                    : product
            )
        );
    };

    const changePrice = (productId, price) => {
        console.log(productId, price);
        setSelectedProducts((prev) =>
            prev.map((product) =>
                product.id === productId
                    ? {
                        ...product,
                        price: price < 0 ? 0 : price,
                    }
                    : product
            )
        );
    };

    const onMakeSale = async () => {
        console.log('onMakeSale');
        console.log(selectedProducts);
        try {
            const total = selectedProducts.reduce(
                (sum, product) => sum + Number(product.price) * Number(product.quantity),
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
                    contragent: Number(selectContragent),
                    paybox: Number(selectedPaybox),
                    organization: Number(selectOrganization),

                    status: false,
                    paid_rubles: total.toFixed(2),
                    paid_lt: 0,
                },
            ];

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

            const data = await response.json();
            if(data?.length > 0) {
                console.log(data[0].id);
                toast.success("Продажа создана", {
                    description: `ID: ${data?.[0]?.id ?? data?.id ?? "—"}, сумма: ${total.toFixed(2)} ₽`,
                });
            }
            console.log("SALE RESPONSE:", data);
        } catch (e) {
            console.log(e);
        }
    };

    return {
        onClickToken, token, setToken, availableOrder, organizations, warehouses, products, findNumber,
        phone, setPhone, contragents, onSelectContragent, onChangeOrganization, onChangeWarehouse, payboxes, onChangePayboxes,
        priceTypes , onSelectPriceType, onAddProduct, selectedProducts, onRemoveProduct, changePrice, changeQuantity, onMakeSale
    }
}