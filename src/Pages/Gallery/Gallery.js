import { useState } from "react";
import "./gallery.css"
function Gallery() {

    var maxImage = 0;
    const [index, setIndex] = useState(0);



    
    const images = [
        'corporate.png',
        'ProjectImages/ARDecors_1.png',
        'ProjectImages/ARDecors_2.png',
        'ProjectImages/ARDecors_3.png',
        'ProjectImages/ARDecors_Logo.png'
        // Add more image URLs as needed
      ];
      maxImage=images.length;
    function OnNext() {

        if (index + 1 > maxImage - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function OnPrevious() {

        if (index - 1 < 0) {
            setIndex(maxImage - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    return (
        <>
            <center>
                <h2 id="Container" >My media</h2>
            </center>
            <div id="galleryView">
                <button onClick={OnPrevious}>&lt;</button>
                {/* <div id="gallery_viewPort"> */}
                    {/* <img id="gallery_image" src={require(`./../../Assets/Images/${images[index]}`)} /> */}
                {/* </div> */}
                <button onClick={OnNext}>&gt;</button>
            </div>


        </>
    );
}
export default Gallery;
