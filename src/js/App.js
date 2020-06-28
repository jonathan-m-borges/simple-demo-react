import React from 'react';

import FormAluno from './FormAlunos';
import ListaAlunos from './ListaAlunos';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();

        const storageState = localStorage.getItem('state');
        if (storageState) {
            this.state = JSON.parse(storageState);
        }
        else {
            this.state = {
                nextId: 0,
                alunos: []
            }
        }
    }
    
    componentDidUpdate = () => {
        localStorage.setItem('state', JSON.stringify(this.state));
    }

    salvarAluno = (aluno) => {
        if (aluno.id == 0) {
            const nextId = this.state.nextId + 1;
            aluno.id = nextId;
            this.setState({ nextId, alunos: [...this.state.alunos, aluno] });
        }
        else {
            const index = this.state.alunos.findIndex(x => x.id == aluno.id);
            const alunos = [...this.state.alunos];
            alunos[index] = aluno;
            this.setState({ alunos });
        }
    }

    editarAluno = (e, aluno) => {
        e.preventDefault();
        this.form.current.abrir(aluno);
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
                <ListaAlunos alunos={this.state.alunos} excluirAluno={this.excluirAluno} editarAluno={this.editarAluno} />
            </div>
        )
    }

}

export default App;