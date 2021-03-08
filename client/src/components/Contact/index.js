import React from 'react';
import Level from 'react-bulma-components/lib/components/level';
import Container from 'react-bulma-components/lib/components/container/container';
import Box from 'react-bulma-components/lib/components/box';
import './contact.scss';

const Contact = ({handleContact}) => {
  return (
    <section id="contact" className="contact has-text-centered">
      <Container className="is-narrow">
        <Box>
          <Level className="contact__box columns">
            <Level.Item className="column">
              <h1>
                Ready to Collab
              </h1>
            </Level.Item>
            <Level.Item className="column">
              <p>
                Interested to meet and bring your ideas to life. Let me buy you a coffee.
              </p>
            </Level.Item>
            <Level.Item className="column">
            <a  className="button is-outlined" onClick={() => handleContact()}>Contact Me</a>
            </Level.Item>
          </Level>
        </Box>
      </Container>
    </section>
  )
}

export default Contact;