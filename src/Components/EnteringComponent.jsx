import { gsap } from "gsap";

import styles from "./CSS/EnteringComponent.module.css";
import { useEffect } from "react";

const EnteringComponent = (props) => {
	// This hook is to make gsap animation for the entering page button
	useEffect(() => {
		gsap.fromTo(
			"#EnteringButton",
			{
				fontSize: "0vmax",
			},
			{
				fontSize: "3vmax",
				duration: 1.5,
			}
		);

		gsap.fromTo(
			"#EnteringButtonContainer",
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 2,
			}
		);
	}, []);

	return (
		<div
			id="EnteringButtonContainer"
			// This send the MainPage state to the App.jsx
			onClick={() => {
				props.MainPageStatus(true);
			}}>
			<button id="EnteringButton" className={`${styles.glowing_btn}`}>
				<span className={`${styles.glowing_txt}`}>
					E<span className={`${styles.faulty_letter}`}>N</span>TER
				</span>
			</button>
		</div>
	);
};

export default EnteringComponent;
