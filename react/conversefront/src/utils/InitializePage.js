import React from 'react'
import { Provider, Observer } from 'mobx-react'
import { Store } from '@stores/'

import { Spin } from 'antd';

export default (Component) => {
  class InitializePage extends React.Component {
    // static getInitialProps({ req, query, params, state }) {
    //   return {
    //     initialState: Component.getInitialProps ? Component.getInitialProps({ query, params }) : null
    //   }
    // }

    constructor(props) {
      super(props)

      this.store = new Store()
      this.store.initClient()
    }

    render() {
      return (
        <Provider {...this.store}>
          <Component isServer={this.props.isServer} />
          <Observer>
            {() =>
              ( !this.store || this.store.isLoading ) && (
                <div style={{width:"100vw", height:"100vh", overflow:'hidden',position:"fixed", top:"40%", left:"50%" }}>
                <Spin tip="Loading..." size="large"/>
                </div>
              )
            }
          </Observer>
        </Provider>
      )
    }
  }
  return InitializePage
}
