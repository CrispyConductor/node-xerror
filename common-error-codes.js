var registry = require('./error-code-registry');

var codes = {
	ACCESS_DENIED: { message: 'Access Denied', http: 403 },
	ALREADY_EXISTS: { message: 'Already Exists', http: 409 },
	BAD_REQUEST: { message: 'Bad Request', http: 400 },
	INTERNAL_ERROR: { message: 'Internal Error', http: 500 },
	NOT_FOUND: { message: 'Not Found', http: 404 },
	UNSUPPORTED_FORMAT: { message: 'Unsupported format', http: 415 },
	TIMED_OUT: { message: 'Operation timed out', http: 504 },
	UNSUPPORTED_OPERATION: { message: 'Operation not supported', http: 404 },
	LIMIT_EXCEEDED: { message: 'Limit exceeded', http: 503 },
	NOT_MODIFIED: { message: 'Not modified', http: 304 },
	INVALID_ARGUMENT: { message: 'Invalid data passed to function', http: 401 }
};

module.exports = function() {
	registry.registerErrorCodes(codes);
};
