import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";


const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {

        navigator.clipboard.writeText('caseyraj92@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }



    return (
        <section className="c-space my-20 " id={"about"}>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="cols-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/Young-Black-Man.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />

                        <div>
                            <p className="grid-headtext">Hi, I&#39;m Casey</p>
                            <p className="grid-subtext">
                                With 4 years of experience in web development, I hone my skills by
                                building innovative and user-friendly projects with my focus being
                                on backend related applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cols-span-1 xl:row-span-3">
                    <div className="grid-container flex justify-center items-center">
                        <img
                            src="/assets/Languages-RajMazing.png"
                            alt="grid-2"
                            className="w-full object-contain max-w-[90%] max-h-[90%] scale-110 -translate-y-5"
                        />
                        <div className="translate-y-12">
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext"> Skilled in a variety of programming languages, frameworks and tools that help me build robust and scalable applications</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">

                        <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0,0,0,0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                ShowGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    { lat: 41.8781, lng: -87.6298, text: 'Chicago, IL, USA', color: 'white', size: 15 }
                                ]}

                            />


                        </div>
                        <div>
                            <p className="grid-headtext"> I work remotely across most timezones </p>
                            <p className="grid-subtext"> I&#39;m based in North America and have done freelance work for clients around the globe</p>
                            <Button name={"Contact Me"} isBeam containerClass={"w-full mt-10"} justify-center  />

                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">

                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className={"w-full sm:h-[266px] h-fit object-contain"}/>

                        <div>
                            <p className="grid-headtext">My Passion for Coding and Web Development</p>
                            <p className="grid-subtext">Solving problems through coding has been an eye-opening journey, helping me uncover my strengths while identifying areas where I could grow. Over the years, I’ve faced the challenges of being a developer—wanting to improve, work more efficiently, decipher console errors, and most importantly, acquire the knowledge to solve problems and share those solutions with others.

                                Coding and building applications have brought clarity and focus to my life, giving me a sense of purpose I never knew I needed. It has transformed my confidence, turning me into someone who welcomes challenges with open arms, eager to learn and grow through every obstacle.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="gri4" className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"} />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">caseyraj92@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default About;