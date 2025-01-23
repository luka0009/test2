// import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import carol from "../music/oh_carol.mp3";
// import november_rain from "../music/November_Rain_2022.mp3";
// import isaac_delusion from "../music/isaac_delusion.mp3";
// import succession_lofi from "../music/succession_lofi.mp3";
// import next_door_to_alice from "../music/next_door_to_alice.mp3";
// import move_on from "../music/move_on.mp3";
import "./App.css";
import Video from "./components/video";

function App() {
	return (
		<>
			<div className="video-container">
				<Video />
			</div>

			{/* <div className="container">
				
				<div className="card">
					<span>Oh carol </span>
					<AudioPlayer
						autoPlay
						src={carol}
						onPlay={() => console.log("onPlay")}
						style={{ width: "500px", marginTop: "5px" }} // other props here
					/>
				</div>
				<div className="card">
					<span>November rain </span>
					<AudioPlayer
						autoPlay
						src={november_rain}
						onPlay={() => console.log("onPlay")}
						style={{ width: "500px", marginTop: "5px" }} // other props here
					/>
				</div>
				<div className="card">
					<span>Succesion theme - lofi </span>
					<AudioPlayer
						autoPlay
						src={succession_lofi}
						onPlay={() => console.log("onPlay")}
						style={{ width: "500px", marginTop: "5px" }} // other props here
					/>
				</div>
				<div className="card">
					<span>Isaac Delusion — Couleur menthe à l'eau </span>
					<AudioPlayer
						autoPlay
						src={isaac_delusion}
						onPlay={() => console.log("onPlay")}
						style={{ width: "500px", marginTop: "5px" }} // other props here
					/>
				</div>
				<div className="card">
					<span>Next door to alice </span>
					<AudioPlayer
						autoPlay
						src={next_door_to_alice}
						onPlay={() => console.log("onPlay")}
						style={{ width: "500px", marginTop: "5px" }} // other props here
					/>
				</div>
				<div className="card">
					<span>Moving on </span>
					<AudioPlayer
						autoPlay
						src={move_on}
						onPlay={() => console.log("onPlay")}
						style={{ width: "500px", marginTop: "5px" }} // other props here
					/>
				</div>
			</div> */}
		</>
	);
}

export default App;
