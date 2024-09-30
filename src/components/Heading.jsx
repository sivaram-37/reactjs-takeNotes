import NumResult from "./NumResult";
import SearchBar from "./SearchBar";

export default function Heading() {
	return (
		<header>
			<h1>📝NOTEBOOK</h1>
			<SearchBar />
			<NumResult />
		</header>
	);
}
