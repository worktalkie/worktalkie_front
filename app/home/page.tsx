import { Carousel, ContentWrapper, Header } from "@/packages/ui";
import { ReactNode } from "react";
const Home = () => {
  const slides: ReactNode[] = [
    <div key="slide1" className="w-[100%] h-[300px] text-center">
      1
    </div>,
    <div key="slide2" className="w-[100%] h-[300px] text-center">
      2
    </div>,
    <div key="slide3" className="w-[100%] h-[300px] text-center">
      3
    </div>,
  ];
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Carousel slides={slides} />
      </ContentWrapper>
    </div>
  );
};

export default Home;
