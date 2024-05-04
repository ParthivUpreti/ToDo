import { useState } from "react";
import styles from './App.module.css';
import UI from "./UI";
import data from "./assets/store/Contextapi";
const App=()=>{
  let [arr,setarr]=useState([]);
  let [togglebtn,settogglebtn]=useState("Hide ToDoList");

  function handletoggle(){
      if(togglebtn=="Hide ToDoList")
      {
        settogglebtn("Show ToDoList");
      }
      else{
        settogglebtn("Hide ToDoList");
      }
  }

    return(<>
    <data.Provider value={[arr,setarr]}>
      {togglebtn=="Hide ToDoList" && <UI/>}
      <button className={styles.btn} onClick={handletoggle}>{togglebtn}</button>
    </data.Provider>
    </>)
}

export default App;