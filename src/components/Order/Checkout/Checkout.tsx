import { CheckoutHeader } from "@/src/components/Order/Checkout/CheckoutHeader";
import { CheckoutContent } from "@/src/components/Order/Checkout/CheckoutContent";
import { AppCard } from "@/src/components/Order/AppCard";
import {useTokenBlock} from "@/src/Hooks/useTokenBlock";

export function Checkout(){
    const { onClickToken, tokenText, setTokenText } = useTokenBlock();
    return (
        <AppCard>
            <CheckoutHeader />
            <CheckoutContent
                setToken={setTokenText}
                token={tokenText}
                onClickToken={onClickToken}
            />
        </AppCard>
    );
}