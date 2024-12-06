import "./myProjects.css"
import Project from "../../Components/Projects/Project";
import data from "./../../Assets/Other/Projects.json";

import { useEffect,useState} from 'react';
import { database } from '../../Components/utils';
import { onValue, ref } from 'firebase/database';

function MyProjects() 
{
    
    return (
        
        <>
            <center><h2 id="Container">Projects</h2>
            </center>
            
            <ul id="myProjects">
            {data.Projects.map((projectDatum, index) =>
                <li><Project key={index} projectDatum={projectDatum} /></li>)}

            </ul>
        </>
    );
}
export default MyProjects;