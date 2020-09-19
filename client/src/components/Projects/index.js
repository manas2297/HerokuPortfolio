import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Image from 'react-bulma-components/lib/components/image';
import './projects.scss';
const Projects = ({resumeData}) => {
  return(
    <section id="projects" className="has-text-centered projects">
      <Columns>
        <Columns.Column>
          <Heading>Recent Projects</Heading>
          <Heading subtitle>Some of my recent projects</Heading>
          <div className="projects__grid">
            <Columns>
            {resumeData.projects.map(item => (
              <Columns.Column
              size={4}
              className="is-multiline card"
              >
                <figure className="image"  size="3by2">
                  <img src={item.imgurl}/>
                  <figcaption>
                  <h1>{item.name}</h1>
                  <h2>{item.description}</h2>
                  <a class="button is-primary is-outlined is-rounded" href={item.projectUrl} target="_blank">
                    <span>Visit Website</span>
                  </a>
                  </figcaption>
                  <div className="overlay"></div>
                  </figure>
              
              </Columns.Column>
            ))}
            </Columns>
          </div>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <a  className="button is-outlined" href="https://www.github.com/manas2297">See more on Github</a>
        </Columns.Column>
      </Columns>
    </section>
  );
};

export default Projects;