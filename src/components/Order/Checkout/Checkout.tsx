import {CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {PlugZap} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {CheckoutHeader} from "@/components/Order/Checkout/CheckoutHeader";
import {CheckoutContent} from "@/components/Order/Checkout/CheckoutContent";
import {AppCard} from "@/components/Order/AppCard";

export function Checkout(){
    return (
        <AppCard>
            <CheckoutHeader />
            <CheckoutContent />
        </AppCard>
    )
}