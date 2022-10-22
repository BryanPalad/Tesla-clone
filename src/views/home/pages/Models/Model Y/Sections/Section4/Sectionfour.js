import React from "react";
import "./sectionfour.scss";
import { Fade } from "react-reveal";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
function Sectionfour() {
  const descItems = [
    {
      header: "2",
      desc: "Independent motors digitally control torque to the front and rear wheels",
    },
    {
      header: "3.5 s",
      desc: "Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds",
    },
    {
      header: "",
      desc: "Capable in rain, snow, mud and off-road with superior traction control",
    },
  ];
  return (
    <div className="model-y-section4">
      <div className="section-four-img">
        <div className="image-desc">
          <Fade bottom>
            {descItems.map(({ header, desc }) => {
              return (
                <div className="image-desc-items">
                  {header ? (
                    <>
                      <h3>{header}</h3>
                      <p>{desc}</p>
                    </>
                  ) : (
                    <>
                      <CloudOutlinedIcon style={{fontSize: '35px'}}/>
                      <p>{desc}</p>
                    </>
                  )}
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
      <div className="lower-desc">
        <div className="lower-container">
          <div className="lower-items">
            <Fade bottom>
              <div className="lower-left">
                <p>All-Wheel Drive</p>
                <h1>Dual Motor</h1>
              </div>
              <div className="lower-right">
                <p>
                Tesla All-Wheel Drive has two ultra-responsive, 
                independent electric motors that digitally control torque to the front and rear wheels—for far better handling, 
                traction and stability control. Model Y is capable in rain, snow, mud and off-road.
                </p>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="lower-left-btn">
              <p>Order now</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Sectionfour;
