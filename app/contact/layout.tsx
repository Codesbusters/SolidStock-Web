export default function ContactLayout({
										  children,
									  }: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8">
				{children}
		</section>
	);
}
