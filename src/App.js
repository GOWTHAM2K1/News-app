import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  state ={
    progress:0
  }


  setProgress=(progress)=>{
    this.setState({
      progress:progress

    })
  }
  
  render() {
    // this.setProgress(80) can set progress by calling the function
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          
        />
         {/* <News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'general'} />  */}
          <Routes>

            <Route exact path="/general" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'general'} key='general' />}></Route>

            <Route exact path="/business" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'business'} key='business' />}></Route>

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'entertainment'} key='entertainment' />}></Route>

            <Route exact path="/general" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'general'} key='general' />}></Route>

            <Route exact path="/health" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'health'} key='health' />}></Route>

            <Route exact path="/science" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'science'} key='science' />}></Route>

            <Route exact path="/sports" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'sports'} key='sports' />}></Route>

            <Route exact path="/technology" element={<News setProgress={this.setProgress}rogress={this.setProgress} pageSize={this.pageSize} country={'in'} category={'technology'} key='technology' />}></Route>


          </Routes>
        </Router>
      </div >
    )
  }
}
