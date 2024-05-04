// UI of this app


// add icon imported from "https://react-icons.github.io/react-icons/"
import { IoAddOutline } from "react-icons/io5";
import styles from './UI.module.css';
import TaskUi from "./TaskUi";
import { useContext, useRef } from "react";
import data from "./assets/store/Contextapi";
import WelcomeMessage from "./WelcomeMessage";
const UI=()=>{
    let task=useRef("");
    let date=useRef("");

    let[arr,setarr]=useContext(data);
    
    function submithandler(){
        let newarr=[...arr];
        newarr=[...newarr,{
            task:task.current.value,
            date:date.current.value,
        }]
        setarr(newarr);
        task.current.value="";
        date.current.value="";
    }

    function keyhandler(event){
        if(event.key=="Enter")
        {
            let newarr=[...arr];
            newarr=[...newarr,{
                task:task.current.value,
                date:date.current.value,
            }]
            setarr(newarr);
            task.current.value="";
            date.current.value="";
        }
    }

    return(
    <div className={styles.container}>
        <div className={styles.item}>
            <input type="text" placeholder="Task ToDo" ref={task} onKeyDown={keyhandler} className={styles.task}></input>
            <input type="date" ref={date}></input>
            <button className={styles.btn} onClick={submithandler}><IoAddOutline/></button>
        </div>
        {arr.length==0 && <WelcomeMessage/>}
        {arr.map((ele)=>{
            return(<TaskUi obj={ele} key={ele.task}></TaskUi>)
        })}
    </div>
    )
}

export default UI;