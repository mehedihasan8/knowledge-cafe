import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="questions-container">
      <div className="question-4">
        <h2>1. How does React Work?</h2>
        <h4>Here's a simplified explanation of how React works...</h4>
        <p>
          <span>#Create Components:</span> Developers create reusable and
          independent components that encapsulate the UI and behavior.
        </p>
        <p>
          <span>#Manage State:</span> Each component has its own state and
          properties that can be updated to make it interactive.
        </p>
        <p>
          <span>#Render Virtual DOM:</span> React updates the virtual DOM, a
          lightweight copy of the actual DOM, when a component's state or
          properties change.
        </p>
        <p>
          <span>#Update the Actual DOM:</span> React updates the actual DOM
          based on the changes made to the virtual DOM, resulting in a smoother
          and faster user interface
        </p>
      </div>
      <div className="question-3">
        <h2>2. How does useState work?</h2>
        <h4>Here's a simplified explanation of how useState works...</h4>
        <p>
          # useState is react hook. useState store any type of value. useState
          manage also primitive data types like string, number, and Boolean, as
          well as complex data types such as array, object, and function. This
          way to set useState.const [state, setState] = useState(initialValue);
        </p>
      </div>
      <div className="question-2">
        <h2>3. What is different between Props and state?</h2>
        <h4>
          In React, props and state are both used to store data and communicate
          between components, but they have different characteristics and
          purposes....
        </h4>
        <p>
          # <span>props</span> are used to pass data from parent to child
          components. But <span>state</span> is used to manage data within a
          component and make it interactive.
        </p>
        <p>
          # <span>props</span> are immutable, meaning they cannot be changed by
          the child component. But <span>State</span> is mutable and can be
          changed using the setState method provided by React.
        </p>
        <p>
          # <span>Props</span>, Changes to props trigger a re-render of the
          child component. <span>State</span>, Changes to state trigger a
          re-render of the component.
        </p>
      </div>
      <div className="question-1">
        <h2>4. What is purpose of useEffect other than fetching data?</h2>
        <h4>
          The purpose of the useEffect hook in React is to perform side effects.
          A side effect is any operation that affects something outside the
          scope of the component.Some examples of side effects that can be
          performed using useEffect include...
        </h4>
        <p># Setting up and cleaning up event listeners</p>
        <p># Modifying the DOM or interacting with a third-party library</p>
        <p># Updating the document title or the browser history</p>
        <p>
          # Scheduling a task for later execution using setTimeout or
          setInterval
        </p>
      </div>
    </div>
  );
};

export default Question;
