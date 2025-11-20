# Coach Finder

This is a Vue.js application that allows users to find and register as a coach. It provides a platform for connecting people who want to learn with experienced coaches in various fields.

## Features

*   **Browse Coaches:** Users can browse a list of available coaches.
*   **Filter Coaches:** Coaches can be filtered by their area of expertise (Frontend, Backend, Career).
*   **View Coach Details:** Users can view the detailed profile of a coach, including their description and hourly rate.
*   **Register as a Coach:** Users can register themselves as a coach by providing their details.
*   **Contact a Coach:** Users can send a message to a coach to express their interest.
*   **View Received Requests:** Coaches can view the messages and requests they have received from users.
*   **User Authentication:** Users can sign up and log in to the application.

## Project Structure

The project is structured as follows:

```
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   ├── components
│   │   ├── TheHeader.vue
│   │   ├── coaches
│   │   │   ├── CoachFilter.vue
│   │   │   ├── CoachForm.vue
│   │   │   └── CoachItem.vue
│   │   ├── requests
│   │   │   └── RequestsItem.vue
│   │   └── ui
│   │       ├── BaseBadge.vue
│   │       ├── BaseCard.vue
│   │       ├── BaseDialogue.vue
│   │       └── BaseSpinner.vue
│   ├── pages
│   │   ├── NotFound.vue
│   │   ├── auth
│   │   │   ├── UserAuth.vue
│   │   │   └── UserSign.vue
│   │   ├── coaches
│   │   │   ├── CoachDetail.vue
│   │   │   ├── CoachesList.vue
│   │   │   └── CoachRegistration.vue
│   │   └── requests
│   │       ├── ContactCoach.vue
│   │       └── RequestsReceived.vue
│   └── store
│       ├── index.js
│       └── modules
│           ├── auth
│           │   ├── actions.js
│           │   ├── getters.js
│           │   ├── index.js
│           │   └── mutations.js
│           ├── coaches
│           │   ├── actions.js
│           │   ├── getters.js
│           │   ├── index.js
│           │   └── mutations.js
│           └── requests
│               ├── actions.js
│               ├── getters.js
│               ├── index.js
│               └── mutations.js
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── babel.config.js
├── jsconfig.json
├── package.json
└── README.md
```

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/coach-finder.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd coach-finder
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To run the application in development mode, use the following command:

```bash
npm run serve
```

This will start the development server at `http://localhost:8080`.

To build the application for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

## Dependencies

The main dependencies of this project are:

*   **vue:** The core Vue.js library.
*   **vue-router:** For handling routing and navigation.
*   **vuex:** For state management.

For a full list of dependencies, see the `package.json` file.
