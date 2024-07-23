import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'DataScience',
        'Devops',
        'UX e Design',
        'Mobile',
        'Security'
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("AAAAAAA")
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite seu Nome"/>
                <CampoTexto required={true} label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
                <ListaSuspensa required={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario