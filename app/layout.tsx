import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Taste.fun',
    description: '',
    metadataBase: new URL('https://sco-r1jk6fmzcvpwazd-e.onlook.live/'),
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
