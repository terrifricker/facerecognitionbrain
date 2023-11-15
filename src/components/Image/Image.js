import './Image.css'
import FaceBox from '../FaceBox/FaceBox.js'


export default function Image( { imageUrl, box }) {

    if(!imageUrl) { // if no image
        return null
    }

    if(!box.top_row) { // if no box data
        return (       // just return image
            <>
                <div className="image-container">
                    <img src={imageUrl} alt="face" id="image"></img>
                </div>
            </>
        )
    }

    // get values needed to calculate css bounding box
    const image = document.querySelector("#image")
    const width = image.width
    const height = image.height

    return (
        <>
            <div className="image-container">
                <img src={imageUrl} alt="face" id="image"></img>
                <FaceBox 
                    box={box}
                    width={width}
                    height={height}
                />
            </div>
        </>
    )

}