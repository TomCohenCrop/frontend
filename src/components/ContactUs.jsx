import React, { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'
import submitForm from '../functions/submitForm'

function ContactUs() {
     // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Basic validation
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setStatus({ type: "error", message: "Please fix the errors" });
      setIsSubmitting(false);
      return;
    }

    await submitForm(formData, setStatus, setFormData, setIsSubmitting);
  };
  return (
<section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              צרו איתי קשר !
            </h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    } flex items-center gap-2`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    {status.message}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="השם שלך"
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="דואר אלקטורני"
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ההודעה שלך"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "שולח..." : "שלח הודעה"}
                </button>
              </form>
            </div>
          </div>
        </section>
  )
}

export default ContactUs