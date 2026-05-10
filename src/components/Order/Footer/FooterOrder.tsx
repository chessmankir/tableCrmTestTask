import { Button } from "@/src/components/ui/button";
import { CircleCheck } from "lucide-react";

export function FooterOrder({ selectedProducts, onMakeSale}) {
    const total = selectedProducts.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
    );

    const hasProducts = selectedProducts.length > 0;

    return (
        <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-[#ded7cb] bg-[#fbf7ef]/95 backdrop-blur">
            <div className="mx-auto w-full max-w-md px-3 py-3">
                <div className="mb-3 flex items-center justify-between rounded-xl border bg-card px-3 py-2">
                    <p className="text-sm text-muted-foreground">Итого</p>

                    <p className="text-lg font-semibold">
                        {total.toFixed(2)} ₽
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <Button onClick={onMakeSale}
                        disabled={!hasProducts}
                        className={`
                            w-full text-white
                            ${
                            hasProducts
                                ? "bg-[#eea58f] hover:bg-[#e59379]"
                                : "bg-[#eea58f]/50 cursor-not-allowed"
                        }
                        `}
                    >
                        Создать продажу
                    </Button>

                    <Button
                        onClick={onMakeSale}
                        disabled={!hasProducts}
                        variant="secondary"
                        className={`
                            w-full text-slate-700
                            ${
                            hasProducts
                                ? "bg-[#dff4f0] hover:bg-[#cfe9e4]"
                                : "bg-[#dff4f0]/50 cursor-not-allowed"
                        }
                        `}
                    >
                        <CircleCheck className="mr-2 size-4" />
                        Создать и провести
                    </Button>
                </div>
            </div>
        </footer>
    );
}