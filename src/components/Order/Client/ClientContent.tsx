import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Button} from "@/src/components/ui/button";
import {Search} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";
import {CardContent} from "@/src/components/ui/card";

export function ClientContent({findNumber, phone, setPhone, contragents, onSelectContragent}){
    return (
        <CardContent className="space-y-3">
            <Label htmlFor="clientPhone">Телефон</Label>

            <div className="flex items-center gap-2">
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} id="clientPhone" placeholder="+79990000000"/>
                <Button onClick={findNumber} variant="secondary" size="icon">
                    <Search onClick={findNumber}  className="size-4"/>
                </Button>
            </div>

            <Label>Найденный клиент</Label>

            <Select disabled={!contragents?.length > 0} onValueChange={onSelectContragent}>
                <SelectTrigger>
                    <SelectValue placeholder="Клиент не выбран"/>
                </SelectTrigger>
                <SelectContent>
                    {contragents.map((client, index) => (
                        <SelectItem key={index} value={String(client.id)}>{client.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </CardContent>
    )
}