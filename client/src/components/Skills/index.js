import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';
import Content from 'react-bulma-components/lib/components/content';
import {ReactComponent as DesignLogo} from '../../images/design.svg';
import {ReactComponent as BuildLogo} from '../../images/build.svg';
import {ReactComponent as CodeLogo} from '../../images/code.svg';
import './skills.scss';
const Skills = ({resumeData}) => {
  const skills = resumeData.skills.map(skill => skill.skillname );
  const skillsString = skills.join(', ');
  const devTools = resumeData.devTools.join(', ');
  return(
    <section id="skills" className="skills has-text-centered">
      <Container>
        <Box className="skills__box">
          <Content>
            <Columns>
              <Columns.Column>
                <DesignLogo fill="#3cb0f2"/>
                <h2>Design</h2>
                <p>{resumeData.designDescription}</p>
                <h4>Things I design:</h4>
                <p>{resumeData.designSkills.join(', ')}</p>
                <h4>Tools:</h4>
                <p>{resumeData.designTools.join(', ')}</p>
              </Columns.Column>
              <Columns.Column>
                <BuildLogo fill="#3cb0f2"/>
                <h2>Full-stack Developer</h2>
                <p>{resumeData.skillsDescription}</p>
                <h4>Technologies I work on:</h4>
                <p>{skillsString}</p>
                <h4>Tools:</h4>
                <p>{devTools}</p>
              </Columns.Column>
              <Columns.Column>
                <CodeLogo fill="#3cb0f2" />
                <h2>Coding</h2>
                <p>{resumeData.codingDescription}</p>
                <h4>Programming Languages:</h4>
                <p>{resumeData.codingLanguages}</p>
                <h4>Platforms:</h4>
                <p>{resumeData.codingPlatforms.join(', ')}</p>
              </Columns.Column>
            </Columns>
          </Content>
        </Box>
        
      </Container>
    </section>
  );
};

export default Skills;