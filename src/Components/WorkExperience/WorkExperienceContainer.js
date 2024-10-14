import './workExperienceContainer.css';
function WorkExperienceContainer() {
    return (
        <>
            <center><b>Work Experience :</b>
            <ul className='WrkExpList'>
                <li>{JobContainer("Game Programmer","Pixell Play Private Limited","Sep 2023","Apr 2024")}</li>
                <li>{JobContainer("Game Programmer","Nokout Games","Jun 2022","Sep 2022")}</li>
                <li>{JobContainer("Unity Developer","Inspirit","Sept 2021","Jun 2022")}</li>
                <li>{JobContainer("Game Programmer","Foretell","May 2021","Aug 2021")}</li>
                <li>{JobContainer("Junior Programmer","Hard n Soft","Aug 2018","Mar 2021")}</li>
                <li>{JobContainer("Web Developer","Viralbae","Aug 2016","Jun 2017")}</li>
            </ul>
            </center>
        </>
    );
}
export default WorkExperienceContainer;

function JobContainer(jobName="Job Name",companyName="Company Name",from="Jan-1990",to="current")
{
    return (
        <div id="JobContainer">
            <div id="JobName">{jobName}</div>
            <div id="CompanyName">{companyName}</div>
            <div id="Duration">{from} to {to}</div> 
        </div>
    );
}