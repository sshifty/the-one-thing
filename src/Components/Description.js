import React from "react";

const Description = () => {
  return (
    <div className="description">
      <div className="description-container">
        <h1>
          An online Pomodoro Timer to help you focus on your
          <span className="desc-span"> one thing</span>
        </h1>
        <div className="desc-type">
          <div className="desc-type-header">
            <h3>How to create the focus question:</h3>
            <div className="border-line"></div>
          </div>
          <div id="oneThing" className="desc-type-info the-one-thing-desc">
            <ul>
              <li>
                The first part of the question: "What is <em> The One Thing</em>{" "}
                I Can Do .." This will help you focus and figure out what you
                can do. The emphasis here is on being able to do it. The
                declarative mode is important!
              </li>
              <li>
                The second part is, "..with doing this .." Here it is decided
                that you are just doing something or that it has some lofty,
                forward-looking purpose
              </li>
              <li>
                The third part of the question is, "..will everything else be
                easier or completely unnecessary?" This closure tells you that
                if you do that One Thing, everything else will come easier, or
                you may have to do it unnecessarily.
              </li>
            </ul>
            <h4>
              The focusing question is big and specific, for example:{" "}
              <span>
                What can I do to increase my salary by 40% over the next 6
                months?
              </span>
            </h4>
          </div>
        </div>
        <div className="desc-type">
          <div className="desc-type-header">
            <h3>What is Pomodoro Technique?</h3>
            <div className="border-line"></div>
          </div>
          <div className="desc-type-info">
            The Pomodoro Technique is created by Francesco Cirillo for a more
            productive way to work and study. The technique uses a timer to
            break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for 'tomato', after the tomato-shaped kitchen
            timer that Cirillo used as a university student.{" "}
            <span className="span-wiki"> - Wikipedia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
