import {useEffect, useState} from "react";
import {BaseEntity} from "@/src/types/BaseEntityType";
import {useCheckoutStore} from "@/src/store/useCheckouteStore";
import {BASE_URL} from "@/src/api/Backend";
import {ApiList} from "@/src/types/AppListType";
import {ApiProduct} from "@/src/types/ApiProductType";
import {toast} from "sonner";

export function useParameters(){
    const [organizations, setOrganizations] = useState<BaseEntity[]>([]);
    const [warehouses, setWarehouses] = useState<BaseEntity[]>([]);
    const [payboxes, setPayboxes] = useState<BaseEntity[]>([]);
    const [priceTypes, setPriceTypes] = useState<BaseEntity[]>([]);
    const token = useCheckoutStore((state) => state.token);
    const setSelectedOrganization = useCheckoutStore((state) => state.setSelectedOrganization);
    const setSelectedWarehouse = useCheckoutStore((state) => state.setSelectedWarehouse);
    const setSelectedPriceType = useCheckoutStore((state) => state.setSelectedPriceType);
    const setSelectedPaybox = useCheckoutStore((state) => state.setSelectedPaybox);

    useEffect(() => {
        (async ()=>{
            const [
                orgsRes,
                warehousesRes,
                payboxRes,
                priceTypesRes,
            ] = await Promise.all([
                fetch(`${BASE_URL}/api/v1/organizations/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/warehouses/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/payboxes/?token=${token}`),
                fetch(`${BASE_URL}/api/v1/price_types/?token=${token}`),
            ]);

            const orgs: ApiList<BaseEntity> = await orgsRes.json();
            const warehousesData: ApiList<BaseEntity> =
                await warehousesRes.json();
            const payboxesData: ApiList<BaseEntity> = await payboxRes.json();
            const priceTypesData: ApiList<BaseEntity> =
                await priceTypesRes.json();

            if (orgs?.count > 0) {
                setOrganizations(orgs.result);
                setWarehouses(warehousesData.result);
                setPayboxes(payboxesData.result);
                setPriceTypes(priceTypesData.result);
                toast.success("Касса подключена", {
                    description: `Организаций: ${orgs.count}`,
                });
            }
        })();
    }, [token]);

    const onChangeOrganization = (value: string) => {
        setSelectedOrganization(value);
    };

    const onChangeWarehouse = (value: string) => {
        setSelectedWarehouse(value);
    };

    const onChangePayboxes = (value: string) => {
        setSelectedPaybox(value);
    };

    const onSelectPriceType = (value: string) => {
        setSelectedPriceType(value);
    };

    return {organizations, warehouses, payboxes, priceTypes, onChangeOrganization,onChangeWarehouse, onChangePayboxes, onSelectPriceType }
}