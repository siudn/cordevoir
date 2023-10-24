# cordevoir

A fully-featured eCommerce application built with React + Redux toolkit, Strapi as a backend and content management system (CMS), and integration of the Stripe API for order and payment management.

Front-end is currently deployed. It's near impossible to deploy Strapi on a free server, but I will continue trying. See [Demo](#demo) and [Setup](#setup).

Want to test the Stripe payment feature? [Use this](https://stripe.com/docs/testing#cards)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [Going Forward](#goingforward)

## Features

- **Product Catalog:**

  - Browse a wide range of products with short and long descriptions.
  - Filter products based on category for easy navigation.

- **Shopping Cart:**

  - Add, update, and remove items from the cart.
  - Cart items can be accessed from anywhere on the site.

- **Checkout:**

  - 2-Step Billing and Payment Process, with functionality to mark billing address as the same as shipping.
  - Seamless checkout process with integration of the Stripe payment API.
  - Order confirmation after input of an [approved card](https://stripe.com/docs/testing#cards).

- **Backend + Admin Dashboard (Strapi):**

  - Dynamically update products, categories, and user orders without touching a line of code.
  - Seamlessly tied with React to access objects and their attributes from Strapi.

- **Navbar, Carousel & Footer:**

  - Fixed header with logo, search, account, cart, and menu icons.
  - Carousel with rotating images and sales.
  - Newsletter subscription module, footer with a description and multiple help/contact links.

- **Item Display:**

  - Click to reveal zoomed-in view of item and a longer description.
  - Related products displayed at the bottom.

- **Responsive Design:**
  - Specifically optimized for both mobile and desktop devices.

## Demo

[![Live Demo](demo-link)]

Live demo coming very soon

## Technologies

- **Frontend:**

  - React
  - Redux toolkit for state management
  - Material UI
  - Stripe for payment processing
  - Formik

- **Backend (Strapi):**

  - Strapi as a headless CMS
  - Node.js
  - SQLite
  - PostgreSQL for deployment
  - Yup for object schema validation

## Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:siudn/cordevoir.git
   cd cordevoir
   ```

2. **Backend Setup (Strapi):**

   ```bash
   cd server
   npm install
   npm run build
   npm start
   ```

3. **.env Setup (Strapi):**

   Look for ".env.example" in the /server folder and change the name to just ".env", then change all "toBeModified" strings to `` \`openssl rand -base64 32`  ``

4. **Frontend Setup:**

   Simply visit [link](https://cordevoir.vercel.app/) and content will be displayed. The website is designed to work off your locally hosted backend.

## Going Forward
