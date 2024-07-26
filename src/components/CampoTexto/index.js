import './CampoTexto.css'

const TextField = (props) => {

    const onDigit = (event => {
        props.onChange(event.target.value)
    })


    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigit} required={props.required}placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField