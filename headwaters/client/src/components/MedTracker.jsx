/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa.jsx';
import { Container } from 'reactstrap';
import '../styles/event-form.css';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';
// import Chronology from 'react-chronos';

const MedTracker = () => {
  const { user } = useAuth0();
  const [userId] = useState(user.id);

  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <div className="med-tracker">
        <h1 style={{ color: '#1B2F44', fontWeight: 'bolder', paddingLeft: '5px', paddingTop: '10px' }}>Medicine Tracker</h1>
        <h1>Paul Town</h1>
        <Timeline>
          <Events>
            <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

            <ImageEvent
              date="4/13/19"
              text="You can embed images..."
              src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
              alt="jellyfish swimming"
              credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
            >
              <div>
                <UrlButton href="https://unsplash.com/search/photos/undersea">
                  View more undersea photos
            </UrlButton>
              </div>
            </ImageEvent>

            <YouTubeEvent
              date="6/18/19"
              id="6UnRHtwHGSE"
              name="General Tso's Chicken recipe"
              text="... and YouTube videos!"
            />
          </Events>
        </Timeline>
      </div>
    </Container>
  );
};

export default MedTracker;