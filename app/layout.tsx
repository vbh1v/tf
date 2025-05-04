import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'taste.fun - Scan. Bet. Expose the Truth.',
    description: 'The label speaks. We verify.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="flv9ygx">
            <head data-oid="x39o.g2">
                <Script
                    src="https://getlaunchlist.com/js/widget.js"
                    strategy="afterInteractive"
                    data-oid="x:w8ni7"
                />
            </head>
            <body className="" data-oid="_w3-7nx">
                {children}
            </body>
        </html>
    );
}
