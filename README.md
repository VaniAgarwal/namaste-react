# Namaste-React 


# parcel-Read parcel Documentation
-Dev build
-local server
-HMR-Hot Module Replacement
-It is automatically refreshing the page while saving the changes with the help of "File Watching Algorithm" written in c++.Parcel is keeping a track of every line.
-parcel is giving the faster devlopemnt experience bcz of caching.
-Image Optimization
-Minification of our file
-Bundling 
-Compressing
-consistent Hashing
-Code Splitting
-Differential Bundling-to support older browers
-Error Handling
-Tree shaking Algo-remove unused code 


# Why ur app is Fast?
It is because of react but not just react it is parcel/webpack/wheat. Parcel is even using so many liberaries.

# How parcel is fast?
bcz it has a parcel-cache.It creates a different build and production


# How to create a prod build?

npx parcel build index.html but it will give an error so we have remove "main":"App.js" from package.json file

Anything which generates automatically does not need to push to git.

# How to execute the index.html file in parcel

npx parcel index.html

# How to run a project in development mode?
"start":"parcel index.html",
    "build":"parcel build index.html",
    [Write this inside scripts]
    and to run the script "npm run start"
    And to build the project "npm run build"


