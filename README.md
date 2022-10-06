# Motivation
We might agree that the solution for this app could be much simpler than the one I'm presenting here, but I took initiative
of creating this app assuming that it is a large project with several Frontend engineers working on it.

That decision gave the opportunity to implement several techniques/strategies I've used in the past for this kind of project.

# Dev Notes

### UX
Basically it is a search bar which shows results on the space below.

The search feature is fired by an enter on the input or by clicking on another topic.

I decided to create a super simple UI to solve this problem, I came up with other overdesigned UI patterns but regarding UI going for the simplest one it is a good idea. 

### Directory structure
Simple and self-documented directory structure:
1.    **components**: Here lives all 'presentational' components, the ones in charge of only rendering something based on props.
2.    **graphql**: configurations, queries and mutations.
3.    **hoc**: Components that will be used to extend the capabilities of others.
4.    **pages**: Components that are in charge of implementing business logic.
5.    **store**: Redux configuration, reducers, actions, middlewares(thunks), store creation

### Redux Usage
A good way to scale an app is to define responsibilities correctly.

So, the intention of using Redux here is to create a layer of data/state management decoupled from components and functions, 
also allowing us to add middlewares to extend/add logic to the dispatched actions on the UI.

# How to run app & test

### Set Keys
In the root directory, you will find an .env.example file, please create a copy of this file called .env and then add your Github API Key
### Install dependencies
>npm install
### Run tests
>npm run test
### Serve app
>npm run start

# Future Improvements
### Testing
Increasing test coverage percentage.

I added just one single test to the *SearchBar* component, this because lack of time and just
wanted to make sure you guys know that I got that habit, also added several empty test files
just to demonstrate how the file structure could be.

### UI Improvements:
It would be nice to have more results on each topic, so I should be adding a paginator or maybe an infinite scroll.

### Responsive design
Currently, this app does not support mobile resolutions properly, so it would be a good improvement