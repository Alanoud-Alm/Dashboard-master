    
    
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    

   

//     npm install datatables.net    # Core library
// npm install datatables.net-dt # Styling
$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": '../json/data.json',
        "columns": [
            { "data": 'name' },
            { "data": 'address' },
            { "data": 'city' },
            { "data": 'age' },
            { "data": 'last visit' },
            { "data": 'orders' }
        ]
    
    } );
} );

// var $  = require( 'jquery' );
// var dt = require( 'datatables.net' )();

// let table = new DataTable('#example', {
//     // options
// });
// window.$ = window.jquery = require('./node_modules/jquery');
// window.dt = require('./node_modules/datatables.net')();
// window.$('#table_id').DataTable();

// var data = [
//     [
//         "Tiger Nixon",
//         "System Architect",
//         "Edinburgh",
//         "5421",
//         "2011/04/25",
//         "$3,120"
//     ],
//     [
//         "Garrett Winters",
//         "Director",
//         "Edinburgh",
//         "8422",
//         "2011/07/25",
//         "$5,300"
//     ]
// ]
// $('#example').DataTable( {
//     data: data
// } );


    
