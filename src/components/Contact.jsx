import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../contexts/ThemeContext";
import ParticlesBackground from "./ParticlesBackground";

export default function Contact() {
  const [isDark] = useContext(ThemeContext);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setStatus("");
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    )
      newErrors.email = "Invalid email format";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_xts88u2", // Replace with EmailJS service ID
        "template_d4yvorf", // Replace with EmailJS template ID
        formRef.current,
        "bOLEi-PIMhHrFHWQh" // Replace with EmailJS public key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-28">
      <ParticlesBackground />

      <div className="pc:w-[1100px] relative z-10 mx-auto flex w-[700px] flex-col items-center justify-center text-black xl:w-[900px]">
        <h1
          className={`${
            isDark ? "text-[#f5f5f5]" : "text-[#000]"
          } text-center text-4xl font-bold laptop:text-5xl`}
        >
          Contact
        </h1>

        <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-5 laptop:flex-row laptop:gap-5">
          {/* Left Section */}
          <div className="w-full rounded-2xl border border-pink-400/50 bg-white/5 px-5 py-5 shadow-lg backdrop-blur-md transition-all hover:border-pink-400 laptop:w-1/2">
            <h2 className="mb-6 text-2xl font-semibold text-pink-400">
              Contact Information
            </h2>
            <div className="space-y-5">
              <div>
                <p className="font-medium text-gray-500">Email</p>
                <p
                  className={`text-lg ${
                    isDark ? "text-[#f5f5f5]" : "text-[#000]"
                  }`}
                >
                  lveezajamshed@gmail.com
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Location</p>
                <p
                  className={`text-lg ${
                    isDark ? "text-[#f5f5f5]" : "text-[#000]"
                  }`}
                >
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`w-full rounded-2xl ${
              isDark ? "text-white" : "text-black"
            } border border-pink-400/50 bg-white/5 px-5 py-5 shadow-lg backdrop-blur-md transition-all hover:border-pink-400 laptop:w-1/2`}
          >
            <h2 className="mb-6 text-2xl font-semibold text-pink-400">
              Send Me a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-lg border px-4 py-2 outline-none bg-transparent ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-600 focus:border-pink-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={`w-full rounded-lg border px-4 py-2 outline-none bg-transparent ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-600 focus:border-pink-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm text-gray-500">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="4"
                  className={`w-full rounded-lg border px-4 py-2 outline-none bg-transparent ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-600 focus:border-pink-400"
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
              >
                Send Message ✈️
              </button>
            </form>

            {status && (
              <p
                className={`mt-4 text-center text-sm ${
                  status.includes("✅")
                    ? "text-green-400"
                    : status.includes("❌")
                    ? "text-red-400"
                    : "text-gray-400"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}




// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully!");
//   };

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] text-white px-5 py-20">
//       {/* Background particles (optional: replace with your <ParticlesBackground /> component) */}
//       <div className="absolute inset-0 z-0 opacity-60">
//         {/* <ParticlesBackground /> */}
//       </div>

//       <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 laptop:grid-cols-2 gap-10">
//         {/* Left: Contact Info */}
//         <div className="rounded-2xl border border-pink-400/30 bg-white/5 backdrop-blur-md p-8 shadow-lg hover:border-pink-400 transition-all">
//           <h2 className="text-2xl font-semibold mb-6 text-pink-400">
//             Contact Information
//           </h2>

//           <div className="space-y-5">
//             <div>
//               <p className="text-gray-300 font-medium">Email</p>
//               <p className="text-lg">hello@yourname.dev</p>
//             </div>
//             <div>
//               <p className="text-gray-300 font-medium">Location</p>
//               <p className="text-lg">Lahore, Pakistan</p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <div className="rounded-2xl border border-pink-400/30 bg-white/5 backdrop-blur-md p-8 shadow-lg hover:border-pink-400 transition-all">
//           <h2 className="text-2xl font-semibold mb-6 text-pink-400">
//             Send Me a Message
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm text-gray-300 mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="w-full rounded-lg bg-transparent border border-gray-600 focus:border-pink-400 outline-none px-4 py-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-300 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your email"
//                 className="w-full rounded-lg bg-transparent border border-gray-600 focus:border-pink-400 outline-none px-4 py-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-300 mb-1">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message"
//                 rows="4"
//                 className="w-full rounded-lg bg-transparent border border-gray-600 focus:border-pink-400 outline-none px-4 py-2"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
//             >
//               Send Message ✈️
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
