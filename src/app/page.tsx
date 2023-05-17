'use client';
import { Flex } from '@mantine/core';
import HeaderMenuColored from '@/app/components/header';
import links from '@/app/components/links';

export default function Home() {
	return (
		<Flex mih={'100vh'} direction={'column'}>
			<HeaderMenuColored links={links} />
		</Flex>
	);
}
