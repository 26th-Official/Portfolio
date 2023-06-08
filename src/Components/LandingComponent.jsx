import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

import styles from "./CSS/LandingComponent.module.css";

const LandingComponentContent = (props) => {
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
					end: "top center",
					markers: true,
				},
			}
		);
	});

	// ------------------------------------------------------

	return (
			<div className="bg-c_main w-[100vw] h-[100vh] p-[68px] pr-7 relative">
				<div
					id="landingSection"
					className="flex-col justify-center items-center px-6 pt-16 text-center flex-wrap">
					<div className="flex justify-center items-center flex-wrap">
						<h5
							className={`${styles.Neon_Text} text-8xl font-Delicious font-semibold z-[1] p-2 bg-clip-text bg-gradient-to-l from-c_red to-c_orange`}>
							UNLEASH DISRUPTIVE INNOVATION
						</h5>
					</div>
					<br />
					<div className="flex justify-center items-center">
						<h5 className="text-xl leading-8 w-[75%] z-[1] text-c_text">
							<span className="text-c_yellow drop-shadow-['5px 5px 5px #ffffff']">
								I'm Sai
							</span>{" "}
							— The Amalgamation of Creativity and Technology. As both
							a Skilled Developer and Visionary 3D Artist, I bring
							Imagination to Life through Captivating Experiences.
							Prepare to be Amazed as I merge Technical Expertise with
							Artistic Finesse.
						</h5>
					</div>
					<br />
					<div className="flex justify-center items-center">
						<div className="w-[130px] h-[40px] m-3 rounded-md bg-white border flex justify-center items-center text-black">
							{" "}
							Contact Me
						</div>
						<a href="">
							<div className="w-[130px] h-[40px] m-3 rounded-md bg-white border flex justify-center items-center text-black">
								{" "}
								See My Works
							</div>
						</a>
					</div>
				</div>
			</div>
	);
};

const LandingComponent = (props) => {
	const land =useRef()

	useEffect(() => {
		gsap.to(
			land.current,
			{
				rotation: [0, 50, 0],
				scrollTrigger: {
					trigger: "#Section_B",
					scrub: true,
					start: "top bottom",
					end: "top center",
					markers: true,
				}
			}
		)
	}, []);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas style={{ position: "absolute" }}>
				<Html ref={land} rotation={[0, 0, 0]} scale={0.4} transform fullscreen>
					<LandingComponentContent />
				</Html>
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	);
};

export default LandingComponent;
