import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";
import "whatwg-fetch";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

window.ResizeObserver = class ResizeObserver {
	cb: any;
	constructor(cb: any) {
		this.cb = cb;
	}
	observe() {
		this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
	}
	unobserve() {}
	disconnect() {}
};
