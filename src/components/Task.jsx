import React, { useRef } from "react";
import { AddModel } from "./AddModel";

export const Task = ({ id,title, type, description, deletehandel ,editTask}) => {
  const editDialog = useRef();
  function handelEditClick() {
    editDialog.current.showModal();
  }

  function editPass(id,title,type,desc){
    editTask(id,title,type,desc)
  }


  return (
    <>
      <AddModel refi={editDialog} task="edit" id={id} title={title} des={description} type={type} editTask={editPass}/>
      <div className="bg-white w-full flex flex-col  gap-4 mt-2 px-4 rounded-2xl py-4">
        <h1>
          Title : <strong>{title}</strong>
        </h1>
        <h6>
          Type : <strong>{type}</strong>
        </h6>
        <p>{description}</p>
        <div className="flex w-full justify-around">
          <button
            className="bg-amber-600 px-5 py-2 font-bold rounded-sm hover:bg-amber-500 text-white"
            onClick={handelEditClick}
          >
            Edit
          </button>
          <button
            className="bg-red-600 px-5 py-2 font-bold rounded-sm hover:bg-red-500 text-white"
            onClick={()=>{deletehandel(id)}}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
