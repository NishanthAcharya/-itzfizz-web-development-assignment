import {  useState } from "react";

function Practice()
{
    let [allnames,setAllnames] = useState([]);//all array elemenets
    let [text,setText] = useState(" ");//for add text
    let [editIndex,setEditIndex] = useState();//store index
    let [editText , setEditText] = useState();//retext 
    
    function namee(e){
        setText( e.target.value)
    
    }
    function adding()
    {

        setAllnames([...allnames, text])
        setText(" ")
    
    }
    function deletingItem(index)
    {
        let dele = allnames.filter((n,i) => i !== index);
        setAllnames(dele);
    }
    function edit(item)
    {
        setEditIndex(item)
    }

    console.log(editIndex)

    function saving(item)
    {
        let updated = allnames.map((n,i)=>{
            if (i === editIndex)
            {
               setAllnames(editText);
                console.log("Success")
                console.log(allnames)
            }
            else{
               setAllnames(allnames)
            }

        }
        )
         
    }
    console.log(allnames)


    function updatetext(e)
    {
        setEditText(e.target.value)
    }
    return(
        <>
            <h1>Names : </h1>
            <ol>
               {allnames.map((n,item) => <li > {item === editIndex ?
                <> <input type="text" value={editText}
                   onChange={updatetext} />
                   <button onClick={() => saving(item)}>save</button>
                </>
                   : n}
                <button onClick={()=> edit(item)}>Edit</button> <button onClick={()=> deletingItem(item)}>delete</button>  </li>)}
            </ol>
            
            <input type="text" onChange={namee} value={text}/>
            <button onClick={adding}>Add Name</button>
        </>
    )
}
export default Practice;