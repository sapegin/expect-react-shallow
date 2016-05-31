var TestUtils = require('react-addons-test-utils');
var unexpected = require('unexpected');
var unexpectedReact = require('unexpected-react');

var expectShallowRender = unexpected.clone().installPlugin(unexpectedReact);

function getShallowRenderer(jsx) {
	var renderer = TestUtils.createRenderer();
	renderer.render(jsx);
	return renderer;
}

function expectShallow(jsx) {
	var run = function(command, expected) {
		return expectShallowRender(getShallowRenderer(jsx), command, expected);
	};

	var api = {
		to: {
			have: {
				exactly: {},
			},
			not: {
				have: {
					exactly: {},
				},
			},
		},
	};

	api.to.have.rendered = run.bind(null, 'to have rendered');
	api.to.have.rendered.with = { all: {} };
	api.to.have.rendered.with.all.children = run.bind(null, 'to have rendered with all children');
	api.to.have.exactly.rendered = run.bind(null, 'to have exactly rendered');
	api.to.contain = run.bind(null, 'to contain');
	api.to.contain.exactly = run.bind(null, 'to contain exactly');
	api.to.contain.with = { all: {} };
	api.to.contain.with.all.children = run.bind(null, 'to contain with all children');
	api.to.not.contain = run.bind(null, 'not to contain');
	api.to.not.contain.exactly = run.bind(null, 'not to contain exactly');
	api.to.not.contain.with = { all: {} };
	api.to.not.contain.with.all.children = run.bind(null, 'not to contain with all children');

	return api;
}

module.exports = expectShallow;
