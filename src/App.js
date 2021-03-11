import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaQuoteRight,
} from "react-icons/fa";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Reviews</h1>
      </header>

      <main className="hero flex">
        <FaAngleDoubleLeft size="2em" className="left" />

        {data.map(({ image, name, title, quote }, index) => (
          <section key={index} className={index === 2 ? "center" : ""}>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <span>{title}</span>
            <p>{quote}</p>
            <FaQuoteRight size="3em" className="quote" />
          </section>
        ))}

        <FaAngleDoubleRight size="2em" className="right" />
      </main>
    </div>
  );
}

export default App;
