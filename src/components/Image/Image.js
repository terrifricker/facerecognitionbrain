import './Image.css'
import FaceBox from '../FaceBox/FaceBox.js'


export default function Image( { imageUrl, box }) {

    if(!imageUrl) {
        return null
    }

    if(!box.top_row) {
        return (
            <>
                <div className="image-box">
                    <img src={imageUrl} alt="face" id="image"></img>
                </div>
            </>
        )
    }

    const image = document.querySelector("#image")
    const width = image.width
    const height = image.height
    return (
        <>
            <div className="image-box">
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