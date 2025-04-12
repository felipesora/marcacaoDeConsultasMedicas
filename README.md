# 🏥 Marcacao De Consultas Medicas

**Nome:** Felipe Ulson Sora  
**RM:** 555462

Aplicativo mobile desenvolvido em React Native com o objetivo de realizar o **cadastro de pacientes** e permitir a **gestão de usuários** com diferentes perfis: administrador, médico e paciente. Este projeto foi construído com foco no aprendizado prático de desenvolvimento mobile utilizando boas práticas de organização, navegação e persistência local.

---

## ⚙️ Funcionalidades

### 🔐 Autenticação e Cadastro
- Tela de **cadastro de paciente**, com validação de campos obrigatórios.
- Ao se cadastrar, o usuário é redirecionado para a tela de login.
- Os dados são armazenados localmente via `AsyncStorage`.

### 👥 Gestão de Usuários (Tela de Admin)
- Lista de usuários cadastrados (exceto o usuário logado).
- Exibição do nome, e-mail e papel de cada usuário.
- **Exclusão de usuários** diretamente pela interface.
- Botões de ação para editar (futuro) ou excluir usuários.
- Indicadores visuais de papel do usuário com cores diferentes (admin, médico, paciente).

### 🧱 Arquitetura e Estilo
- Navegação com React Navigation (`@react-navigation/native`).
- Contexto global de autenticação (`AuthContext`).
- Uso de `Styled Components` com tema centralizado.
- Componentização com `Header` reutilizável.
- Design responsivo e limpo.

---

## 💻 Tecnologias Utilizadas

- **React Native** (com Expo)
- **React Native Elements**
- **Styled Components**
- **React Navigation**
- **AsyncStorage**

---

## ▶️ Como Rodar o Projeto

```bash
# Instale as dependências
npm install

# Inicie o projeto com Expo
npx expo start