import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Admin from "./admin/pages/Dashboard.js";
import Login from "./admin/pages/Login.js";
import Banner from "./admin/components/Banner.js";
import Marquee from "./admin/components/Marquee.js";
import Clothing from "./components/categories/Clothing.js";
import ShopCategories from "./admin/components/ShopCategories.js";
import ManageProducts from "./admin/components/ManageProducts.js";
import BestSeller from "./admin/components/BestSeller.js";
import ShopTheLook from "./admin/components/ShopTheLook.js";
import SizePicker from "./admin/components/SizePicker.js";
import ColorPicker from "./admin/components/ColorPicker.js";
import Header from "./admin/components/Header.js";
import ShopGramAdmin from "./admin/components/ShopGram.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/category/clothing" element={<Clothing />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="dashboard" element={<Admin />} />
                <Route path="banner" element={<Banner />} />
                <Route path="header" element={<Header />} />
                <Route path="marquee" element={<Marquee />} />
                <Route path="shopcategories" element={<ShopCategories />} />
                <Route path="bestseller" element={<BestSeller />} />
                <Route path="color-picker" element={<ColorPicker />} />
                <Route path="size-picker" element={<SizePicker />} />
                <Route path="manageproducts" element={<ManageProducts />} />
                <Route path="shopgram" element={<ShopGramAdmin />} />
                <Route path="shopthelook" element={<ShopTheLook />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
