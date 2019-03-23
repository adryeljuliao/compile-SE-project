const sh = require('shelljs');
const fs = require('fs');

//----CONFIGURAÇÃO PARA O SCRIPT ENCONTRAR O ARQUIVO----
const pathProject = '~/Documentos/projetos/embarcados/ladderblocks';
const nameFile = 'lpm_constant0.vhd';
let newContent = '';
//----FIM CONFIGURAÇÃO----------------------------------


exports.handleContentFile = (valor) => {
    console.log('valor args', valor)
    handleFile(valor)

};

/*
    funcao principal para iniciar o script
*/
function handleFile(value) {

    newContent = changeContent(value);
    overrideFile(newContent)

}

/**
 * Responsavel por alterar o conteudo do arquivo de acordo com o valor
 * recebido
 */
function changeContent(newValue) {

    const oldContent = readContentFile()

    const strValue = 'lpm_cvalue => '

    const searchVar = oldContent.search('lpm_cvalue')

    if (searchVar !== -1) {
        const contentCurrent = oldContent.replace(/(lpm_cvalue => \d+)/g, strValue.concat(newValue))
        return contentCurrent;
    }
    return 'variável não encontrada';
}

/**
 * Funcao responsavel por ler o conteudo do arquivo
 */
function readContentFile() {
    sh.cd(pathProject);
    let pathFile = sh.pwd().stdout;
    pathFile = `${pathFile}/${nameFile}`;
    return fs.readFileSync(pathFile, 'utf-8');
}

/**
 * 
 * funcao responsavel por sobrepor o conteudo do arquivo
 */
function overrideFile(overrideContent) {
    var fileContent = overrideContent;

    var filepath = nameFile;
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;

        console.log("The file was succesfully saved!");
    });
}

exports.compileProject = () => {
    sh.exec(`quartus_sh --flow compile ${pathProject}/temporizador.qpf --64bit`);
    
    console.log('--------- COMANDO FINALIZADO -------------')
}