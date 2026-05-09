"use client";

import {useState} from "react";

export function useOrder(){
    const [token, setToken] = useState('');
    const [organizations, setOrganizations] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [products, setProducts] = useState([]);
    const [availableOrder, setAvailableOrder] = useState(false);

    const onClickToken = () => {
        console.log(token);
        (async ()=> {
            try{
                const backend = "https://app.tablecrm.com";
                const [orgsRes, warehousesRes, productsRes] = await Promise.all([
                    fetch(
                        `${backend}/api/v1/organizations/?token=${token}`
                    ),
                    fetch(
                        `${backend}/api/v1/warehouses/?token=${token}`
                    ),
                    fetch(
                        `${backend}/api/v1/nomenclature/?token=${token}`
                    ),
                ]);

                const orgs = await orgsRes.json();
                const warehouses = await warehousesRes.json();
                const products = await productsRes.json();
                setOrganizations(orgs);
                setWarehouses(warehouses);
                setProducts(products);
                setAvailableOrder(true);
                console.log(products);
                console.log(warehouses);
                console.log(orgs);
            }
            catch (e){
                console.log(e);
            }
        })();
    }

    return {
        onClickToken, token, setToken, availableOrder, organizations, warehouses, products
    }
}