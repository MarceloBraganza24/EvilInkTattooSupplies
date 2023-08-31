import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [tattooProducts, setTattooProducts] = useState([])

    useEffect(() => {

        const db = getFirestore()

        const itemsCollection = collection(db,"TattooProducts")
        getDocs(itemsCollection).then((querySnapshot)=>{

            const docs = querySnapshot.docs.map((doc) => ({

            ...doc.data(),
            id: doc.id,

        }));


        setTattooProducts(docs)
        });

    },[])

  return (
    
    <>

        <div className='itemDetailContainer'>

          <ItemDetail
          products={tattooProducts}
          
          />
          
        </div>

    </>

  )
}

export default ItemDetailContainer