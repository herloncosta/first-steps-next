import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header(props) {
	return (
		<header className={styles.container}>
			<h1>{props.title}</h1>
			<Link href={props.href}>{props.btn}</Link>
		</header>
	);
}
