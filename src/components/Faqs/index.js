import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg">
      <div className="container">
        <h1 className="h1">FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
