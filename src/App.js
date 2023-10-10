import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Cards from './Components/Cards'
import Loader from './Loader';
function App() {
let [abc, setAbc] = useState([])
  return (
    <div className="App">
      <Navbar setAbc={setAbc} />
      <div className='d-flex flex-wrap justify-content-around mt-5'>
        {
          (abc.length) ? abc.map((user) => {
            return (
              <Cards
                name={user.first_name}
                names={user.last_name}
                email={user.email}
                ava={user.avatar}
              />
            )
          }) : <Loader />

        }
      </div>
    </div>
  );
}

export default App;
