import CardGenero from '../CardGenero/CardGenero';
import Styles from './EstadoVisto.module.css'

const EstadoVisto = ({ estado, cantVista , CantTiposGenero, mostrarVista , useStateArrayPelisSeries}) => {

    function conteoPorGenero(Array){
    return Array.reduce((acc, peli) => {
        acc[peli.genero] = (acc[peli.genero] || 0) + 1;
        return acc;
        }, {});
    } 
      
    const mostrarCardGenero = () => {
        if (mostrarVista){
            let arrayAux = useStateArrayPelisSeries.filter((peli) => peli.visto)
            return Object.entries(conteoPorGenero(arrayAux)).map(([genero, cantidad]) => (
                <CardGenero key={genero} genero={genero} cant={cantidad} />
            ));
        }
        let arrayAux = useStateArrayPelisSeries.filter((peli) => !peli.visto)
        return Object.entries(conteoPorGenero(arrayAux)).map(([genero, cantidad]) => (
            <CardGenero key={genero} genero={genero} cant={cantidad} />
        ));    
    }
        
    return (
        <div className={Styles.container_vistas}>
            <div>
            <select className={Styles.selectEstadisticas}>
                <option>{estado}</option>
                <option>Cantidad Vistas {cantVista}</option>
                <option>Cantidad Géneros {CantTiposGenero}</option>
            </select>

            </div>
            <div className={Styles.container_cant_vistas_generos}>
                {mostrarCardGenero()}                
            </div>

        </div>
    )
}

export default EstadoVisto;