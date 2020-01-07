/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa.jsx';
import { Container } from 'reactstrap';
import '../styles/event-form.css';

const MedTracker = () => {
  const { user } = useAuth0();
  const [userId] = useState(user.id);

  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <div className="med-tracker">
        <h1>Medecine Tracker</h1>
      </div>
    </Container>
  );
};

export default MedTracker;