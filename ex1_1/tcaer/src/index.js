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

    return (
        <div>
          <Osa osa={props.osa1} tehtavia={props.tehtavia1}/>
          <Osa osa={props.osa2} tehtavia={props.tehtavia2}/>
          <Osa osa={props.osa3} tehtavia={props.tehtavia3}/>
        </div>
      )

}

const Yhteensa = (props) => {

    return(
        <p>yhteensä {props.sum} tehtävää</p>

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
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }

  return (
    <div>
      {/*h1>{kurssi}</h1>
      <p>{osa1} {tehtavia1}</p>
      <p>{osa2} {tehtavia2}</p>
      <p>{osa3} {tehtavia3}</p>
      <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>*/}
      <Otsikko kurssi={kurssi}/>
      <Sisalto osa1={osa1.nimi} tehtavia1={osa1.tehtavia} osa2={osa2.nimi} tehtavia2={osa2.tehtavia} osa3={osa3.nimi} tehtavia3={osa3.tehtavia}/>
      <Yhteensa sum={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
      </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
