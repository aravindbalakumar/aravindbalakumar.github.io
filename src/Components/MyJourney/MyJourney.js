import './myJourney.css';
import work from './../../Assets/Images/Icons/work.png'
import edu from './../../Assets/Images/Icons/edu.png'
import { FaBookBookmark,FaSuitcase } from "react-icons/fa6";
import { IconContext } from 'react-icons';

function MyJourney() {
    return (
        <>
                <div className='timeLineContainer'>
            <ul className='WrkExpList'>
                <li><JobContainer jobName="Masters in Interaction and experience Design" companyName="University of Limerick" from="Sep 2024" to="Sep 2025"  /></li>
                <li><JobContainer jobName="Game Programmer" companyName="Pixcellplay Games" from="Oct 2023" to="Apr 2024" isWork/></li>
                <li><JobContainer jobName="Game Programmer" companyName="Nokout Games" from="Jun 2022" to="Sep 2023" isWork/></li>
                <li><JobContainer jobName="Unity Developer" companyName="Inspirit" from="Sept 2021" to="Jun 2022" isWork/></li>
                <li><JobContainer jobName="Game Programmer" companyName="Foretell" from="May 2021" to="Aug 2021" isWork/></li>
                <li><JobContainer jobName="Junior Programmer" companyName="Hard n Soft" from="Aug 2018" to="Mar 2021" isWork/></li>
                <li><JobContainer jobName="PG Diploma in Game Development" companyName="ICAT media college" from="Aug 2017" to="July 2018" /></li>
                <li><JobContainer jobName="Web Developer" companyName="Viralbae" from="Aug 2016" to="Jun 2017" isWork/></li>
                <li><JobContainer jobName="B.E Computer Science" companyName="St Joseph's Institute of Technology" from="Aug 2012" to="Aug 2016" /></li>
            </ul>
            </div>


        </>
    );
}
export default MyJourney;

function JobContainer({ jobName = "Job Name", companyName = "Company Name", from = "Jan-1990", to = "current" ,isWork=false}) {
    return (

        <div id="JobContainer">
            {/* overall div*/}
            <div id='Line'>
                {/* <div id='dot'>{isWork?<img id="icon_work" src={work}/>:<img id="icon_edu" src={edu}/>}</div> */}
                {/* dot with circle */}
                <IconContext.Provider value={{ color: "#d9d9d9", size: "1.0rem" }}>
                <div id='dot'>{isWork?<FaSuitcase id='icon_work'/>:<FaBookBookmark id="icon_edu"/>}</div>
                </IconContext.Provider>
                <span id="Title"><b>{jobName}</b></span>
                
            </div>
            <div id='Line'>
                <div id='noDot'></div>
                <span id="SubTitle">{companyName}</span>
            </div>
            <div id='Line'>
                <div id='noDot'></div>
                <span id="SubTitle">{from} to {to}</span>
            </div>
        </div>




    );
}

