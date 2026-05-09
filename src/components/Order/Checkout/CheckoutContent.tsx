import {Label} from "@/src/components/ui/label";
import {Input} from "@/src/components/ui/input";
import {Button} from "@/src/components/ui/button";
import {CardContent} from "@/src/components/ui/card";

export  function CheckoutContent({onClickToken, token, setToken}){
    console.log(token);
    return (
        <CardContent className="space-y-3">
            <Label htmlFor="token">Token</Label>
            <Input value={token} onChange={setToken} id="token" placeholder="Введите token кассы"/>
            <Button onClick={onClickToken} className="w-full bg-[#e45f32] text-white hover:bg-[#d95429]">Подключить</Button>
        </CardContent>
    )
}