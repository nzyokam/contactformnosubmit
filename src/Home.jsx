import { useState } from "react";

const ContactForm = () => {
  const [consentChecked, setConsentChecked] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: "",
  });

  const handleSelect1 = () => {
    setSelected1(true);
    setSelected2(false); // Deselect the second option when the first is selected
  };

  const handleSelect2 = () => {
    setSelected1(false); // Deselect the first option when the second is selected
    setSelected2(true);
  };

  const validateForm = () => {
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: "",
    };

    if (!document.getElementById("firstName").value) {
      newErrors.firstName = "This field is required.";
    }
    if (!document.getElementById("lastName").value) {
      newErrors.lastName = "This field is required.";
    }
    if (!document.getElementById("email").value) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!selected1 && !selected2) {
      newErrors.queryType = "Please select a query type";
    }
    if (!document.getElementById("message").value) {
      newErrors.message = "This field is required.";
    }
    if (!consentChecked) {
      newErrors.consent = "To submit this form, please consent to being contacted";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      alert("Form submitted successfully!");
      // You can add your form submission logic here
    }
  };

  return (
    <div className="bg-[#e0f1e7] h-screen w-screen flex justify-center items-center">
      <div className="bg-white lg:h-[80vh] lg:w-[50vw] sm:h-[90vw] sm:w-[90vw] rounded-xl shadow-md flex justify-center items-center">
        <div className="w-full h-full m-10 flex justify-center flex-col">
          <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
          <form className="space-y-6 lg:leading-loose lg:tracking-wider text-gray-500" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">First Name <span className="text-[#0a7d69]">*</span></label>
                <input
                  id="firstName"
                  type="text"
                  
                  className="w-full border cursor-pointer hover:border-[#0a7d69] p-2 pl-6 rounded-lg transition duration-200"
                />
                {errors.firstName && <p className="text-red-500 text-sm pt-2">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block font-medium">Last Name  <span className="text-[#0a7d69]">*</span></label>
                <input
                  id="lastName"
                  type="text"
                  
                  className="w-full border cursor-pointer hover:border-[#0a7d69] focus:border-[#0a7d69] focus:ring-2 focus:ring-[#0a7d69] p-2 pl-6 rounded-lg transition duration-200"
                />
                {errors.lastName && <p className="text-red-500 text-sm pt-2">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-medium">Email Address  <span className="text-[#0a7d69]">*</span></label>
              <input
                id="email"
                type="email"
               
                className="w-full border cursor-pointer hover:border-[#0a7d69] focus:border-[#0a7d69] focus:ring-2 focus:ring-[#0a7d69] p-2 pl-6 rounded-lg transition duration-200"
              />
              {errors.email && <p className="text-red-500 text-sm pt-2">{errors.email}</p>}
            </div>

            {/* Query Type */}
            <div>
              <label className="block font-medium">Query Type  <span className="text-[#0a7d69]">*</span></label>
              <div className="sm:flex sm:flex-col lg:flex lg:flex-row lg:space-x-4 ">
                <label className="flex items-center space-x-2 cursor-pointer border hover:border-[#0a7d69] p-2 pl-6 lg:w-[50%] sm:w-full rounded-lg">
                  <div
                    className={`radio-btn ${selected1 ? "selected" : ""}`}
                    onClick={handleSelect1} 
                  ></div>
                  <span>General Enquiry</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer border hover:border-[#0a7d69] p-2 pl-6 lg:w-[50%] sm:w-full rounded-lg">
                  <div
                    className={`radio-btn ${selected2 ? "selected" : ""}`}
                    onClick={handleSelect2} 
                  ></div>
                  <span>Support Request</span>
                </label>
              </div>
              {errors.queryType && <p className="text-red-500 text-sm pt-2">{errors.queryType}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium">Message  <span className="text-[#0a7d69]">*</span></label>
              <textarea
                id="message"
                
                className="w-full border cursor-pointer hover:border-[#0a7d69] focus:border-[#0a7d69] focus:ring-2 focus:ring-[#0a7d69] p-4 pl-6 rounded-lg h-32 transition duration-200"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Consent Checkbox (Custom Styling) */}
            <div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <div
                  className={`h-6 w-6 flex cursor-pointer justify-center items-center border-2 rounded-md transition duration-200 ${
                    consentChecked
                      ? "bg-[#0a7d69] border-[#0a7d69]"
                      : "border-gray-400"
                  }`}
                  onClick={() => setConsentChecked(!consentChecked)}
                >
                  {consentChecked && (
                    <span className="text-white text-lg">✓</span>
                  )}
                </div>
                <span className="lg:text-sm sm:text-xs">I consent to being contacted by the team  <span className="text-[#0a7d69]">*</span></span>
              </label>
              {errors.consent && <p className="text-red-500 text-sm pt-4">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0a7d69] text-white py-2 rounded-lg hover:bg-green-950 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;