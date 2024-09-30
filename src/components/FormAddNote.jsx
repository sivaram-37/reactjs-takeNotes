import { useState } from "react";
import { useNoteContext } from "../contexts/NoteProvider";
import Button from "./Button";

export default function FormAddNote() {
	const { setNotes, setShowAddNote } = useNoteContext();

	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!title || !summary) return;

		const newNotes = {
			title,
			summary,
			id: crypto.randomUUID(),
		};

		setNotes((note) => [...note, newNotes]);
		setShowAddNote(false);
	}

	return (
		<form className="form-add-note" onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				className="text"
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<label>Summary</label>
			<textarea
				rows={10}
				className="textarea"
				type="text"
				value={summary}
				onChange={(e) => setSummary(e.target.value)}
			/>

			<div className="box-btn">
				<Button className="btn addnotes-btn">ADD</Button>
			</div>
		</form>
	);
}
