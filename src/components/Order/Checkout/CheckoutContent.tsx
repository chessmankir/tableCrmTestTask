import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {CardContent} from "@/components/ui/card";

export  function CheckoutContent(){
    return (
        <CardContent className="space-y-3">
            <Label htmlFor="token">Token</Label>
            <Input id="token" placeholder="Введите token кассы"/>

            <Button className="w-full bg-[#e45f32] text-white hover:bg-[#d95429]">Подключить</Button>
        </CardContent>
    )
}