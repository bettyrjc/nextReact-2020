//componente de ract que trabaje como una pagina
//hot reloading and fast refresh
// pagina basica el index es el hombe de next js
import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <h1>Hola mundo</h1>
        </div>
    )
}

export default Home
