import {ClientHeader} from "@/components/Order/Client/ClientHeader";
import {ClientContent} from "@/components/Order/Client/ClientContent";
import {AppCard} from "@/components/Order/AppCard";

export function ClientCrm(){
    return (
        <AppCard>
            <ClientHeader />
            <ClientContent />
        </AppCard>
    )
}