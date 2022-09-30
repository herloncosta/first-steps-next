import styles from "../styles/About.module.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function About() {
	return (
		<div className={styles.container}>
			<Header title="Sobre" href="/" btn="Voltar" />
			<Main />
			<Footer />
		</div>
	);
}
