import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleTopClick = () => {
    const newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    });
  }

  handleTier2Click = (event) => {
    event.stopPropagation()
    const secondLevelColor = getRandomColor()
    this.setState({
      childColor: getReducedColor(secondLevelColor)
    })
  }

  render() {
    return (
      <div className="tier1"
        onClick={this.handleTopClick}
        style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2
          color={this.state.childColor}
          onTier2Click={this.handleTier2Click} />
        <Tier2
          color={this.state.childColor}
          onTier2Click={this.handleTier2Click} />
      </div>
    )
  }
}
