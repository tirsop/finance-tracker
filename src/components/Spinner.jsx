// styles
import './Spinner.css'

export default function Spinner() {
  return (
    <div className="lds-ring-flex">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

