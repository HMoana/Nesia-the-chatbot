# Nesia the chatbot

## Proof of concept: Incorporating AI solutions into the Upsouth platform

---

### **Overview**

In this first development cycle of it's kind for the Upsouth platform. The development team for 2023 will demonstrate a proof-of-concept chatbot that provides assistance to youth users on the Up South web application. The chatbot will focus on guiding users through the signup process, facilitating login procedures, and assisting with creating posts and the rules and guidelines. The goal is to demonstrate the feasibility and potential of the chatbot concept by seamlessly integrating it into a mock-up web application.

We will be utilizing the vast services the AWS have to offer. In particular building the chatbot with Amazon Lex, integrating with AWS-SDK and an NodeJS Express API, and a customized User Interface created on a ReactJS frontend.

<!-- 
### **Built with:**

- [React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo-react&logoColor=026e00 "React")
- [React-url](https://react.dev/ "Reacturl")
- [Javascript](https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo-javascript&logoColor=026e00 "Javascript")
- [Javascript-url](https://www.javascript.com/ "Javascripturl")
- [CSS](https://img.shields.io/badge/CSS-20232A?style=for-the-badge&logo-css&logoColor=026e00 "CSS")
- [CSS-url](https://www.w3schools.com/css/ "CSSurl") -->

---

## **Getting started:**

### _Assumption:_

These instructions start with the following assumptions: 

- The chatbot has already been built and tested in the AWS Lex console.
- AWS CLI has been installed in the local machine.
- AWS Security credentials have been configured successfully.
- The backend has successfully integrated with the AWS Lex service, and interactions with the chatbot via postman are successful.

If not, please follow the instructions in the README files on the Root and Client directories.

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

---

### **Future improvements:**

- For v1 development cycle research other security and authentication features eg AWS Cognito.
- Improve the frontend for demonstration.
- Refactor the backend and incorporate testing.
- Research AWS CloudFormation templates and other possible services.

---

### **Contributor Contacts:**

- Heni Kimura - <henik@missionreadyhq.com>
- Jin Zhang - <jinzh235@gmail.com>

### **Project Link:**

- [Github repository](https://github.com/HMoana/Nesia-the-chatbot.git "Github repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.

### **Acknowledgments:**

- [AWS CLI](https://aws.amazon.com/cli/ "AWS CLI")
- [AWS Config](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html "AWS Config")
- [AWS Javascript](https://aws.amazon.com/developer/language/javascript/ "Javasript on AWS")
- [AWS Node.JS](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html "Getting started in Node.JS")
- [AWS SDK](https://aws.amazon.com/developer/tools/ "AWS developer tools and SDKs")
- [AWS Lex](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/lex-bot-example.html "Building an Amazon Lex chatbot")