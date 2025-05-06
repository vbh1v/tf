import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Taste.fun',
    description: '',
    metadataBase: new URL('https://tf-git-main-vaibhavvsharmas-projects.vercel.app'),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="bs34bdg">
            <head data-oid="n7m:zgl">
                <script
                    src="https://getlaunchlist.com/js/widget-diy.js"
                    defer
                    data-oid="tuq5w11"
                ></script>
            </head>
            <body className="" data-oid="jtl9ydk">
                {children}
            </body>
        </html>
    );
}
