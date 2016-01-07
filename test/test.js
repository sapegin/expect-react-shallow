import { expect } from 'chai';
import React from 'react';

import expectReactShallow from '../lib';

class TestComponent extends React.Component {
	render() {
		return (
			<div className="foo">Hello React!</div>
		);
	}
}

describe('expectReactShallow', () => {

	describe('API', () => {

		it('expectReactShallow() should return all API methods ', () => {
			let api = expectReactShallow(<TestComponent/>);
			expect(api.to.have.rendered).to.be.a.func;
			expect(api.to.have.rendered.with.all.children).to.be.a.func;
			expect(api.to.have.exactly.rendered).to.be.a.func;
			expect(api.to.contain).to.be.a.func;
			expect(api.to.contain.exactly).to.be.a.func;
			expect(api.to.contain.with.all.children).to.be.a.func;
		});

	});

	describe('expectReactShallow().to.have.rendered()', () => {

		it('should not throw an error if the JSX is equal', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.have.rendered(<div>Hello React!</div>)
			).to.not.throw();
		});
		it('should throw an error if the JSX is not equal', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.have.rendered(<div>Hello world!</div>)
			).to.throw();
		});

	});

	describe('expectReactShallow().to.have.exactly.rendered()', () => {

		it('should not throw an error if the JSX is exactly equal', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.have.exactly.rendered(<div className="foo">Hello React!</div>)
			).to.not.throw();
		});
		it('should throw an error if the JSX is not exactly equal', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.have.exactly.rendered(<div/>)
			).to.throw();
		});

	});

	describe('expectReactShallow().to.have.rendered.with.all.children()', () => {

		it('should not throw an error if the JSX is equal with all children', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.have.rendered.with.all.children(<div>Hello React!</div>)
			).to.not.throw();
		});
		it('should throw an error if the JSX is not equal with all children', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.have.rendered.with.all.children(<div/>)
			).to.throw();
		});

	});

	describe('expectReactShallow().to.contain()', () => {

		it('should not throw an error if the JSX contains another JSX', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.contain(<div/>)
			).to.not.throw();
		});
		it('should throw an error if the JSX not contains another JSX', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.contain(<span/>)
			).to.throw();
		});

	});

	describe('expectReactShallow().to.contain.exactly()', () => {

		it('should not throw an error if the JSX contains exactly another JSX', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.contain.exactly(<div className="foo">Hello React!</div>)
			).to.not.throw();
		});
		it('should throw an error if the JSX not contains exactly another JSX', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.contain.exactly(<div>Hello React!</div>)
			).to.throw();
		});

	});

	describe('expectReactShallow().to.contain.with.all.children()', () => {

		it('should not throw an error if the JSX contains another JSX with all children', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.contain.with.all.children(<div className="foo">Hello React!</div>)
			).to.not.throw();
		});
		it('should throw an error if the JSX not contains another JSX with all children', () => {
			expect(
				() => expectReactShallow(<TestComponent/>).to.contain.with.all.children(<div/>)
			).to.throw();
		});

	});

});
