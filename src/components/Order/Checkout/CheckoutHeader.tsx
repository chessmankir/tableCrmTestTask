import {CardDescription, CardHeader, CardTitle} from "@/src/components/ui/card";
import {PlugZap} from "lucide-react";

export function CheckoutHeader(){
    return (
        <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
                <PlugZap className="size-4"/>
                1. Подключение кассы
            </CardTitle>
            <CardDescription>
                Введите токен и загрузите справочники
            </CardDescription>
        </CardHeader>
    )
}