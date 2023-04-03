import React, { useState } from 'react'

const Form = () => {
    const [firstInp, setFirstInp] = useState("");
    const [secondInp, setSecondInp] = useState("");
    const [inputEmpty, setInputEmpty] = useState(false);
    const [checkInp, CheckEmpty] = useState(false);

    const sameInput = (e) => {
       if(e.target.name == "name"){
          setFirstInp(e.target.value);
       }
       else{
          setSecondInp(e.target.value);
       }
    }

    const checked =(e) =>{
        if(e.target.check === false){
            CheckEmpty(false)
        }
        else{
            CheckEmpty(true)
        }

    }

    const submitHandle = (e) => {
       e.preventDefault();

       setInputEmpty(true);
    //    console.log(firstInp,secondInp,checkInp)
       let a =[{
        name:firstInp,
        name2:secondInp,
        Complete:checkInp,
       }];

      a.map((values) => {
        console.log(values.name, values.name2, values.Complete);
      })
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
          <input name='name' onChange={sameInput}></input>
            {firstInp == "" && inputEmpty && <div>Please Fill the first box</div>}
          <input onChange={sameInput}></input>
            {secondInp == "" && inputEmpty && <div>Please Fill the second box</div>}
          <input name ="check" onChange={checked} type="checkbox"></input>
          <input type='submit' ></input>
        </form>
    </div>
  )
}

export default Form

