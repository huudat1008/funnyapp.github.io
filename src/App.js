import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [menu, setMenu] = useState(JSON.parse(localStorage.getItem('menu')) || []);
  const [random, setRandom] = useState('');

  const [formInput, setFormInput] = useState('');

  const handleChange = (e) => {
    setFormInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput !== '') {
      setMenu([...menu, formInput])
      setFormInput('')
    }
  }

  const handleRemove = (index) => {
    const newMenu = [...menu]
    newMenu.splice(index, 1)
    setMenu(newMenu)
  }

  const handleRemoveAll = () => {
    setMenu([])
    setRandom('')
  }

  const handleRandom = () => {
    setRandom(menu[Math.floor(Math.random()*menu.length)])
  }

  useEffect(() => {
    localStorage.setItem('menu', JSON.stringify(menu))
    setRandom('')
  }, [menu])

  return (
    <div className="container">
      <div className="random-items my-5">
        <h1>Input Menu</h1>
        <Form formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit} />
        <Menu menu={menu} handleRandom={handleRandom} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} />
        {
          random !== '' &&
          <div className="result">
            <h1 className='text-center'>Result</h1>
            <h1 className='text-center'>{random}</h1>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
