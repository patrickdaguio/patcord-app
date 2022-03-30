const MembersList = () => {
	return (
		<div className="members-list scrollbar-2">
			<div className="members-online">
				<h4 className="members-heading">Online</h4>
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
				<Member status={true} />
			</div>
			<div className="members-offline">
				<h4 className="members-heading">Offline</h4>
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
				<Member status={false} />
			</div>
		</div>
	);
};

const Member = ({ status }) => {
	const seed = Math.round(Math.random() * 100);

	return (
		<div className={status ? 'member member-online' : 'member member-offline'}>
			<img
				src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
				alt=""
				className="member-avatar"
			/>
			<p className="member-name">Patrick</p>
		</div>
	);
};

export default MembersList;
