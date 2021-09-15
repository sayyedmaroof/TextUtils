import { useState } from 'react'

const TextForm = props => {
  const [text, setText] = useState('')

  const minTommss = minutes => {
    const min = Math.floor(Math.abs(minutes))
    const sec = Math.floor((Math.abs(minutes) * 60) % 60)
    return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec
  }

  const upperCaseHandler = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Uppercase', 'success')
  }

  const lowerCaseHandler = () => {
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert('Converted to Lowercase', 'success')
  }

  const copyTextHandler = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Text was successfully copied to clipboard', 'success')
  }

  const clearTextHandler = () => {
    let newText = ''
    setText(newText)
    props.showAlert('Text was cleared!', 'info')
  }

  const capitalizeHadler = () => {
    let newText = text
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')

    setText(newText)
    props.showAlert('Text was capitalized', 'success')
  }

  const extraSpacesHandler = () => {
    let newText = text.split(/[ ]+/).join(' ')

    setText(newText)
    props.showAlert('Extra spaces successfully removed', 'success')
  }

  const onChangeHandler = e => {
    setText(e.target.value)
  }

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'light' ? '#434343' : '#fff',
        }}>
        <div className="form-group">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#434343' : '#fff',
              color: props.mode === 'dark' ? '#fff' : '#434343',
            }}
            onChange={onChangeHandler}
            value={text}></textarea>
        </div>
        <button
          className="btn btn-secondary text-light my-2 mx-2"
          onClick={upperCaseHandler}>
          Convert To Uppercase
        </button>
        <button
          className="btn btn-secondary text-light my-2 mx-2"
          onClick={lowerCaseHandler}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-secondary text-light my-2 mx-2"
          onClick={copyTextHandler}>
          Copy Text
        </button>
        <button
          className="btn btn-secondary text-light my-2 mx-2"
          onClick={clearTextHandler}>
          Clear Text
        </button>
        <button
          className="btn btn-secondary text-light my-2 mx-2"
          onClick={capitalizeHadler}>
          Capitalize Text
        </button>
        <button
          className="btn btn-secondary text-light my-2 mx-2"
          onClick={extraSpacesHandler}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === 'light' ? '#434343' : '#fff',
        }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').filter(element => element.length !== 0).length} words
          and {text.length} characters.
        </p>
        <p>
          <strong>{minTommss(0.008 * text.split(' ').length)}</strong> minutes
          to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter someting to preview it here'}</p>
      </div>
    </>
  )
}

export default TextForm
