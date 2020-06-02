'use strict';
module.exports = {
    meta: {
        type: 'layout',
        docs: {
            description: 'disallow generic variable names',
            category: 'Best Practices',
            recommended: true,
            url: ''
        },
        schema: []
    },
    create: function(context) {
        return {
            'VariableDeclarator': function(node) {

                if (node.id.name === 'a') {
                    context.report(node, `Should not use generic '${node.id.name}' as variable name`);
                }

            }
        };
    }
}
