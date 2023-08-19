import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 9;

  render() {
    return (
      <div>
        <Router>
          <NavBar />
         {/* <News pageSize={this.pageSize} country={'in'} category={'general'} />  */}
          <Routes>

            <Route exact path="/general" element={<News pageSize={this.pageSize} country={'in'} category={'general'} key='general' />}></Route>

            <Route exact path="/business" element={<News pageSize={this.pageSize} country={'in'} category={'business'} key='business' />}></Route>

            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country={'in'} category={'entertainment'} key='entertainment' />}></Route>

            <Route exact path="/general" element={<News pageSize={this.pageSize} country={'in'} category={'general'} key='general' />}></Route>

            <Route exact path="/health" element={<News pageSize={this.pageSize} country={'in'} category={'health'} key='health' />}></Route>

            <Route exact path="/science" element={<News pageSize={this.pageSize} country={'in'} category={'science'} key='science' />}></Route>

            <Route exact path="/sports" element={<News pageSize={this.pageSize} country={'in'} category={'sports'} key='sports' />}></Route>

            <Route exact path="/technology" element={<News pageSize={this.pageSize} country={'in'} category={'technology'} key='technology' />}></Route>


          </Routes>
        </Router>
      </div >
    )
  }
}
