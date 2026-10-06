import React, {useState} from "react";

function MypracticeObjects()
{
    let [bike,setBike] = useState({
        name : "",
        model : null
    });

    function changeName(e)
    {
        setBike({...bike,name:e.target.value})
    }

    function changeModel(e)
    {
        setBike({...bike,model:e.target.value})
    }

    return(
        <div>
            <input type="text" value={bike.name} onChange={changeName} /><br /><br />
            <input type="number" value={bike.model} onChange={changeModel}/>

        </div>
    )
}
export default  MypracticeObjects;