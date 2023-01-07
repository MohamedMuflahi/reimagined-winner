# Setup:

## How to get app running locally:

* Ruby version
	2.7.4

- Node Verison
	v16.19.0

* Package Manager
	Bun

* Database creation
```shell
rails db:create
```

* Database initialization

```shell
rails db:migrate db:seed
```

- Run Local Server

```shell
rails s
```


```shell
cd client
```

```shell
bun install
```

```shell
bun run dev
```

# Task:

#### Using the attached sample CSV data for a fictional company’s timesheets, we’d like you to build an application with a RESTful API backed by this data, as well as a frontend client in the technology of your choice.

#### We’d like to see endpoints supporting the following flow:

-  Get all timesheet entries
-   Create an entry

#### When implementing this:

-   We expect you to store the CSV data in a database. This could be in-memory or persistent. You can keep everything in a single table/collection.
-   For the choice of database technology, tables, and fields, you can assume that we don’t expect the data structure to change, or the amount of data to increase significantly.
-   For the client side we’d like you to display data in a tabular format with one row for each project (see attached image file). You are only asked to do the table (including the Name, Client, Hours, Billable Hours, Billable Amount header row).  Feel free to use React, Angular, or whatever frontend framework you are familiar and comfortable with. You can style the application using whichever tool you prefer (e.g. CSS, Sass, Less, StyledComponents, Emotion, etc). Please try to match the styles in the provided example as closely as you can.
-   The goal is for us to see a working application running locally. The final step is to provide clear instructions in a README file on how to build and run your code including any dependencies. Please specify your build environment (e.g. Windows, MacOS, Linux) in the README.
-   Please let us know if you have any questions or need further clarification. With respect to timing, we’d like to see a demo sometime in the next week or so, but we can be flexible. Once you get this and have a chance to digest the exercise, kindly reply to let us know when you think you’ll be ready to submit your exercise.
