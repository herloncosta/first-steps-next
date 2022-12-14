import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.container}>
			<p>
				Desenvolvido por{" "}
				<Link href="https://github.com/herloncosta">Herlon Costa </Link>
				&reg;.
			</p>
		</footer>
	);
}
