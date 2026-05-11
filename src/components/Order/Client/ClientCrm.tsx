import { ClientHeader } from "@/src/components/Order/Client/ClientHeader";
import { ClientContent } from "@/src/components/Order/Client/ClientContent";
import { AppCard } from "@/src/components/Order/AppCard";
import {useClientBlock} from "@/src/Hooks/useClientBlock";

export function ClientCrm() {
    const {phone, setPhone, contragents, findNumber, onSelectContragent} = useClientBlock();
    return (
        <AppCard>
            <ClientHeader />
            <ClientContent
                findNumber={findNumber}
                phone={phone}
                setPhone={setPhone}
                contragents={contragents}
                onSelectContragent={onSelectContragent}
            />
        </AppCard>
    );
}