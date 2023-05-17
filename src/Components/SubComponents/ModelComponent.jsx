import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, PresentationControls, Loader, Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

import styles from "./CSS/ModelComponent.module.css";

function Robot(props) {
	const group = useRef(null);
	const { nodes, materials, animations } = useGLTF("./Model/Manniquin.gltf");

	// ref for gsap animation of 3d model
	const ModelProps = useRef(null);

	// AnimationVar contain the animation clip number which needs to be played
	const [AnimationVar, setAnimationVar] = useState(1);

	// For the model animation and "names" indicate the animation clips inside the gltf model
	const { actions, names } = useAnimations(animations, group);

	useEffect(() => {
		actions[names[AnimationVar]].play();
	}, [AnimationVar]);

	return (
		<group ref={group} dispose={null}>
			<group name="Scene">
				{/* Initiating a ref "ModelProps" to control scale and position animation with gsap */}
				<group
					ref={ModelProps}
					name="Armature"
					rotation={[Math.PI / 2, 0, Math.PI]}
					{...props}>
					<primitive object={nodes.mixamorigHips} />
					<skinnedMesh
						castShadow
						receiveShadow
						name="Alpha_Joints"
						geometry={nodes.Alpha_Joints.geometry}
						material={materials.Alpha_Joints_MAT}
						skeleton={nodes.Alpha_Joints.skeleton}
					/>
					<skinnedMesh
						castShadow
						receiveShadow
						name="Alpha_Surface"
						geometry={nodes.Alpha_Surface.geometry}
						material={materials.Alpha_Body_MAT}
						skeleton={nodes.Alpha_Surface.skeleton}
					/>
				</group>
			</group>
		</group>

		// ================
	);
}

// loading screen for the 3d model
function LoadingScreen() {
	return (
		<div className="absolute z-30">
			<div className={styles.Loading_ring}></div>
		</div>
	);
}

export default function ModelComponent(props) {
	// Check if model loaded or not
	const [loaded, setloaded] = useState(false);

	return (
		<div className="flex justify-center items-center">
			{/* display the loading screen if the model is not loaded */}
			{loaded == false && <LoadingScreen />}

			<Canvas
				shadows
				receiveShadow
				onCreated={() => {
					// it sets the "loaded" state to true to make the loading animation stop
					setloaded(true);
				}}
				style={{ height: props.height, width: props.width }}
				dpr={[1, 2]}
				camera={{ fov: 45 }}>
				<PresentationControls
					snap
					rotation={[0, Math.PI, 0]}
					global
					polar={[0, 0]}
					azimuth={[-Math.PI / 2, Math.PI / 2]}>
					<Environment castShadow background={false} preset="dawn" />
					<Robot {...props}/>
				</PresentationControls>
			</Canvas>
		</div>
	);
}
