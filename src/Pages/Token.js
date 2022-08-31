import React, {useState, useRef} from 'react';

function Token() {

  const textInput = useRef(null);
  const save = useRef(null);
  const clear = useRef(null);
  const change = useRef(null);

  const [inputIsDisabled, inputSetDisabled] = useState(!localStorage.getItem('authToken') ? false : true);
  const [saveIsDisabled, saveSetDisabled] = useState(!localStorage.getItem('authToken') ? false : true);
  const [clearIsDisabled, clearSetDisabled] = useState(!localStorage.getItem('authToken') ? false : true);
  const [changeIsDisabled, changeSetDisabled] = useState(!localStorage.getItem('authToken') ? true : false);
  
  const AuthFromCache = !localStorage.getItem('authToken') ? "" : localStorage.getItem('authToken');
  
  const saveButtonClick = () => {     

    if(textInput.current.value !== '') {
      var token = textInput.current.value;
      localStorage.setItem('authToken', token);
      inputSetDisabled(true);
      saveSetDisabled(true);
      clearSetDisabled(true);
      changeSetDisabled(false);
    }
  };

  const clearButtonClick = () => {
    textInput.current.value = "";
  };
  
  const changeButtonClick = () => {
    localStorage.clear();
    inputSetDisabled(false);
    saveSetDisabled(false);
    clearSetDisabled(false);
    changeSetDisabled(true);
  };

  return (
    <div className='tokenView'>
      <h1 className='tokenView-title'>Copy your bearer token below</h1>
      <textarea className='TokenInput' disabled={inputIsDisabled} ref = {textInput}>
        {AuthFromCache}
      </textarea>
       
      <ul>
        <li><button className='enterTokenButton' 
        disabled={saveIsDisabled} 
        onClick={saveButtonClick} ref = {save}>Save</button></li>

        <li><button className='clearTokenButton' 
        disabled={clearIsDisabled} 
        onClick={clearButtonClick} ref = {clear}>Clear</button></li>

        <li><button className='changeTokenButton' 
        disabled={changeIsDisabled} 
        onClick={changeButtonClick} ref = {change}>Change</button></li>
      </ul> 
    </div>
  );
}

export default Token;