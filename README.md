# minders-challenge

Aplicação web que consome a API pública [Wizard World API](https://wizard-world-api.herokuapp.com/Houses) para exibir uma lista de casas e detalhes de cada uma.

###### Funcionalidades ######
- Listagem de casas  
- Visualização de detalhes de cada casa  
- Integração com Amplitude para rastrear eventos e page views  
- Projeto hospedado online (opcional)

###### Como rodar localmente ######
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npm run dev

###### Tecnologias utilizadas ######
React + Vite
React Router
Amplitude (Analytics)
API pública Wizard World

###### Evento	Quando é disparado ######
View_Houses_List	Ao carregar a página de lista de casas
View_House_Detail	Ao carregar a página de detalhe de uma casa
Click_View_Details	Quando o usuário clica para ver detalhes de uma casa
Click_Back_To_List	Quando o usuário clica para voltar para lista
Click_Favorite_House	Quando o usuário clica para favoritar uma casa

###### Estruturas ######
src/
  pages/
    HousesList.jsx
    HouseDetail.jsx
  App.jsx
  main.jsx
index.html

###### Criado por: ######
Nome: Sidney Castro
Linkedin: https://www.linkedin.com/in/vsidneycastro
Github: https://github.com/SidneyVieira
