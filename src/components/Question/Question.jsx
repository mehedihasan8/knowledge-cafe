import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-conatinaer">
      <div className="">
        <h1>Difference between props and state in react ?</h1>
        <p>
          props and state are both used to manage data and to pass information
          between components.
        </p>
        <p>
          Props short for properties are used to pass data from a parent
          component to a child component. They are read-only and cannot be
          modified by the child component. The parent component can pass props
          to the child component during the child's instantiation. The child
          component can access the passed props and render them as necessary.
          Props are used for data that will not change during the lifetime of a
          component.
        </p>
        <p>
          State on the other hand, is used to manage data that can change over
          time. State can only be accessed and modified within the component
          that declares it. When the state data changes, React will
          automatically re-render the component to reflect the new data. State
          is used for data that will change during the lifetime of a component.
        </p>
      </div>
    </div>
  );
};

export default Question;
