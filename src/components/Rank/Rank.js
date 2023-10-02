
export default function Rank({name, entries}) {
    return (
        <>
            <h2>{`${name}, your current rank is ...`}</h2>
            <h2>{entries}</h2>
        </>
    )
}