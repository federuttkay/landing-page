import "./Button.css";

interface Props {
	label: string;
}

const ButtonNoBorder = ({ label }: Props) => {
	return <button className="pointer no-border">{label}</button>;
};

export default ButtonNoBorder;
