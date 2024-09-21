import { ContentWrapper, DailyLearning, Header } from "@/packages/ui";

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <DailyLearning />
      </ContentWrapper>
    </>
  );
};

export default Home;
