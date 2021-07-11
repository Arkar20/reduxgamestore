import React,{useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './components/Home'
import DarkTheme from "./DarkTheme"
import LightTheme from "./LightTheme"

import Header from "./components/ui/Header"
import GamePage from "./components/GamePage"
import MostPopular from './components/MostPopular';

import HowToDownload from './components/HowToDownload';
import DetailPage from './components/DetailPage'
import Toast from "./components/ui/Toast"

import { Provider } from "react-redux"

import {store} from "./Redux/store"
import AnimationPlayer from './components/ui/AnimationPlayer';
import animationdata from "./assets/animation/404.json"
import Footer from "./components/Footer"
const App = () => {


  const [value, setValue] = useState(0);
  const [muitheme,setmuitheme]=useState(false)

    const tabChange = (event, newValue) => {
    setValue(newValue);
    };

    const toggleTheme=()=>{
        setmuitheme(!muitheme)
    }
  
  const props={value,setValue,tabChange,toggleTheme,muitheme}
  return (
    <Provider store={store}>
      <ThemeProvider theme={muitheme ? DarkTheme : LightTheme}>
        <Toast />
        <BrowserRouter>
          <Header {...props}/>
        
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/games" component={GamePage} />
            <Route path="/most-popular" component={MostPopular} />
              <Route path="/how-to-download" component={HowToDownload} />
            <Route path="/game/:slug" exact component={DetailPage} /> 
            <Route path="*" component={() => <AnimationPlayer option={animationdata}/>} />
            <Route path="/404" component={() => <AnimationPlayer option={animationdata}/>} />

          </Switch>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
      </Provider>
      
  
    
  )
}


export default App;
