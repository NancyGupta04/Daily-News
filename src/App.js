
import './App.css';
import News from './components/News'
import React, {Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';


export default class App extends Component {
  pageSize=12
  api_key=process.env.REACT_APP_NEWS_API
  state={
  progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    // console.log(this.state.progress)
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout progress={this.state.progress}/>}>
              <Route index element={<News setProgress={this.setProgress} api_key={this.api_key} key="general" pageSize={this.pageSize} country='in' category='general'/>}/>
              <Route exact path='business' element={<News setProgress={this.setProgress} api_key={this.api_key} key="business" pageSize={this.pageSize} country='in' category='business'/>}/>
              <Route exact path='entertainment' element={<News setProgress={this.setProgress} api_key={this.api_key} key="entaintainment" pageSize={this.pageSize} country='in' category='entertainment'/>}/>
              <Route exact path='health' element={<News setProgress={this.setProgress} api_key={this.api_key} key="health" pageSize={this.pageSize} country='in' category='health'/>}/>
              <Route exact path='science'element={<News setProgress={this.setProgress} api_key={this.api_key} key="science" pageSize={this.pageSize} country='in' category='science'/>}/>
              <Route exact path='sports' element={<News setProgress={this.setProgress} api_key={this.api_key} key="sports" pageSize={this.pageSize} country='in' category='sports'/>}/>
              <Route exact path='technology' element={<News setProgress={this.setProgress} api_key={this.api_key} key="technology" pageSize={this.pageSize} country='in' category='technology'/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
