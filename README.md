# ♠️ cordevoir ♠️

A fully-featured eCommerce application built with React + Redux toolkit, Strapi as a backend and content management system (CMS), and integration of the Stripe API for order and payment management.

Front-end is currently deployed. It's near impossible to deploy Strapi on a free server, but I will continue trying. See [Demo](#demo) to quickly see the site in full or [Setup](#-setup-) if you want to locally host the backend and view the website yourself.

Want to test the Stripe payment feature? [Use these cards](https://stripe.com/docs/testing#cards).

> [!NOTE]
> You must input a properly formatted email during Step 2 of checkout to be taken to the Stripe payment page.
> <br>

# Technologies 🤖

## **Frontend** <img src="/client/src/assets/icons/react.svg" alt="React Icon" width="20" height="20">

- React
- Redux toolkit for state management
- Material UI
- Stripe for payment processing
- Formik

## **Backend (Strapi)** <img src="/client/src/assets/icons/node.svg" alt="Node Icon" width="20" height="20">

- Strapi as a headless CMS
- Node.js
- SQLite
- PostgreSQL for deployment
- Yup for object schema validation
  <br>

# Table of Contents 📚

- [Demo](#demo)
- [Features](#-features-🖊)
- [Setup](#-setup-)
- [Going Forward](#going-forward)
  <br>

# Demo

[YouTube Video](https://www.youtube.com/watch?v=fbgtzejDUFc&ab_channel=ShadmanUddin)

[![thumbnail](https://img.youtube.com/vi/fbgtzejDUFc/0.jpg)](https://www.youtube.com/watch?v=fbgtzejDUFc&ab_channel=ShadmanUddin)

## Features 🖊️

**Product Catalog**

- Browse a wide range of products with short and long descriptions.
- Filter products based on category for easy navigation.

**Shopping Cart**

- Add, update, and remove items from the cart.
- Cart items can be accessed from anywhere on the site.

**Checkout**

- 2-Step Billing and Payment Process, with functionality to mark billing address as the same as shipping.
- Seamless checkout process with integration of the Stripe payment API.
- Order confirmation after input of an [approved card](https://stripe.com/docs/testing#cards).

**Backend + Admin Dashboard (Strapi)**

- Dynamically update products, categories, and user orders without touching a line of code.
- Seamlessly tied with React to access objects and their attributes from Strapi.

**Navbar, Carousel & Footer**

- Fixed header with logo, search, account, cart, and menu icons.
- Carousel with rotating images and sales.
- Newsletter subscription module, footer with a description and multiple help/contact links.

**Item Display**

- Click to reveal zoomed-in view of item and a longer description.
- Related products displayed at the bottom.

**Responsive Design**

- Specifically optimized for both mobile and desktop devices.
  <br>

# Setup 📝

### 1. Clone the repository

```bash
git clone git@github.com:siudn/cordevoir.git
cd cordevoir
```

### 2. **.env Setup**

```bash
cd server
npm install
```

Look for ".env.example" in the /server folder and change the name to just ".env". Then replace everything with the code below:

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS="`openssl rand -base64 32`,`openssl rand -base64 32`"
API_TOKEN_SALT=`openssl rand -base64 32`
ADMIN_JWT_SECRET=`openssl rand -base64 32`
TRANSFER_TOKEN_SALT=`openssl rand -base64 32`
JWT_SECRET=`openssl rand -base64 32`
STRIPE_SECRET_KEY=pasteYoursHere
```

### 3. **Retrieve Stripe Secret Key**

To actually use the Stripe functionality, you will need to paste your own Stripe Secret Key into .env: to get one, register [here](https://dashboard.stripe.com/register), then copy your key at this [link](https://dashboard.stripe.com/register).

Paste your key into where it says `pasteYoursHere` on the .env file from Step 2.

### 4. **Host Backend:**

```bash
cd server #go to the server directory
npm run build
npm start
```

Then, simply visit the website's [link](https://cordevoir.vercel.app/) and all content will be displayed! The website is designed to work off of your locally hosted backend.
<br>

## Going Forward

Will definitely add more features, like account creation and validation, memory stored on the server, search, an actual hosted backend, cooler animations, etc.

This project was tough and I spent way too much time trying to get that backend online, but it was an amazing learning experience.
