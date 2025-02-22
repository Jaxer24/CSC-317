# CSC 317 Assignment 2 Submission

**Name:** Jacob Arciniega-Bueno  
**Student ID:** 924000204  
**GitHub Username:** Jaxer24  
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
This assignment has me creating a personal portfolio webpage that summarizes my personal information, work experience, and more.
key objectives incliude: making ordered and unordered lists, using Iframe to embed videos and maps, embeding images with the image tag, 
creating tables, creating forms, and using anchor tags to navigate the page.




## Approach / What I Did:
For this assignment I heavily based my webpage layout based on the provided sample. The order of sections is mostly random but I generally 
put the most important information first.  Each portion of my portfolio is divided into its own section making it easy to organize my work. 


## Code Explanation:

I chose to use a style tag in the head section of the webpage as it would have been too cumbersome to manually add these atributes in each 
of the table's th and td tags
    <style> /* stylizing the table in the education section to clearly convey that it is indeed a table */
       th, td {
        border: 1px solid #7d7d7d;
        padding: 12px; /* More padding for spacing */
        text-align: left;
        line-height: 1.5; /* Increases spacing between lines */
       }
    </style>

I also used the inline style to format many of the default block tags for a formating and aligning relavent information together. 
    <h4 style="display:inline">Blockchain Technology</h4> &nbsp;
        <img src="images/Blockchain.png" width="40" alt="skateboard photo">

When making my experience list I had a hard time finding out how to add descriptions to each listed item, so as a work around I simply 
broke to a new line and added spaces to achieve a similar effect
    <li>
    Coding Clubs<br>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; By participating in coding clubs I learned how to effectively communicate and
    collaborate with others.
    </li>

For this webpage I chose to leave in many of the classes and ids from the given sample, though I don't actually use these I know they will 
be helpful to me in the future if I ever decide to further customize my page with CSS
    <h2>Projects</h2>
    <div class="project-grid">
     <article class="project-card">
      <h3>Crypto Price Game</h3>
      <p>
       A proof on concept game that gives players the name and logo of 3 random crypo tokens from CoinGecko's public
       API. Players can then pick which of the three has the highest price, guessing right earns a point while guessing
       wrong ends the game. "Now you can simulate making important financial decisions on crypto tokens only using their
       name and logo. Just like a real crypto trader!"
      </p>
         
When making my form section I used a free service called FormSpree.io which handles the server request for me and sends the form information
directly to my personal email.
    <form action="https://formspree.io/f/mjkgzwwd" method="post">     