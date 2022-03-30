import { useState } from 'react';

const Icons = ({ icon, iconOn, iconOff }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<div onClick={() => setToggle(!toggle)}>
			{icon}
			<span>{toggle ? iconOn : iconOff}</span>
		</div>
	);
};

export default Icons;
