import {Button} from "@/src/components/ui/button";
import {CircleCheck} from "lucide-react";

export function FooterOrder(){
    return (
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

                    <Button disabled variant="secondary"
                            className="w-full bg-[#dff4f0] text-slate-700 opacity-100 hover:bg-[#dff4f0]">
                        <CircleCheck className="mr-2 size-4"/>
                        Создать и провести
                    </Button>
                </div>
            </div>
        </footer>
    )
}