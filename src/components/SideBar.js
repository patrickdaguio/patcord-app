import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaProductHunt, FaLaptopCode } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { IoPerson } from 'react-icons/io5';
import { CgGames } from 'react-icons/cg';

const SideBar = () => {
	return (
		<div className="sidebar-container">
			<SideBarIcon icon={<FaProductHunt size="28" />} text="Home" />
			<Divider />
			<SideBarIcon
				icon={<FaLaptopCode size="24" />}
				text="Coding"
				selected={true}
			/>
			<SideBarIcon icon={<GiWeightLiftingUp size="24" />} text="Fitness" />
			<SideBarIcon icon={<CgGames size="26" />} text="Games" />
			<SideBarIcon icon={<IoPerson size="24" />} text="Personal" />
			<SideBarIcon icon={<BsPlus size="32" />} text="Add a Server" />
			<Divider />
			<SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
		</div>
	);
};

const SideBarIcon = ({ icon, text, selected }) => {
	return (
		<div
			className={
				selected ? 'sidebar-icon group sidebar-selected' : 'sidebar-icon group'
			}>
			{icon}
			<span className="sidebar-tooltip group-hover:scale-100">{text}</span>
		</div>
	);
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
