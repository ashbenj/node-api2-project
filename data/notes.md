Dont

- GET /list-routines
- POST /new-routine, /create-routine, /routines/new

Do

- GET /routines
- POST /routines

- Everything is a resource
- Resources live at a URI/L
- Operations on those resources are expressed using HTTP methods
- Hypermedia (HATEOAS) => Links

## Exercise Journal

- View list of journals
- View list of exercises
- Add a new exercise
- View list of users to follow
- View list of my followers
- Register for an account
- Login/Logout
- Update my `profile`
- View a user's public profile
- View the sets for a workout
- View the exercises for a workout
- View (GET) all workouts that include pushups => filter

20 resources x 5 = 100 endpoints

## Resources

How will I organize my information based on my resources?

- Accounts/Users => /api/users
- Exercises => /api/exercises
  - Create => POST /api/exercises
  - Details => GET /api/exercises/:id
- Routines => /api/routines
- Workouts: A group of sets => /api/workouts
  - Sets => /api/workouts/:id/sets
  - Exercises => /api/workouts/:id/exercises
- Profiles <- Same as account?
