import React from 'react';
import Form from '../components/templates/Form';
import axios from 'axios';

export default class Compile extends React.Component {

    constructor(props) {
        super(props)
        this.handleContentFile = this.handleContentFile.bind(this)
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleCompileProject = this.handleCompileProject.bind(this)
        this.state = {
            value: '',
            hasChange: false
        }
    }

    handleChangeInput = e => {
        /*captura apenas os numeros*/
        const value = (e.target.validity.valid) ? e.target.value : this.state.value;
        this.setState({ value: value });
    }

    handleCompileProject = e => {
        e.preventDefault();
        const url = `http://localhost:3002/compiles/0`
        console.log(url);
        axios(url).then(res => {
            console.log("deu certo? ", res);
            if (res.status === 200) {
                alert('Projeto compilado com sucesso');
                this.setState({
                    value: '',
                    hasChange: false
                });
            }
        })
    }

    handleContentFile = e => {
        e.preventDefault();
        const temp = this.state.value * 10;
        const url = `http://localhost:3002/changes/${temp}`
        console.log(url);
        axios(url).then(res => {
            console.log("deu certo? ", res);
            if (res.status === 200) {
                alert('Tempo alterado com sucesso');
                this.setState({
                    hasChange: true
                });
            }
        })
    }

    componentDidUpdate(prevState) {
        console.log('rend')
        if (prevState.hasChangeContent) {
            this.setState({
                value: '',
                hasChange: false
            });
        }
    }
    render() {
        return (
            <Form
                changeInput={this.handleChangeInput}
                valueInput={this.state.value}
                contentFile={this.handleContentFile}
                compileProject={this.handleCompileProject}
                disableButton={!this.state.hasChange}
            />

        )
    }
}