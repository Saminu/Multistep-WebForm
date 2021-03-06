/**
 * Created by simba on 21/01/15.
 */
function load_script( options ) {
    /*
     Use text/javascript is no type is defined.
     */
    if ( options.type === undefined ) {
        options.type = 'text/javascript' ;
    }
    /*
     Create an JS element and add it to the end of the current list of elements.
     */
    source_element = document.createElement('SCRIPT') ;
    source_element.type = options.type ;
    source_element.src = options.script ;
    source_element.defer = true ;
    source_element.async = true ;
    /*
     If a callback has been provided then run that code once the script has been successfully donwloaded and is in a ready state.
     */
    if ( typeof( options.callback ) == "function" ) {
        source_element.onreadystatechange = source_element.onload = function() {
            var state = source_element.readyState;
            if ( !options.done && ( !state || /loaded|complete/.test( state ) ) ) {
                options.done = true ;
                options.callback() ;
            }
        };
    }
    document.getElementsByTagName('head')[0].appendChild( source_element ) ;
}

/* Google Analytics Script */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53704407-1', 'auto');
ga('send', 'pageview');

/* Google Code for Remarketing Tag */
load_script( { script: "//www.googleadservices.com/pagead/conversion_async.js", callback: function() {
    window.google_trackConversion({
        google_conversion_id: 970546039,
        google_custom_params: window.google_tag_params,
        google_remarketing_only: true
    });
} } ) ;

