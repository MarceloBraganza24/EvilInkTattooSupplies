import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemCount from './ItemCount'

const ItemDetail = ({products}) => {

    const {id} = useParams()
    

    const [tattooProduct, setTattooProducts] = useState([])

    useEffect(() => {

        const db = getFirestore()

        const tattooRef = doc(db, "TattooProducts", `${id}`)

        getDoc(tattooRef).then((snapshot) => {

            if (snapshot.exists()) {
                setTattooProducts(snapshot.data())
            } else {
                console.log("No such document!")
            }

        }) 

    },[]);

    const filteredTattooProducts = products.filter((product) => product.id === id)
   


  return (
    <>
 
      {

            filteredTattooProducts.map((product) => {

            return(

            <>

                <div className='detail'>

                    <div className='detail__img'>
                        <img className='detail__img__prop' src={product.img} alt="img" />
                    </div>

                    <div className='detail__data'>

                        <div className='detail__data__title'>{product.title}</div>

                        <div className='detail__data__description'>{product.description}</div>

                        <div className='detail__data__price'>
                            <div>$</div>
                            <div>{product.price}</div>    
                        </div>

                        <ItemCount 
                        id={product.id}
                        img={product.img}
                        title={product.title}
                        description={product.description}
                        price={product.price}

                        />

                    </div>

                </div>

            </>

            )

        })

      }
    
    </>
  )
}

export default ItemDetail