import './FaceBox.css'


export default function FaceBox( { box, width, height }) {

    const top = box.top_row * height
    const left = box.left_col * width
    const bottom = box.bottom_row * height
    const right = box.right_col * width

    return (
        <>
            <div className="bounding-box" 
                style={{top: top, left: left, bottom: bottom, right: right}}>
            </div>
        </>
    )
}