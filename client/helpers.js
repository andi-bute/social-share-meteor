if (Meteor.isClient) {
    var social_services = {
        'facebook': {
            'slug': 'facebook',
            'name': 'Facebook',
            'label': 'Facebook',
            'url': 'https://www.facebook.com/sharer/sharer.php?u='
        },
        'twitter': {
            'slug': 'twitter',
            'name': 'Twitter',
            'label': 'Twitter',
            'url': 'https://twitter.com/home?status='
        }
    };
    Handlebars.registerHelper('social-share', function(services) {
        services = JSON.parse(services);
        var shared_url = encodeURIComponent(window.location.toString() + "?_escaped_fragment_=");
        var string = '<ul class="tssw-list">';
        for (var i = 0; i < services.length; i++) {
            var service = social_services[services[i]];
            string += '<li class="tssw-item"><a href="' + service.url + shared_url + '" target="_blank"><span class="tssw-icon tssw-' + service.slug + '"></span><span class="tssw-tooltip">' + service.label + '</span></a></li>';
        }
        string += '</ul>';
        return new Handlebars.SafeString(string);
    });
}