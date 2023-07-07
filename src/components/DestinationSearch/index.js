import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchinput: ''}

  updateWord = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {searchinput} = this.state
    const {destinationList} = this.props

    const filteredDestinations = destinationList.filter(destination =>
      destination.toLowerCase().includes(searchinput.toLowerCase()),
    )
    const renderedDestinations = filteredDestinations.map(destination => (
      <DestinationItem destination={destination} />
    ))

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="input"
            placeholder="Search"
            value={searchinput}
            onChange={this.updateWord}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <div>
          <ul>{renderedDestinations}</ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
