import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    });
  }

  handleMiddleClick = (event) => {
    this.props.onTier2Click(event)
  }

  handleTier3Click = (event) => {
    event.stopPropagation()
    const thirdLevelColor = getRandomColor()
    this.setState({
      childColor: getReducedColor(thirdLevelColor)
    })
  }

  render() {
    return (
      <div className="tier2"
        onClick={this.handleMiddleClick}
        style={{backgroundColor: this.props.color, color: this.props.color}} >
        <Tier3
          color={this.state.childColor}
          handleYoungestChildClick={this.handleTier3Click} />
        <Tier3
          color={this.state.childColor}
          handleYoungestChildClick={this.handleTier3Click} />
      </div>
    )
  }
}
