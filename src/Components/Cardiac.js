import React from "react";
import exampleImage from '../images/black button.png'; 
import "./CardiacAndFlexibility.css";
import { Link } from "react-router-dom";

const exercises = [
  {
    imgSrc: "https://icon-library.com/images/cardio-icon/cardio-icon-15.jpg",
    title: "Running",
    description: "A classic cardio workout that can be done almost anywhere.",
  },
  {
    imgSrc: "https://icon-library.com/images/swimming-icon-png/swimming-icon-png-19.jpg",
    title: "Swimming",
    description: "A low-impact exercise that provides a full-body workout.",
  },
  {
    imgSrc:
      "https://th.bing.com/th/id/R.efae2301445d920aeb4b3efa9c5752d3?rik=o2ynyxaKgEDJkA&pid=ImgRaw&r=0",
    title: "Cycling",
    description:
      "Great for both indoor and outdoor workouts, cycling improves leg strength and stamina.",
  },
  {
    imgSrc:
      "https://cdn0.iconfinder.com/data/icons/children-game-sports/229/children-games-sport-004-256.png",
    title: "Jump Rope",
    description:
      "An excellent way to boost your cardiovascular endurance and agility.",
  },
  {
    imgSrc:
      "https://cdn3.iconfinder.com/data/icons/cardio-exercises-and-fitness-training/315/cardio-exercises-gym-015-512.png",
    title: "Rowing",
    description:
      "Works the entire body and is effective for both cardio and strength training.",
  },
  {
    imgSrc:
      "https://png.pngtree.com/png-vector/20220818/ourmid/pngtree-black-glyph-icon-depicting-a-workout-with-high-intensity-and-intervals-vector-png-image_38643022.png",
    title: "High-Intensity Interval Training (HIIT)",
    description:
      "Short bursts of intense activity followed by rest, great for burning calories quickly.",
  },
  {
    imgSrc:
      "https://www.shareicon.net/data/256x256/2016/04/06/745472_sports_512x512.png",
    title: "Stair Climbing",
    description:
      "A convenient and effective way to get a high-intensity workout.",
  },
  {
    imgSrc:
      "https://cdn0.iconfinder.com/data/icons/gym-workout/259/workout002-512.png",
    title: "Power Walking",
    description:
      "Walking at a brisk pace can be an effective way to improve heart health.",
  },
];

const Cardiac = () => {
  return (
    <div className="container">
    
      <Link to="/" className="back-buttons">
        <img src={exampleImage} alt="Back" />
      </Link>
      <div className="inner-container">
        <h1>Cardiac Exercises</h1>
        <p>Here are some great exercises to improve cardiovascular health:</p>
        <div className="exercise-grid">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-box">
              <img src={exercise.imgSrc} alt={exercise.title} />
              <h2>{exercise.title}</h2>
              <p>{exercise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardiac;
