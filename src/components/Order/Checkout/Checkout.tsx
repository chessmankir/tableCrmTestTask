import { CheckoutHeader } from "@/src/components/Order/Checkout/CheckoutHeader";
import { CheckoutContent } from "@/src/components/Order/Checkout/CheckoutContent";
import { AppCard } from "@/src/components/Order/AppCard";

type CheckoutProps = {
    onClickToken: () => void;
    token: string;
    setToken: (value: string) => void;
};

export function Checkout({
                             onClickToken,
                             token,
                             setToken,
                         }: CheckoutProps) {
    return (
        <AppCard>
            <CheckoutHeader />
            <CheckoutContent
                setToken={setToken}
                token={token}
                onClickToken={onClickToken}
            />
        </AppCard>
    );
}