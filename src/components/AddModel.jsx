import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export const AddModel = ({
  refi,
  task,
  addTask,
  id = "",
  title = "",
  type = "",
  des = "",
  editTask
}) => {
  const titleRef = useRef();
  const typeRef = useRef();
  const descRef = useRef();

  const [titleS,setTitle] = useState(title);
  const [typeS,setType] = useState(type);
  const [desS,setDes] = useState(des);


  return createPortal(
    <dialog className="w-60 rounded-xl px-2 ml-auto  mr-22 mt-40" ref={refi}>
      <h1 className="text-center font-bold text-3xl my-4 capitalize">
        {task} Task
      </h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task"
          className="border-2 border-balck outline-0 py-2 pl-2 caret-black"
          ref={titleRef}
          onChange={(event)=>setTitle(event.target.value)}
          value={titleS}
        />
        <input
          type="text"
          placeholder="Type"
          className="border-2 border-balck outline-0 py-2 pl-2 caret-black"
          ref={typeRef}
          onChange={(event)=>setType(event.target.value)}
          value={typeS}
        />
        <input
          type="text"
          placeholder="Describtion"
          className="border-2 border-balck outline-0 py-2 pl-2 caret-black"
          ref={descRef}
          onChange={(event)=>setDes(event.target.value)}
          value={desS}
        />
      </div>
      <form method="dialog">
        <div className="flex justify-around">
          <button
            className={
              task == "add"
                ? "bg-blue-800  px-4 py-2 rounded-xl my-4"
                : "bg-amber-600  px-4 py-2 rounded-xl my-4"
            }
          >
            Close
          </button>
          <button
            className={
              task == "add"
                ? "bg-blue-800  px-4 py-2 rounded-xl my-4"
                : "bg-amber-600  px-4 py-2 rounded-xl my-4"
            }
            onClick={() => {
              const title = titleRef.current.value;
              const type = typeRef.current.value;
              const desc = descRef.current.value;
              // console.log(title, type, desc);
              if(id){
                // console.log(id,titleS,typeS,desS);
                editTask(id,titleS,typeS,desS);
                // titleRef.current.value = "";
                // typeRef.current.value = "";
                // descRef.current.value = "";
              }else{
                addTask(title, type, desc);
                titleRef.current.value = "";
                typeRef.current.value = "";
                descRef.current.value = "";
              }
            }}
          >
            {task == "add" ? "Submit" : "Edit"}
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
};
