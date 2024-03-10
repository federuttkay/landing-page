import logo from "../images/logo.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import "./NavBar.css";
import { useState } from "react";
import Button from "./Button";
import ButtonNoBorder from "./ButtonNoBorder";
import MenuToDoSubmenu from "./MenuToDoSubmenu";
import MenuCompanySubmenu from "./MenuCompanySubmenu";
import iconClose from "../images/icon-close-menu.svg";
import iconHamburguer from "../images/icon-menu.svg";

interface NavItemProps {
	name: string;
	hasArrow: boolean;
}

interface Props {
	items: NavItemProps[];
}

const NavBar = ({ items }: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="nav flex flex-between">
			<div className="nav-content flex flex-gap-3">
				<img src={logo} />
				<img
					className="menu-hamburguer pointer"
					src={isMenuOpen ? iconClose : iconHamburguer}
					alt="open menu"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>
				<ul
					className={
						"menu-options flex flex-gap-2" + (isMenuOpen ? "" : " closed-menu")
					}
				>
					{items.map((item, index) => (
						<li key={index}>
							<div
								className="menu-title flex flex-gap-04 pointer"
								onClick={() =>
									selectedIndex === index
										? setSelectedIndex(-1)
										: setSelectedIndex(index)
								}
							>
								<span>{item.name}</span>
								{item.hasArrow && (
									<img
										className="menu-option-arrow"
										src={selectedIndex === index ? arrowDown : arrowUp}
									/>
								)}
								{/* Menus secundario */}
								{item.name === "Features" && (
									<MenuToDoSubmenu isExpanded={selectedIndex === index} />
								)}
								{item.name === "Company" && (
									<MenuCompanySubmenu isExpanded={selectedIndex === index} />
								)}
								{/* Menus secundario */}
							</div>
						</li>
					))}
					<li className="login-register-buttons flex flex-gap-1">
						<ButtonNoBorder label="Login" />
						<Button label="Register" />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
