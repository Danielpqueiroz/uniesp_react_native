## **COMANDOS IMPORTANTES:**

**Primeiro de tudo, você precisa do NodeJS na versão mais nova instalado na sua máquina. Pesquise no google por "NodeJS download" e instale o programa.**

- **CRIAR UM PROJETO EXPO/REACT NATIVE DO ZERO (substitua "MeuPrimeiroApp" pelo nome do seu projeto):**
````bash
npx create-expo-app@latest MeuPrimeiroApp --template blank
````
- **CASO A CRIAÇÃO DO PROJETO DÊ UM ERRO DEVIDO A AUSÊNCIA DA PASTA ".../npm":**
````bash
mkdir C:\Users\JJQ\AppData\Roaming\npm
````
Substitua "JJQ" pelo seu usuário do windows.
- **ATIVAR O PROJETO PARA FUNCIONAR NO NAVEGADOR WEB:**
**PRMEIRO ENTRAR NA PASTA DO PROJETO NO TERMINAL E DEPOIS:** 
**(Só precisa na primeira vez que vai usar o expo na máquina, pois instala global, nas próximas vezes não precisa: npm install -g expo-cli)**
            
**Dentro da pasta do projeto:**
````bash
npx expo install react-native-web react-dom -- --legacy-peer-deps
npx expo install @expo/metro-runtime -- --legacy-peer-deps
````
- **DEPOIS DO PROJETO CRIADO E A PARTE DAS BIBLIOTECAS PARA ABRIR NA WEB TAMBÉM INSTALADOS, VOCÊ PODE INICIAR O PROJETO (ENTRANDO NA PASTA DELE NO TERMINAL), ATRAVÉS DE:**
````bash
npm start
````
O npm start vai abrir um QR Code e uma lista de opções... Se você for usar em casa vai conseguir escanear o QR no app Expo Go e testar a aplicação no celular, nos computadores da UNIESP você pode apertar a opção "w" que vai abrir o navegador web com a aplicação para testar.

Para criar uma estrutura inicial
````bash
rnfe
````
Extenção necesssaria:
````bash
ES7+
````
Bibliotecas necessarias:

Navigation
````bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
````

Date picker e picker
````bash
npm install react-native-picker/picker
npm install react-native-modal-datetime-picker
````

## Evidencias Aula01

<table>
  <tr>
    <td align="center">
      <b>Exercicio01</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula01/reports/Ex01.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Exercicio02</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula01/reports/Ex02.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Exercicio03</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula01/reports/Ex03.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Desafio</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula01_desafio/reports/Lista%20de%20itens.jpeg?raw=true" height="300px" />
    </td>
  </tr>
</table>

## Evidencias Aula02

<table>
  <tr>
    <td align="center">
      <b>Exercicio01</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula02/reports/ex01.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Exercicio02</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula02/reports/ex02.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Exercicio03</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula02/reports/ex03.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Exercicio04</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula02/reports/ex04.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Desafio</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula02_desafio/reports/Lista%20de%20tarefas.jpeg?raw=true" height="300px" />
    </td>
  </tr>
</table>

## Evidencias Aula03

<table>
  <tr>
    <td align="center">
      <b>Home</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula03/reports/Details.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Details</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula03/reports/Details..jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Home Desafio</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula03_desafio/reports/Home.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Man Desafio</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula03_desafio/reports/Man.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Woman Desafio</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula03_desafio/reports/Woman.jpeg?raw=true" height="300px" />
    </td>
  </tr>
</table>

## Evidencias Aula04

<table>
  <tr>
    <td align="center">
      <b>Dark</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula04/reports/Dark.jpeg?raw=true" height="300px" />
    </td>
    <td align="center">
      <b>Light</b><br>
      <img src="https://github.com/Danielpqueiroz/uniesp_react_native/blob/main/react-native-2/aula04/reports/Light.jpeg?raw=true" height="300px" />
    </td>
   
  </tr>
</table>






