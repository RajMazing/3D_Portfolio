import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Suspense} from "react";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">

                        <Canvas shadows gl={{ toneMappingExposure: 2.5 }}>
                            {/* Ambient light for general illumination */}
                            <ambientLight intensity={1.2} />

                            {/* Strong but balanced spotlight */}
                            <spotLight
                                position={[30, 50, 30]} // Positioned above and to the side
                                angle={0.55}            // Moderate cone width
                                penumbra={0.4}          // Softer edges for realism
                                intensity={4}           // Slightly reduced brightness
                                castShadow              // Enable shadows for depth
                                shadow-mapSize-width={4096} // High-quality shadows
                                shadow-mapSize-height={4096}
                            />

                            {/* Directional light for highlights */}
                            <directionalLight
                                position={[-20, 30, 20]} // Positioned to balance the spotlight
                                intensity={2.5}          // Reduced intensity for a softer effect
                                castShadow               // Enable shadows
                                shadow-mapSize-width={4096}
                                shadow-mapSize-height={4096}
                            />

                            {/* Fill light to reduce harsh shadows */}
                            <pointLight
                                position={[10, 10, -10]} // Positioned behind the model
                                intensity={1.8}          // Lower intensity for subtle fill lighting
                            />

                            {/* Interaction controls */}
                            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />

                            {/* Model with a fallback loader */}
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} />
                            </Suspense>
                        </Canvas>


                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, duration, title, animation, icon }) => (
                                <div key={id} className="work-content_container group">
                                    <div>
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="work-content_logo">
                                                <img src={icon} alt="logo" className="w-full h-full" />
                                            </div>
                                            <div className="work-content_bar" />
                                        </div>
                                        <div className="sm:p-5 px-2.5 py-5">
                                            <p className="font-bold text-white-800">{name}</p>
                                            <p className="text-sm mb-5">{pos} — {duration}</p>
                                            <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;




