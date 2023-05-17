'use client';

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
	return (
		<html lang='en'>
			<body className={classes.body}>{children}</body>
		</html>
	);
}
