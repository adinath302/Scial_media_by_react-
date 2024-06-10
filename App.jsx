import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/Create-post";
import PostList from "./components/Post-list";
import { useState } from "react";
import PostListProvider from "./store/Post-List-store";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <PostListProvider>
      <div className="App-container">
        <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab} />
        <div className="Content">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
