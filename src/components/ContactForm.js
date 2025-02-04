import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved data from session storage on mount
  useEffect(() => {
    const sessionData = sessionStorage.getItem('contactFormData');
    const localData = localStorage.getItem('contactFormData');
    
    if (sessionData) {
      const parsed = JSON.parse(sessionData);
      setFormData(prev => ({
        ...prev,
        name: parsed.name || '',
        email: parsed.email || '',
        phone: parsed.phone || ''
      }));
    } else if (localData) {
      const parsed = JSON.parse(localData);
      sessionStorage.setItem('contactFormData', localData);
      setFormData(prev => ({
        ...prev,
        name: parsed.name || '',
        email: parsed.email || '',
        phone: parsed.phone || ''
      }));
    }
  }, []);

  // Save data to both storages
  const saveToStorage = (data) => {
    const storageData = {
      name: data.name,
      email: data.email,
      phone: data.phone
    };
    const dataString = JSON.stringify(storageData);
    sessionStorage.setItem('contactFormData', dataString);
    localStorage.setItem('contactFormData', dataString);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Namn krävs";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post krävs";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ogiltig e-postadress";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefonnummer krävs";
    } else if (!/^[0-9+\-\s()]{6,}$/.test(formData.phone)) {
      newErrors.phone = "Ogiltigt telefonnummer";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Meddelande krävs";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        console.log('Form data:', formData);
        // Clear storages after successful submission
        sessionStorage.removeItem('contactFormData');
        localStorage.removeItem('contactFormData');
        setFormData(prev => ({
          ...prev,
          message: ''
        }));
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    
    // Only save to storage if it's contact information
    if (['name', 'email', 'phone'].includes(name)) {
      saveToStorage(newFormData);
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5 md:p-0 md:pb-8">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Ditt namn"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Din e-post"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Ditt telefonnummer"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Ditt meddelande"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isSubmitting ? "Skickar..." : "Skicka meddelande"}
      </button>
    </form>
  );
}
