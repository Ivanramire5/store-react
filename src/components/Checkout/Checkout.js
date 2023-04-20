import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
// import { db } from '../../service/firebase/firebaseConfig'
// import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { addOrder } from "../../services/firebase/firestore/orders"
import { useAsync } from '../../hooks/useAsync'


    function Form () {
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useNotification()
    const [ user, setUser] = useState ({})


    const {newOrder} = useParams ()

    const getOrdersWithId = () => addOrder (newOrder)

    const { data: orders, error, loading } = useAsync (getOrdersWithId, [newOrder])


    const handleConfirm = async (userData) => {
        try{ 
            const objOrder = {
                buyer: {
                    name: '',
                    phone: '',
                    address: ''
                },
                items: cart,
                total: total
            }
        } catch (error) {
                setNotification('error', 'Hubo un error generando la orden')
                } finally {
                    
                }
        }
    

        const CampoDeFormulario = ({ label, name }) => {
                return (
                <div>
                    <label htmlFor={name}>{label}</label>
                    <input type="text" id={name} name={name} value={user[name]} onChange={handleConfirm}/>
                </div>
                );
            };

        return (
            <div className='FormularioReact'>
                <h1 className='h1Formulario'>Complete sus datos para terminar la compra</h1>
                    <form>
                            <CampoDeFormulario label="Nombre:" name="nombre" />
                            <CampoDeFormulario label="Apellido:" name="apellido" />
                            <CampoDeFormulario label="Código Postal:" name="codigoPostal" />
                            <CampoDeFormulario label="Teléfono:" name="telefono" />
                            <CampoDeFormulario label="Correo Electrónico:" name="correoElectronico" />
                            <CampoDeFormulario label="Dirección:" name="direccion" />
                        
                        <button className='botonFormulario'> Terminar compra </button>
                    </form>
                    {
                        orders?.map (order =>{
                            return (
                                <NavLink key={order.id} onChange={handleConfirm} />
                            )
                        })
                    }
                    {/* <div className='datos del formulario'>
                    <h1>{ greeting }</h1>
                    {
                    orders.map (order => {
                        return (
                            <input key={order.id}>{orderId.label}</input>
                        )
                        })
                    }
                </div> */}
            </div>
        )    
}
export default Form;
