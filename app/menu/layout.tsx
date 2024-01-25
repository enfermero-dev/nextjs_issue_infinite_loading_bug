import { MenuPanel } from "./menu.components/MenuPanel";

export default function MenuLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-row gap-4'>
            <MenuPanel />
            {children}
        </div>
    );
}