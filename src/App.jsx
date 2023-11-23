import "./App.css";
import ImageDesc from "./components/ImageDesc";
import ImageLink from "./components/ImageLink";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        {/* <ImageDesc />
        <ImageLink /> */}
        <div className="builder">
          <button className="btn-add">Add Section</button>
          <div className="builder-elements">
            <div className="builder-elements_card">
              <input type="text" placeholder="Text" />
              <input type="file" name="" id="" />
            </div>
          </div>
        </div>
        <div className="preview"></div>
      </div>
    </>
  );
}

export default App;
