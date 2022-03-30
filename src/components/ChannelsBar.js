import { useState } from 'react';
import { BiHash } from 'react-icons/bi';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const ChannelsBar = () => {
	const languages = [
		'react',
		'javascript',
		'java',
		'html',
		'css',
		'python',
		'rust',
		'swift',
		'vue',
		'angular',
		'kotlin',
		'golang',
		'php'
	];
	const projects = [
		'patcord',
		'outset',
		'snazzle',
		'ecclesia',
		'patcord',
		'bestdeals'
	];
	const ideas = ['cinema-chat', 'ecommerce'];
	const questions = ['algorithms', 'data-structures', 'interviews'];

	return (
		<div className="channel-bar">
			<ChannelName name={'Coding'} />
			<div className="channel-container scrollbar-2">
				<Dropdown header="📝 LANGUAGES" channels={languages} />
				<Dropdown header="📽 PROJECTS" channels={projects} />
				<Dropdown header="💭 IDEAS" channels={ideas} />
				<Dropdown header="❔ QUESTIONS" channels={questions} />
			</div>
		</div>
	);
};

const Dropdown = ({ header, channels }) => {
	const [expanded, setExpanded] = useState(true);
	return (
		<div className="dropdown">
			<div className="dropdown-header">
				<ChevronIcon expanded={expanded} />
				<h5 className="dropdown-header-text">{header}</h5>
				<FaPlus
					size="12"
					className="text-accent text-opacity-80 my-auto ml-auto"
				/>
			</div>
			{channels.map((channel, i) => (
				<TextChannel channel={channel} key={i} />
			))}
		</div>
	);
};

const ChevronIcon = ({ expanded }) => {
	const chevClass = 'text-opacity-80 my-auto mr-1';
	return expanded ? (
		<FaChevronDown size="11" className={chevClass} />
	) : (
		<FaChevronRight size="11" className={chevClass} />
	);
};

const TextChannel = ({ channel }) => {
	return (
		<div
			className={
				channel === 'react'
					? 'dropdown-selection dropdown-selected'
					: 'dropdown-selection'
			}>
			<BiHash size="22" className="text-gray-300" />
			<h5 className="dropdown-selection-text">{channel}</h5>
		</div>
	);
};

const ChannelName = ({ name }) => {
	return (
		<div className="channel-header">
			<h5 className="channel-header-text">{name}</h5>
		</div>
	);
};

export default ChannelsBar;
