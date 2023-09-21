import './Image.css'
import FaceBox from '../FaceBox/FaceBox.js'


export default function Image( { imageUrl, box }) {

    console.log("Entering Image component")
    console.log(box)

    if(!imageUrl) {
        return null
    }

    if(!box.top_row) {
        return (
            <>
                <div className="image-box">
                    <img src={imageUrl} alt="face"></img>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="face-recognition-box">
                <img src={imageUrl} alt="face"></img>
                <FaceBox box={box} />
            </div>
        </>
    )

}