import React, {useState} from 'react';
import List from '../images/list.svg';

const Todo = () => {
    //defining useState
    const [inputData, setInputData] = useState('');
    const [items,setItems] =useState([]);
    const [editedItem,setEditedItem] = useState("");
    const [toggleBtn,setToggleBtn] = useState(false);
    //defining function
    const addList=(val)=>{
       setInputData(val);
    }

    //add items in the list
    const addItems =()=>{
        if(!inputData) {
            alert("Enter some data")
        }
        else if(inputData && toggleBtn) {
           setItems(
               items.map((curEl,i)=>{
                   if(i===editedItem){
                       return inputData;
                   } else {
                       return curEl;
                   }
               })
           )
           setToggleBtn(false);
           
        } else {
            setItems([...items,inputData]);
        }
        setInputData("")
        
    }

    //removes selected item in the list
    const deleteItem =(ind)=>{
        const updatedList =items.filter((curEl,index)=>{
         return (
             index !== ind
         )
        })
        setItems(updatedList);
       
    }

    //removes all the items
    const deleteAll =()=>{
        setItems([]);
    }

    //editing item
    const editItem =(ind)=>{
       const editedItem=items.find((curEl,index)=>{
        return (
            index === ind )
       })
       
       setInputData(editedItem);
       setToggleBtn(true);
       setEditedItem(ind);
    }

    
    return (
        <main>
              
                <header>
                  <img src={List} alt="todo logo" />
                  <h1>Add your List Here</h1>
                </header>
                <div className="addList">
                    <input type="text" placeholder="Add item here" value={inputData} onChange={(e)=>{addList(e.target.value)}}/>
                   
                    {toggleBtn?
                        
                        <i className="far fa-edit edit togIcon" onClick={()=>{addItems()}} ></i>:
                        <i className="fas fa-plus togIcon" onClick={()=>{addItems()}}></i> 
                    }
                   
                    
                    
                </div>
                <div className="showList">
                        <ul>
                        {items.map((item,index)=>{
                            return (
                                <li key={index}>
                            <h3>{item}</h3>
                            <div className="icons">
                            <i className="far fa-edit edit" onClick={()=>{editItem(index)}}></i>
                            <i className="far fa-trash-alt delete" onClick={()=>{deleteItem(index)}}></i>
                            </div>
                            </li>
                            )
                        })}
                            
                            
                        </ul>
                        <button onClick={()=>{deleteAll()}}>Remove All</button>
                </div>
                    
             
            
        </main>
    )
}

export default Todo
