import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [provincia, setProvincia] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setNombre('');
        setApellido('');
        setTelefono('');
        setCodigoPostal('');
        setDireccion('');
        setCiudad('');
        setProvincia('');
    }

    return (
        <div>
            <h1 className="carritoFinal">Cart</h1>
            <div className="FormularioReact">
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                {prod.name}
                            </div>
                        )
                    })
                }
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </label>
                    <label>
                        Apellido:
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </label>
                    <label>
                        Teléfono:
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </label>
                    <label>
                        Código Postal:
                        <input type="text" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                    </label>
                    <label>
                        Dirección:
                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    </label>
                    <label>
                        Ciudad:
                        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </label>
                    <label>
                        Provincia:
                        <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
                    </label>
                </form>
            </div>
            <Link className="botonCompra" to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart;
