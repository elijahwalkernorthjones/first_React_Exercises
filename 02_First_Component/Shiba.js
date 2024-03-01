
const Shiba = () => {
  return <img src="https://66.media.tumblr.com/8844e689de079e6134709eba05acccd1/tumblr_ohtx6cUWOi1voqnhpo5_250.png" />
}

const Sharpaye = () => {
  return <img src="https://www.akc.org/wp-content/uploads/2017/11/Chinese-Shar-Pei-standing-on-the-sidewalk.jpg" /> 
}


const App = () => {
  return (
      <div> 
        <Shiba />
        <Sharpaye />
        <Shiba />
      </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root"))


