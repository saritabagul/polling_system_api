# polling_system_api
This API is created using nodeJS, express, and MongoDB.
This backend API creates questions and options for a specific question. Options can be voted. 
Questions and options can be deleted and questions can be viewed with all of their options.

# Polling System Features
1. Create questions
2. Add options to question
3. Delete a question
4. Delete an option
5. Add a vote to an option
6. View a question with all of its options
   
# Installation Guide
Clone this repository.
Run npm install to install all the dependencies.

# How to use it?
Run npm start to start the application.
Connect to the API using Postman on port 8000.

# API Endpoints
<table>
  <thead>
    <th>HTTP Request</th>
    <th>Endpoints</th>
    <th>Action</th>
  </thead>
  <tbody>
    <tr>
       <td>POST</td>
       <td>/questions/create</td>
       <td>To create a question</td>
    </tr>  
    <tr>
       <td>POST</td>
       <td>/questions/:id/options/create</td>
       <td>To add options to a specific question</td>
    </tr>
    <tr>
       <td>DELETE</td>
       <td>/questions/:id/delete</td>
       <td>To delete a question</td>
    </tr>
    <tr>
       <td>DELETE</td>
       <td>/options/:id/delete </td>
       <td>To delete an option</td>
    </tr>    		
    <tr>
       <td>PUT</td>
       <td>/options/:id/add_vote</td>
       <td>To increase the count of votes</td>
    </tr>
    <tr>
       <td>GET</td>
       <td>/questions/:id</td>
       <td>To view a question and its options</td>
    </tr>
  </tbody>
</table>



