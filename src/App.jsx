import React from "react"
import { BrowserRouter as Router} from "react-router-dom"
import { HeaderContainer } from "./f1-Containers"
import s from "./app.module.css"
import { PageHolder } from "./f2-Components";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <section className={s.wrapper}>
          <HeaderContainer />
          <PageHolder />
        </section>
      </Router>
    )
  }
}

export default App
