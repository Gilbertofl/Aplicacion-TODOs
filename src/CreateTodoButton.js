import './css/CreateTodoButton.css'

function CreateTodoButton() {
    return(

        <section className='container-button'>
            <button className='create' 
            onClick={
                (event) => {
                    console.log('funciona jejeje')
                    console.log(event)
                }}>+</button>
        </section>
    );
}

export { CreateTodoButton };