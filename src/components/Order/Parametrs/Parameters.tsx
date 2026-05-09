import {CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {AppCard} from "@/components/Order/AppCard";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export  function Parameters(){
    return (
        <AppCard>
            <CardHeader className="pb-3">
                <CardTitle className="text-base">3. Параметры продажи</CardTitle>
                <CardDescription>
                    Счёт, организация, склад и тип цены
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <SelectField label="Организация" placeholder="Выберите организацию"/>
                <SelectField label="Счёт" placeholder="Выберите счёт"/>
                <SelectField label="Склад" placeholder="Выберите склад"/>
                <SelectField label="Тип цены" placeholder="Выберите тип цены"/>
            </CardContent>
        </AppCard>
    )
}

function SelectField({
                         label,
                         placeholder,
                     }: {
    label: string;
    placeholder: string;
}) {
    return (
        <>
            <Label>{label}</Label>

            <Select disabled>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="one">Вариант 1</SelectItem>
                </SelectContent>
            </Select>
        </>
    );
}