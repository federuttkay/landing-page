import companyInfo from "../CompanyInfo";
import Submenu from "./Submenu";

interface Props {
	isExpanded: boolean;
}

const MenuCompanySubmenu = ({ isExpanded }: Props) => {
	return <Submenu info={companyInfo} isExpanded={isExpanded} />;
};

export default MenuCompanySubmenu;
