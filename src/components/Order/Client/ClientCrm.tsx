import {ClientHeader} from "@/src/components/Order/Client/ClientHeader";
import {ClientContent} from "@/src/components/Order/Client/ClientContent";
import {AppCard} from "@/src/components/Order/AppCard";

export function ClientCrm(){
    return (
        <AppCard>
            <ClientHeader />
            <ClientContent />
        </AppCard>
    )
}