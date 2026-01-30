import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
// import AboutGallery from '../components/about/AboutGallery';
import CoreValues from '../components/about/CoreValues';
import MissionVision from '../components/about/MissionVision';
// import AboutCTA from '../components/about/AboutCTA';
import OurExperties from '../components/about/OurExpertise';
import OurPresence from '../components/about/OurPresence';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <OurExperties></OurExperties>
      {/* <AboutGallery /> */}
      <CoreValues />
      <OurPresence></OurPresence>
      {/* <AboutCTA /> */}
    </div>
  );
};

export default About;
