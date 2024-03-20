import "./App.css";
import NavBar from "./assets/components/NavBar";
import items from "../src/assets/NavItems";
import Main from "../src/assets/components/Main";
import { useEffect, useRef } from "react";
import Button from "./assets/components/Button";
import disenos from "../public/disenos.zip";
// import disenoss from "/public/disenos.zip";

function App() {
	const modalRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const modal = modalRef.current;
		if (modal) modal.showModal();
	});

	const handleModalClose = () => {
		const modal = modalRef.current;
		if (modal) modal.close();
	};

	return (
		<>
			<dialog ref={modalRef} className="modal">
				<div className="modal__content grid">
					<p>
						Esta página ha sido hecha usando React + Typescript a modo de
						ejemplo para escritorio y móvil, por lo que la funcionalidad es
						limitada.
					</p>
					<p>
						Si bien se adoptó el "mobile first approach", en algunos casos en
						los que el formato por defecto (o heredado) se condecía con la
						versión de escritorio, se optó por crear un media query que afecte
						únicamente a la versión móvil, en lugar de crear un estilo que
						afecte a ambas versiones y luego deba ser sobreescrito en la versión
						de escritorio.
					</p>

					<p>
						Los modelos que se reproducen se pueden{" "}
						<a href={disenos} download="disenos.zip">
							descargar en formato zip
						</a>
						.
					</p>
				</div>

				<Button
					label="Cerrar"
					onClick={handleModalClose}
					additionalClass="btn-black"
				/>
			</dialog>
			<NavBar items={items} />
			<Main />
		</>
	);
}

export default App;
