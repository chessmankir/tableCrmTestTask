"use client";
import {useState} from "react";
import {BASE_URL} from "@/src/api/Backend";
import {toast} from "sonner";
import {useCheckoutStore} from "@/src/store/useCheckouteStore";

export function useTokenBlock(){
    const [tokenText, setTokenText] = useState<string>("");
    const setToken = useCheckoutStore((state) => state.setToken);

    const onClickToken = async () => {
        try {
            const [
                orgsRes,
                warehousesRes,
            ] = await Promise.all([
                fetch(`${BASE_URL}/api/v1/organizations/?token=${tokenText}`),
                fetch(`${BASE_URL}/api/v1/warehouses/?token=${tokenText}`),
            ]);
            const orgs = await orgsRes.json();
            if (orgs?.count > 0) {
                setToken(tokenText);
                toast.success("Касса подключена", {
                    description: `Организаций: ${orgs.count}`,
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    return {tokenText, setTokenText, onClickToken};
}