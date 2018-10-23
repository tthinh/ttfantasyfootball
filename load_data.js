/**
 * Created by athinh on 7/3/15.
 */


function getData(table) {
    setDataAndRender("http://api.fantasy.nfl.com/v1/players/researchinfo?format=json&count=1000", table, PLAYERS_DATA);
    sleep(500);

}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function setDataAndRender(a_href, table, key) {
    $.ajax(a_href, {
        success: function (data, status) {
            console.log(data);
            global_data[key] = data;
            switch(key) {
                case PLAYERS_DATA:
                    updatePlayers(data);
                    addplayer(table);
                    break;
            }

        },
        failure: function(response, opts) {
            console.log("failure")
        }
    });
}

function updatePlayers(data) {
    for (var i = 0; i < data.players.length;i++){
        var player =  data.players[i];
        var team = player.teamAbbr;
        var teams = global_data[TEAMS];
        console.log("("+team+")");
        if(team!=""){
            for(var j = 0 ; j < teams.length; j++){
                var updateteam = teams[j];
                if(updateteam[TEAMABBR] == team){
                    console.log("ADD ("+player.firstName+" "+player.lastName+")");
                    //if(player.percentOwned != false && player.percentStarted != false){
                    if(player.depthChartOrder != null){
                        updateteam[PLAYERS].push(player)
                    }
                }
            }
            //teams[team].push(player);
        }
    }
}


