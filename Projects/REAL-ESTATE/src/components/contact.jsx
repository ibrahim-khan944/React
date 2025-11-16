import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";
const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("contactData")) || [];
    existingData.push(formData);
    localStorage.setItem("contactData", JSON.stringify(existingData));
    toast.success("Message submitted successfully");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div 
     initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    className='text-center p-6 py-20 lg:px-32 w-full 
    overflow-hidden ' id='contact'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 
      text-center">Contact <span
          className="underline underline-offset-8 decoration-1 under
         font-light">With Us</span></h1>
      <p className="text-center text-gray-500 mb-12 max-w-80
      mx-auto">Ready to make a Move? Let's Build Your Future Together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 rounded pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input type="text" name='name' placeholder='Enter Name' required
              value={formData.name} onChange={handleChange}
              className='w-full border border-gray-300 rounded py-3 px-4
             mt-2'/>
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input type="email" name='email' placeholder='Enter Email' required
              value={formData.email} onChange={handleChange}
              className='w-full border border-gray-300 rounded py-3 px-4
             mt-2'/>
          </div>
        </div>
        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded
          py-3 px-4 mt-2 h-48 resize-none' value={formData.message}
            onChange={handleChange}
            name="message" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12
        mb-10 rounded'> Send Message</button>
      </form>
    </motion.div>
  )
}

export default Contact
