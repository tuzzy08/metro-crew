import Header from '@/app/components/header';
import links from './components/links';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header links={links}></Header>
			{children}
		</>
	);
}
