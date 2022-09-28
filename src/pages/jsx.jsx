import style from "../styles/styled.module.css";

export default function Tsx() {
	const titulo = <h1>Entendendo o arquivo tsx</h1>;

	function subtitulo() {
		return <h2>Retornando valor de uma função</h2>;
	}

	return (
		<div className={style.subtitle}>
			{titulo}
			{subtitulo()}
			<p>
				{JSON.stringify({
					nome: "Herlon Costa",
					profissao: "Programador",
					idade: 26,
				})}
			</p>
		</div>
	);
}
