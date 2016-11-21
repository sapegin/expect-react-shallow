# expect-react-shallow

[![Powered by You](http://sapegin.github.io/powered-by-you/badge.svg)](http://sapegin.github.io/powered-by-you/)
[![Build Status](https://travis-ci.org/sapegin/expect-react-shallow.svg)](https://travis-ci.org/sapegin/expect-react-shallow)

A [Chai’s](http://chaijs.com) expect like API wrapper for [unexpected-react](https://github.com/bruderstein/unexpected-react). It also accepts JSX instead of ShallowRenderer instance.

![expect-react-shallow](https://s3.amazonaws.com/f.cl.ly/items/1M3a3B163l392G1N3v25/Screen%20Shot%202015-11-12%20at%2022.39.57.png)


## Installation

```shell
npm install --save-dev expect-react-shallow
```


## Usage

```js
import React from 'react';
import { expect } from 'mocha';
import expectReactShallow from 'expect-react-shallow';

class TestComponent extends React.Component {
	render() {
		return <div className="foo">Hello React!</div>;
	}
}

describe('TestComponent', () => {

 	it('works', () => {

 		// OK
		expectReactShallow(<TestComponent/>)
			.to.have.rendered(<div>Hello React!</div>);

		// OK
		expectReactShallow(<TestComponent/>)
			.to.have.exactly.rendered(<div className="foo">Hello React!</div>);

		// Error
		expectReactShallow(<TestComponent/>)
			.to.have.exactly.rendered(<div/>);

		// OK
		expectReactShallow(<TestComponent/>)
			.to.contain(<div/>);

	});

});
```


## API

```js
expectReactShallow(ReactComponent|JSX).to.have.rendered(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.have.rendered.with.all.children(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.have.exactly.rendered(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.contain(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.contain.exactly(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.contain.with.all.children(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.not.contain(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.not.contain.exactly(ReactComponent|JSX);
expectReactShallow(ReactComponent|JSX).to.not.contain.with.all.children(ReactComponent|JSX);
```

See details in [unexpected-react docs](https://github.com/bruderstein/unexpected-react#assertions).


## Changelog

The changelog can be found on the [Releases page](https://github.com/sapegin/expect-react-shallow/releases).


## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).


## Author

* [Artem Sapegin](http://sapegin.me)


---

## License

The MIT License, see the included [License.md](License.md) file.
