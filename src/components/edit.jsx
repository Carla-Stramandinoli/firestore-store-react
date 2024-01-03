import React, { useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getDoc, updateDoc, doc} from 'firebase/firestore'
import { db } from '../firebase/config'

function Edit() {
  const [description, setDescription] = React.useState("");
  const [stock, setStock] = React.useState(0);

  const navigate = useNavigate();
  const {id} = useParams();

  const update = async(e) => {
    e.preventDefault();
     const product = doc(db, "products", id);
     const data = {description: description, stock: stock}
     await updateDoc(product, data)
     navigate('/')
  }  

const getProductById = async(id) => {
const product = await getDoc(doc(db, "products", id))
if(product.exists()){
console.log(product.data())
setDescription(product.data().description)
setStock(product.data().stock)
} else {
  console.log("el producto no existe")
}
}

useEffect( () => {
  getProductById(id);

}, [])

  return (
    <div>
       <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Edit producto</h1>

          <form onSubmit={update}>

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

            <button type='submit' className='btn btn-primary'>Update</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Edit;