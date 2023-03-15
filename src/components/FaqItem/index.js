import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isOpen: false,
    image: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
    alt: 'plus icon',
  }

  change = () => {
    const {isOpen} = this.state
    this.setState({isOpen: !isOpen})
    const img = isOpen
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const b = isOpen ? 'plus icon' : 'minus icon'
    this.setState({alt: b})
    this.setState({image: img})
  }

  renderQuestion = () => {
    const {details} = this.props
    const {questionText} = details
    return (
      <div>
        <h1>{questionText}</h1>
      </div>
    )
  }

  renderAnswer = () => {
    const {isOpen} = this.state
    const {details} = this.props
    const {answerText} = details
    if (isOpen === true) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {image, alt} = this.state
    const {details} = this.props
    const {questionText} = details
    return (
      <li>
        <div className="qi">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.change}>
            <img src={image} alt={alt} />
          </button>
        </div>

        <p className="answer">{this.renderAnswer()}</p>
      </li>
    )
  }
}
export default FaqItem
