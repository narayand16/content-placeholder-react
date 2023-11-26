## Reusable content placeholder component

# About the project

This project contains a reusable content placeholder component, built using React. It can be used to improve the perceived performance of users instead of showing boring loading spinner/indicator.

# Demo

Live URL - https://content-placeholder-react.netlify.app/

Video - 

https://github.com/narayand16/content-placeholder-react/assets/29942751/5eeff0be-77b9-4131-82a2-a5d51ae6eb22



# How to run the project on local machine

1. Make sure nodejs is installed on your system. If not, download nodejs from [here](https://nodejs.org/en/download/current) and install it.

2. Unzip the project file. Open the terminal and change the current working directory to unzipped folder.
3. Enter command `npm install` to install necessary node modules into the project
4. Enter command `npm run dev` to run the project locally.

You should be able to see project running on http://localhost:5173/. You can control + click on the same link to open it in the browser or copy-paste the same in your favourite browser.

# Approach taken

Hi!
I created a very naive loading animation first. I referred to different animations present on w3schools website and took help from there to make the loading animation. I hardcoded the template with respective css classes to check the loading animation. In first iteration of interface for Skeleton structure, I added count(number of times the shape to be rendered) for each shape, so that I could iterate over it when creating template and could show the shapes. However, I faced some errors and it took some time to resolve that. Then I skipped this count property and thought of having the interface without it. In the finalised iteration of the interface, I added relevant properties which can help the user to customize each shape. I created a default array of objects to be passed as prop to Content Placeholer component. Imported the same in App component to verify if the loading animation stops after child component is laoded.
