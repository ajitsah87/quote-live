import  { useState } from "react";
import axios from "axios";

import "./quote.css";
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const  getQuote = async () => {
    try {
      setQuote("");
      setLoad(true);
     const {data} = await axios.get("https://api.quotable.io/random")
     setQuote(data)
     setLoad(false)
    } catch (error) {
      setLoad(false);
      setError("Something went Wrong")
      
    }
  };
console.log(error)
if (error) {
  return <div className="error">OOPs!</div>
}
  return (
  <>
    <h1>Quote Live</h1>
    <div className="wrapper">
      <div className="container">
        {!load ? (
          <>
            <p id="quote">{quote.content}</p>
            <h3 id="author">- {quote.author}</h3>
          </>
        ) : (
          <div className="load">Loading...</div>
        )}
        <button id="btn" onClick={getQuote}>
          Get Quote
        </button>
      </div>
    </div>
    </>
  );
};

export default Quote;
