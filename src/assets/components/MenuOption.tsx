import "./MenuOption.css";

interface Props {
	image?: string;
	children: string;
}

const MenuOption = ({ image, children }: Props) => {
	return (
		<li
			className={
				"menu-item" + (image ? " menu-item-w-image" : " menu-item-wo-image")
			}
		>
			<img className="item-image" src={image} />
			<a href="#">
				<span className="submenu-option">{children}</span>
			</a>
		</li>
	);
};

export default MenuOption;
