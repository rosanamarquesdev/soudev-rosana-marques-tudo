export default function Button(props)
{
    return(
        <>
        <button className={props.tipo}>{props.text}</button>
        </>
    )
}