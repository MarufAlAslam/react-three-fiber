import Main from "./components/main";
import Sidebar from "./components/sidebar";
import './assets/styles/style.css'

function App() {
  return (
    <div className="App flex justify-between items-start">
      <div className="w-9/12">
        <Main/>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
