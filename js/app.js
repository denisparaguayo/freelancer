    // Add A Dynamic Year In Divi Footer Copyright
    var beg_year = 2017; // Year site went live
    var this_year = new Date(); // Get current date
    var copyright_text = ' Nombre Empresa | Derechos Reservados ';
    var developed_by = '| Diseñado con <span id="icon-love" class="et-pb-icon et-waypoint et_pb_animation_top et-animated"></span> por <a href="https://webpy.xyz/" target="_blank">Denis Cantero</a>'; // Developer info
    this_year = this_year.getFullYear();
    if (this_year > beg_year) {
        var year = beg_year + ' - ' + this_year;
    } else {
        var year = this_year;
    }
    jQuery(($) => {
        $('#footer-info').html(`© ${year} ${copyright_text} ${developed_by}`);
    });