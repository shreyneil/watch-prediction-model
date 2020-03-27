import React from 'react';
import axios from 'axios';
import './App.css';


const API_ENDPOINT = "http://127.0.0.1:8000"
const API_CLIENT = axios.create({
  
  baseURL: API_ENDPOINT,
  timeout: 10000
})

class App extends React.Component {
  
  state = {
    predictions:{
      brandPredictions :[],
      price_prediction : 0.0
    },
    imgSrc: ""
  }
  
  onDragOver(e) {
    e.preventDefault()
  }
  onDragLeave(e) {
    e.preventDefault()
  }
  onDrop(e) {
    e.preventDefault()
    var targetFile = e.dataTransfer.files[0]
    var data = new FormData()
    var reader = new FileReader()
    reader.readAsDataURL(targetFile)
    reader.onloadend = (e) => {this.setState({ imgSrc : reader.result })} 
    data.append('image', targetFile)
    API_CLIENT.post('/classify', data, {headers: {"Content-Type": targetFile.type, }})
      .then((response) => { this.setState({predictions : response.data}) })
      .catch((error) => { console.log(error) })
  }

  render() {
    var ImagePreview
    if(this.state.imgSrc)
       ImagePreview = (<img src={this.state.imgSrc} alt="Image of a watch" />)   
     var Predictions = []
     this.state.predictions.brandPredictions.forEach((item, index) => {
      Predictions.push(
         <p key={'item-${index}'}>{item[0]}:{item[1]}</p>
        )
     })
     var PricePrediction
       if(this.state.predictions.price_prediction)
      PricePrediction = <p>Price : {this.state.predictions.price_prediction}$</p>
   return (
      <div className="App">
        <div
         className = 'file-dropzone'
         onDragOver={(e) => { this.onDragOver(e) }}
         onDragLeave={(e) => { this.onDragLeave(e) }} 
         onDrop={(e) => { this.onDrop(e) }}>
         {ImagePreview}
         </div>
         <div className='predictions'>
          {Predictions}
          {PricePrediction}
        </div>
      </div>
    )
  }

}

export default App;
