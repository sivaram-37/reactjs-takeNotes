import Heading from "./components/Heading";
import Main from "./components/Main";
import { NoteProvider } from "./contexts/NoteProvider";

export default function App() {
	return (
		<div>
			<NoteProvider>
				<Heading />
				<Main />
			</NoteProvider>
		</div>
	);
}
