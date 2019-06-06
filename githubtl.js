// GitHub TL Viewer v1.0

$( ()=>{
    $( "#username" ).keypress( function( e ) {
        if( e.which == 13 ) load();
    } );
} );

function load(){
    $("#loading").show();
    let username = $("#username").val();
    $("#tlarea").html("");
    $.getJSON("https://api.github.com/users/" +username+ "/received_events", function(data){
        $("#loading").hide();
        for( let i of data ){
            $("#tlarea").append( "<kit-box><img src='" + i.actor.avatar_url + "'><span class='kit-small'>" + i.created_at + "</span><a href='https://github.com/" + i.repo.name + "'><strong>" + i.actor.login + "</strong> : " + i.type + "</a><div class='kit-small'>" + i.repo.name + "</div></kit-box>" );
        }
    });
}