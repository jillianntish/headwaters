import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/home.css'

const Home = () => {
  const { user } = useAuth0();

  const [quote, setQuote] = useState([
    {
      quote: '',
      author: '',
    },
  ]);


  // const getQuote = () => {
  //   const url = 'https://quote-garden.herokuapp.com/quotes/random';

  //   axios.get(url)
  //     .then(res => {
  //       const quote = res.quoteText;
  //       console.log(res);
  //     });
  // };

  useEffect(() => {
    // getQuote();
    const quotes = axios('https://quote-garden.herokuapp.com/quotes/random')
      // const data = await quotes.json();
      .then(res => {
        console.log(res.data);
        setQuote({
          quote: res.data.quoteText,
          author: res.data.quoteAuthor,
        });
      })
      .catch(err => console.log(err));
    // const apiQuote = quotes.data.quoteText;
    // const apiAuthor = quotes.data.quoteAuthor;
  }, []);

  return (
    <div className="home">
      <h1>"{quote.quote}"</h1>
      <h5>~{quote.author}</h5>
    </div>
  );
};
export default Home;
