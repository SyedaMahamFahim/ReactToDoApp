
import React,{useState} from 'react'
import '../App.css'
import ToDoPNG from "../Media/do-todo-list-icon.png"
const ToDo=()=> {
const [inputData,setInputData]=useState('')
const [items,setItems]=useState([])

const addItem=()=>{
    if(inputData==""){
        alert("Please enter any ToDo in the list")
    }else{
        setItems([...items,inputData])
        setInputData('')

    }  
}
const deleteItems=(id)=>{
    console.log(id)
    const Updateditems=items.filter((elements,index)=>{
        return index !== id;
    });
    setItems(Updateditems)
}
const removeAll=()=>{
    setItems([])
}
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={ToDoPNG} alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder="✍ Add Items..."
            value={inputData}
            onChange={(e)=>setInputData(e.target.value)}
            />
 <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                      

          </div>
         
          <div className="showItems">
           {
               items.map((elements,index)=>{
                   return(
                    <div className="eachItem" key={index}>
                    <h3>{elements}</h3>
                    <div className="todo-btn">
                      <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>{deleteItems(index)}}></i>
                    </div>
                  </div>
                   )
               })
           }
          </div>
          {/* clear all button  */}
          <div className="showItems">
            <button onClick={removeAll}className="btn effect04" data-sm-link-text="Remove All"><span> CHECK LIST </span> </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
