import {
  Header,
  Home,
  About,
  Projects,
  ScrollToTop,
  Email,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Email />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
