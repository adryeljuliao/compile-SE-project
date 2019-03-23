# compile-SE-project
o principal objetivo desse projeto é alterar o valor do tempo dos arquivos lpm_constant gerados pelo programa Quartus II versão 13sp1.

## Instalação
* Baixar e instalar o [nodejs](https://nodejs.org/en/download/) de acordo com seu sistema operacional.
* Clonar o projeto.
* Executar o comando **npm install**, tanto no diretório ***frontend*** quanto no ***server***, para instalar todas as dependências dos dois projetos.

## Configuração do servidor
* Abra o arquivo **script.js**, presente no diretório *rest-api* do ***server***, e informe o **CAMINHO ABSOLUTO** do projeto que deseja compilar. 
* Informe também o nome do arquivo temporizador vhd (lpm_constant).

## Uso
* Para iniciar o *frontend*, execute o comando **npm start** dentro do diretório do front.
* Para iniciar o *server*, execute o comando **node server.js**




