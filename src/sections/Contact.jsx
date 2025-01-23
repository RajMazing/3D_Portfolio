import {useRef, useState} from "react"


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = () => {
    }
    const handleSubmit = () => {
    }


    return (
        <section className={"c-space my-20"} id={"contact"}>


            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>

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

                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name={"name"} value={form.name} onChange={handleChange} required
                                   className="field-input" placeholder={"eg., John Doe"}/>
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name={"email"} value={form.email} onChange={handleChange} required
                                   className="field-input" placeholder={"eg., johndoe@example.com"}/>
                        </label>


                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea name={"message"} value={form.message} onChange={handleChange} required
                                   rows={5} className="field-input" placeholder={"Hello! I'm looking for ..."}/>
                        </label>

                        <button className="field-btn" type={"submit"} disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className={"field-btn_arrow"}/>
                        </button>

                    </form>

                </div>

            </div>


        </section>
    )
}
export default Contact
