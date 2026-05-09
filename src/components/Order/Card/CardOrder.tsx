import {CardContent, CardDescription, CardHeader, CardTitle} from "@/src/components/ui/card";
import {ShoppingCart} from "lucide-react";
import {AppCard} from "@/src/components/Order/AppCard";

export  function  CardOrder(){
    return (
        <AppCard>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <ShoppingCart className="size-4"/>
                    Корзина
                </CardTitle>
                <CardDescription>
                    Количество, цена и сумма по позициям
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                    Добавьте хотя бы один товар
                </p>
            </CardContent>
        </AppCard>
    )
}