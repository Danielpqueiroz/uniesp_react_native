COMANDOS IMPORTANTES:

Primeiro de tudo, você precisa do NodeJS na versão mais nova instalado na sua máquina. Pesquise no google por "NodeJS download" e instale o programa.

CRIAR UM PROJETO EXPO/REACT NATIVE DO ZERO (substitua "MeuPrimeiroApp" pelo nome do seu projeto):
npx create-expo-app@latest MeuPrimeiroApp --template blank
CASO A CRIAÇÃO DO PROJETO DÊ UM ERRO DEVIDO A AUSÊNCIA DA PASTA ".../npm":
mkdir C:\Users\JJQ\AppData\Roaming\npm

Substitua "JJQ" pelo seu usuário do windows.
ATIVAR O PROJETO PARA FUNCIONAR NO NAVEGADOR WEB:
PRMEIRO ENTRAR NA PASTA DO PROJETO NO TERMINAL E DEPOIS: 
npm install -g expo-cli
            npx expo install react-native-web react-dom -- --legacy-peer-deps

CASO APRESENTE UM ERRO AO TENTAR APERTAR "W" PARA ABRIR NA WEB, COMPLEMENTE O COMANDO SUGERIDO POR ELE DESSA FORMA:

npx expo install @expo/metro-runtime -- --legacy-peer-deps
DEPOIS DO PROJETO CRIADO E A PARTE DAS BIBLIOTECAS PARA ABRIR NA WEB TAMBÉM INSTALADOS, VOCÊ PODE INICIAR O PROJETO (ENTRANDO NA PASTA DELE NO TERMINAL), ATRAVÉS DE:
npm start

O npm start vai abrir um QR Code e uma lista de opções... Se você for usar em casa vai conseguir escanear o QR no app Expo Go e testar a aplicação no celular, nos computadores da UNIESP você pode apertar a opção "w" que vai abrir o navegador web com a aplicação para testar.

Para criar uma estrutura inicial
````bash
rnfe
````
Extenção necesssaria:
````bash
ES7+
````