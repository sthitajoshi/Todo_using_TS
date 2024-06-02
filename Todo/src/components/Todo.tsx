import React from "react";

interface TodoProps {
  title: string;
  description: string;
  completed: boolean;
  setCompleted: (value: boolean) => void;
}

const Todo: React.FC<TodoProps> = (props) => {
  const toggleCompletion = () => {
    props.setCompleted(!props.completed);
  };

  return (
    <div className={`todo ${props.completed ? "completed" : ""}`}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <button onClick={toggleCompletion}>
        {props.completed ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default Todo;
