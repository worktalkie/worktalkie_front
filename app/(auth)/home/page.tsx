import {
  ArticleCardList,
  ContentWrapper,
  DailyLearning,
  Header,
  PracticeList,
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
        <PracticeList />
        <Ratings />
        <ArticleCardList />
      </ContentWrapper>
    </>
  );
};

export default Home;
