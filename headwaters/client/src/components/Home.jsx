import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useAuth0 } from '../react-auth0-spa.jsx';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-image">
        <Image src="https://i.ibb.co/9nSQ3ds/41590019.jpg" fluid />
      </div>
    </section>
  );
};
export default Home;
