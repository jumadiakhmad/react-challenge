import React, {Component} from 'react'

export default class Form extends Component{
  constructor(props) {
    super(props)
    console.log('data props', this.props);
    }
    render() {
      return (
        <div className="container text-center">
          <form onSubmit={this.props.handleFormSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="What's your name"/>
              <input type="submit" className="btn btn-primary" value="Submit"/>
            </div>
          </form>
        </div>
      )
    }
}
