import { useEffect, useState } from "react";
import { ScrollTrigger, gsap } from "gsap/all";

import "./App.css";
import LandingComponent from "./Components/LandingComponent";
import MenuComponent from "./Components/MenuComponent";
import EnteringComponent from "./Components/EnteringComponent";

function App() {
	const [Menu, setMenu] = useState(false);
	const [MainPage, setMainPage] = useState(false);

	// ------------------------------------------------------
	// React hook for opening animation of menu
	useEffect(() => {
		if (Menu) {
			gsap.fromTo(
				"#MenuComponent",
				{
					x: -1000,
				},
				{
					x: 0,
					duration: 0.5,
					ease: "power2.out",
					onStart: () => {
						gsap.to("#MenuBackdrop", {
							delay: 0.3,
							visibility: "visible",
							duration: 0.01,
						});
					},
				}
			);
		}
	});

	// function for doing the Menu close animation and setting
	// the menu state to false
	function MenuHandler() {
		gsap.fromTo(
			"#MenuComponent",
			{
				x: 0,
			},
			{
				x: -1000,
				duration: 0.5,
				ease: "power2.out",
				onComplete: () => {
					setMenu(false);
				},
			}
		);
	}
	// -----------------Scroll transitions---------------------

	// ------------------------------------------------------
	const Dummy_Styles = {
		height: "100vh",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "50px",
		color: "white",
		borderWidth: "10px 0px 10px 0px",
		borderColor: "red",
	};
	// ------------------------------------------------------
	// Entering page animation function as well as for turning the Main`Page state to true
	function EnteringPageAnim(status) {
		gsap.fromTo(
			"#EnteringButton",
			{
				fontSize: "3vmax",
			},
			{
				fontSize: "8vmax",
				duration: 1.5,
			}
		);

		gsap.fromTo(
			"#EnteringButtonContainer",
			{
				opacity: 1,
			},
			{
				opacity: 0,
				duration: 1,
				onComplete: () => {
					gsap.fromTo(
						"#MainPage",
						{
							opacity: 0,
						},
						{
							opacity: 1,
							duration: 1,
							onStart: () => {
								setMainPage(status);
							},
						}
					);
				},
			}
		);
	}

	return (
		<div>
			{/* This displays the entering page when the MainPage state is false and when the "Enter" button
				is clicked it turns the MainPage stqte to true and display the contents of the Website */}
				
			{!MainPage ? (
				// Entering page content
				<div className="w-[100vw] h-[100vh] flex justify-center items-center">
					<EnteringComponent MainPageStatus={EnteringPageAnim} />
				</div>
			) : (
				// Main Webpage content				
				<div id="MainPage" className=" h-[100vh] ">
					{/* main border for the website */}
					<div className="fixed p-5 h-[100vh] w-[99vw] z-[100] pointer-events-none">
						<div className="border-c_border h-[100%] p-10 pr-0 pb-0 border-2 rounded-lg">
							<div className="h-[100%] border-c_border border-r-0 border-b-0 border-2"></div>
						</div>

						{/* it sets the Menu state to true */}
						<i
							onClick={() => {
								setMenu(true);
							}}
							className="fas fa-bars-staggered absolute pointer-events-auto bg-c_sub top-0 left-0 m-5 p-[11.6px] leading-[16.5px] text-base rounded-tl-lg border-2 border-white
		  hover:bg-white hover:text-c_main"></i>
					</div>

					{/* Menu button with Close Menu prop which switches the Menu state to false */}
					{Menu && (
						<div id="MenuComponent" className="fixed z-[100]">
							<MenuComponent CloseMenu={MenuHandler} />
						</div>
					)}

					{/* =================================== */}
					<div className="">
						<div id="landingSection" className="fixed opacity-50">
							<LandingComponent />
						</div>
					</div>

					{/* dummy sections for the scroll trigger */}
					<section id="Section_A" style={{ ...Dummy_Styles }}>
						Section_A
					</section>
					<section
						id="Section_B"
						style={{ ...Dummy_Styles, borderColor: "blue" }}>
						Section_B
					</section>
					<section
						id="Section_C"
						style={{ ...Dummy_Styles, borderColor: "green" }}>
						Section_C
					</section>
					<section
						id="Section_D"
						style={{ ...Dummy_Styles, borderColor: "yellow" }}>
						Section_D
					</section>
				</div>
			)}
		</div>
	);
}

export default App;
