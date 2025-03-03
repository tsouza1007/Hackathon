import IllustrationContact from "../assets/IllustrationContact.svg";

const ContactPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1290px] mx-auto rounded-2xl bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Side - Form */}
        <div className="max-w-8xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2 text-gray-800 text-sm font-medium">
              <input type="radio" name="contactType" className="accent-black" defaultChecked />
              Say Hi
            </label>
            <label className="flex items-center gap-2 text-gray-800 text-sm font-medium">
              <input type="radio" name="contactType" className="accent-black" />
              Get a Quote
            </label>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 border border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 border border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message*</label>
              <textarea
                placeholder="Message"
                className="w-full py-3 border border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black h-28"
              />
            </div>
            <button className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
        {/* Right Side - Illustration */}
        <div className="relative flex items-center justify-end">
          <img src={IllustrationContact} alt="Illustration" className="w-full md:w-full max-w-lg object-right" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
