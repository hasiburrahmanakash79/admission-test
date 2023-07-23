import BestCollege from "../BestCollege/BestCollege";
import Hero from "../Hero/Hero";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import ResearchPaper from "../ResearchPaper/ResearchPaper";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BestCollege></BestCollege>
            <PhotoGallery></PhotoGallery>
            <ResearchPaper></ResearchPaper>
        </div>
    );
};

export default Home;