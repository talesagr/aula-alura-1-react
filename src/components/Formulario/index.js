import './Formulario.css'
import TextField from '../CampoTexto'
import DropdownList from '../ListaSuspensa'
import Button from '../Botao'
import { useState } from 'react'

const Form = (props) => {
    const teams = [
        'Programação',
        'Front-end',
        'DataScience',
        'Devops',
        'UX e Design',
        'Mobile',
        'Security'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onCreateCard({
            name,
            role,
            image,
            team
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    value={role}
                    onChange={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da Imagem"
                    value={image}
                    onChange={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time"
                    itens={teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form