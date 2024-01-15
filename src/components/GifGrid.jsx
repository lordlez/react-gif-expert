import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );


    return (
    <>
        <h3>{ category }</h3>
        {
            //si isLoading es true ejecuta el h2
            isLoading && (<h2>Cargando...</h2>)
        }
        

        <div className='card-grid'>
            {
                images.map( image => (
                    <GifItem
                    key={ image.id }
                    { ...image } />//le envio todas las props y en el componente desestructuro solo las props que yo necesite, eso me ahorra mandale cada props por separado
                ) )
            }
        </div>
    </>
    )
}
