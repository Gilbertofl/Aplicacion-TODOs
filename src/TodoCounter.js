import './css/TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        
      <section className='container-counter'>
        <h2 className='completed-counter'>
        Has completado {completed} de {total} TODOs
        </h2>
      </section>
    );
  }

export { TodoCounter }