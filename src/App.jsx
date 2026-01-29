import { useRef, useState } from "react";
import { AddButton } from "./components/AddButton";
import { AddModel } from "./components/AddModel";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  const [taskArray, setTaskArray] = useState([
    { id: 1, title: "Task", type: "high", description: "Ketul Add task" },
    { id: 2, title: "Delete", type: "high", description: "Jay Delete Task" },
    { id: 3, title: "Git", type: "high", description: "Ajay redo Commit" },
    { id: 4, title: "App", type: "high", description: "Dolly make Android App" },
    { id: 5, title: "Web", type: "high", description: "Dish make Backend" },
  ]);

  function handleDelet(id) {
    const newtaskArry = taskArray.filter((val) => {
      if (val.id != id) {
        // console.log(val.id!=id);
        return val;
      }
    });
    setTaskArray(newtaskArry);
  }
  function handelAddTask(title,type,description){
    let id = taskArray.length+1;
    
    // console.log(id,title,type,description);
    setTaskArray((previous)=>{
      return [...previous,{id,title,type,description}]
    })
  }

  function handelEditTask(id,title,type,desc){
    console.log(id,title,type,desc);
    setTaskArray((previous)=>{
        return previous.map((val)=>{
          if(val.id==id){
            return {id,title,type,description:desc}
          }else{
            return val
          }
        })
    })
  }

  return (
    <>
      <Header />
      <div className="flex gap-4 h-10 mt-4 mx-2 items-center">
        <Input />
        <AddButton addTask={handelAddTask}/>
      </div>

      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-4 my-4">
        {taskArray.map(({ title, type, description, id }) => {
          return (
            <Task
              key={id}
              title={title}
              type={type}
              description={description}
              deletehandel={handleDelet}
              id={id}
              editTask={handelEditTask}
            />
          );
        })}
      </div>
      {/*
      task with grid it can be edit able and can be delete 
   */}
    </>
  );
}

export default App;
