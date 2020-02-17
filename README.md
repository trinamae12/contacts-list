# ContactsList

A simple app that handles contact management. It is created using Angular and deployed using Firebase. Its dependencies are managed using Yarn.

## Features
* Add contact
* View contact list and contact details
* Edit contact details
* Remove contact from list

## Prerequisites
Please do download and install the following requirements in order for the project to run:
* [Nodejs](https://nodejs.org/en/)

    - To check if Nodejs is installed, open command prompt and run `node -v`.

* Yarn

    - Install yarn using npm by running `npm i -g yarn`. To check, run `yarn`.

* Angular CLI
    
    - Open command prompt and run `yarn add -g @angular/cli` .

* Firebase
    
    - Make sure you have a firebase account. Also, make sure to have an existing [ Firebase project](https://console.firebase.google.com/u/0/) and an existing firestore collection.

## Installing ContactsList (Run project in local)
1. Run the following commands in command prompt pointing to your destination folder.
    
        git clone https://github.com/trinamae12/contacts-list.git
        yarn 

2. Go to src/environments and rename **environment.sample.ts** to **environment.ts**.
3. Open **environment.ts** and supply your firebase configurations.  
4. Run `yarn start` in terminal. 
5. Open browser and navigate to `http://localhost:4200/`.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Building the project
1. Open your terminal pointing inside the project. 
2. Run `ng build --prod` to build the project. A _dist_ folder will appear in the project.

## Deployment to Firebase
1. After building, initialize project when deploying it for the first time.
2. Run `firebase deploy`.

## Built With

* <img height="20" width="20" src="https://angular.io/assets/images/favicons/favicon.ico"/> [Angular](https://angular.io/)
* <img height="20" width="20" src="https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png"/> [Typescript](https://www.typescriptlang.org/)
* <img height="20" width="20" src="https://getbootstrap.com/docs/4.4/assets/img/favicons/favicon-32x32.png"/> [Bootstrap](https://getbootstrap.com/)
* <img height="20" width="20" src="https://www.gstatic.com/devrel-devsite/prod/v172e5dffd78b32f4b12f8112b00e940d4993af48229fac5346097b33edb0f543/firebase/images/favicon.png"/> [Firebase](https://firebase.google.com/)