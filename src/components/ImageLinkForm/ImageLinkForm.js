import './ImageLinkForm.css'
export default function ImageLinkForm({ handleOnChange, handleClick }) {

    return (
        <>
            <h1>Magic Face Detection</h1>
            <p className="instructions">Enter the url for an image and 
                the Magic Brain will detect faces.  Give it a try!  Use 'copy 
                image address' when right-clicking an image on the web, or copy 
                and paste the url below.</p>
            <p className="instructions">https://assets.codepen.io/4044405/christina-wocintechchat-unsplash.jpg</p>
            <input
                onChange={handleOnChange}
                type="text" 
                placeholder="Enter url for image" />
            <button onClick={handleClick}>Detect</button>
        </>
    )
}