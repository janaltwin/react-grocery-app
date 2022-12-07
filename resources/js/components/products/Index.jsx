import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {

    const navigate = useNavigate()
    const [products,setProducts] = useState([])
    const newProduct = () => {
        navigate('/product/new')
    }

    useEffect(()=>{
        getProducts()
    })
    const getProducts = async () =>{
        await axios.get('/api/get_all_product')
            .then(({data})=>{
             setProducts(data.products)   
            })
    }

  return (
    <div className='container'>
        <div className="product_list">
            <div className="titlebar">

                <div className="titlebar_item">
                    <h1>Products</h1>
                </div>

                <div className="titlebar_item">
                        <div className="btn" onClick={()=>newProduct()}>
                            +Add Product
                        </div>

                </div>
            </div>

            <div className="table">
                <div className="list_header">
                    <p>Image</p>
                    <p>Products</p>
                    <p>Type</p>
                    <p>Inventory</p>
                    <p>Actions</p>
                </div>
                {
                    products.length > 0 &&(
                        products.map((item, key)=>(
                            <div className="list_items" key={key}>
                                <img src={`/upload/${item.photo}`} height='40px'/>
                                <a>{item.name}</a>
                                <p>{item.type}</p>
                                <p>{item.quantity}</p>
                                <div>
                                    <button className='btn-icon success'>
                                    <i className='fas fa-pencil-alt'></i>
                                    </button>
                                    <button className="btn-icon danger bg-red-500">
                                    <i className="far fa-trash-alt bg-red-600"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default Index

