import { ContentWrapper, DailyLearning, Header, Ratings } from "@/packages/ui";

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <DailyLearning />
        <Ratings />
      </ContentWrapper>
    </>
  );
};

export default Home;
