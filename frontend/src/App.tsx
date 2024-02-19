import {
  Background,
  Description,
  Education,
  Header,
  HorizontalDivider,
  MainProfile,
  ProfileLinks,
  Skills,
} from './common';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <Background />
      <div className={styles.page}>
        <MainProfile />
        <HorizontalDivider />
        <ProfileLinks />
        <Header>Who am I?</Header>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          faucibus consequat tempus. Aliquam ac consequat metus. Donec et leo
          nunc. Nullam turpis ligula, mattis a dictum et, suscipit in elit. Nam
          et aliquam odio. Mauris et mattis odio, quis consectetur est. Praesent
          pulvinar, dui ut bibendum viverra, mauris ligula consectetur neque, ac
          ullamcorper neque quam efficitur velit. Ut tempus tortor ut dictum
          laoreet. Suspendisse convallis dui enim, non porta mauris tincidunt
          in. Praesent convallis ullamcorper diam vehicula commodo. Etiam
          rhoncus sagittis eros vel eleifend.
        </Description>
        <Header>Skills</Header>
        <Skills />
        <Header>Education</Header>
        <Education />
      </div>
    </>
  );
}

export default App;
