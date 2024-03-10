import "./Button.css";

interface Props {
	label: string;
	additionalClass?: string;
	onClick?: () => void;
}

const Button = ({ label, additionalClass, onClick }: Props) => {
	return (
		<button onClick={onClick} className={`pointer ${additionalClass}`}>
			{label}
		</button>
	);
};

export default Button;
