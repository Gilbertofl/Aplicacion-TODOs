import './css/TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete }){
    return (
      
      <li className='Card'>
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>V</span>
        <p className={` ${completed && 'text-Card'}`}>{ text }</p>
        <span className='Icon Icon-delete' onClick={onDelete}>X</span>
      </li>
      
    );
}

export { TodoItem };