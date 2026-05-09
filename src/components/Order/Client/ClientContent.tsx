import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Button} from "@/src/components/ui/button";
import {Search} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/src/components/ui/select";
import {CardContent} from "@/src/components/ui/card";

export function ClientContent(){
    return (
        <CardContent className="space-y-3">
            <Label htmlFor="clientPhone">Телефон</Label>

            <div className="flex items-center gap-2">
                <Input id="clientPhone" placeholder="+79990000000"/>

                <Button disabled variant="secondary" size="icon">
                    <Search className="size-4"/>
                </Button>
            </div>

            <Label>Найденный клиент</Label>

            <Select disabled>
                <SelectTrigger>
                    <SelectValue placeholder="Клиент не выбран"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="client-1">Иван Петров</SelectItem>
                </SelectContent>
            </Select>
        </CardContent>
    )
}