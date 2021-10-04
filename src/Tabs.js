import { useState } from "react";
import "./App.css";

function Tabs() 
{
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (i) => {
    setToggleState(i);
  };

  return (
    <div className="tab-container container">
      <div className="btn_div">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About Us
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Blogs   
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Skills
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>About Website</h2>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Blogs</h2>
          <p>Search for the keywords to learn more about each warning.Search for the keywords to learn more about each warning.Search for the keywords to learn more about each warning.Search for the keywords to learn more about each warning.</p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Skills</h2>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Bootsrap</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
