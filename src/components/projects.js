import React from 'react';
import "./projects.css";

function projects() {
    return (
        <div>
            <div class="main">
  <h1>My Projects</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/memory.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Social Media App</h2>
          <p class="card_text">This app is introduced to share your feeling at that moment by sharing picture.It takes you to the moment.You can share about your moment and what you feel ,world will see it n like it.It is a MERN APP.</p>
          <button class="btn card_btn"><a href="https://shareurfeeling.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004/memories-client" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
          
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/todoapp.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Todo App</h2>
          <p class="card_text">It is a complete mern stack app which you can add today list as reminder.After finishing the task you can strike off that event.Daily day to day events we can remember easily by this app.It is a MERN APP.</p>
          <button class="btn card_btn"><a href="https://needtodo1.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004/TodoApp_Backend" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/Project3.png")}/></div>
        <div class="card_content">
          <h2 class="card_title">Online Service App</h2>
          <p class="card_text">U break-we Fix is a Home improvements service application.Whatever the issues you face from home you get service through online.The application has been designed and implemented as a fullstack web development project.</p>
          <button class="btn card_btn"><a href="https://still-depths-30514.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004/online_house_service" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/fitness.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Fitness Tracker</h2>
          <p class="card_text">This application allows the user to create and track their workouts. They can keep track of multiple exercises in a workout.It is a MERN APP."
                    </p>
          <button class="btn card_btn"><a href="https://healthfitnesstracker.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/sujatha-m/Fitness-Tracker" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/shopping.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Shopping Application</h2>
          <p class="card_text">In this app you can add items to cart and you can see items from cart and you can delete items from cart.You can give rating to your item.</p>
          <button class="btn card_btn"><a href="https://csb-h0fbv.netlify.app/" class="btn card_btn" target="_blank" rel="noopener noreferrer" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004/ShoppingCartwithRating_React" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/tictactoe.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Tic Tac Toe Game</h2>
          <p class="card_text">This is a game you can play with 2players.Finish the same line with your moves.You need to finish it by forming same line.</p>
          <button class="btn card_btn"><a href="https://cherrytictactoe.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004/TicTacToeGame" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/chatapp.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Chappu Chat App</h2>
          <p class="card_text">It is a chat application to chat with group of people in single room.Here you can share pics ,messages.(username:Guest,password : Guest)</p>
          <button class="btn card_btn"><a href="https://chappuchatapp.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004/Chappu-chat-app/" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>

    {/* <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/shopping.PNG")}/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn"><a href="https://www.google.com/" class="btn card_btn" role="button">Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://www.google.com/" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li> */}

    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={require("../components/assets/images/github1.png")}/></div>
        <div class="card_content">
          <h2 class="card_title">My Projects</h2>
          <p class="card_text">Here you can see all projects submitted on github profile.All repos n rest submitted projects you can see my works through my github profile.</p>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button" >Deployed Link</a></button>
          <button class="btn card_btn"><a href="https://github.com/SreeChakram-004" target="_blank" rel="noopener noreferrer" class="btn card_btn" role="button">GitHub Link</a></button>
        </div>
      </div>
    </li>
  </ul>
</div>


            
        </div>
    )
}

export default projects
