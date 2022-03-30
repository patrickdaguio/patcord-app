import { FaSearch, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { BiHash } from 'react-icons/bi';
import { MdPeopleAlt } from 'react-icons/md';
import { BsFillBellFill } from 'react-icons/bs';
import Icons from './Icons';
import useDarkMode from '../hooks/useDarkMode';

const ChatNavigation = () => {
	return (
		<div className="top-navigation">
			<Icons icon={<BiHash size="32" className="title-hashtag" />} />
			<h5 className="title-text">react</h5>
			<ThemeIcon />
			<Icons
				icon={<BsFillBellFill size="24" className="top-navigation-icon" />}
				iconOn="Turn On Notifications"
				iconOff="Turn Off Notifications"
			/>
			<Icons
				icon={<MdPeopleAlt size="26" className="top-navigation-icon" />}
				iconOn="Show Members List"
				iconOff="Hide Members List"
			/>
			<Search />
			<Icons
				icon={
					<FaUserCircle
						size="26"
						className="top-navigation-icon"
						iconOn="Sign Out"
					/>
				}
			/>
		</div>
	);
};

const ThemeIcon = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	return (
		<div onClick={() => setDarkTheme(!darkTheme)}>
			{darkTheme ? (
				<FaSun size="24" className="top-navigation-icon" />
			) : (
				<FaMoon size="24" className="top-navigation-icon" />
			)}
			<span>{!darkTheme ? 'Dark mode' : 'Light mode'}</span>
		</div>
	);
};

const Search = () => (
	<div className="search">
		<input className="search-input" type="text" placeholder="Search" />
		<FaSearch size="18" className="text-secondary my-auto" />
	</div>
);

export default ChatNavigation;
