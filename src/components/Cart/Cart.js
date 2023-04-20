import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0 ){ 
        return ('No hay productos')
    }else {
        return (
        <div>
            <h1>Cart</h1>
            <div>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            {prod.name}
                            {prod.img}
                            {prod.description}
                        </div>
                    
                    )
                })
            }
            </div>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
        )
    }
}
export default Cart




    // FORMULARIO !!!

    // const { cart } = useContext(CartContext);
    // const [nombre, setNombre] = useState('');
    // const [apellido, setApellido] = useState('');
    // const [telefono, setTelefono] = useState('');
    // const [codigoPostal, setCodigoPostal] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [ciudad, setCiudad] = useState('');
    // const [provincia, setProvincia] = useState('');
    // const [mail, setMail] = useState('')
    // const handleSubmit = (event) => 
    //     event.preventDefault();
    //     setNombre('');
    //     setApellido('');
    //     setTelefono('');
    //     setCodigoPostal('');
    //     setDireccion('');
    //     setCiudad('');
    //     setProvincia('');
    //     setMail('');
    // 
    /* <div className="FormularioReact">
    <form className="EstilosFormulario" onSubmit={handleSubmit}>
    <label className="LabelFormulario">
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Mail:
        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Código Postal:
        <input type="text" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Dirección:
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Ciudad:
        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
    </label>
    <label className="LabelFormulario">
        Provincia:
        <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
    </label>
    </form>
    </div> */
