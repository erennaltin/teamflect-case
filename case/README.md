# Full Stack JavaScript Developer Challenge

Welcome to this development challenge! Your task is to build a simple web application using Node.js and React.js, along with other supporting technologies.

## Overview
You will create a system that handles data of 10,000 people from a CSV file, converts it to JSON, and uses this data to run a fake REST API Server. You'll also build a front-end component to display and manage the data.

### Prerequisites
- Node.js
- React.js
- Microsoft Fluent UI
- A code editor of your choice

### Steps to Complete the Task

#### 1. Convert CSV to JSON & Create Fake REST API Server
- The CSV file in the repository consists of data with fields: Index, User Id, First Name, Last Name, Sex, Email, Phone, Date of birth, Job Title.
- Convert this file to a JSON file using Node.js.
- Use the JSON data to create a fake REST API Server using [json-server](https://www.npmjs.com/package/json-server).

#### 2. Build a React.js Component for Displaying Data
- Create a React.js page or component to render the information into a table component.
- Use the GroupedList component from [Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web/groupedlist) to group the data by Sex and Job Title.
- Each row should display all information about one person and include an additional "photo" field, rendering with the Persona component from Microsoft Fluent UI. You can use fake images from [Picsum](https://picsum.photos/).
- Include an "Add user" button to open a popup for adding new users (the location of the button in the page is not important). This form should use the Modal component from [Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web/modal) and require only two validations:
  - The Sex field should be a dropdown with two options: male, female.
  - None of the fields should be empty.

#### 3. Implement Data Manipulation
- Include two buttons in each row to delete and update the data, interacting with the fake backend server.
- The update button should open a popup similar to the "Add user" form for updating user details.

### Evaluation Criteria
Your solution will be evaluated based on the following:
- Code quality and organization
- Functionality
- Adherence to the task requirements
- Use of best practices in both front-end and back-end development
  
### How to Submit Your Solution
Send your code as a .zip file to bora@teamflect.com

### Support
If you have any questions or need further clarifications, please don't hesitate to reach out.

Good luck, and happy coding!
