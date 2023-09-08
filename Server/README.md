# Nesia the chatbot

## Proof of concept: Incorporating AI solutions into the Upsouth platform

---

### **Overview**

In this first development cycle of it's kind for the Upsouth platform. The development team for 2023 will demonstrate a proof-of-concept chatbot that provides assistance to youth users on the Up South web application. The chatbot will focus on guiding users through the signup process, facilitating login procedures, and assisting with creating posts and the rules and guidelines. The goal is to demonstrate the feasibility and potential of the chatbot concept by seamlessly integrating it into a mock-up web application.

We will be utilizing the vast services the AWS have to offer. In particular building the chatbot with Amazon Lex, integrating with AWS-SDK and an NodeJS Express API, and a customized User Interface created on a ReactJS frontend.


### **Built with:**

- [NodeJS](https://img.shields.io/badge/NodeJS-20232A?style=for-the-badge&logo-nodejs&logoColor=026e00 "NodeJS")
- [NodeJS-url](https://nodejs.org/en/docs "NodeJSurl")
- [ExpressJS](https://img.shields.io/badge/ExpressJS-20232A?style=for-the-badge&logo-expressjs&logoColor=026e00 "ExpressJS")
- [ExpressJS-url](https://expressjs.com/ "ExpressJSurl")
- [Dotenv](https://img.shields.io/badge/Dotenv-20232A?style=for-the-badge&logo-dotenv&logoColor=026e00 "Dotenv")
- [Dotenv-url](https://github.com/motdotla/dotenv "Dotenvurl")
- [Cors](https://img.shields.io/badge/Cors-20232A?style=for-the-badge&logo-cors&logoColor=026e00 "Cors")
- [Cors-url](https://www.npmjs.com/package/cors "Corsurl")
- [AWS-SDK Client Lex Runtime V2](https://img.shields.io/badge/AWSSDK-20232A?style=for-the-badge&logo-awssdk&logoColor=026e00 "AWS-SDK Client Lex Runtime V2")
- [AWS-SDK Client Lex Runtime V2-url](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/lex-runtime-service/ "AWS-SDK Client Lex Runtime V2surl")
- [Jest](https://img.shields.io/badge/Jest-20232A?style=for-the-badge&logo-jest&logoColor=026e00 "Jest")
- [Jest-url](https://jestjs.io/docs/getting-started "Jesturl")

---

## **Getting started:**

### _Assumption:_

These instructions start with the following assumptions: 

- The chatbot has already been built and tested in the AWS Lex console.
- AWS CLI has been installed in the local machine.
- AWS Security credentials have been configured successfully.

If not, please follow the instructions in the README file on the Root directory.

### _The software needed to install -_

_Server Dependencies:_

- Express

  ```sh
  npm install express
  ```

- Dotenv

  ```sh
  npm install dotenv
  ```

- Cors

  ```sh
  npm install cors
  ```

- AWS-SDK Lex runtime

  ```sh
  npm install @aws-sdk/client-lex-runtime-v2
  ```

- Jest

  ```sh
  npm install jest
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

- Integration of an Amazon Lex Chatbot using AWS-SDK and an Express API.
- Refactored code.
- Unit tests using jest.

---

### **Future improvements:**

- Incorporate more unit and end-to-end testing on the server side (backend).
- Create a CI/CD Pipeline.

---

### **Contributor Contacts:**

- Heni Kimura - <henik@missionreadyhq.com>
- Jin Zhang - <jinzh235@gmail.com>

### **Project Link:**

- [Github repository](https://github.com/HMoana/Nesia-the-chatbot.git "Github repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.

### **Acknowledgments:**

- [AWS Node.JS](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html "Getting started in Node.JS")
- [AWS Javascript](https://aws.amazon.com/developer/language/javascript/ "Javasript on AWS")
- [AWS SDK](https://aws.amazon.com/developer/tools/ "AWS developer tools and SDKs")
