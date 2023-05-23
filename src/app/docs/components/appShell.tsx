'use client';

import { AppShell, Header } from '@mantine/core';
import DocumentNavbar from '../components/navbar';

export default function DocumentAppShell({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppShell
			padding='md'
			navbar={<DocumentNavbar />}
			header={
				<Header height={60} p='xs'>
					{/* Header content */}
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
		>
			{children}
		</AppShell>
	);
}
