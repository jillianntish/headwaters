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
        <h1 style={{ color: '#1B2F44', fontWeight: 'bolder' }}>Medicine Tracker</h1>
      </div>
    </Container>
  );
};

export default MedTracker;