import { useNoteContext } from "../contexts/NoteProvider";
import Note from "./Note";

export default function NoteList() {
	const { notes, setNotes, searchInp } = useNoteContext();

	return (
		<ul className="note-list container">
			{notes.length === 0 ? (
				<h2 style={{ textAlign: "center" }}>Add Notes to display here!!!</h2>
			) : (
				notes.map(
					(note) =>
						note.title.includes(searchInp) && (
							<Note setNotes={setNotes} note={note} key={note.id} />
						)
				)
			)}
		</ul>
	);
}
