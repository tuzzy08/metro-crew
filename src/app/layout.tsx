'use client';

import { useState } from 'react';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { createStyles } from '@mantine/core';

export const metadata = {
	title: 'Metro Crew',
};

const useStyles = createStyles((theme) => ({
	body: {
		padding: 0,
		margin: 0,
	},
}));

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { classes } = useStyles();
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<html lang='en'>
					<body>{children}</body>
				</html>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
