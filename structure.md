# Development overview

### User Acceptance Criteria
A generic user can:
* see and browse a data list of movies
* delete an entry
* create a new entry
* view and edit details of a single movie

### Basic architecture
```
    Frontend (Browser)
        |       |
        |       |
------- REST API ---------
        |       |
        |       |
    Backend (Node.js)
            |
            |
    Persistence layer (file system)

```

### Technical checklist
* backend integration is provided through REST API
* UI is a SPA (Single Page Application)
* good Lighthouse scoring (over 90% in production)

### Routing structure
```
             |-- /home ------- <Home />
             |
             |-- /view/:id --- <View />
<App /> -----|
             |-- /add -------- <Add />
             |
             |-- /edit/:id --- <Edit />
```

### Required libraries
* React (Hooks, Context)
* SASS & CSS Modules
* react-router-dom
* normalize.css

### Generic components

```<Alert />```
Display feedbacks to the user (example: fetch failing).

```<Card />```
UI container.