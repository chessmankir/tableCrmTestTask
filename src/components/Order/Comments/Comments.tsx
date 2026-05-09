import {CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {AppCard} from "@/components/Order/AppCard";

export  function Comments(){
    return (
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
    )
}