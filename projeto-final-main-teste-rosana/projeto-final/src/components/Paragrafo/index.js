export default function Paragrafo(props)
{
    return(
        <>
            <div>
                <p className={props.class}>{props.text}</p>
            </div>
        </>
    )
}