import './customButton.css';
function CustomButton({content ="Button"})
{
    return(<button id="button">
        {
            content
        }
    </button>);
}
export default CustomButton;