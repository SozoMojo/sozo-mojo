const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/airtable', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert('Submission successful!');
    } else {
      alert('Submission failed.');
    }
  } catch (err) {
    console.error('Client error:', err);
    alert('Error submitting form.');
  }
};

