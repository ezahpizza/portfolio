import React from "react";

export default function ContactPage() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "c45e9500-a616-45cc-98ae-29f7154009c2");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <div className="min-h-screen bg-background p-8">
        <div className="max-w-xl mx-auto bg-accent rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
            
            <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                Name
                </label>
                <input
                name="name"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                Email
                </label>
                <input
                name="email"
                type="email"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                Message
                </label>
                <textarea
                name="message"
                required
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                />
            </div>
            
            <button 
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
                Send Message
            </button>
            
            {result && (
                <p className="text-center mt-4 font-medium">
                {result}
                </p>
            )}
            </form>
        </div>
        </div>
    );
}