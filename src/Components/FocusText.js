import threeDots from "../icons/threedots-white.png";

const FocusText = (props) => {
  const { editFocus, setEditFocus, focusQuestion, setFocusQuestion } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    setFocusQuestion(e.target.focustext.value);
    setEditFocus(false);
  };
  const linkToTheOne = () => {
    const theOne = document.getElementById("oneThing");
    theOne.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  if (!editFocus) {
    return (
      <div className="focus-display">
        <h3>Edit Focus Question</h3>
        <button className="btn-set" onClick={() => setEditFocus(true)}>
          {" "}
          <img className="logo" src={threeDots} alt="three dots icon" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="focus-text">
        <form onSubmit={onSubmit}>
          <h4>
            Click{" "}
            <em>
              {" "}
              <span className="span-link" onClick={() => linkToTheOne()}>
                {" "}
                Here
              </span>
            </em>{" "}
            to find out how to ask yourself this important question!
          </h4>
          <textarea
            name="focustext"
            required
            maxLength={300}
            placeholder="What is your focus question?"
          >
            {focusQuestion}
          </textarea>
          <button className="btn-save" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
};

export default FocusText;
