
export default function ImageLinkForm({ handleOnChange, handleClick }) {

    return (
        <>
            <h1>Magic Face Detection</h1>
            <p className="instructions">Enter the url for an image and 
                the Magic Brain will detect faces.  Give it a try!</p>
            <input
                onChange={handleOnChange}
                type="text" 
                placeholder="Enter url for image" />
            <button onClick={handleClick}>Detect</button>
        </>
    )
}