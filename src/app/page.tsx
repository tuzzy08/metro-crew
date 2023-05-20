import HeaderMenuColored from '@/app/components/header';
import links from '@/app/components/links';
import HomeMenu from '@/app/components/menu';

export default function Home() {
	return (
		<>
			<HeaderMenuColored links={links} />
			<HomeMenu />
		</>
	);
}
