import React from 'react';

import FormAluno from './FormAlunos';
import ListaAlunos from './ListaAlunos';
import Aluno from './models/Aluno';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            nextId: 0,
            alunos: []
        }
    }

    salvarAluno = (aluno) => {
        const nextId = this.state.nextId + 1;
        aluno.id = nextId;
        this.setState({ nextId, alunos: [...this.state.alunos, aluno] });
    }

    editarAluno = (e, aluno) => {
        e.preventDefault();
        console.log(aluno);
        debugger;
        this.form.abrir(aluno);
    }

    excluirAluno = (e, aluno) => {
        e.preventDefault();
        const alunos = this.state.alunos.filter(x => x.id != aluno.id);
        this.setState({ alunos });
    }

    render() {
        return (
            <div>
                <FormAluno ref={this.form} salvarAluno={this.salvarAluno} />
                <ListaAlunos alunos={this.state.alunos} excluirAluno={this.excluirAluno} editarAluno={this.editarAluno}/>
            </div>
        )
    }

}

export default App;