import { useState } from "react";
import Header from "../home/Header";
import ToDoList from "../home/ToDoList";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);import { BtnBox, ToDoBtn, ToDoContainer, boxStyle } from "./styled";

const ToDoList = (props) => {
  const todos = props.todos;
  const handleCompletionOnclick = (currentId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === currentId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    props.onUpdateTodos(updatedTodos);
  };
  const handleRemoveOnclick = (removeId) => {
    props.onRemoveTodo(removeId);
  };
  return (
    <div>
      <div>
        <h2>Working.. 🔥</h2>
        <div style={boxStyle}>
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <ToDoContainer key={todo.id}>
                  <div>
                    <h2>{todo.title}</h2>
                    <spna>{todo.body}</spna>
                  </div>
                  <BtnBox>
                    <ToDoBtn
                      style={{ border: "2px solid red" }}
                      onClick={() => {
                        handleRemoveOnclick(todo.id);
                      }}
                    >
                      삭제하기
                    </ToDoBtn>
                    <ToDoBtn
                      style={{ border: "2px solid green" }}
                      onClick={() => {
                        handleCompletionOnclick(todo.id);
                      }}
                    >
                      완료
                    </ToDoBtn>
                  </BtnBox>
                </ToDoContainer>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <div style={boxStyle}>
          {todos.map((todo) => {
            if (todo.isDone !== false) {
              return (
                <ToDoContainer key={todo.id}>
                  <div>
                    <h2>{todo.title}</h2>
                    <spna>{todo.body}</spna>
                  </div>
                  <BtnBox>
                    <ToDoBtn
                      style={{ border: "2px solid red" }}
                      onClick={() => {
                        handleRemoveOnclick(todo.id);
                      }}
                    >
                      삭제하기
                    </ToDoBtn>
                    <ToDoBtn
                      style={{ border: "2px solid green" }}
                      onClick={() => {
                        handleCompletionOnclick(todo.id);
                      }}
                    >
                      취소
                    </ToDoBtn>
                  </BtnBox>
                </ToDoContainer>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
  };
  const handleRemoveTodo = (removeId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== removeId);
    setTodos(updatedTodos);
  };
    const handleUpdateTodos = (currentId) => {
      setTodos(currentId);
    };
  return (
    <div>
      <Header onAddTodo={handleAddTodo} />
      <ToDoList
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onUpdateTodos={handleUpdateTodos}
      />
    </div>
  );
};

export default HomePage;
