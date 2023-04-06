
const App = ({buttonTextIn, nameClassIn}) => {
    
    let [buttonText, setButtonText] = React.useState(buttonTextIn)

    let [nameClass, setnameClass] = React.useState(nameClassIn)

    function onButtonClick(){
        setButtonText('aaaaa')
        setnameClass('green-btn')
    }
    
    return (
    <div className="app">
        <button className={nameClass} onClick={onButtonClick}>
            {buttonText}
        </button>
    </div>
    )
}


  const container = document.getElementById('app')
  const root = ReactDOM.createRoot(container)
  root.render(<App buttonTextIn = "Click me" nameClassIn =""/>)