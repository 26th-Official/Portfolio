import React, { useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Tilt from "react-parallax-tilt";
import { Html } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

import ModelComponent from "./SubComponents/ModelComponent";
import styles from "./CSS/LandingComponent.module.css"

const LandingComponent = (props) => {
	
	// -----------------Scroll transitions---------------------

	useEffect(() => {
		gsap.fromTo(
			"#landingSection",
			{
				opacity: 1,
			},
			{
				opacity: 0,
				scrollTrigger: {
					trigger: "#Section_B",
					scrub: true,
					start: "top bottom",
					end: "center center",
					markers: true,
				},
			}
		);
	});

	// ------------------------------------------------------

	return (
		<div className="bg-c_main w-[100vw] h-[100vh] p-[68px] pr-7 relative">
			<div className="flex-col justify-center items-center px-6 pt-16 text-center flex-wrap">
				<div className="flex justify-center items-center flex-wrap">
					<h5
						className={`${styles.Neon_Text} text-8xl font-Delicious font-semibold z-[1] p-2 bg-clip-text bg-gradient-to-l from-c_red to-c_orange`}>
						UNLEASH DISRUPTIVE INNOVATION
					</h5>
				</div>
				<br />
				<div className="flex justify-center items-center">
					<h5 className="text-xl leading-8 w-[75%] z-[1] text-c_text">
						<span className="text-c_yellow drop-shadow-['5px 5px 5px #ffffff']">I'm Sairam</span> — The Amalgamation
						of Creativity and Technology. As both a Skilled
						Developer and Visionary 3D Artist, I bring Imagination
						to Life through Captivating Experiences. Prepare to be
						Amazed as I merge Technical Expertise with Artistic
						Finesse.
					</h5>
				</div>
				<br />
				<div className="flex justify-center items-center">
					<div className="w-[130px] h-[40px] m-3 rounded-md bg-white border flex justify-center items-center text-black"> Contact Me</div>
					<div className="w-[130px] h-[40px] m-3 rounded-md bg-white border flex justify-center items-center text-black"> See My Works</div>		
				</div>
			</div>

			{/* <div className="absolute top-0 right-[0] h-[100vh] w-[650px] flex items-center justify-center">
				<ModelComponent
					scale={0.01}
					position={[0, -1.5, 0]}
					height={"800px"}
					width={"100vw"}
				/>
			</div> */}
		</div>
	);
};

export default LandingComponent;
