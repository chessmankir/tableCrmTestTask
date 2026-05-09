
import {CheckoutHeader} from "@/src/components/Order/Checkout/CheckoutHeader";
import {CheckoutContent} from "@/src/components/Order/Checkout/CheckoutContent";
import {AppCard} from "@/src/components/Order/AppCard";

export function Checkout({onClickToken, token, setToken}){
    return (
        <AppCard>
            <CheckoutHeader />
            <CheckoutContent setToken={setToken} token={token} onClickToken={onClickToken} />
        </AppCard>
    )
}