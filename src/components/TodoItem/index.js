// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemsDetails, deleteUser} = props
  const {id, title} = todoItemsDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-items">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
