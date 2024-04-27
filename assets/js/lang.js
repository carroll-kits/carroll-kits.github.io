$('[lang]').hide();
$('[lang="en"]').show();
$('#lang-switch').change(function () { 
    var lang = $(this).val();
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'es':
            $('[lang]').hide();
            $('[lang="es"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="en"]').show();
        }
});

$(document).ready(function() {
    // Function to construct URL with current language as parameter
    function constructURL(language, href) {
        var url = href;
        if (language) {
            url += (href.indexOf('?') === -1 ? '?' : '&') + 'lang=' + language;
        }
        return url;
    }

    // Handle click event on links
    $('.language-link').click(function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var lang = $('#lang-switch').val(); // Get current language selection
        var nextPageURL = constructURL(lang, $(this).attr('href')); // Construct URL with language parameter
        // Redirect to the next page
        window.location.href = nextPageURL;
    });
});