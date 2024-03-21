import Header from "./components/header/header";
import Stars from "./components/stars/stars";
import HomeView from "./views/home/homeView";

const App = (): JSX.Element => {
  return (
    <>
      <Stars />
      <Header />
      <HomeView />
    </>
  );
};

export default App;
