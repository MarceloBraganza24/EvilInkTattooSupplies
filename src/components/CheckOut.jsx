import { toast } from 'react-toastify';

const CheckOut = () => {

    const confirmarCompra = () => {
        toast('Tu compra se realizó con éxito!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (

        <div className='checkOutContainer'>
            
            <h1 className='checkOutContainer__h1'>- Verificación de compra -</h1>

            <div className='checkOutContainer__entrega'>

                <h2 className='checkOutContainer__entrega__h2'>- ¿Donde quieres recibir tu compra?</h2>

                <div className='checkOutContainer__entrega__btns'>
                    <button className='checkOutContainer__entrega__btns__prop'>A Domicilio</button>
                    <button className='checkOutContainer__entrega__btns__prop'>Retiro en Sucursal</button>
                </div>

            </div>

            <div className='checkOutContainer__pago'>

                <h2 className='checkOutContainer__pago__h2'>- Seleccione un método de pago</h2>

                <div className='checkOutContainer__pago__btns'>
                    <button className='checkOutContainer__pago__btns__prop'>Efectivo</button>
                    <button className='checkOutContainer__pago__btns__prop'>Tarjeta de Débito</button>
                    <button className='checkOutContainer__pago__btns__prop'>Tarjeta de Crédito</button>
                </div>

            </div>

            <div className='checkOutContainer__btnConfCompra'>
                <button onClick={confirmarCompra} className='checkOutContainer__btnConfCompra__prop'>Confirmar Compra</button>
            </div>

        </div>

    )

}

export default CheckOut