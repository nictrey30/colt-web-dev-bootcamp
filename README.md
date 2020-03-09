#YelpCamp

- Add Landing Page
- Add Campgrounds Page that lists all campgrounds

Each Campground has:

- Name
- Image

#Layout and basic styling

- Create our header and footer partials
- Add in Bootstrap

# Creating New Campgrounds

- Setup new campground POST route
- Add in body-parser
- Setup route to show form
- Add basic unstyled form

# Style the Navbar and Form

- Add a navbar to all templates
- Style the new campground form

# Databases

## Intro to databeses

- What is a database?
- Sql vs NoSql

# Add Mongoose

- Install and configure mongoose
- Setup campground model
- Use campground model inside of our routes!

# RESTFUL ROUTES

| **URL**          | **HTTP Verb** | **Action** |
| ---------------- | ------------- | ---------- |
| /photos/         | GET           | index      |
| /photos/new      | GET           | new        |
| /photos          | POST          | create     |
| /photos/:id      | GET           | show       |
| /photos/:id/edit | GET           | edit       |
| /photos/:id      | PATCH/PUT     | update     |
| /photos/:id      | DELETE        | destroy    |

| **name** | **url**   | **Verb** | **desc**                      |
| -------- | --------- | -------- | ----------------------------- |
| index    | /dogs     | GET      | display a list of all dogs    |
| new      | /dogs/new | GET      | the route that shows the form |
| create   | /dogs     | POST     | add new dog to the database   |
| show     | /dogs/:id | GET      | shows info about one dog      |
