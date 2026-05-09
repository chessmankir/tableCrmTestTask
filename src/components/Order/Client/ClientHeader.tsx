import {CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Phone} from "lucide-react";

export  function ClientHeader(){
    return (
        <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
                <Phone className="size-4"/>
                2. Клиент
            </CardTitle>
            <CardDescription>Поиск клиента по телефону</CardDescription>
        </CardHeader>
    )
}