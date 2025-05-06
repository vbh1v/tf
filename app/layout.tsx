import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Taste.fun',
    description: '',
    metadataBase: new URL('https://tf-git-main-vaibhavvsharmas-projects.vercel.app'),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <script src="https://getlaunchlist.com/js/widget-diy.js" defer></script>
            </head>
            <body className="">{children}</body>
        </html>
    );
}
