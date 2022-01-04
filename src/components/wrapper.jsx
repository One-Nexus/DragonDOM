import { Module } from "./module";

if (typeof React === 'undefined') {
  var React = require('react');
}

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NAMESPACE = this.props.name || 'wrapper';
    const CHILD = this.props.children.length ? this.props.children[0] : this.props.children;
    const MODULE = this.props.module || CHILD.props.name || CHILD.type.name;

    const PROPS = {
      modifiers: [MODULE],
      permeable: true
    }

    return (
      <Module name={NAMESPACE} {...this.props} {...PROPS}>
        {this.props.children}
      </Module>
    );
  }
}

export const Group = (props) => <Wrapper name='group' {...props}>{props.children}</Wrapper>;