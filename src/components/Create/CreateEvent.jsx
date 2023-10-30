import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(event);
  };

  return (
    <div className="create-event">
      <h1>Create an Event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={event.description}
          onChange={handleChange}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          value={event.image}
          onChange={handleChange}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
