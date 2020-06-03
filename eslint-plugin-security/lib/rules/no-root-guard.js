'use strict';
module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow root keywork on isAllowed guard',
            category: 'Possible Errors',
            recommended: true,
            url: ''
        },
        fixable: 'code',
        schema: []
    },
    create: function(context) {
        return {
            'CallExpression': function(node) {

                if (node.callee.object.name === 'securityGuard'
                    && node.callee.property.name === 'isAllowed') {

                    if (node.arguments[0].value === 'root') {
                        // Report to ESLint
                        context.report({
                            node: node.arguments[0],
                            message: 'Thou shall not use root arg',
                            fix: function(fixer) {
                                return fixer.replaceText(node.arguments[0], "'user'")
                            }
                        })
                    }
                }

            }
        };
    }
}
