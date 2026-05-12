"use client";

import {HeaderOrder} from "@/src/components/Order/HeaderOrder";
import {Checkout} from "@/src/components/Order/Checkout/Checkout";
import {ClientCrm} from "@/src/components/Order/Client/ClientCrm";
import {Parameters} from "@/src/components/Order/Parametrs/Parameters";
import {Goods} from "@/src/components/Order/Goods/Goods";
import {CardOrder} from "@/src/components/Order/Card/CardOrder";
import {Comments} from "@/src/components/Order/Comments/Comments";
import {FooterOrder} from "@/src/components/Order/Footer/FooterOrder";

export function OrderPage(){
    return (
        <main className="min-h-dvh bg-[#fbf7ef] text-slate-800">
            <div className="mx-auto w-full max-w-md px-3 pb-44 pt-4">
                <HeaderOrder />
                <Checkout />
                <ClientCrm />
                <Parameters />
                <Goods />
                <CardOrder />
                <Comments/>
            </div>
            <FooterOrder/>
        </main>
    )
}