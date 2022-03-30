import ChannelsBar from './components/ChannelsBar';
import SideBar from './components/SideBar';
import Chat from './components/Chat';

function App() {
	return (
		<div className="flex">
			<SideBar />
			<ChannelsBar />
			<Chat />
		</div>
	);
}

export default App;
