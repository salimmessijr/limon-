import HighlightedPublications from "../HighlightedPublications/HighlightedPublications";
import Intro from "../Intro/Intro";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Intro />
      <HighlightedPublications />
      <Testimonials />
    </div>
  );
};

export default Home;
