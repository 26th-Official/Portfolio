import React, { useEffect, useRef, useState } from "react";
import {
	useGLTF,
	PresentationControls,
	Environment,
	Html,
} from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollTrigger, gsap } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const SkillsComponent = () => {
	let HexagonScale = 0.8;

	// ================ Scroll Transistions=====================

	// useEffect(() => {
	// 	gsap.fromTo(
	// 		"#SkillSection",
	// 		{
	// 			opacity: 0,
	// 		},
	// 		{
	// 			opacity: 1,
	// 			scrollTrigger: {
	// 				trigger: "#Section_B",
	// 				markers: true,
	// 				scrub: true,
	// 				start: "center 90%",
	// 				end: "center 50%",
	// 			},
	// 		}
	// 	);

	// 	gsap.to("#FrontEndSkills", {
	// 		x: -800,
 	// 		scrollTrigger: {
	// 			trigger: "#Section_B",
	// 			markers: true,
	// 			scrub: true,
	// 			start: "center 30%",
	// 			end: "center top",
	// 		},
	// 	});

	// 	gsap.fromTo("#BackEndSkills",
	// 	{
	// 		x: 800,
	// 	},
	// 	{
	// 		x: 0,
	// 		scrollTrigger: {
	// 			trigger: "#Section_B",
	// 			markers: true,
	// 			scrub: true,
	// 			start: "center 30%",
	// 			end: "center top",
	// 		},
	// 	});

	// }, []);

	// ==========================================================

	function Hexagon3D(props) {
		const { nodes, materials } = useGLTF("/Model/Hexagon.gltf");
		const HexagonAnim = useRef();
		const [Hover, setHover] = useState(false);

		useFrame(({ mouse }) => {
			if (Hover) {
				const { x, y } = mouse;
				HexagonAnim.current.rotation.x += y * 0.05;
				HexagonAnim.current.rotation.y += x * 0.05;
			}
		});

		return (
			<group
				ref={HexagonAnim}
				onPointerEnter={() => setHover(true)}
				onPointerLeave={() => {
					setHover(false);
					gsap.to(HexagonAnim.current.rotation, {
						duration: 1,
						x: Math.PI / 2,
						y: 0,
						z: 0,
					});
				}}

				position={
					props.position
						? [
								props.position[0] * HexagonScale,
								props.position[1] * HexagonScale,
								props.position[2] * HexagonScale,
						  ]
						: [0, 0, 0]
				}
				rotation={[Math.PI / 2, 0, 0]}
				scale={props.scale ? props.scale : 1}
				dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder_1.geometry}
					material-color={props.MainColor}
					material={materials.MainColor}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cylinder_2.geometry}
					material-color={props.BorderColor}
					material={materials.BorderColor}
				/>
				<Html
					pointerEvents="none"
					occlude
					transform
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, 0.18, 0]}>
					<div className="flex flex-col justify-center items-center pointer-events-none">
						<i className={props.ImageClass}></i>
						<h2 className="text-[7px] leading-[5px]">
							{props.text}
						</h2>
					</div>
				</Html>
			</group>
		);
	}

	return (
		<div
			id="SkillSection"
			className="w-[100vw] h-[100vh] bg-c_main p-[62px]">
				
			<div className="h-[90%] w-[600px]">
				<div id="FrontEndSkills" className="w-[100%] h-[100%]">
					<Canvas
						position={[0, 0, 0]}
						orthographic
						camera={{ zoom: 100 }}
						resize={false}
						shadows>
						<Environment castshadow preset="dawn" />
						<PresentationControls
							config={{ mass: 2, tension: 500 }}
							snap={{ mass: 5, tension: 1500 }}>
							<Hexagon3D
								scale={HexagonScale}
								text="JavaScript"
								ImageClass="fab fa-js text-3xl text-yellow-400"
								MainColor="orange"
								BorderColor="orange"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[2.1, 0, 0]}
								text="HTML"
								ImageClass="fab fa-html5 text-3xl text-orange-600"
								MainColor="orange"
								BorderColor="orange"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[-2.1, 0, 0]}
								text="CSS"
								ImageClass="fab fa-css3-alt text-3xl text-blue-600"
								MainColor="orange"
								BorderColor="orange"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[-1.05, -1.8, 0]}
								text="React"
								ImageClass="fab fa-css3-alt text-3xl text-blue-600"
								MainColor="orange"
								BorderColor="orange"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[1.05, -1.8, 0]}
								text="React"
								ImageClass="fab fa-react text-3xl text-cyan-400"
								MainColor="orange"
								BorderColor="orange"
							/>
						</PresentationControls>
					</Canvas>
				</div>

				<div id="BackEndSkills" className="w-[100%] h-[100%] hidden">
					<Canvas
						orthographic
						camera={{ zoom: 100 }}
						resize={false}
						shadows>
						<Environment castshadow preset="dawn" />
						<PresentationControls
							config={{ mass: 2, tension: 500 }}
							snap={{ mass: 5, tension: 1500 }}>
							<Hexagon3D
								scale={HexagonScale}
								text="Python"
								ImageClass="fab fa-js text-3xl text-yellow-400"
								MainColor="red"
								BorderColor="red"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[2.1, 0, 0]}
								text="Node JS"
								ImageClass="fab fa-html5 text-3xl text-orange-600"
								MainColor="red"
								BorderColor="red"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[-2.1, 0, 0]}
								text="CSS"
								ImageClass="fab fa-css3-alt text-3xl text-blue-600"
								MainColor="red"
								BorderColor="red"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[-1.05, -1.8, 0]}
								text="React"
								ImageClass="fab fa-css3-alt text-3xl text-blue-600"
								MainColor="red"
								BorderColor="red"
							/>
							<Hexagon3D
								scale={HexagonScale}
								position={[1.05, -1.8, 0]}
								text="React"
								ImageClass="fab fa-react text-3xl text-cyan-400"
								MainColor="red"
								BorderColor="red"
							/>
						</PresentationControls>
					</Canvas>
				</div>
			</div>
		</div>
	);
};

export default SkillsComponent;
