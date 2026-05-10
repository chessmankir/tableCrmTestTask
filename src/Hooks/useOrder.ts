"use client";

import {useState} from "react";
import {BASE_URL} from "@/src/api/Backend"

type ApiList<T = unknown> = {
    result: T[];
    count: number;
};

export function useOrder(){
    const [token, setToken] = useState('');
    const [organizations, setOrganizations] = useState([]);
    const [selectOrganization, setSelectOrganization] = useState(null)
    //Склады
    const [warehouses, setWarehouses] = useState<ApiList>({result: [], count: 0});
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [products, setProducts] = useState<ApiList>({result: [], count: 0});
    const [availableOrder, setAvailableOrder] = useState(false);
    const [phone, setPhone] = useState('');
    const [contragents, setContragents] = useState([]);
    const [selectContragent, setSelectContragent] = useState(0);

    //Типы цен
    const [priceTypes, setPriceTypes] = useState([]);
    const [selectPriceType, setSelectPriceType] = useState(null);

    const [payboxes, setPayboxes] = useState([]);
    const [selectedPaybox, setSelectedPaybox] = useState(null);

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
                }
                setWarehouses(warehousesData.result);
                setProducts(productsData);
                setAvailableOrder(true);
                setPayboxes(payboxesData.result);
                setPriceTypes(priceTypesData.result);
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

    return {
        onClickToken, token, setToken, availableOrder, organizations, warehouses, products, findNumber,
        phone, setPhone, contragents, onSelectContragent, onChangeOrganization, onChangeWarehouse, payboxes, onChangePayboxes,
        priceTypes , onSelectPriceType
    }
}