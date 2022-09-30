import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout(props) {
	return (
		<div className={styles.container}>
			<Header
				title="Fundamentos de Next.js e React.js"
				href="/about"
				btn="About"
			/>
			<Main />
			<Footer />
		</div>
	);
}
