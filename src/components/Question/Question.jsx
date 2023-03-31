import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-conatinaer">
      <div className="first-question">
        <h1 className="question-title">
          1. Difference between props and state in react ?
        </h1>
        <p>
          props and state are both used to manage data and to pass information
          between components.
        </p>
        <br />
        <p>
          # Props short for properties are used to pass data from a parent
          component to a child component. They are read-only and cannot be
          modified by the child component. The parent component can pass props
          to the child component during the child's instantiation. The child
          component can access the passed props and render them as necessary.
          Props are used for data that will not change during the lifetime of a
          component.
        </p>
        <br />
        <p>
          # State on the other hand, is used to manage data that can change over
          time. State can only be accessed and modified within the component
          that declares it. When the state data changes, React will
          automatically re-render the component to reflect the new data. State
          is used for data that will change during the lifetime of a component.
        </p>
      </div>
      <div className="first-question">
        <h1 className="question-title">2. How Does React work?</h1>
        <p>
          React is a popular JavaScript library for building user interfaces .
          It works by creating and managing a tree-like structure of UI
          components,
        </p>
        <br />
        <p>
          # When you write a React component, you define its appearance and
          behavior using a combination of HTML-like markup (JSX) and JavaScript
          code. This component can then be rendered by React to produce the
          corresponding HTML, which is displayed in the user's web browser.
        </p>
        <br />
        <p>
          # State on the other hand, is used to manage data that can change over
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
