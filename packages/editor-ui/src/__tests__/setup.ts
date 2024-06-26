import '@testing-library/jest-dom';
import { configure } from '@testing-library/vue';

configure({ testIdAttribute: 'data-test-id' });

window.ResizeObserver =
	window.ResizeObserver ||
	vi.fn().mockImplementation(() => ({
		disconnect: vi.fn(),
		observe: vi.fn(),
		unobserve: vi.fn(),
	}));

Element.prototype.scrollIntoView = vi.fn();

Range.prototype.getBoundingClientRect = vi.fn();
Range.prototype.getClientRects = vi.fn(() => ({
	item: vi.fn(),
	length: 0,
	[Symbol.iterator]: vi.fn(),
}));
