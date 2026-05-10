"use client";

import { useMemo, useState } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { PackagePlus } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { AppCard } from "@/src/components/Order/AppCard";

type Product = {
    id?: number | string;
    name?: string;
    title?: string;
    price?: number | null;
};

type GoodsProps = {
    products: Product[];
    onAddProduct: (product: Product) => void;
};

export function Goods({ products, onAddProduct }: GoodsProps) {
    console.log(products);
    const [search, setSearch] = useState("");

    const filteredProducts = useMemo(() => {
        const value = search.trim().toLowerCase();

        if (!value) return products;

        return products.filter((product) => {
            const name = product.name || product.title || "";
            return name.toLowerCase().includes(value);
        });
    }, [products, search]);

    return (
        <AppCard>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <PackagePlus className="size-4" />
                    4. Товары
                </CardTitle>

                <CardDescription>
                    Поиск и добавление номенклатуры
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Поиск товара по названию"
                />

                <div className="h-56 overflow-y-auto rounded-xl border">
                    <div className="space-y-1 p-2">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => {
                                const name = product.name || product.title || "Без названия";
                                const price = product.price;

                                return (
                                    <div
                                        key={product.id ?? index}
                                        className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-[#f2e2aa]"
                                    >
                                        <div>
                                            <p className="text-sm font-medium">{name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {price ? `${price} ₽` : "Цена не указана"}
                                            </p>
                                        </div>

                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => onAddProduct(product)}
                                        >
                                            Добавить
                                        </Button>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="px-2 py-4 text-sm text-muted-foreground">
                                Товары не найдены
                            </p>
                        )}
                    </div>
                </div>
            </CardContent>
        </AppCard>
    );
}