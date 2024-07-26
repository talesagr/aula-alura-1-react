import Member from '../Member'
import './Team.css'

const Team = (props) => {
    const sectionCss = {backgroundColor : props.secondaryColor}
    const h3Css = {borderColor : props.primaryColor}
    return(
        props.members.length > 0 ? 
        <section className='team' style={sectionCss}>
            <h3 style={h3Css} >{props.name}</h3>
            <div className='members'>
                {props.members.map(member => 
                <Member
                    backgroundColor={props.primaryColor}
                    key={member.name}
                    name={member.name}
                    role={member.role} 
                    image={member.image}
                />)}
            </div>
            
        </section>
        :
        ''
    )
}

export default Team