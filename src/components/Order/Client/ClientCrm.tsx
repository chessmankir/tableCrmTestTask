import {ClientHeader} from "@/src/components/Order/Client/ClientHeader";
import {ClientContent} from "@/src/components/Order/Client/ClientContent";
import {AppCard} from "@/src/components/Order/AppCard";

export function ClientCrm({findNumber, phone, setPhone, contragents, onSelectContragent}){
    return (
        <AppCard>
            <ClientHeader />
            <ClientContent findNumber={findNumber} phone={phone} setPhone={setPhone} contragents={contragents} onSelectContragent={onSelectContragent}/>
        </AppCard>
    )
}