
import { useRef, useState } from "react"



const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = () => {}
    const handleSubmit = () => {}


    return (
        <section className={"c-space my-20"} id={"contact"}>


            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 minh-screen" />

                <div className="contact-container">
                    <h3 className="head-text">
                        Let&#39;s talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        Excited to explore new opportunities!
                        Feel free to drop me a message—whether you have a question,
                        a project idea, or just want to say hello. I’ll do my best to assist in any way I can!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col space-y-7"}>


                    </form>

                </div>

            </div>


        </section>
    )
}
export default Contact
