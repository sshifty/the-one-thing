import { useEffect, useState } from "react";

const FocusModal = (props) => {
  const { focusQuestion, showFocus, setShowFocus } = props;
  const [motivationGif, setMotivationGif] = useState();
  const gifHolder = motivationGif ? <img src={motivationGif}></img> : null;

  const closeOnKeyDown = (e) => {
    if (e.keyCode === 27) {
      setShowFocus(false);
    }
  };
  useEffect(() => {
    async function getGif() {
      try {
        const res = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=04Y5bvVjDt3Q15gOwHkJYB7stdOGnRgm&q=lets+go&limit=25&offset=0&rating=g&lang=en"
        );
        const gif = await res.json();
        setMotivationGif(
          gif.data[Math.floor(Math.random() * gif.data.length)].images
            .fixed_height.url
        );
      } catch (e) {
        console.log(e);
      }
    }
    getGif();
    document.addEventListener("keydown", closeOnKeyDown);
    return () => {
      document.removeEventListener("keydown", closeOnKeyDown);
    };
  }, []);

  return (
    <div className={"modal focus-modal " + (showFocus ? "show-modal" : null)}>
      <div className="modal-content focus-content">
        <div className="focus-inside">
          <div className="modal-header">
            <h3>You've finished one promodoro</h3>
            <span onClick={() => setShowFocus(false)} className="close">
              {"\u2715"}
            </span>
          </div>
          <p>
            It is important to remind yourself of{" "}
            <em>
              <span className="span-reminder">the on thing:</span>
            </em>
          </p>
          <h1>{focusQuestion}</h1>
          {gifHolder}
        </div>
      </div>
    </div>
  );
};

export default FocusModal;
