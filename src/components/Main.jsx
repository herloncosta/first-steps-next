import styles from "../styles/Main.module.css";

export default function Main(props) {
	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<h1>Conteúdo da página</h1>
				<p>Página inicial em desenvolvimento</p>
			</div>
			<div className={styles.content}>
				<ul>
					<li className="item1">qualquer informação relevante</li>
					<li className="item2">qualquer informação relevante</li>
					<li className="item3">qualquer informação relevante</li>
				</ul>
			</div>
		</main>
	);
}
