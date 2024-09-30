import { useNoteContext } from "../contexts/NoteProvider";
import Button from "./Button";
import FormAddNote from "./FormAddNote";

export default function Actions() {
	const { showAddNote, setShowAddNote } = useNoteContext();

	return (
		<div className="actions">
			{showAddNote ? (
				<>
					<FormAddNote />

					<Button
						className="btn close-btn"
						onClick={() => setShowAddNote((show) => !show)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="36px"
							viewBox="0 -960 960 960"
							width="36px"
							fill="#222"
						>
							<path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
						</svg>
					</Button>
				</>
			) : (
				<Button className="btn open-btn" onClick={() => setShowAddNote((show) => !show)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="36px"
						viewBox="0 -960 960 960"
						width="36px"
						fill="#222"
					>
						<path d="M448.67-280h66.66v-164H680v-66.67H515.33V-680h-66.66v169.33H280V-444h168.67v164Zm31.51 200q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
					</svg>
				</Button>
			)}
		</div>
	);
}
