import React from 'react'
import ItemList from './itemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => {

    const [tattooProducts, setTattooProducts] = useState([])

  
  
    useEffect(() => {
      
        const db = getFirestore()
        
        const itemsCollection = collection(db,"TattooProducts")

        getDocs(itemsCollection).then((snapshot)=>{

            const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
            
            setTattooProducts(docs)
        })
        
    },[])
    

  const {category} = useParams() 
  
  const filteredProducts = tattooProducts.filter((tattooProduct)=>tattooProduct.category === category)

  return (
    <>

      <div className='itemListContainer'>

        <ItemList
          products={filteredProducts}

        />
        
      </div>

    </>
    

  )
}

export default ItemListContainer