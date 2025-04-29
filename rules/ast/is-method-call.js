import isMemberExpression from './is-member-expression.js';
import {isCallExpression} from './call-or-new-expression.js';

/**
@param {
	{
		// `isCallExpression` options
		argumentsLength?: number,
		minimumArguments?: number,
		maximumArguments?: number,
		optionalCall?: boolean,
		allowSpreadElement?: boolean,

		// `isMemberExpression` options
		method?: string,
		methods?: string[],
		object?: string,
		objects?: string[],
		optionalMember?: boolean,
		computed?: boolean
	}
} [options]
@returns {string}
*/
export default function isMethodCall(node, options) {
	return (
		isCallExpression(node, {
			argumentsLength: options.argumentsLength,
			minimumArguments: options.minimumArguments,
			maximumArguments: options.maximumArguments,
			allowSpreadElement: options.allowSpreadElement,
			optional: options.optionalCall,
		}) &&
		isMemberExpression(node.callee, {
			objects: options.object ?? options.objects,
			properties: options.method ?? options.methods,
			optional: options.optionalMember,
			computed: options.computed,
		})
	);
}
