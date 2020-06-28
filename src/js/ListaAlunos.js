import React from 'react';

class ListaAlunos extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <section id="lista-alunos">
                <h1>Lista de Alunos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Nota</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="tbody-alunos">
                        {!this.props.alunos.length && <tr><td colSpan="4">Nenhum aluno cadastrado.</td></tr>}
                        {this.props.alunos.map((aluno) =>
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.nota}</td>
                                <td>
                                    <a href="#" onClick={(e) => this.props.editarAluno(e, aluno)}>Editar</a> | <a href="#" onClick={(e) => this.props.excluirAluno(e, aluno)}>Excluir</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default ListaAlunos;