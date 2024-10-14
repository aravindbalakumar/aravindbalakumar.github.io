import "./gallery.css"

function GalleryScroller() {
    return (
        <>
            <div id="carousel">
                <div id="#carousel_item"><img id="carousel_image" src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
                <div id="#carousel_item"><img id="carousel_image"src="https://picsum.photos/seed/400/300"></img></div>
            </div>
        </>
    );
}
function GalleryViewer() {
    return null;
}
export default GalleryScroller;