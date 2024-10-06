import './box.css';

function Box({boxicon,boxName=""})
{
    return(
            <span className="box">
                <img src={boxicon} className="boxIcon">

                </img>
                <span className="boxName">
                {boxName}
                </span>
            </span>
            );
}
export default Box;