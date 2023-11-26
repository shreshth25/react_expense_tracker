import Form from "./components/Form"
import List from "./components/List"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="container">
      <div className="row text-center m-5 p-2">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <Form/>
        </div>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <Navbar/>
          <br/>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default App
