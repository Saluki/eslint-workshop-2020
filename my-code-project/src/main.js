
var isAllowed = securityGuard.isAllowed('root');
var isAllowed2 = securityGuard.isAllowed('root');

if (isAllowed) {
    console.log('Well done, you are allowed');
}
