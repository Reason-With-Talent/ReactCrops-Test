import React from "react";
import Button from "./components/Button"
import Apple from "./assets/img/apple.png"
import Sneakers1 from "./assets/img/image-product-1.jpg"
import Sneakers2 from "./assets/img/image-product-2.jpg"
import Perfume from "./assets/img/image-product-desktop.jpg"
import Home from "./pages/Home"
function App() {

  return (

    <>
      <Button image={<img className="md:w-[300px] md:h-[400px] md:rounded-xl" src={Apple} />} text={"Apple"} price={"$500"} button={"Add To Cart"} />
      <Button image={<img className="md:w-[300px] md:h-[400px] md:rounded-xl" src={Sneakers1} />} text={"Louis Vitton"} price={"$1200"} button={"Add To Cart"} />
      <Button image={<img className="md:w-[300px] md:h-[400px] md:rounded-xl" src={Sneakers2} />} text={"Versace"} price={"$1400"} button={"Add To Cart"} />
      <Button image={<img className="md:w-[300px] md:h-[400px] md:rounded-xl" src={Perfume} />} text={"Tomford Cologne"} price={"$3000"} button={"Add To Cart"} />
      <Home />
    </>
  )
}

export default App

