import { useState } from "react";
import "./gallery.css"
function Gallery() {

     var maxImage = 0;
     const [index, setIndex] = useState(0);



    
    const images = [
        {
            id:0,
            des:"Corporate Headshot",
            src:"corporate.png"
        },
        {
            id:1,
            des:"Corporate Headshot",
            src:"ProjectImages/ARDecors_2.png"
        },
        {
            id:2,
            des:"Corporate Headshot",
            src:"ProjectImages/ARDecors_1.png"
        },
        {
            id:3,
            des:"Corporate Headshot",
            src:"ProjectImages/ARDecors_3.png"
        }
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
                <h2 id="Container" >pictures</h2>
            </center>
            <div id="galleryScroll">
                <button onClick={OnNext}>&lt;</button>
                <div id="gallScrollViewCont">
                <div id="gallScrollView">
                    <img key ={images[index].id} id="gallScrollImage" src={require(`./../../Assets/Images/${images[index].src}`)} />
                </div>
                <div id="overlay"><h4>{images[index].des}</h4></div>
                </div>
                <button onClick={OnPrevious}>&gt;</button>
            </div>
            {/* <div id="galleryView">
                <div id="gall_view_port">
                    {images.map((data,index)=>(
                       <div key={index} id="gallery_img_card"> 
                    <img id="gallery_img_cont" src={require(`./../../Assets/Images/${data}`)} />
                    <p id="gallery_img_des"></p>
                    </div>
                ))}
                </div>
            </div> */}

            <center>
                <h2 id="Container" >Video</h2>
            
            <div id="galleryView">
            <iframe id="YoutubePlayer" width="560" height="315" src="https://www.youtube.com/embed/51YGQZ-WkUk?si=ih6cUIwVS2vy83XB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            </div>
            </center>


        </>
    );
}
export default Gallery;
