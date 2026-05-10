import {Label} from "@/src/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";

export function SelectField({
                         label,
                         placeholder,
                         items = [],
                         onValueChange,
                     }: {
    label: string;
    placeholder: string;
    items?: any[];
    onValueChange?: (value: string) => void;
}) {
    return (
        <>
            <Label>{label}</Label>

            <Select disabled={!items.length} onValueChange={onValueChange}>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    {items.map((item, index) => (
                        <SelectItem
                            key={item.id ?? index}
                            value={String(item.id ?? index)}
                        >
                            {item.short_name || item.full_name || item.work_name || "Без названия"}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    );
}