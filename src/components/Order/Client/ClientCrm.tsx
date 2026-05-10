import { ClientHeader } from "@/src/components/Order/Client/ClientHeader";
import { ClientContent } from "@/src/components/Order/Client/ClientContent";
import { AppCard } from "@/src/components/Order/AppCard";

type Contragent = {
    id: number | string;
    name?: string;
    phone?: string;
};

type ClientCrmProps = {
    findNumber: () => void | Promise<void>;
    phone: string;
    setPhone: (value: string) => void;
    contragents: Contragent[];
    onSelectContragent: (value: string) => void;
};

export function ClientCrm({
                              findNumber,
                              phone,
                              setPhone,
                              contragents,
                              onSelectContragent,
                          }: ClientCrmProps) {
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