import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    CircleCheck,
    PackagePlus,
    Phone,
    PlugZap,
    Search,
    ShoppingCart,
} from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-dvh bg-[#fbf7ef] text-slate-800">
            <div className="mx-auto w-full max-w-md px-3 pb-44 pt-4">
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

                <AppCard>
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <PlugZap className="size-4"/>
                            1. Подключение кассы
                        </CardTitle>
                        <CardDescription>
                            Введите токен и загрузите справочники
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Label htmlFor="token">Token</Label>
                        <Input id="token" placeholder="Введите token кассы"/>

                        <Button className="w-full bg-[#e45f32] text-white hover:bg-[#d95429]">Подключить</Button>
                    </CardContent>
                </AppCard>

                <AppCard>
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Phone className="size-4"/>
                            2. Клиент
                        </CardTitle>
                        <CardDescription>Поиск клиента по телефону</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Label htmlFor="clientPhone">Телефон</Label>

                        <div className="flex items-center gap-2">
                            <Input id="clientPhone" placeholder="+79990000000"/>

                            <Button disabled variant="secondary" size="icon">
                                <Search className="size-4"/>
                            </Button>
                        </div>

                        <Label>Найденный клиент</Label>

                        <Select disabled>
                            <SelectTrigger>
                                <SelectValue placeholder="Клиент не выбран"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="client-1">Иван Петров</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </AppCard>

                <AppCard>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">3. Параметры продажи</CardTitle>
                        <CardDescription>
                            Счёт, организация, склад и тип цены
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <SelectField label="Организация" placeholder="Выберите организацию"/>
                        <SelectField label="Счёт" placeholder="Выберите счёт"/>
                        <SelectField label="Склад" placeholder="Выберите склад"/>
                        <SelectField label="Тип цены" placeholder="Выберите тип цены"/>
                    </CardContent>
                </AppCard>

                <AppCard>
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <PackagePlus className="size-4"/>
                            4. Товары
                        </CardTitle>
                        <CardDescription>
                            Поиск и добавление номенклатуры
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <Input disabled placeholder="Поиск товара по названию"/>

                        <div className="h-56 rounded-xl border">
                            <div className="space-y-1 p-2">
                                <p className="px-2 py-4 text-sm text-muted-foreground">
                                    Товары не найдены
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </AppCard>

                <AppCard>
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <ShoppingCart className="size-4"/>
                            Корзина
                        </CardTitle>
                        <CardDescription>
                            Количество, цена и сумма по позициям
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                            Добавьте хотя бы один товар
                        </p>
                    </CardContent>
                </AppCard>

                <AppCard className="mb-0">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Комментарий</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Textarea
                            placeholder="Комментарий к заказу (необязательно)"
                            rows={3}
                        />
                    </CardContent>
                </AppCard>
            </div>

            <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-[#ded7cb] bg-[#fbf7ef]/95 backdrop-blur">
                <div className="mx-auto w-full max-w-md px-3 py-3">
                    <div className="mb-3 flex items-center justify-between rounded-xl border bg-card px-3 py-2">
                        <p className="text-sm text-muted-foreground">Итого</p>
                        <p className="text-lg font-semibold">0,00 ₽</p>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <Button disabled className="w-full bg-[#eea58f] text-white opacity-100 hover:bg-[#eea58f]">
                            Создать продажу
                        </Button>

                        <Button disabled variant="secondary" className="w-full bg-[#dff4f0] text-slate-700 opacity-100 hover:bg-[#dff4f0]">
                            <CircleCheck className="mr-2 size-4"/>
                            Создать и провести
                        </Button>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function AppCard({
                     children,
                     className = "",
                 }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Card
            className={`mb-4 border-border/60 bg-card/95 shadow-sm ${className}`}
        >
            {children}
        </Card>
    );
}

function SelectField({
                         label,
                         placeholder,
                     }: {
    label: string;
    placeholder: string;
}) {
    return (
        <>
            <Label>{label}</Label>

            <Select disabled>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="one">Вариант 1</SelectItem>
                </SelectContent>
            </Select>
        </>
    );
}