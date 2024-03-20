import Header from "./components/header/header";
import Video from "./components/video/video";
import HomeView from "./views/home/homeView";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomeView />
      <Video />
    </>
  );
};

export default App;
