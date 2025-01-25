import { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const Developer = ({ animationName = 'victory', ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/animations/Developer.glb');

    // Load animations with error handling
    const loadAnimation = (path, name) => {
        try {
            const { animations } = useFBX(path);
            animations[0].name = name; // Assign a name for referencing
            return animations[0];
        } catch (error) {
            console.error(`Failed to load animation "${name}" from ${path}:`, error);
            return null; // Return null if loading fails
        }
    };

    // Load all animations
    const idleAnimation = loadAnimation('/models/animations/idle.fbx', 'idle');
    const saluteAnimation = loadAnimation('/models/animations/salute.fbx', 'salute');
    const clappingAnimation = loadAnimation('/models/animations/clapping.fbx', 'clapping');
    const victoryAnimation = loadAnimation('/models/animations/victory.fbx', 'victory');

    // Filter out null animations (in case of errors)
    const validAnimations = [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation].filter(Boolean);

    const { actions } = useAnimations(validAnimations, group);

    // Use animationName to control the animation
    useEffect(() => {
        if (!actions || !actions[animationName]) {
            console.warn(`Animation "${animationName}" not found.`);
            return;
        }

        const action = actions[animationName];
        action.reset().fadeIn(0.5).play();

        return () => action.fadeOut(0.5);
    }, [actions, animationName]);

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Beard"
                geometry={nodes.Wolf3D_Beard.geometry}
                material={materials.Wolf3D_Beard}
                skeleton={nodes.Wolf3D_Beard.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials['Wolf3D_Outfit_Bottom.002']}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    );
};

useGLTF.preload('/models/animations/Developer.glb');

export default Developer;
