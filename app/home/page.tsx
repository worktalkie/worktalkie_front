import {
  ContentWrapper,
  DailyLearning,
  Header,
  Ratings,
  Stamp,
} from "@/packages/ui";

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <DailyLearning />
        <Stamp />
        <Ratings />
      </ContentWrapper>
    </>
  );
};

export default Home;
