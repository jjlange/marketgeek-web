import React, { useState } from "react";

const Search = (props) => { 
  const [enteredTitle, setEnteredTitle] = useState('');//individual state approach 1
  const [enteredAuthor, setEnteredAuthor] = useState('');//individual state approach 2
  const [enteredDate, setEnteredDate] = useState('');//individual state approach 3
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {//components multiple states
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,//ovveride enteredTitle using ... - spread operator
    //   enteredTitle:event.target.value,//puls out key-value pair and adds them to new object 
    // })
    // setUserInput((prevState) => {
    //   return {...prevState,enteredTitle: event.target.value };
    // });//update is scheduled, React garantee latest state snapshot
  };

  const authorChangeHandler = (event) => {//components multiple states
    setEnteredAuthor(event.target.value);   
    // setUserInput({
    //   ...userInput,//ovveride enteredTitle using ... - spread operator
    //   enteredAmount:event.target.value,//puls out key-value pair and adds them to new object  
    // })
  };

  const dateChangeHandler = (event) => {//components multiple states
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,//ovveride enteredTitle using ... - spread operator
    //   enteredDate:event.target.value,//puls out key-value pair and adds them to new object  
    // })//this an alternative to have individual tree slices
  };
  const submitHandler = (event) =>{
    event.preventDefault();
    const searchData = {
      title:enteredTitle,
      author:enteredAuthor,
      date:new Date(enteredDate)
    };
    props.onSaveSearchData(searchData);//executed 
    setEnteredTitle('');//after form get submites, set title to empty string 
    setEnteredAuthor('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-red dark:bg-slate-900 min-h-screen px-4 font-ubuntu overflow-visible relative">
        <div className="">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
      </div>
      <div className="bg-red dark:bg-slate-900 min-h-screen px-4 font-ubuntu overflow-visible relative">
        <div className="">
          <label>Author</label>
          <input amount="text" min="0.01" value={enteredAuthor} onChange={authorChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="01-01-1970" max="31-12-2050" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>{/*button does not submit the form because type is button, function stored onCancel in newExpense.js*/}
        <button type="submit">Search</button>
      </div>
    </form>
    /*type of input data is text and and number - numerical value, Form submision button*/
  );
};

export default Search;
