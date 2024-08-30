import React from "react";
import { Link } from "react-router-dom";
import exampleImage from '../images/black button.png'; 
import "./CardiacAndFlexibility.css";

const exercises = [
  {
    imgSrc: "https://www.shareicon.net/data/2016/04/06/745502_sports_512x512.png",
    title: "Seated Hamstring Stretch",
    description: "Great for increasing flexibility in the hamstrings and calves.",
  },
  {
    imgSrc: "https://cdn2.iconfinder.com/data/icons/home-workout/64/12_strech_workout_sport_gym_exercise-256.png",
    title: "Cobra Stretch",
    description: "Strengthens and stretches the lower back muscles and spine.",
  },
  {
    imgSrc: "https://cdn3.iconfinder.com/data/icons/chest-building-exercises-and-muscle-building/295/chest-building-exercises-013-1024.png",
    title: "Butterfly Stretch",
    description: "Targets the inner thighs, groin, and hips.",
  },
  {
    imgSrc: "https://th.bing.com/th/id/R.ce4ea18940e0e12936a1f1b217b4ffd4?rik=X1QiE24lEzh%2fvw&pid=ImgRaw&r=0",
    title: "Calf Stretch",
    description: "Effective for loosening tight calf muscles.",
  },
  {
    imgSrc: "https://th.bing.com/th/id/R.0214f0101a1251aab0581027622691e2?rik=E9m%2fswPt2AvJ5Q&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "Side Lunge",
    description: "Stretches the inner thighs and enhances hip flexibility.",
  },
  {
    imgSrc: "https://cdn0.iconfinder.com/data/icons/dance-fitness/67/16-512.png",
    title: "Cat-Cow Stretch",
    description: "Improves flexibility in the spine and helps with posture.",
  },
  {
    imgSrc: "https://cdn4.iconfinder.com/data/icons/body-stretching-exercise/287/body-stretching-012-512.png",
    title: "Overhead Stretch",
    description: "Stretches the shoulders, upper back, and arms.",
  },
];
const Flexibility = () => {
  return (
    <div className="container">
      <Link to="/" className="back-buttons">
        <img src={exampleImage} alt="Back" />
      </Link>

      <div className="inner-container">
        <h1>Flexibility Exercises</h1>
        <p>Here are some great exercises to enhance your flexibility and maintain a healthy range of motion:</p>
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

export default Flexibility;
