/* eslint-disable react/prop-types */
export default function Button({ className = "", children, onClick }) {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
}
