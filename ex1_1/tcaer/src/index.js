import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
        <h1>
          {props.kurssi}
        </h1>
      )
}


const Sisalto = (props) => {

    //console.log(props.osat[0].nimi)

    return (
        <div>
          <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
          <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
          <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
        </div>
      )

}

const Yhteensa = (props) => {

    let sum = props.osat[0].tehtavia+props.osat[1].tehtavia+props.osat[2].tehtavia

    return(
        <p>yhteensä {sum} tehtävää</p>

    )

}

const Osa = (props) => {

    return (
        <p>
          {props.osa} {props.tehtavia}
        </p>
      )

}





const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]

    return (
    <div>
      {/*h1>{kurssi}</h1>
      <p>{osa1} {tehtavia1}</p>
      <p>{osa2} {tehtavia2}</p>
      <p>{osa3} {tehtavia3}</p>
      <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>*/}
      <Otsikko kurssi={kurssi}/>
      <Sisalto osat={osat}/>
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
