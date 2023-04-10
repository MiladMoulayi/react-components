// TODO
const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
    <h2>Grocery List</h2>
    <GroceryList items={['Cucumbers', 'Kale', 'Spinach', 'Bananas']}/>
  </div>
);

const {useState} = React;

const TodoList = (props) => (
    <ul>
      {props.todos.map((todo) => (
        <TodoListItem todo={todo}/>
      ))}
    </ul>
);

const TodoListItem = (props) => {

  const [isDone, setIsDone] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none'
  };

  return (
    <li style={style} onClick={() => setIsDone(!isDone)}>
      {props.todo}
    </li>
  );
};


const GroceryList = (props) => (
 <ul>
  {props.items.map((item) => (
    <GroceryListItem item={item}/>
  ))}
 </ul>
)

const GroceryListItem = (props) => {

  const [isBold, setIsBold] = useState(false);

  const style = {
    'font-weight': isBold ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setIsBold(true)} onMouseLeave={() => setIsBold(false)}>{props.item}</li>
  )
}

const Cucumbers = () => (
  <li>cucumbers</li>
)

const Kale = () => (
  <li>kale</li>
)

ReactDOM.render(<App />, document.getElementById("app"));

