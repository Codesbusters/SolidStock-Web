import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import ShopNavbar from "@/components/header/shopNavbar";
import SideMenu from "@/components/menus/SideMenu";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
			<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="flex flex-col h-full w-full">
						<ShopNavbar/>
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-1/2 flex flex-row">
							<div className={"h-full"}>
								<SideMenu/>
							</div>
							<div className={"w-full"}>
								{children}
							</div>
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://github.com/Codesbusters"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Alimenté par</span>
								<p className="text-primary">SolidStock</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
