import './Member.css'

const Member = ({name, image, role, backgroundColor}) => {
    return (
        <div className='member'>
            <div className='header' style={{backgroundColor:backgroundColor}}>
                <img src={image} alt={name}></img>
            </div>

            <div className='bottom'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Member