import ChatNavigation from './ChatNavigation';
import { BsPlusCircleFill, BsFillEmojiLaughingFill } from 'react-icons/bs';
import { AiOutlineGif } from 'react-icons/ai';
import MembersList from './MembersList';
import Icons from './Icons';

const Chat = () => {
	return (
		<div className="chat-container">
			<ChatNavigation />
			<ChatContent />
		</div>
	);
};

const ChatContent = () => {
	return (
		<div className="chat-content">
			<div className="message-container">
				<ChatList />
				<div className="dark:bg-gray-500 bg-white">
					<ChatInput />
				</div>
			</div>
			<MembersList />
		</div>
	);
};

const ChatList = () => {
	return (
		<div className="chat-list scrollbar">
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
		</div>
	);
};

const Message = () => {
	const seed = Math.round(Math.random() * 100);
	return (
		<div className="message">
			<div className="message-avatar-wrapper">
				<img
					src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
					alt=""
					className="message-avatar"
				/>
			</div>

			<div className="message-content">
				<p className="message-owner">
					Patrick
					<span className="message-timestamp">5 Days ago</span>
				</p>
				<p className="message-text">
					i bought this prebuilt its it was on sale for 1500 at the time i am
					able to play cyber punk at max setting mwithout issue i bought this
					prebuilt its it was on sale for 1500 at the time i am able to play
					cyber punk at max setting mwithout issue
				</p>
			</div>
		</div>
	);
};

const ChatInput = () => {
	return (
		<div className="chat-input-container">
			<Icons
				icon={
					<BsPlusCircleFill
						size="22"
						className="ml-2 mr-4 dark:text-gray-450 cursor-pointer dark:hover:text-gray-200 text-gray-550 hover:text-gray-800"
					/>
				}
			/>
			<input type="text" placeholder="Message #react" className="chat-input" />
			<Icons
				icon={
					<AiOutlineGif
						size="24"
						className="ml-4 dark:bg-gray-450 dark:text-gray-600 rounded bg-gray-550 text-gray-200 p-0.5 cursor-pointer dark:hover:bg-gray-200 hover:bg-gray-800"
					/>
				}
			/>
			<Icons
				icon={
					<BsFillEmojiLaughingFill
						size="22"
						className="ml-4 dark:hover:text-gray-200 dark:text-gray-450 cursor-pointer text-gray-550 hover:text-gray-800"
					/>
				}
			/>
		</div>
	);
};

export default Chat;
