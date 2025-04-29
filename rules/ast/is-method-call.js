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
			object: options.object,
			objects: options.objects,
			computed: options.computed,
			property: options.method ?? '',
			properties: options.methods ?? [],
			optional: options.optionalMember,
		})
	);
}
