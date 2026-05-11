import {useState} from "react";
import {BASE_URL} from "@/src/api/Backend";
import {ApiList} from "@/src/types/AppListType";
import {Contragent} from "@/src/types/ContragentType";
import {useCheckoutStore} from "@/src/store/useCheckouteStore";

export function useClientBlock(){
    const [phone, setPhone] = useState<string>("");
    const [contragents, setContragents] = useState<Contragent[]>([]);
    const token = useCheckoutStore((state) => state.token);
    const setSelectedContragent = useCheckoutStore((state) => state.setSelectedContragent);

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

    const onSelectContragent = (contragentIndex: string) => {
        setSelectedContragent(contragentIndex);
    };

    return {phone, setPhone, contragents, findNumber, onSelectContragent};
}