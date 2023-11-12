import './FaceBox.css'


export default function FaceBox( { box, width, height }) {

    // convert data to usable form for css
    const top = box.top_row * height
    const left = box.left_col * width
    const boxWidth = (box.right_col - box.left_col) * width
    const boxHeight = (box.bottom_row - box.top_row) * height

    return (
        <>
            <div className="bounding-box" 
                style={{width: boxWidth, height: boxHeight, top: top, left: left}}>
            </div>
        </>
    )
}