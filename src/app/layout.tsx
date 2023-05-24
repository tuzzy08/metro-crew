import RootStyleRegistry from './components/emotion';

export const metadata = {
	title: 'Metro Crew',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body style={{ padding: 0, margin: 0 }} suppressHydrationWarning={true}>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</body>
		</html>
	);
}
