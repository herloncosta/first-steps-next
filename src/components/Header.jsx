import Link from "next/link";

export default function Header(props) {
	return (
		<header>
			<Link href="/about">Sobre</Link>
			<h1>{props.title}</h1>
		</header>
	);
}
