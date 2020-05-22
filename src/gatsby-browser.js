require('sal.js/dist/sal.css');
require('intersection-observer');

const React = require("react");
const Wrapper = require('./Wrapper').default;

exports.wrapPageElement = ({ element, props }, { plugins, ...options }) => (
	<Wrapper 
		options={options} 
		path={props.path}
	>
		{element}
	</Wrapper>
)