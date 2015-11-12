var TestUtils = require('react-addons-test-utils');
var unexpected = require('unexpected');
var unexpectedReactShallow = require('unexpected-react-shallow');

var expectShallowRender = unexpected.clone().installPlugin(unexpectedReactShallow);

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
				exactly: {}
			}
		}
	};

	api.to.have.rendered = run.bind(null, 'to have rendered');
	api.to.have.rendered.with = {all: {}};
	api.to.have.rendered.with.all.children = run.bind(null, 'to have rendered with all children');
	api.to.have.exactly.rendered = run.bind(null, 'to have exactly rendered');
	api.to.contain = run.bind(null, 'to contain');
	api.to.contain.exactly = run.bind(null, 'to contain exactly');

	return api;
}

module.exports = expectShallow;
