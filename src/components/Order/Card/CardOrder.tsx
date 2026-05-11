import { CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { AppCard } from "@/src/components/Order/AppCard";
import {useCardOrder} from "@/src/Hooks/useCardOrder";

type SelectedProduct = {
    id: number | string;
    name?: string;
    title?: string;
    quantity: number;
    price: number;
};

export function CardOrder(){
     const {removeProduct, changeQuantity, changePrice, selectedProducts}   = useCardOrder()
    // остальной код без изменений
    return (
        <AppCard>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <ShoppingCart className="size-4" />
                    Корзина
                </CardTitle>

                <CardDescription>
                    Количество, цена и сумма по позициям
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
                {selectedProducts.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        Товары не найдены
                    </p>
                ) : (
                    selectedProducts.map((product, index) => {
                        const name = product.name || product.title || "Без названия";
                        const quantity = product.quantity || 1;
                        const price = product.price || 0;
                        const sum = quantity * price;

                        return (
                            <div
                                key={product.id ?? index}
                                className="rounded-xl border p-3"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-sm font-medium">{name}</p>

                                    <Button variant="ghost" size="icon" onClick={() => removeProduct(product)}>
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>

                                <div className="mb-3 h-px bg-border" />

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <p className="mb-1 text-xs">Количество</p>
                                        <Input
                                            type="number"
                                            min={1}
                                            value={quantity}
                                            onChange={(e) => changeQuantity(product.id, Number(e.target.value))}
                                        />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs">Цена</p>
                                        <Input
                                            type="number"
                                            min={0}
                                            value={price}
                                            onChange={(e) => changePrice(product.id, Number(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <p className="mt-3 text-right text-sm">
                                    Сумма: {sum.toFixed(2).replace(".", ",")} ₽
                                </p>
                            </div>
                        );
                    })
                )}
            </CardContent>
        </AppCard>
    );
}