import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    //Veo lo que escribo en el input
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();//que no recargue la pagina
        if(inputValue.trim().length <= 1) {
            return;//si no tengo mas de 1 letra, no guardo nada
        }
        //setCategories( categories => [ inputValue, ...categories ] ); //pongo rl nuevo input al inicio sin borrar los demas

        onNewCategory( inputValue.trim() );

        setInputValue(''); //me deja el input vacio
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
};