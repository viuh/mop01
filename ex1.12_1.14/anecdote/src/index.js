import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }
  

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: { 0:0, 1:0, 2:0, 3:0, 4:0}
    }
  } 

  choose = () => {
    return () => {
     let randomNumber = Math.floor(Math.random() * (anecdotes.length-1));
     this.setState({
        selected: randomNumber
    })
  }
}

vote = () => {
    return () => {
        let orig = this.state.points
        orig[this.state.selected]+=1
        this.setState({
            pisteet: orig
        })
    }
}


show = (idx) => {

    return (
        <div>{anecdotes[idx]}
        <br/>has {this.state.points[idx]} votes
        </div>
    )
}   




mostVoted = () => {
    //let most = this.most(this.state)
    //console.log("suurimman index:",most)
    let a = 0
    let indexOfMax = 0
    a = Object.values(this.state.points)
 
    //https://stackoverflow.com/a/45607455/364931
    indexOfMax = a.reduce( (a,b,i) => a[0] < b ? [b,i] : a, [Number.MIN_VALUE,-1])[1]

    //console.log("Tilanne:",this.state.pisteet, "suurin idx:",indexOfMax)
    if (indexOfMax>-1) {
    return (
        <div>{this.show(indexOfMax)}</div>
    )
    }
}


  render() {
    return (
      <div>
        {this.show(this.state.selected)}

        <Button handleClick={this.vote()} text="vote"/> 
        <Button handleClick={this.choose()} text="next anecdote"/>
      
      <h2>anecdote with most votes:</h2>
      {this.mostVoted(this.state)}
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)