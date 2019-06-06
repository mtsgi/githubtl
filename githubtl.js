// GitHub TL Viewer v1.1

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
            $("#tlarea").append( "<kit-box><img src='" + i.actor.avatar_url + "'><span class='kit-small'>" + i.created_at + "</span><strong class='loaduser'><a>" + i.actor.login + "</a></strong> : " + i.type + "<div class='kit-small'><a href='https://github.com/" + i.repo.name + "'>" + i.repo.name + "</a></div></kit-box>" );
        }
        $(".loaduser").on("click", function(){
            $("#username").val( $(this).text() );
            load();
        });
    });
}