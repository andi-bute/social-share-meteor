Package.describe({
    summary: "Social share buttons"
});

Package.on_use(function(api, where) {
    //api.use('server');
    api.use(['templating',
        'handlebars', 'spark', 'jquery'
    ], 'client');
    api.add_files('client/style.css', 'client');
    api.add_files('client/tilt-social-share-icons.png', 'client');
    api.add_files('client/helpers.js', 'client');


});