import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      if (index === people.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  function nextSection() {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prevSection() {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Reviews</h1>
      </header>

      <main className="hero flex">
        <FaAngleDoubleLeft onClick={prevSection} size="2em" className="left" />

        {people.map(({ image, name, title, quote }, secIndex) => {
          let position = "next";

          if (index === secIndex) {
            position = "center";
          }
          if (
            index - 1 === secIndex ||
            (index === 0 && secIndex === people.length - 1)
          ) {
            position = "prev";
          }

          return (
            <section key={secIndex} className={position}>
              <img src={image} alt="" />
              <h4>{name}</h4>
              <span>{title}</span>
              <p>{quote}</p>
              <FaQuoteRight size="3em" className="quote" />
            </section>
          );
        })}

        <FaAngleDoubleRight
          onClick={nextSection}
          size="2em"
          className="right"
        />
      </main>
    </div>
  );
}

export default App;
