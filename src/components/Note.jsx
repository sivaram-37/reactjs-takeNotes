/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

export default function Note({ note, setNotes }) {
	const [showSummary, setShowSummary] = useState(false);

	function handleDelete() {
		window.confirm(`Do you want to delete this note : ${note.title} ?`) &&
			setNotes((notes) => notes.filter((cur) => cur.id !== note.id));
	}

	return (
		<li className="note" onClick={() => setShowSummary((show) => !show)}>
			<div className="note-element">
				<div className="note-element__info">
					<h1>{note.title}</h1>
				</div>

				<div className="note-element__btn">
					<Button className="note-btn del" onClick={handleDelete}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="22px"
							viewBox="0 -960 960 960"
							width="28px"
							fill="#000"
						>
							<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
						</svg>
					</Button>
				</div>
			</div>

			{showSummary && <p>{note.summary}</p>}
		</li>
	);
}
