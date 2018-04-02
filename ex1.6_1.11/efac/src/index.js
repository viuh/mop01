import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {

  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({name,value}) => {

    let suffix = ""
    if (name==="positiivisia") {
      suffix = " %"
    }

    return (
      <tr><td>{name}</td><td>{value}{suffix}</td></tr>
    )

}

const Statistics = ({valinnat,tiedot,arvolkm}) => {
  
  if (arvolkm==0) {
    return (
      <div>ei yhtään palautetta annettu.</div>
    )
  }
  return (
    <div>
      <table><tbody>
        <Statistic name = {valinnat[0]} value={tiedot[0]} />
        <Statistic name = {valinnat[1]} value={tiedot[1]} />
        <Statistic name = {valinnat[2]} value={tiedot[2]} />
        <Statistic name = {valinnat[3]} value={tiedot[3]} />
        <Statistic name = {valinnat[4]} value={tiedot[4]}/>
      </tbody>
      </table>
    </div>
  )
}



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keskiarvo: 0,
      positiivisia: 0,
      arvolkm : 0,
      summa : 0,
      tiedot : [0,0,0,0,0],
      valinnat: ["hyvä","neutraali","huono","keskiarvo","positiivisia"]
    }
  }


  addOne = (idx) => {
    return () => {

      let tmp    = this.state.tiedot
      let arvoja = this.state.arvolkm+1 
      let posi   = this.state.positiivisia
      let val    = 0

      if (idx === 0) {
        posi +=1
        val = 1
      }
      if (idx === 2) {
        val = -1
      }   

      tmp[idx]+=1
      //keskiarvo & positiivisia
      tmp[3]=(this.state.summa+val)/arvoja
      tmp[4]=posi/arvoja*100

      //console.log("Arvoja:",arvoja, "ka:",tmp[3], "pos:",tmp[4])
      
      this.setState({
        arvolkm : this.state.arvolkm+1,
        positiivisia: posi,
        summa : this.state.summa+val,
        tiedot: tmp,
      })
      //console.log("Tiedot:", this.state.tiedot)

    }
  }


  render() {

    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <Button handleClick={this.addOne(0)} text={this.state.valinnat[0]}/>
          <Button handleClick={this.addOne(1)} text={this.state.valinnat[1]}/>
          <Button handleClick={this.addOne(2)} text={this.state.valinnat[2]}/>
        </div>
        <h1>Statistiikka</h1>
        <div>{Statistics(this.state)}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)