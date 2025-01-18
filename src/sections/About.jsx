


const About = () => {
    return (
        <section className="c-space my-20">
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


                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;