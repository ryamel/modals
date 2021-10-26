import './App.sass';
import Modal from './modal';
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [modals, setModals] = useState([{id: uuidv4(), top: 100, left: 100}]);
  const [loading, setLoading] = useState(false);

  const addModal = () => {
    if (loading === true) return null;
    setLoading(true);

    setTimeout(() => {
      let newModal = {
        id: uuidv4(),
        top: Math.floor(Math.random() * (window.innerHeight - 100)),
        left: Math.floor(Math.random() * (window.innerWidth - 200))
      }
      let currModals = modals;
      if (currModals.length >= 10) currModals.shift();
      setModals([...currModals, newModal]);
      setLoading(false);
    }, 2000)
  }

  const deleteThisModal = (id) => {
    if (loading === true) return null;
    let newModals = modals.filter((modal) => modal.id !== id ? true : false);
    setModals([...newModals]);
  }

  const renderLoading = () => {
    if (loading === true) {
      return <div id='loading'>Loading...</div>
    } else {
      return null;
    }
  }
  

  return (
    <div className="App">
      { renderLoading() }
      {
        modals.map((modal, index) =>
          <Modal 
            key={index}
            id={modal.id}
            top={modal.top} 
            left={modal.left} 
            addModal={addModal}
            deleteThisModal={deleteThisModal} />
        )
      }
    </div>
  );
}

export default App;
