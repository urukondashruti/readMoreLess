import {useState} from 'react'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const words = reactHooksDescription.slice(0, 170)

  const [value, setValue] = useState(false)

  const onChangeValue = () => setValue(prevState => !prevState)

  return (
    <div>
      <h1>React Hooks</h1>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {value === true ? <p>{reactHooksDescription}</p> : <p>{words}</p>}
      {value === true ? (
        <button type="button" onClick={onChangeValue}>
          Read less
        </button>
      ) : (
        <button type="button" onClick={onChangeValue}>
          Read More
        </button>
      )}
    </div>
  )
}

export default ReadMore
