//todos todos
interface TodoType {
  title: string;
  description: string;
  completed: boolean;
}

interface TodoInput {
    todo: TodoType
}

//react code
// function Todo({todo} : TodoInput) {
//     return <div>
//         <h1> {todo.title} </h1>
//         <p> {todo.description} </p>
//     </div>
// }