export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		// process `*.tsx` files with `ts-jest`
	},
	// rootDir: './',
	moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy',
		'^.+\\.svg$': 'jest-svg-transformer',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
