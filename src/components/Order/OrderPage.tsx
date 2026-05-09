"use client";

import {HeaderOrder} from "@/src/components/Order/HeaderOrder";
import {Checkout} from "@/src/components/Order/Checkout/Checkout";
import {ClientCrm} from "@/src/components/Order/Client/ClientCrm";
import {Parameters} from "@/src/components/Order/Parametrs/Parameters";
import {Goods} from "@/src/components/Order/Goods/Goods";
import {CardOrder} from "@/src/components/Order/Card/CardOrder";
import {Comments} from "@/src/components/Order/Comments/Comments";
import {FooterOrder} from "@/src/components/Order/Footer/FooterOrder";
import {useOrder} from "@/src/Hooks/useOrder";

export function OrderPage(){
    const {onClickToken, token, setToken, availableOrder, organizations, warehouses, products} = useOrder();
    console.log(organizations);
    console.log(organizations.length);
    console.log(products);
    console.log(products.length);
    return (
        <main className="min-h-dvh bg-[#fbf7ef] text-slate-800">
            <div className="mx-auto w-full max-w-md px-3 pb-44 pt-4">
                <HeaderOrder availableOrder={availableOrder}  orgranizationCount={organizations?.length}
                             goodCount = {products?.length}/>
                <Checkout  setToken={setToken} token={token} onClickToken={onClickToken} />
                <ClientCrm/>
                <Parameters/>
                <Goods/>
                <CardOrder/>
                <Comments/>
            </div>
            <FooterOrder/>
        </main>
    )
}