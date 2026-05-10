import {CardContent, CardDescription, CardHeader, CardTitle} from "@/src/components/ui/card";
import {AppCard} from "@/src/components/Order/AppCard";
import {SelectField} from "@/src/components/ui/SelectField";

export  function Parameters({organizations, onChangeOrganization, warehouses, onChangeWarehouse, payboxes, onChangePayboxes,
                                priceTypes , onSelectPriceType}){
    return (
        <AppCard>
            <CardHeader className="pb-3">
                <CardTitle className="text-base">3. Параметры продажи</CardTitle>
                <CardDescription>
                    Счёт, организация, склад и тип цены
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <SelectField label="Организация" placeholder="Выберите организацию" items={organizations} onValueChange={onChangeOrganization}/>
                <SelectField label="Счёт" placeholder="Выберите счёт" items={payboxes} onValueChange={onChangePayboxes} />
                <SelectField label="Склад" placeholder="Выберите склад" items={warehouses} onValueChange={onChangeWarehouse}/>
                <SelectField label="Тип цены" placeholder="Выберите тип цены" items={priceTypes} onValueChange={onSelectPriceType}/>
            </CardContent>
        </AppCard>
    )
}

