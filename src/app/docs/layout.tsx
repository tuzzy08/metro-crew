import DocumentAppShell from './components/appShell';

export default function DocumentPortalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DocumentAppShell>{children}</DocumentAppShell>;
}
