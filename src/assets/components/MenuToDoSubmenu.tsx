import toDoInfo from "../ToDoInfo";
import Submenu from "./Submenu";

interface Props {
	isExpanded: boolean;
}

const MenuToDoSubmenu = ({ isExpanded }: Props) => {
	return <Submenu info={toDoInfo} isExpanded={isExpanded} />;
};

export default MenuToDoSubmenu;
