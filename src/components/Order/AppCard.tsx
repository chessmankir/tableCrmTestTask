import {Card} from "@/src/components/ui/card";

export function AppCard({
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
