import './index.css'

const LanguageButtons = props => {
  const {languageItem, onActiveLanguage} = props
  const {id, buttonText} = languageItem

  const onActive = () => {
    onActiveLanguage(id)
  }

  return (
    <li>
      <button type="button" onClick={onActive}>
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButtons
