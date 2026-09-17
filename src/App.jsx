
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./router/Router";


function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Router />
      </main>

      <Footer />
    </div>
  );
}

export default App;