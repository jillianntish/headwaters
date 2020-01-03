import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/home.css';

const Home = () => {
  const { user } = useAuth0();

  const [quote, setQuote] = useState([
    {
      quote: '',
      author: '',
    },
  ]);

  useEffect(() => {

    const quotes = axios('https://quote-garden.herokuapp.com/quotes/random')

      .then(res => {
        console.log(res.data);
        setQuote({
          quote: res.data.quoteText,
          author: res.data.quoteAuthor,
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home">
      <h1>"{quote.quote}"</h1>
      <h5>~{quote.author}</h5>
    </div>
  );
};
export default Home;
