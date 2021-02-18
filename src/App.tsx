import * as React from "react"
import { Route, BrowserRouter , Switch } from "react-router-dom"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { HomeComponent } from "./components/homecomp"
import { Page1 } from "./components/page1"
import { Page2 } from "./components/page2"
import { Page3 } from "./components/page3"
import { Page4 } from "./components/page4"

export class App extends React.Component {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Switch>
          <Route path="/page4" component={Page4} />
          <Route path="/page3" component={Page3} />
          <Route path="/page2" component={Page2} />
          <Route path="/page1" component={Page1} />
          <Route path="/cptdownload" render={() => (window.location.href = "https://www.filehorse.com/download-cisco-packet-tracer-32/")} />
     
          <Route path="/instagram" render={() => (window.location.href = "https://www.instagram.com/_aakashdeep_2000/")} />
            <Route path="/" component={HomeComponent} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    )
  }
}




