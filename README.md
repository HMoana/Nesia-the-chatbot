# Nesia the chatbot

## Proof of concept: Incorporating AI solutions into the Upsouth platform

---

### **Overview**

In this first development cycle of it's kind for the Upsouth platform. The development team for 2023 will demonstrate a proof-of-concept chatbot that provides assistance to youth users on the Up South web application. The chatbot will focus on guiding users through the signup process, facilitating login procedures, and assisting with creating posts and the rules and guidelines. The goal is to demonstrate the feasibility and potential of the chatbot concept by seamlessly integrating it into a mock-up web application.

We will be utilizing the vast services the AWS have to offer. In particular building the chatbot with Amazon Lex, integrating with AWS-SDK and an NodeJS Express API, and a customized User Interface created on a ReactJS frontend.

### **Built with:**

- [AWS](https://img.shields.io/badge/AWS-20232A?style=for-the-badge&logo-aws&logoColor=026e00 "AWS")
- [AWS](https://aws.amazon.com/ "AWS")

---

## **Getting started:**

### _Assumption:_

These instructions start with the assumption that the chatbot has already been built and tested in the AWS Lex console. If not, please follow the instructions outlined in the documentation.

### _Setting Up AWS CLI:_

This guide will help set up the local environment. The AWS Command Line Interface (AWS CLI) is a unified tool to manage the AWS services. AWS CLI uses your credentials to authenticate the requests it sends to AWS services.

_Prerequisites:_

- AWS account with access to Amazon Lex.
- AWS Access Key ID and Secret Access Key.
- Region name

_Steps:_

- Install AWS CLI: Download and install it from the [AWS CLI](https://aws.amazon.com/cli/) website.

- After the installation, verify it by typing the following command in the local machine powershell (we are using windows):

```sh
    aws --version
```

- Setup AWS Credentials: This is all done within the local machine powershell. After verifying AWS CLI is installed, run the following command:

```sh
    aws configure 
```

- You will then be prompted for the following information. Just input the required information and select enter:

```sh
    Access Key Id
    Secret Access Key
    Default region name [ap-southeast-2] 
    Default output format 
```

- NOTE: For Default output format, it comes down to your preference. We used json format, but you can use plain text if you wish.

- After following the required information, there will be no prompt to confirm success. Enter the following command to check if it was successful:

```sh
     aws configure list
```

- If successful the following will appear in the powershell:

```sh
    profile 
    access_key
    secret_key
    region
```

- The AWS Credentials are now setup. At this point your security credentials should be stored in your home directory under the path C:\Users\YourUsername\.aws\credentials. The contents of the credentials file should look like this:

```sh
  [default]
    aws_access_key_id=YOUR_ACCESS_KEY
    aws_secret_access_key=YOUR_SECRET_KEY
```

- Your local environment should now be set.

- Ensure to follow the README files in the Server and Client directories.

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

- Make sure Amazon Lex Chatbot is built, tested and configured correctly.
- In the Server directory you require: botId, botAliasId, region and the language the chatbot was built with.
- Security credentials are important in order to access the Amazon Lex Chatbot. For the purposes of this practice environment, we will be using the [AWS shared credentials file environment variable](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html).

### **Features:**

- Integration of an Amazon Lex Chatbot with a React frontend using AWS-SDK and an Express API.
- Refactored code.
- Unit tests using jest.
- Fully customized chatbot user interface.
- Mobile responsive landing page and user interface.

---

### **Future improvements:**

- Incorporate more unit and end-to-end testing on the server side (backend).
- Create a CI/CD Pipeline.
- Refactor code to simplify, maintain and debug code on the client side (frontend).

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
- [AWS Lex](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/lex-bot-example.html "Building an Amazon Lex chatbot")

_Te Reo Māori Advisor_
- Kahu-Rangi Watene - <kahurangiw@missionreadyhq.com>