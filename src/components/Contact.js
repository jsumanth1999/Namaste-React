const Contact = () => {
    return (
        <div className="contact-us">
            <h1 className="font-bold text-3xl">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="Message" />
                <button className="border bg-gray-100 border-black rounded-lg">Submit</button>
            </form>
        </div>
    )
};

export default Contact;
