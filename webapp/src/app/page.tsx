import NewsFeedHome from "./NewsFeedHome";
import ErrorBoundary from "./ErrorBoundary";
import ErrorMessage from "./ErrorMessage";

const Home = () => {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <NewsFeedHome />
    </ErrorBoundary>
  );
};
export default Home;
