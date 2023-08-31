import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const UlCategories = () => {

  const [tattooProducts, setTattooProducts] = useState([])

  useEffect(() => {
      
    const db = getFirestore()
    
    const itemsCollection = collection(db,"TattooProducts")

    getDocs(itemsCollection).then((snapshot)=>{

        const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
        
        setTattooProducts(docs)
    })
    
},[])

  
  return (
    
    <div className='categoryList'>

        <ul className='categoryList__ulCategorias'>

        <Link to={`/category/${'Maquinas Pen'}`} className='categoryList__ulCategorias__li'>Maquinas Pen</Link>
        <Link to={`/category/${'Descartables'}`} className='categoryList__ulCategorias__liUltimo'>Descartables</Link>

        </ul>

        {
            tattooProducts.map((tattooProduct)=>{

            return (

                <Item
                key={tattooProduct.id}
                id={tattooProduct.id}
                img={tattooProduct.img}
                title={tattooProduct.title}
                price={tattooProduct.price}
                />
                
            )

            })
        }

    </div>

  )
}

export default UlCategories