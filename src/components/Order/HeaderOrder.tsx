import {Badge} from "@/components/ui/badge";

export function HeaderOrder(){
    return (
        <section className="mb-4 rounded-3xl border border-border/70 bg-card/95 p-4 shadow-sm backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                tablecrm.com
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight">
                Мобильный заказ
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
                WebApp для создания продажи и проведения в один клик.
            </p>

            <div className="mt-3 flex items-center gap-2">
                <Badge variant="secondary" className="bg-[#d8efea] text-slate-700 hover:bg-[#d8efea]">
                    Касса не подключена
                </Badge>
            </div>
        </section>
    )
}