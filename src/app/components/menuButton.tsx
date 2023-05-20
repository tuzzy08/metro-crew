'use client';

import { Anchor, Box, Flex, Group } from '@mantine/core';
import Link from 'next/link';

export default function MenuButton({
	label,
	link,
}: {
	label: string;
	link: string;
}) {
	return (
		<Box
			sx={() => ({
				display: 'flex',
				backgroundColor: 'rgb(25, 113, 194)',
				justifyContent: 'center',
				alignItems: 'center',
				padding: 'lg',
				width: '250px',
				height: '70px',
			})}
		>
			<Anchor component={Link} href={`${link}`} color='white' underline={false}>
				{label}
			</Anchor>
		</Box>
	);
}
