"use client";

import { useState } from "react";
import { BASE_URL } from "@/src/api/Backend";
import { toast } from "sonner";

type Id = number | string;

type ApiList<T = unknown> = {
    result: T[];
    count: number;
};

type BaseEntity = {
    id: Id;
    name?: string;
    short_name?: string;
};

type Contragent = {
    id: Id;
    name?: string;
    phone?: string;
};

type Product = {
    id: Id;
    name?: string;
    title?: string;
    unit?: number;
    price: number;
    quantity: number;
};

type ApiProduct = {
    id: Id;
    name?: string;
    title?: string;
    unit?: number;
};

export function useOrder() {
    const [token, setToken] = useState<string>("");

    const [organizations, setOrganizations] = useState<BaseEntity[]>([]);
    const [selectOrganization, setSelectOrganization] = useState<string | null>(
        null
    );

    const [warehouses, setWarehouses] = useState<BaseEntity[]>([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>(
        null
    );

    const [products, setProducts] = useState<ApiProduct[]>([]);

    const [availableOrder, setAvailableOrder] = useState<boolean>(false);

    const [phone, setPhone] = useState<string>("");

    const [contragents, setContragents] = useState<Contragent[]>([]);
    const [selectContragent, setSelectContragent] = useState<string>("");

    const [priceTypes, setPriceTypes] = useState<BaseEntity[]>([]);
    const [selectPriceType, setSelectPriceType] = useState<string | null>(null);

    const [payboxes, setPayboxes] = useState<BaseEntity[]>([]);
    const [selectedPaybox, setSelectedPaybox] = useState<string | null>(null);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const onSelectContragent = (contragentIndex: string) => {
        setSelectContragent(contragentIndex);
    };

    const onSelectPriceType = (value: string) => {
        setSelectPriceType(value);
    };

    const onClickToken = async () => {
        try {
            const [
                orgsRes,
                warehousesRes,
                productsRes,
                payboxRes,
                priceTypesRes,
            ] = await Promise.all([
                fetch(`${BASE_URL}/api/v1/organizations/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/warehouses/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/nomenclature/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/payboxes/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/price_types/?token=${token}`),
            ]);

            const orgs: ApiList<BaseEntity> = await orgsRes.json();
            const warehousesData: ApiList<BaseEntity> =
                await warehousesRes.json();
            const productsData: ApiList<ApiProduct> = await productsRes.json();
            const payboxesData: ApiList<BaseEntity> = await payboxRes.json();
            const priceTypesData: ApiList<BaseEntity> =
                await priceTypesRes.json();

            if (orgs?.count > 0) {
                setOrganizations(orgs.result);

                toast.success("Касса подключена", {
                    description: `Организаций: ${orgs.count}`,
                });
            }

            setWarehouses(warehousesData.result);
            setProducts(productsData.result);
            setPayboxes(payboxesData.result);
            setPriceTypes(priceTypesData.result);

            setAvailableOrder(true);
        } catch (e) {
            console.log(e);
        }
    };

    const findNumber = async () => {
        const urlParams = new URLSearchParams();

        urlParams.set("phone", phone);
        urlParams.set("token", token);

        try {
            const backend =
                `${BASE_URL}/api/v1/contragents/?` + urlParams.toString();

            const response = await fetch(backend);

            const data: ApiList<Contragent> = await response.json();

            if (data?.count > 0) {
                setContragents(data.result);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onChangeOrganization = (value: string) => {
        setSelectOrganization(value);
    };

    const onChangeWarehouse = (value: string) => {
        setSelectedWarehouse(value);
    };

    const onChangePayboxes = (value: string) => {
        setSelectedPaybox(value);
    };

    const onAddProduct = (value: ApiProduct) => {
        setSelectedProducts((prev) => {
            const exist = prev.find((product) => product.id === value.id);

            if (exist) {
                return prev.map((product) =>
                    product.id === value.id
                        ? {
                            ...product,
                            quantity: product.quantity + 1,
                        }
                        : product
                );
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

    const onRemoveProduct = (value: Product) => {
        setSelectedProducts((prev) =>
            prev.filter((product) => product.id !== value.id)
        );
    };

    const changeQuantity = (productId: Id, quantity: number) => {
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

    const changePrice = (productId: Id, price: number) => {
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

    return {
        onClickToken,
        token,
        setToken,
        availableOrder,
        organizations,
        warehouses,
        products,
        findNumber,
        phone,
        setPhone,
        contragents,
        onSelectContragent,
        onChangeOrganization,
        onChangeWarehouse,
        payboxes,
        onChangePayboxes,
        priceTypes,
        onSelectPriceType,
        onAddProduct,
        selectedProducts,
        onRemoveProduct,
        changePrice,
        changeQuantity,
        onMakeSale,
    };
}