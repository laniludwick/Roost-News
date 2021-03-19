# <img src="/readme/RoostNewsLogo.png" width="80%" alt="Roost News">
Roost News was a project I built after graduating from Hackbright's full-stack software engineering program. I was inspired to create this project to allow users to view, save, and share customized news content all in one place. I was curious and excited to learn new tools and frameworks, so I intentionally used a stack that I was less familiar with. 

I wrote this single page app's frontend using Javascript, React and Material UI, and the backend using Javascript, Express and a MySQL database without an ORM. (A prior project I built used Javascript, React and Bootstrap on the frontend, and Python, Flask, PostgreSQL and SQLAlchemy ORM on the backend.) Roost News also includes an integration with NewsAPI and EmailJS.

## Deployment
TBD
* Note: this will be a demo site once deployed.

## About the Developer
Lani graduated from Stanford University with a B.S. in Industrial Engineering and a M.A. in Sociology with a focus on "Organizations, Business and the Economy." She worked in real estate private equity investing in New York for several years and grew determined to help modernize the industry. She joined a startup in San Francisco building an online investment marketplace and became a product manager. She later joined a B2B SaaS company selling a CRM, an end-user portal, and investment management products. In her product management roles, Lani enjoyed deciding which products to build and why, but she grew increasingly interested in how to build the products, which led her to software engineering.

## Contents
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Future Features](#future)
* [Installation](#installation)
* [License](#license)

## <a name="tech-stack"></a>Technologies
* JavaScript
* React
* HTML
* CSS
* Material UI
* Express
* MySQL
* SQL
* APIs used: NewsAPI and EmailJS.

## <a name="features"></a>Features

#### Landing Page
Users are brought to a webpage built in React. News articles from various news sources feed in from the NewsAPI. 

# <img src="/readme/roostnewslanding.png" width="100%" alt="Roost News Homepage">

#### Email news articles
When logged into the user's account, the user can share news articles with recipients via email. EmailJS is the tool I used to create the templated email containing the article URL. The current incarnation of this feature is that the Roost News email account in Gmail sends the templated email. I purposefully avoided linking to the user's computer's default email client since the client is often unused. 

# <img src="/readme/roostnewssharearticle.png" width="100%" alt="Roost News Share Article">
# <img src="/readme/roostnewsemailedarticle.png" width="100%" alt="Roost News Emailed Article">


#### Bookmarking news articles
The user can bookmark articles to their account and find them in the "My bookmarks" link within the navigation bar.

#### Signup/Login functionality
The user can sign up for a Roost News account and log in if they'd like to use the bookmarking feature.

# <img src="/readme/roostnewssignup.png" width="100%" alt="Roost News Sign Up">
# <img src="/readme/roostnewslogin.png" width="100%" alt="Roost News Login">


## <a name="future"></a>The Future of Roost News
Possible future features:
* Ability to filter which news sources appear in the user's news feed
* Ability to search news articles by keyword



## <a name="license"></a>License
The MIT License (MIT) Copyright (c) 2021 Lani Ludwick

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.