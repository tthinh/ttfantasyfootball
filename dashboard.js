/**
 * Created by athinh on 7/3/15.
 */

$(document).ready(function(){
    var table = $("#dashboardTable");
    getData(table);
    //addHeader(table);
    //addgithub(table);
});

function appendTableColumn(table, rowData) {
    var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
    $.each(rowData, function(colIndex, c) {
        var htmlElement = updateHtml(c);
        lastRow.append($('<td/>').html(htmlElement));
    });
    return lastRow;
}

function updateHtml(c){
 var htmlElement = $(c);
 if(htmlElement.is( "A" )) {
    if(htmlElement.next().is("button")){
        updateVersionButton(htmlElement)
    }
 }
    return htmlElement;
}


function appendXMLColumn(table, rowData) {
    var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
    $.each(rowData, function(colIndex, c) {
        var htmlElement = updateXMLHtml(c);
        lastRow.append($('<td/>').html(htmlElement));
    });
    return lastRow;
}

function updateXMLHtml(c){
    var htmlElement = $(c);
    if(htmlElement.is( "A" )) {
        if(htmlElement.next().is("button")){
            viewXMLModel(htmlElement)
        }
    }
    return htmlElement;
}




function viewXMLModel(htmlElement) {
    var a_href = $(htmlElement).attr('href');
    var $button = htmlElement.next();
    $button.click(function () {
        var modelLabel = $("#myModalLabel");
        modelLabel.text("VERSION");
        var modelBody = $("#myModelBody");
        modelBody.text("");
        $.ajax({
            url:a_href,
            method: 'POST',
            crossDomain: true,
            useDefaultXhrHeader: false,
            success: function (data, status) {
                var xmlstr = (new XMLSerializer()).serializeToString( data );
                $(data).find('ver:component').each(function(){

                });
                // console.log(xmlstr);
                modelBody.append(xmlstr);
                console.log(data);
            }
        });
        var model = $("#myModal");
        model.modal();
    });
}


function appendJsonColumn(table, rowData) {
    var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
    $.each(rowData, function(colIndex, c) {
        var htmlElement = updateJsonHtml(c);
        lastRow.append($('<td/>').html(htmlElement));
    });
    return lastRow;
}

function updateJsonHtml(c){
    var htmlElement = $(c);
    if(htmlElement.is( "A" )) {
        if(htmlElement.next().is("button")){
            viewJsonModel(htmlElement)
        }
    }
    return htmlElement;
}


function viewJsonModel(htmlElement) {
    var a_href = $(htmlElement).attr('href');
    var $button = htmlElement.next();
    $button.click(function () {
        var modelLabel = $("#myModalLabel");
        modelLabel.text("VERSION");
        var modelBody = $("#myModelBody");
        modelBody.text("");
        $.ajax(a_href, {
            success: function (data, status) {
                modelBody.append(JSON.stringify(data));
                console.log(data);
            }
        });

        var model = $("#myModal");

        model.modal();
    });
}

function updateVersionButton(htmlElement){
    var a_href = $(htmlElement).attr('href');
    var $button = htmlElement.next();
    $button.click(function(){
        var modelLabel = $("#myModalLabel");
        modelLabel.text("VERSION");
        var modelBody = $("#myModelBody");
        $.ajax(a_href, {
            success: function(data, status) {
                modelBody.append(JSON.stringify(data));
                console.log(data);
            }
        });

        var model = $("#myModal");

        model.modal();
    });
}




