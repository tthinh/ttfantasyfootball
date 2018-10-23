/**
 * Created by athinh on 7/3/15.
 */

function addplayer(table) {
    var teams = global_data[TEAMS];
    for (i = 0; i < teams.length; i++) {
        var team = teams[i];
        for (j = 0; j < team[PLAYERS].length; j++) {
            var columns = [];
            var player = team[PLAYERS][j];
            columns.push("<tr><td><div>"+player.teamAbbr +"</div></td></tr>");
            columns.push("<tr><td><div>"+player.firstName +"</div></td></tr>");
            columns.push("<tr><td><div>"+player.lastName +"</div></td></tr>");
            columns.push("<tr><td><div>"+player.position +"</div></td></tr>");
            columns.push("<tr><td><div>"+player.depthChartOrder +"</div></td></tr>");
            columns.push("<tr><td><div>"+player.percentOwned +"</div></td></tr>");
            columns.push("<tr><td><div>"+player.percentStarted +"</div></td></tr>");
            appendTableColumn(table, columns);
        }
    }

}