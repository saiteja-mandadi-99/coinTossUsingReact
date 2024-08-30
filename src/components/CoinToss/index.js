// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageurl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickTossBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        imageurl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        tails: prevState.tails,
      }))
    } else {
      this.setState(prevState => ({
        imageurl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        heads: prevState.heads,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {imageurl, total, heads, tails} = this.state
    return (
      <div className="appContainer">
        <div className="tossContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="tossDesc">Heads (or) Tails</p>
          <img src={imageurl} alt="toss result" className="img" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossBtn}
          >
            Toss Coin
          </button>
          <div className="detailsContainer">
            <p className="detailsEle">Total: {total}</p>
            <p className="detailsEle">Heads: {heads}</p>
            <p className="detailsEle">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
