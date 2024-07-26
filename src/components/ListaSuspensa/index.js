import './ListaSuspensa.css'

const DropdownList = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
                <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                    <option value=""></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
        </div>
    )
}

export default DropdownList