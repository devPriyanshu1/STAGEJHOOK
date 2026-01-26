import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
import AboutGallery from '../components/about/AboutGallery';
import CoreValues from '../components/about/CoreValues';
import MissionVision from '../components/about/MissionVision';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutIntro />
      <AboutGallery />
      <CoreValues />
      <MissionVision />
      <AboutCTA />
    </div>
  );
};

export default About;
