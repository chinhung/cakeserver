# Cake Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/chinhung/cakeserver/blob/master/LICENSE)

It is not a web server but a web app helps you to split you task into peices of cake!

![](https://images.unsplash.com/photo-1492093610675-98e3102999c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)
(Photo by [Toa Heftiba](https://unsplash.com/@heftiba) on [Unsplash](https://unsplash.com/photos/5-MNAjL81Iw))

## Getting Started

GitHub Pages: https://chinhung.github.io/cakeserver/

## Introduction

> Writing commit messages before starting to code.
> 
> *- Git Essentials*

Cake Server is inspried by the book [*Git Essentials*](https://www.oreilly.com/library/view/git-essentials/9781785287909/). It is a best practice in programming that we could write down the commit messages before we start to code. By doing such kind of prior preparation, one could focus on what matters during the coding session. Besides, splitting a task into several meaningful subtasks helps you to organize your working hours. 

Cake Server helps you to split a task into several meaningful commits, the following functionalities are supported:

- New Commit
- Save
- Redo
- Copy Commit Message
- Delete

Cake Server uses `localStorage` to store the data.

## How to Use

### New Commit
One could click the "New Commit" button in the sidebar to create a new commit. After entering the commit message and note, please click the "Save" button to save the commit and which would be present in the "Commits" section in the sidebar.

### Save
By clicking a particular commit in the "Commits" section in the sidebar, one could edit the commit message and note of that commit. Once you have done, please click the "Save" button to save the commit or the update would lose.

### Redo
One could click the "Redo" button if he/she wants to cancel the update before clicking the "Save" button.

### Copy Commit Message
The commit message would be copied into your clipboard when you click the "Copy Commit Message" buttoon.

### Delete
Once you have submitted the commit, you could delete the commit data on Cake Server by clicking the "Delete" button. Notice that there is no way to restore the deleted commit before the trash functionality is supported.

## Todo
- Fix sidebar display when device width is lower than 990px
- Add multi line support for commit message
- Add project functionality
- Add trash functionality
- Add offline support by implementing a Progressive Web App
- Ｍake revisions to the UI style

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
