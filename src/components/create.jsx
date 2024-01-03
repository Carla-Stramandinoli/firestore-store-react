import React from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase/config'

function Create() {
  const [description, setDescription] = React.useState("");
  const [stock, setStock] = React.useState(0);

  const navigate = useNavigate();

  const productsCollection = collection(db, "products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, { description: description, stock: stock })
    navigate('/')
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Crear producto</h1>

          <form onSubmit={store}>

            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Stock</label>
              <input
                type="number"
                className="form-control"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <button type='submit' className='btn btn-primary'>Store</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create;