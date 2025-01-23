import axios from 'axios'

export default async function submitForm(formData, setStatus, setFormData, setIsSubmitting) {
  try {
    // The second argument is the request body; the third is config (headers, etc.)
    const response = await axios.post('http://localhost:4000/api/email/send-and-save', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // With axios, the parsed JSON response is in response.data
    const data = response.data;

    if (response.status === 200) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus({
        type: 'error',
        message: data.error || 'Failed to send message'
      });
    }
  } catch (error) {
    setStatus({
      type: 'error',
      message: 'Failed to send message. Please try again.'
    });
  } finally {
    // Because we’re using this in the function, we must pass setIsSubmitting as an argument
    setIsSubmitting(false);
  }
}