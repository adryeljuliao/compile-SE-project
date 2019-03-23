import React from 'react'

import './Form.css'


export default props => {
    return(
        <div className="container-custom bg-dark">
                <div className="content-form">
                    <form>
                        <div className="card" >
                            <div className="card-header text-center">
                                SISTEMAS EMBARCADOS
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="myinput">Tempo (segundos)</label>
                                        <input type="text" pattern="[0-9]*" placeholder="Digite um valor"
                                            className="form-control" id="myinput" maxLength="2" onChange={props.changeInput} value={props.valuesInput} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <button className="btn btn-success btn-sm mr-1" onClick={props.contentFile}>Aplicar</button>
                                        <button className="btn btn-secondary btn-sm" onClick={props.compileProject} disabled={props.disableButton}>Compilar</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}