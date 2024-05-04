import { useContext } from 'react';
import styles from './TaskUi.module.css'
import data from './assets/store/Contextapi';
import { MdDelete } from "react-icons/md";
const TaskUi=({obj})=>{
    let arr=useContext(data)[0];
    let setarr=useContext(data)[1];
    function deletehandler(){
        let newarr=arr.filter((ele)=>{
            return(ele!=obj);
        })
        setarr(newarr);
    }
    return(
        <div className={styles.item}>
            <h2 className={styles.task}>{obj.task}</h2>
            <p>{obj.date}</p>
            <button className={styles.btn} onClick={deletehandler}><MdDelete/></button>
        </div>
    )
}

export default TaskUi;