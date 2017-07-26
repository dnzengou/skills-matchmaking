navigator.serviceWorker && navigator.serviceWorker.register('scripts/sw.js').then(function(registration) {
    console.log('Excellent, registered with scope: ', registration.scope);
});
