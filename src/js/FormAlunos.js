import React from 'react';
import Aluno from './models/Aluno';

class FormAlunos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nome: '',
            nota: '',
            errorMessage: null
        }
    }

    componentDidMount = () => {
        document.getElementById('nome').focus();
    }

    abrir = (aluno) => {
        this.setState({
            id: aluno.id,
            nome: aluno.nome,
            nota: aluno.nota,
            errorMessage: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.nome) {
            this.setState({ errorMessage: 'Nome é obrigatório' });
            return;
        }
        if (this.props.salvarAluno) {
            const aluno = new Aluno(this.state.id, this.state.nome, this.state.nota);
            this.props.salvarAluno(aluno);
        }
        this.handleReset(e);
        document.getElementById('nome').focus();
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            id: 0,
            nome: '',
            nota: '',
            errorMessage: ''
        });
    }

    render = () => {
        return (
            <section id="form-aluno">
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <h1>{this.state.id > 0 ? 'Editar' : 'Adicionar'} Aluno</h1>
                    <p>
                        <label htmlFor="nome">Nome:</label>
                        <input name="nome" id="nome" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
                    </p>

                    <p>
                        <label htmlFor="nota">Nota:</label>
                        <input name="nota" type="number" value={this.state.nota} onChange={(e) => this.setState({ nota: e.target.value })} />
                    </p>
                    {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
                    <p>
                        <button type="submit">Salvar</button>
                        <button type="reset">Cancelar</button>
                    </p>
                </form>
            </section>
        )
    }
}

export default FormAlunos;