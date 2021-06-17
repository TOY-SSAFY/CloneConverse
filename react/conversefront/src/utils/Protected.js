import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

import { Spin } from 'antd';

export default (Component) => {
  @inject('authStore')
  @observer
  class Protected extends React.Component {
    state = {
      isLoading: true,
      isAuthenticated: false,
    }
    constructor(props) {
      super(props)

      this.authStore = props.authStore
      //   this.authStore.login().then((res) => {
      //     if (res) {
      //       this.setState({ isAuthenticated: true, isLoading: false })
      //     } else {
      //       // Router.replace('/login')
      //       this.setState({ isAuthenticated: false, isLoading: false })
      //     }
      //   })
    }

    
    componentDidMount() {
      this.authStore.login().then((res) => {
        if (this.authStore.token) {
          this.setState({ isAuthenticated: true, isLoading: false })
        } else {
          this.setState({ isAuthenticated: false, isLoading: false })
        }
      })
    }

    _logout = () => {
      this.authStore.logout()
    }

    render() {
      if (!this.authStore.token) {
        this.setState({ isAuthenticated: false, isLoading: false })
      }
      return (
        <div className="authComponent">
          {this.state.isLoading ? (
            <div style={{width:"100vw", height:"100vh", overflow:'hidden',position:"fixed", top:"40%", left:"50%" }}>
              <Spin tip="Loading..." size="large"/>
            </div>
          ) : this.state.isAuthenticated ? (
            <Component
              match={this.props.match}
              location={this.props.location}
              logout={this._logout}
              user={this.authStore.currentUser}
            />
          ) : (
            <Redirect to={'/login'} />
          )}
        </div>
      )
    }
  }
  return Protected
}
