import './App.css'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";


function App() {

  return (
    <div>
            <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />}/>
          <Route path="/products/:id" element={<ProductDetail />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/confirmation" element={<Confirmation />}/>
        </Routes>
      </main>
      <Footer />
    </div>

  )
}

export default App
