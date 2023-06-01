import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const containerAttributeName = isDarkMode ? 'dark-mode' : 'light-mode'
    const headingAttributeName = isDarkMode ? 'light-heading' : 'dark-heading'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="main-container">
        <div className={containerAttributeName}>
          <h3 className={headingAttributeName}>Click To Change The Mode</h3>
          <button type="button" className="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
