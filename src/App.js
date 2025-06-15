import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    name: "",
    contact: "",
  });

  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.time ||
      !formData.guests ||
      !formData.name.trim() ||
      !formData.contact.trim()
    ) {
      alert("Sabhi fields ko bharna zaroori hai");
      return;
    }

    if (new Date(formData.date) < new Date().setHours(0, 0, 0, 0)) {
      alert("Date aaj ya future ki honi chahiye");
      return;
    }

    if (formData.guests < 1) {
      alert("Guests kam se kam 1 hona chahiye");
      return;
    }

    setConfirmation(
      `Dhanyavaad, ${formData.name}! Aapka table ${formData.guests} logon ke liye ${formData.date} ko ${formData.time} baje book ho gaya hai. Hum aapko ${formData.contact} par contact karenge.`
    );

    setFormData({
      date: "",
      time: "",
      guests: 1,
      name: "",
      contact: "",
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:<br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Time:<br />
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Samay chuniye</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
          </select>
        </label>
        <br /><br />
        <label>
          Guests:<br />
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Name:<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Contact (Phone ya Email):<br />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Book Now</button>
      </form>

      {confirmation && (
        <div style={{ marginTop: 20, backgroundColor: "#d4edda", padding: 10, borderRadius: 4 }}>
          {confirmation}
        </div>
      )}
    </div>
  );
}

export default App;
