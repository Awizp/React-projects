// import { useState } from 'react'

// import GetFoodItems from './components/GetFoodItems'
// import GetProductById from './components/GetProductById'
// import AddNewProduct from './components/AddNewProduct'
// import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'
import './App.css'

function App() {

  // const [productId, setProductId] = useState()

  return (
    <div className='app-container'>
      {/* <input className="input-value" type="number"
        style={{ margin: "1rem" }}
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      {productId ? <GetProductById productId={productId} /> :
        <GetFoodItems />} */}

      {/* <AddNewProduct /> */}

      {/* <UpdateProduct productId={3} /> */}

      <DeleteProduct productId={4} />
    </div>
  )
}

export default App
