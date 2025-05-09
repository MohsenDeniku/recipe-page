import React from "react";

import "./App.css";

import Header from "./components/Header";
import Preparation from "./components/Preparation";
import ListLayout from "./layout/ListLayout";
import NutritionLayout from "./layout/NutritionLayout";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <img src="images/image-omelette.jpeg" alt="omelette" />
        <main>
          <Header />
          <Preparation />
          <ListLayout />
          <NutritionLayout />
        </main>
        <Footer />
      </div>
    </div>
  );
}
