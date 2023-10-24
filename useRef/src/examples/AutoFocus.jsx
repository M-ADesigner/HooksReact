import { useRef } from "react"

function AutoFocus() {

    const inputRef = useRef()


    function onFocus(){
        inputRef.current.focus();
        inputRef.current.style.border = '5px solid red'


    }

  return (
    <div>
        <input type="text"  ref={inputRef} />
        <button onClick={onFocus}>FOCUS!</button>
    </div>
  )
}

export default AutoFocus