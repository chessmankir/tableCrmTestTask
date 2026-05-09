import {CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {PackagePlus} from "lucide-react";
import {Input} from "@/components/ui/input";
import {AppCard} from "@/components/Order/AppCard";

export function Goods(){
    return (
        <AppCard>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <PackagePlus className="size-4"/>
                    4. Товары
                </CardTitle>
                <CardDescription>
                    Поиск и добавление номенклатуры
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <Input disabled placeholder="Поиск товара по названию"/>

                <div className="h-56 rounded-xl border">
                    <div className="space-y-1 p-2">
                        <p className="px-2 py-4 text-sm text-muted-foreground">
                            Товары не найдены
                        </p>
                    </div>
                </div>
            </CardContent>
        </AppCard>
    )
}