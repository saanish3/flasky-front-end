import React from 'react';

const Dog = ()=>{
    const sayWoof = ()=> (
        console.log ("Woof")
    );

    return(
        <section>
            <h3>Name of Dog</h3>
            <button onClick={sayWoof}>
                Pet Dog
            </button>

        </section>
    )
}

export default Dog;

