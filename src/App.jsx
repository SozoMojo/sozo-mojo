const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name,
    email,
    message,
  };

  try {
    const res = await fetch("/api/airtable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Submission failed");

    alert("Submission successful!");
    setName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    alert("Something went wrong.");
    console.error(err);
  }
};
