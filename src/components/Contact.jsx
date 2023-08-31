import React from 'react'

const Contact = () => {

  return (

    <div className='contactContainer'>

        <div className='contactContainer__divContact'>

            <div className='contactContainer__divContact__rzdp'>
                <div>
                    <div>Razón Social:</div>
                    <div>Evil Ink Tattoo Supplies</div> 
                </div>

                <div>
                    <div>Dirección Postal:</div>
                    <div>Av Cabildo 1526, CABA</div> 
                </div> 
            </div>

            <div className='contactContainer__divContact__rzdp'>
                <div>
                    <div>Teléfono:</div>
                    <div>11568925368</div> 
                </div>

                <div>
                    <div>Redes Sociales:</div>
                    <div className='contactContainer__divContact__rzdp__redes'>

                        <div className='contactContainer__divContact__rzdp__redes__red'>
                            <img src="../src/assets/whap.webp" alt="cartWidget" className='contactContainer__divContact__rzdp__redes__red__whap'/>
                        </div>

                        <div className='contactContainer__divContact__rzdp__redes__red'>
                            <img src="../src/assets/face.webp" alt="cartWidget" className='contactContainer__divContact__rzdp__redes__red__prop'/>
                        </div>

                        <div className='contactContainer__divContact__rzdp__redes__red'>
                            <img src="../src/assets/insta.webp" alt="cartWidget" className='contactContainer__divContact__rzdp__redes__red__prop'/>
                        </div>

                    </div>   
                </div> 
            </div>

        </div>

    </div>

  )

}

export default Contact