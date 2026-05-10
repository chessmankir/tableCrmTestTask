import { Label } from "@/src/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";

type SelectFieldProps = {
    label: string;
    placeholder: string;
    items?: any[];
    value?: string;
    onValueChange?: (value: string) => void;
};

export function SelectField({
                                label,
                                placeholder,
                                items = [],
                                value,
                                onValueChange,
                            }: SelectFieldProps) {
    return (
        <>
            <Label>{label}</Label>

            <Select
                value={value}
                onValueChange={onValueChange}
                disabled={!items.length}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    {items.map((item, index) => {
                        const itemValue = String(item.id ?? item.uuid ?? index);

                        const itemLabel =
                            item.name ||
                            item.short_name ||
                            item.full_name ||
                            item.work_name ||
                            item.description ||
                            `Вариант ${index + 1}`;

                        return (
                            <SelectItem key={itemValue} value={itemValue}>
                                {itemLabel}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </>
    );
}