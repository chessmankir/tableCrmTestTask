import {CardContent, CardDescription, CardHeader, CardTitle} from "@/src/components/ui/card";
import {AppCard} from "@/src/components/Order/AppCard";
import {SelectField} from "@/src/components/ui/SelectField";

type SelectItemType = {
    id: number | string;
    name?: string;
    short_name?: string;
};

type ParametersProps = {
    organizations: SelectItemType[];
    warehouses: SelectItemType[];
    payboxes: SelectItemType[];
    priceTypes: SelectItemType[];

    onChangeOrganization: (value: string) => void;
    onChangeWarehouse: (value: string) => void;
    onChangePayboxes: (value: string) => void;
    onSelectPriceType: (value: string) => void;
};

export function Parameters({
                               organizations,
                               onChangeOrganization,
                               warehouses,
                               onChangeWarehouse,
                               payboxes,
                               onChangePayboxes,
                               priceTypes,
                               onSelectPriceType,
                           }: ParametersProps) {
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

