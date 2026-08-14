import { useState } from "react";
import { Link } from "react-router-dom";

const API_URL = 'https://localhost:3000'

const ContactForm = () =>{
           //form data
           const [formData, setFormData]= useState({
               name:'',
               phone:'',
               email:'',
               message:''
           });
           // handle input change
           const handleChange =(e) =>{
              const {name, value} = e.target;

              setFormData((prev=> ({
                 ...prev,
                 [name]: value,
              })))
           }
           // handle submit
           const handleSubmit = (e) =>{
            try{
                e.preventDefault();
               //validation
               //name
               if (!formData.name.trim()){
                  alert('Name is required!');
                  return;
               }
               //phone 
               if (!formData.phone.trim()){
                  alert('Phone number is required!');
                  return;
               }
               const phoneRegex = /^[0-9]{10,15}$/
               if (!phoneRegex.test(formData.phone)){
                  alert('Please enter a valid phone number!');
                  return;
               }
               // email
               if (!formData.email.trim()){
                  alert('Email is required!');
                  return;
               }
               if (!formData.email.includes("@")){
                  alert('Please enter a valid email!');
                  return;
               }
               alert(`Thank you ${formData.name} for contacting us. We will get back to you soon.`)
               console.log(formData)

               

            //    Creating Payload to send to the server
               const payload = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message
               }

               const response = fetch (`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // credentials: 'include',
                body: JSON.stringify(payload)
               })

               const data = response.json()
               console.log('Response from server:', data);

               if (!response.ok || !data.success) {
                alert('Failed to submit the form. Please try again later.');
               }

               alert('Form submitted successfully!');
               setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
               })

            }catch{
                alert('An error occurred while submitting the form.');
                console.error('Error submitting form:', error);
            }
           }
           return(
              <section className="w-full  p-6">
                  
                  <header className="text-center md:text-start w-full  mb-16 text-[#393E46]">
                      <h2 className="uppercas text-[1.5rem]  font-bold">
                          Start the conversation.
                      </h2>
                      <p className="  text-md my-3 md:w-8/10">
                          The best solution begins with a conversation.
                          Use the form below to tell us about your business
                          or project, and we'll get back to you as soon as we can.
                      </p>
                  </header>
                  <form onSubmit={handleSubmit} className="space-y-6 ">
                     <fieldset className="flex flex- col md:fl ex-row gap-3 justify-between">
                        
                            <input 
                               type="text"
                               name="name" 
                               value={formData.name}
                               onChange={handleChange}
                               className="
                                   w-1/2
                                   pb-4 
                                   outline-none 
                                   border-b 
                                   border-[#393E46]/20
                                   text-[15px]
                                   "
                                   placeholder="Full name"
                               
                            />
                            <input 
                               type="text" 
                               name="phone"
                               value={formData.phone}
                               onChange={handleChange}
                               className="
                                   w-1/2
                                   pb-4
                                   outline-none  
                                   border-b 
                                   border-[#393E46]/20
                                   text-[15px]
                                   "
                               placeholder="Phone" 
                            />
                       
                     </fieldset> 
                     <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="
                            w-full
                            pb-4
                            outline-none
                            border-b 
                            border-[#393E46]/30
                            text-[15px]
                            placeholder:text-[#393E46]/80
                            "
                        placeholder="Email"
                        
                      />
                      <textarea 
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="
                            w-full
                            pb 
                            outline-none  
                            border-b 
                            border-[#393E46]/20
                            text-[15px]
                            placeholder:text-[#393E46]/80"
                        placeholder="Briefly describe your message..."
                        
                      />
                       
                        <fieldset className="flex gap-4 justify-between">
                            <button 
                                type="submit" 
                                className="
                                    cursor-pointer
                                    w-1/2
                                    rounded-full lg 
                                    md:px-8 
                                    p-4
                                    text-base
                                    font-semibold 
                                    text-white
                                    transition-all
                                    duration-500
                                    bg-[#03045e]
                                    mt-4
                            ">
                                Send
                            </button>
                            <Link  
                              to='/'                              
                              className="
                                    flex
                                    justify-center
                                    items-center
                                    w-1/2
                                    rounded-full lg 
                                    md:px-8 
                                    p-4

                                    text-base
                                    font-semibold 
                                    text-[#03045e]
                                    transition-all
                                    duration-500
                                    border
                                    border-[#03045e]/10
                                    shadow
                                    bg-white
                                    mt-4
                            ">
                                Back
                            </Link>
                        </fieldset>
                  </form>
              </section>
           )

}

export default ContactForm;