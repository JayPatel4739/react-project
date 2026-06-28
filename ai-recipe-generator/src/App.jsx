import "./App.css"
import Header from "./components/Header";
import Recipe from "./components/Recipe";

export default function App() {
  return(
    <div className="app-container">
      <Header />
      <Recipe />
    </div>
  )
}