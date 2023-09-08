# Nesia the chatbot

## Proof of concept: Incorporating AI solutions into the Upsouth platform

---

### **Overview**

In this first development cycle of it's kind for the Upsouth platform. The development team for 2023 will demonstrate a proof-of-concept chatbot that provides assistance to youth users on the Up South web application. The chatbot will focus on guiding users through the signup process, facilitating login procedures, and assisting with creating posts and the rules and guidelines. The goal is to demonstrate the feasibility and potential of the chatbot concept by seamlessly integrating it into a mock-up web application.

We will be utilizing the vast services the AWS have to offer. In particular building the chatbot with Amazon Lex, integrating with AWS-SDK and an NodeJS Express API, and a customized User Interface created on a ReactJS frontend.


### **Built with:**

- [React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo-react&logoColor=026e00 "React")
- [React-url](https://react.dev/ "Reacturl")
- [React Router Dom](https://img.shields.io/badge/ReactRouterDom-20232A?style=for-the-badge&logo-reactrouterdom&logoColor=026e00 "React Router DOM")
- [React Router Dom-url](https://reactrouter.com/en/main "React Router Domurl")
- [React Icons](https://img.shields.io/badge/ReactIcons-20232A?style=for-the-badge&logo-reacticons&logoColor=026e00 "React Icons")
- [React Icons-url](https://www.npmjs.com/package/react-icons "React Iconsurl")
- [React Modal](https://img.shields.io/badge/ReactModal-20232A?style=for-the-badge&logo-reactmodal&logoColor=026e00 "React Modal")
- [React Modal-url](https://www.npmjs.com/package/react-modal "React Modalurl")
- [Axios](https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logo-axios&logoColor=026e00 "Axios")
- [Axios-url](https://github.com/axios/axios "Axiosurl")
- [Javascript](https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo-javascript&logoColor=026e00 "Javascript")
- [Javascript-url](https://www.javascript.com/ "Javascripturl")
- [CSS](https://img.shields.io/badge/CSS-20232A?style=for-the-badge&logo-css&logoColor=026e00 "CSS")
- [CSS-url](https://www.w3schools.com/css/ "CSSurl")

---

## **Getting started:**

### _Assumption:_

These instructions start with the following assumptions: 

- The chatbot has already been built and tested in the AWS Lex console.
- AWS CLI has been installed in the local machine.
- AWS Security credentials have been configured successfully.
- The backend has successfully integrated with the AWS Lex service, and interactions with the chatbot via postman are successful.

If not, please follow the instructions in the README files on the Root and Server directories.

### _The software needed to install -_

_Client Dependencies:_

- React

  ```sh
  npx create-react-app .
  ```

- React Router Dom

  ```sh
  npm install react-router-dom
  ```

- React Icons

  ```sh
  npm install react-icons
  ```

- React Modal

  ```sh
  npm install react-modal
  ```

- Axios

  ```sh
  npm install axios
  ```

---

### **Installation:**

1. Clone the Nesia the chatbot repo.

```sh
   git clone https://github.com/HMoana/Nesia-the-chatbot.git
```

2. Install NPM packages.

```sh
   npm install
```  

---

### **Instructions:**

- Make sure Amazon Lex Chatbot is built and configured correctly.
- In the Server directory you require: botId, botAliasId, region and the language the bot was built with.
- Security credentials are important in order to access the Amazon Lex Chatbot. For the purposes of this practice environment, we will be using the [AWS shared credentials file environment variable](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html).

### **Features:**

- Integration of an Amazon Lex Chatbot with a React frontend using AWS-SDK and an Express API.
- Fully customized chatbot user interface.
- Mobile responsive landing page and user interface.

---

### **Future improvements:**

- Refactor code to simplify, maintain and debug code on the client side (frontend).

---

### **Contributor Contacts:**

- Heni Kimura - <henik@missionreadyhq.com>
- Jin Zhang - <jinzh235@gmail.com>

### **Project Link:**

- [Github repository](https://github.com/HMoana/Nesia-the-chatbot.git "Github repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.




