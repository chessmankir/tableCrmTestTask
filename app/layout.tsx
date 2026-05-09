import type { Metadata } from "next";
import { Rubik, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin", "cyrillic"],
    weight: ["300", "400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "TableCRM Mobile Order",
    description: "Мобильная форма оформления заказов для tablecrm.com",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" className={`${rubik.variable} ${jetBrainsMono.variable} light`}>
        <body className="antialiased">{children}</body>
        </html>
    );
}