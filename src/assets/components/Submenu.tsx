import MenuOption from "./MenuOption";
import "./Submenu.css";

interface itemProps {
	image?: string;
	name: string;
}

interface Props {
	info: itemProps[];
	isExpanded: boolean;
}

const Submenu = ({ info, isExpanded }: Props) => {
	return (
		<div className={"submenu-container" + (isExpanded ? " expanded" : "")}>
			<div>
				<ul className="submenu">
					{info.map((element, index) => (
						<MenuOption image={element.image} key={index}>
							{element.name}
						</MenuOption>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Submenu;
