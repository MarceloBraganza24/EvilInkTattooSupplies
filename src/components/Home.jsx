import React from 'react'
import Item from './Item'

import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const Home = () => {

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
    <>

            <div className='homeContainer'>
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

    </>
  )
}

export default Home