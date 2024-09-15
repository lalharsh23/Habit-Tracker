<h1 align="center">Habit Tracker 📅</h1>
<p align="center">
    A simple habit tracking app built with <a href="https://nodejs.org/">Node.js</a>,
    <a href="https://expressjs.com/">Express.js</a>, and
    <a href="https://www.mongodb.com/">MongoDB</a>.<br />
    Users can track their daily habits, update their progress, and view their history for the last 7
    days.
</p>
<h2>Table of Contents</h2>
<ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built with</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#setup-and-running-instructions">Setup and Running Instructions</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#deployed-link">Deployed Link</a></li>
</ul>
<h2 id="features">Features</h2>
<ul>
    <li>Add new habits to track.</li>
    <li>Update the status of each habit as Done, Not Done, or None for the last 7 days.</li>
    <li>View habit tracking history for the last 7 days with a visual display.</li>
    <li>Update the status of any habit using a dropdown for each day.</li>
</ul>
<h2 id="built-with">Built with</h2>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://mongoosejs.com/">Mongoose</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a> (for styling)</li>
</ul>
<h2 id="folder-structure">Folder Structure</h2>
<pre>
 habit-tracker/ 
 │ 
 ├── .env # Environment variables 
 ├── index.js # Main server file 
 ├── config/ # project config files 
 │ └── db.js 
 ├── models/ # Database schemas 
 │ └── habit.js 
 ├── routes/ # API routes 
 │ └── index.js 
 ├── views/ # EJS templates 
 │ └── index.ejs  
 ├── package.json # Project dependencies 
 └── README.md # Project documentation 
</pre>
<h2 id="setup-and-running-instructions">Setup and Running Instructions</h2>
<h3>Backend Setup</h3>
<ol>
    <li>
        Clone the repository:
        <pre><code>git clone https://github.com/lalharsh23/habit-tracker.git cd habit-tracker </code></pre>
    </li>
    <li>
        Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>
        Configure MongoDB:
        <p>
            Ensure MongoDB is running locally or update the connection string in
            <code>.env</code> with your MongoDB URL.
        </p>
    </li>
    <li>
        Start the server:
        <pre><code>npm start</code></pre>
    </li>
    <li>
        Access the app at:
        <p><a href="http://localhost:3000">http://localhost:3000</a></p>
    </li>
</ol>

<h2 id="author">Author</h2>
<p>Created by <strong>Harsh Lal</strong>.</p>
<h2 id="deployed-link">Deployed Link</h2>
<p><a href="https://habit-tracker-n0rf.onrender.com">Click here</a></p>
