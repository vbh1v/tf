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
                <script
                    src="https://getlaunchlist.com/js/widget-diy.js"
                    defer
                    data-oid="x:w8ni7"
                ></script>
            </head>
            <body className="" data-oid="_w3-7nx">
                {children}
            </body>
        </html>
    );
}
