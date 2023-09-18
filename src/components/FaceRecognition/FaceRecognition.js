import './FaceRecognition.css'

export default function FaceRecognition( { imageUrl }) {
    return (
        <>
            <div className="face-recognition-box">
                <img src={imageUrl} alt="faces"></img>
            </div>
        </>
    )
}