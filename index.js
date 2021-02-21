//creating element for grid
const grid=document.querySelector('.grid')
//grid width
const width = 28
//score
let score=0
const scorecard=document.getElementById('score')

const squares=[]
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
 1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
 1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
 1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
 1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
 1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
 1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
 1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
 1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
 1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
 1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
 1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
 4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
 1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
 1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
 1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
 1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
 1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
 1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
 1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
 1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
 1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
 1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
 1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
 1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]


//create board
// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

function createBoard(){
    for (let i=0;i<layout.length;i++){
        const square=document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
        if(layout[i]===0){
            squares[i].classList.add('pac-dot')
        }
        else if(layout[i]===1){
            squares[i].classList.add('wall')
        }
        else if(layout[i]===3){
            squares[i].classList.add('power-pellet')
        }
        else if(layout[i]===2){
            squares[i].classList.add('ghost-liar')
        }
        
        
    }
}

createBoard()

//pacman current index
let pacmanCurrentIndex=500
squares[pacmanCurrentIndex].classList.add('pacman')

function control(e){
    //removing pacman class
    squares[pacmanCurrentIndex].classList.remove('pacman')

    //up key - 38
    // left - 37
    // right - 39
    
    // if(e.keyCode===40){
    //     pacmanCurrentIndex+=40;
    // }
    // else if(e.keyCode===39)
    // {
    //     pacmanCurrentIndex+=1
    // }
    // else if(e.keyCode===38)
    // {
    //     pacmanCurrentIndex+=1
    // }
    // else if(e.keyCode===37)
    // {
    //     pacmanCurrentIndex-=1
    // }

    //using switch 
    switch(e.keyCode){
        case 40:
            if(!squares[pacmanCurrentIndex+width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex+width].classList.contains('ghost-liar') &&
             pacmanCurrentIndex+width < width*width  ) pacmanCurrentIndex+=width
            break
        case 39:
           
            if(!squares[pacmanCurrentIndex+1].classList.contains('wall') && 
            !squares[pacmanCurrentIndex+1].classList.contains('ghost-liar') &&
            pacmanCurrentIndex% width !==width-1 ) pacmanCurrentIndex+=1
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
            break
        case 38:
           
            if(!squares[pacmanCurrentIndex-width].classList.contains('wall') && 
            !squares[pacmanCurrentIndex-width].classList.contains('ghost-liar') &&
            pacmanCurrentIndex-width >   0 ) pacmanCurrentIndex-=width
            break
        case 37:
            
           
            if(!squares[pacmanCurrentIndex-1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex-1].classList.contains('ghost-liar') &&
            pacmanCurrentIndex% width !==0 ) pacmanCurrentIndex-=1
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
            break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()
    powerPalletEaten()
}
document.addEventListener('keyup',control)

function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        score++
        scorecard.innerHTML=score
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
}

function powerPalletEaten(){
    //if square pacman is in contains a power pellet
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet'))
    {
    //removing power pallet
    squares[pacmanCurrentIndex].classList.remove('power-pellet')

    //add a score of 10
    score+=10

    

    //change all ghost to scared
    ghosts.forEach(ghost=>ghost.isScared=true)
        
    //useTimeout to unscare the ghost
   
    setTimeout(unScare,10000)
    }
}

//unscare function
function unScare(){
    ghosts.forEach(ghost => ghost.isScared = false)
    
}

// making class of ghost

class Ghost{
    
    constructor(className,startIndex,speed){
        this.className=className
        this.startIndex=startIndex
        this.speed=speed
        this.currentIndex=startIndex
        this.isScared=false
        this.timerId=NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

//draw ghost

ghosts.forEach(ghost=>{squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')})


//move ghost
ghosts.forEach(ghost=>moveGhost(ghost))

function moveGhost(ghost){
    const directions=[-1,+1,-width,width]
    let direction=directions[Math.floor(Math.random()*directions.length)]
    
    ghost.timerId=setInterval(function(){
        //if the next square does NOT contain a wall and does not contain a ghost
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
        //remove ghost
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove('ghost','scared-ghost')
        //add direction to current Index
        ghost.currentIndex+=direction
        //add ghost class
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        
        }
        else{
            direction = directions[Math.floor(Math.random() * directions.length)]
        }
        
        if (ghost.isScared) {
            console.log("enter here")
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }
    },ghost.speed)

    //if the ghost is currently scared
    
    


}

