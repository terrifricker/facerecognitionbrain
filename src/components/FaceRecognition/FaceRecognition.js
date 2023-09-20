import './FaceRecognition.css'

export default function FaceRecognition( { imageUrl }) {

    if(!imageUrl) {
        return null
    }
    return (
        <>
            <div className="face-recognition-box">
                <img src={imageUrl} alt="faces"></img>
            </div>
        </>
    )
}