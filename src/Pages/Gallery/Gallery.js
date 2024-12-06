import { useState } from "react";
import "./gallery.css"
function Gallery() {

     var maxImage = 0;
     const [index, setIndex] = useState(0); // the Image to load



    // Data of the images
    const images = [
        {
            id:0,
            des:"Corporate Headshot",
            src:"Gallery/1.jpg"
        },
        {
            id:1,
            des:"UL campus",
            src:"Gallery/2.jpg"
        },
        {
            id:2,
            des:"Limerick City",
            src:"Gallery/3.jpg"
        },
        {
            id:3,
            des:"Gang",
            src:"Gallery/4.jpg"
        },
        {
            id:4,
            des:"Aisle of poison plants",
            src:"Gallery/5.jpg"
        },
        {
            id:5,
            des:"Black valley",
            src:"Gallery/6.jpg"
        },
        {
            id:6,
            des:"Murral",
            src:"Gallery/7.jpg"
        },
        {
            id:7,
            des:"Estate fountain",
            src:"Gallery/8.jpg"
        },
        {
            id:8,
            des:"Night sky",
            src:"Gallery/9.jpg"
        },
        {
            id:9,
            des:"Feline supermacy",
            src:"Gallery/10.jpg"
        }
      ];
      maxImage=images.length;
      //Loads nextImage 
    function OnNext() {

        if (index + 1 > maxImage - 1) {
            //if next index greter than last index set index to 0 to create infinite scroll 
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function OnPrevious() {

        if (index - 1 < 0) {
            //if previous index less than 0 set index to last index to create infinite scroll
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
            </center>
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
