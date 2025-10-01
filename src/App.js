import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import OrderConfirmation from "./Components/OrderConfirmation";
import OrderNotconfirmed from "./Components/OrderNotconfirmed";
import Products from "./Components/Products";
import FeaturesProducts from "./Components/FeaturesProducts";
import NewsProducts from "./Components/NewsProducts";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          path="/Header"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="*" element={<h1>404 NOT FOUND </h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="/OrderNotconfirmed" element={<OrderNotconfirmed />} />

        <Route path="/Products" element={<Products />}>
          <Route path="/ProductsFeatures" element={<FeaturesProducts/>} />
          <Route path="/ProductsNews" element={<NewsProducts/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
