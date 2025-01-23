
import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
        <section className={"c-space my-20"} id={"clients"}>

            <h3 class="head-text">Hear from My Clients</h3>
            <div class="client-container">
                {clientReviews.map(({id, img,position, name, review}) => (
                        <div key={id} className={"client-review"}>
                            <div>
                                <p class="text-white font-light">
                                    {review}
                                </p>
                                <div class="client-content">
                                    <div class="flex gap-3">
                                        <img src={img} alt={name} className={"w-12 h-12 rounded-full"}/>
                                        <div class="flex flex-col">
                                            <p class="font-semibold text-white-800">
                                                {name}
                                            </p>
                                            <p class="text-white-500 md:text-base text-sm">
                                                {position}
                                            </p>
                                        </div>
                                    </div>


                                    <div class="flex self-end items-center gap-2">
                                        {Array.from({length:5}).map((_, index) => (
                                            <img key={index} src={"/assets/star.png"} alt={"star"} className={"w-5 h-5"} />
                                            ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default Clients
