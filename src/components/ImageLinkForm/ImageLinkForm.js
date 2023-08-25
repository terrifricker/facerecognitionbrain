
function ImageLinkForm() {
    return (
        <>
            <h1>Magic Face Detection</h1>
            <p className="instructions">Enter the url for an image and 
                the Magic Brain will detect faces.  Give it a try!</p>
            <input type="text" placeholder="Enter url for image" />
            <button>Detect</button>
        </>
    )
}

export default ImageLinkForm;