# compile-SE-project
O principal objetivo desse projeto é alterar o valor de tempo dos arquivos vhd lpm_constant gerados pelo programa Quartus II versão 13sp1, compilar o projeto e passá-lo para a placa FPGA sem precisar criar um novo bloco lpm_constant.

## Instalação
* Baixar e instalar o [nodejs](https://nodejs.org/en/download/) de acordo com seu sistema operacional.
* Clonar o projeto.
* Executar o comando **npm install**, tanto no diretório ***frontend*** quanto no ***server***, para instalar todas as dependências dos dois projetos.

## Configuração do servidor
* Abra o arquivo **script.js**, presente no diretório *rest-api* do ***server***, e informe o **CAMINHO ABSOLUTO** do projeto que deseja compilar. 
* Informe também o nome do arquivo temporizador vhd (lpm_constant).  
> OBSERVAÇÃO: é preciso indicar a extensão correta do arquivo ( Ex: **nomeDoArquivo.vhd** ).

## Uso
* No diretório **frontend**, execute o comando **npm start**
* No diretório **server**, execute o comando **node server.js**




