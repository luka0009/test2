// import ReactPlayer from "react-player";
// import hot_dog from "../../../videos/hot_dog.mp4";
import ReactPlayer from "react-player";
import documentary from "../../videos/full_doc.mp4";
import { useState } from "react";

const Video = () => {
	const [hasAgreed, setHasAgreed] = useState<boolean>(false);
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleAgreeClick = () => {
		if (isChecked) {
			setHasAgreed(true);
		} else {
			alert("You must agree to just 1 (one) condition before proceeding.");
		}
	};

	return (
		<div className="video-wrapper">
			{!hasAgreed ? (
				<div className="dialog">
					<h2>An Oath to the Boys: Video for Memories Only</h2>
					<p style={{ fontWeight: "bolder" }}>
						{
							"Please agree to just 1 (one) condition before downloading the video"
						}
					</p>
					<p>
						"As a proud member of the legendary boys' night crew, I vow to
						protect the glory and sacred secrets of the evening.
					</p>
					<p>
						I solemnly swear that the video will be reserved solely for my
						personal enjoyment, serving as a reminder of the epic experience
						with my fellow legends.
					</p>
					<p>
						I, hereby agree that No human being without penis will see this
						video from me."
					</p>

					<div>
						<input
							type="checkbox"
							id="agree-checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<label htmlFor="agree-checkbox">
							{" "}
							I agree to the terms and conditions
						</label>
					</div>
					<button onClick={handleAgreeClick}>Agree</button>
				</div>
			) : (
				<>
					<ReactPlayer url={documentary} controls={true} />
					{/* <div className="download-container">
						<a href={documentary} download="full_doc.mp4">
							<button>Download Video</button>
						</a>
					</div> */}
				</>
			)}
		</div>
	);
};

export default Video;

{
	/* <ReactPlayer
			url={documentary}
			controls={true}
			config={{
				file: {
					tracks: [
						{
							kind: "subtitles",
							src: "subs/subs.vtt",
							srcLang: "en",
							default: true,
							label: "English Subtitles",
						},
					],
				},
			}}
		/> */
}
