import React from "react";
import "./Walkthrough.css";
import Form from "../Form/Form";
import WalkThroughData from "./WalkthroughData";

const Walkthrough = () => {
  return (
    <div className="Walkthrough">
      <div className="Walkthrough-main">
        <h2>Gallery</h2>
        <div className="walkthrough-item">
          <div className="walkthrough-left">
            {WalkThroughData.map((item) => (
              <div className="walktrough-card" key={item.id}>
                <img src={item.cover} alt={item.alttag} />
              </div>
            ))}
          </div>
          <div className="walkthrough-right">
            <div className="walkthrough-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
