import React, { Component } from 'react'

export default class RecipeDescription extends Component {
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
          <p>
            <i>{this.props.summary} </i>
          </p>
        </div>
      );
  }
}
