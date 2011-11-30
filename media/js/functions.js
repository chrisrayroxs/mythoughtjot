// JavaScript Document

/*
jQuery("#myCanvas").drawRect(10, 10, 20, 20, {color:'blue', alpha: .5});
jQuery("#myCanvas").drawPolygon([100, 100, 90, 30], [20, 30, 40, 60], {color:'#00FF00', alpha: .9});
jQuery("#myCanvas").drawEllipse(100, 200, 40, 40, {color:'orange', stroke: 10});
jQuery("#myCanvas").fillArc(50, 200, 40, 40, 90.0, 180.0, {color:'#336699', alpha: .2});
jQuery("#myCanvas").fillPolygon([150, 300, 90, 30], [20, 30, 40, 60], {color:'yellow', alpha: 1});
*/

function line(cx1, cy1, cx2, cy2) {
    c = $(document.body);
    var dx = Math.abs(cx2-cx1);
    var dy = Math.abs(cy2-cy1);
    var d = Math.max(dx, dy);
    var i=0;
    for(i=0; i < d; i++) {
        var img = $(document.createElement('img')).attr('src', 'blank.gif');
        var div = $(document.createElement('div')).width(1).height(1).css({'background-color': '#f00', position: 'absolute', left: Math.min(cx1,cx2)+(i*dx/d), top: Math.min(cy1,cy2)+(i*dy/d) });
        div.append(img);
        c.append(div);
    }
}
function circle(x, y, r) {
    c = $(document.body);
    var l = 2 * Math.PI * r;
    var i=0;
    for(i=0; i < l * (1+((10-Math.log(r+1))/10)); i++) {
        var cx2 = r * Math.sin(360 * i/l);
        var cy2 = r * Math.cos(360 * i/l);
        var img = $(document.createElement('img')).attr('src', 'blank.gif');
        var div = $(document.createElement('div')).width(1).height(1).css({'background-color': '#f00', position: 'absolute', left: x+cx2, top: y+cy2 });
        div.append(img);
        c.append(div);
    }
}

function draw () {
	$("#canvas").append('<canvas data-processing-sources="js/processingPlugin.js"></canvas>');
	
}

// create a shape
function createShape () {
	$("#canvas").append('<div onclick="bringtofront()" onmouseover="drag()" class="test1">Drag Me!!!</div>');
}

// add text
function addText () {
	$("#canvas").append('<span id="textbox" class="editText">This is a textbox.</span></div><script type="text/javascript" src="js/instantedit.js"></script><script type="text/javascript">setVarsForm("pageID=profileEdit&userID=11");</script>');
}

//erase a drawing
function erase () {
    var p = Processing.getInstanceById('testdrawcanvas');
    p.clearDrawing();
}

//change size of the paintbrush canvas
function changeDrawingSize (width, height) {
    var q = Processing.getInstanceById('testdrawcanvas');
    q.changeSize(width, height);
}
//change color of paintbrush
function changeColor (color) {
    var c = Processing.getInstanceById('testdrawcanvas');
    c.changecolor(color);
}

function bringtofront() {
	$(".test1").topZIndex( { increment: 10 } );
}

// make a div draggable
function drag () {
    $(".test1")
}

//change canvas background
function changeCanvasBackground (x) {
   if (x == 1){
    $("#canvas").css('background', '#FFF url(../media/images/canvasNote.png) 40px 40px');}
   if (x == 2){
    $("#canvas").css('background', '#FFF url(../media/images/canvasGraph.png)');}
   if (x == 3){
    $("#canvas").css('background', '#FFF url(../media/images/canvasDrawing.png)');}  
   if (x == 4){
    $("#canvas").css('background-image', 'none');}    
   if (x == 5){
   	$("#canvas").css('background-image', 'none');
   	$("#canvas").css('color', '#ffffff');
    $("#canvas").css('background-color', '#26211c');}    

}

// right sliding widget
$(function(){
	 
    $('.slideoutMenu').tabSlideOut({
        tabHandle: '.handle',                     //class of the element that will become your tab
        //pathToTabImage: '', //path to the image for the tab //Optionally can be set using css
        imageHeight: '122px',                     //height of tab image           //Optionally can be set using css
        imageWidth: '40px',                       //width of tab image            //Optionally can be set using css
        tabLocation: 'right',                      //side of screen where tab lives, top, right, bottom, or left
        speed: 300,                               //speed of animation
        action: 'click',                          //options: 'click' or 'hover', action to trigger animation
        topPos: '0px',                          //position from the top/ use if tabLocation is left or right
        leftPos: '20px',                          //position from left/ use if tabLocation is bottom or top
        fixedPosition: false                      //options: true makes it stick(fixed position) on scroll
    });
 
});

$(function(){
    $('.slideoutMenu2').tabSlideOut({
        tabHandle: '.handle2',                     //class of the element that will become your tab
        //pathToTabImage: '', //path to the image for the tab //Optionally can be set using css
        imageHeight: '122px',                     //height of tab image           //Optionally can be set using css
        imageWidth: '40px',                       //width of tab image            //Optionally can be set using css
        tabLocation: 'right',                      //side of screen where tab lives, top, right, bottom, or left
        speed: 300,                               //speed of animation
        action: 'click',                          //options: 'click' or 'hover', action to trigger animation
        topPos: '200px',                          //position from the top/ use if tabLocation is left or right
        leftPos: '20px',                          //position from left/ use if tabLocation is bottom or top
        fixedPosition: false                      //options: true makes it stick(fixed position) on scroll
    });
   
});

function close() {
	$('.slideoutMenu2').removeClass();
	$('.slideoutMenu2 open').addClass("slideoutMenu2");
}

//jQuery right menu
$(document).ready(function () {
    var theme = $.data(document.body, 'theme');
	if (theme == null || theme == undefined) theme = '';
 
        // Create a jqxMenu
	$("#jqxMenu").jqxMenu({ mode: 'vertical', theme: theme });
});

// create graph from data
function createGraph (id, title, type) {
	if (type == 'bar') {$(id).visualize({type: 'bar', title: title});  };
	if (type == 'pie') {$(id).visualize({type: 'pie', pieMargin: 10, title: title});   };
	if (type == 'line') {$(id).visualize({type: 'line', title: title});  };
	if (type == 'area') {$(id).visualize({type: 'area', title: title});  };
};

//draw polygon
function drawPoly () {
	$("#canvas").drawPolygon([100, 100, 90, 30], [20, 30, 40, 60], {color:'#00FF00', alpha: .9});
	//$("#myCanvas").drawRect(10, 10, 20, 20, {color:'blue', alpha: .5});
	//$("#myCanvas").drawPolygon([100, 100, 90, 30], [20, 30, 40, 60], {color:'#00FF00', alpha: .9});
	//$("#myCanvas").drawEllipse(100, 200, 40, 40, {color:'orange', stroke: 10});
	//$("#myCanvas").fillArc(50, 200, 40, 40, 90.0, 180.0, {color:'#336699', alpha: .2});
	//$("#myCanvas").fillPolygon([150, 300, 90, 30], [20, 30, 40, 60], {color:'yellow', alpha: 1});
}

function drawRectangle() {
	$(document).ready(function() {
	$('#about').click(function() {
		
	                   window.location.href = 'http://motyar.blogspot.com/2010/02/draw-rectangle-with-jquery.html';
	}
	)
	var rx1,rx2,ry1,ry2;
	$(document).mousedown(function(e) {
	$("#current").attr({ id: '' })
	box = $('<div style="border:1px #FF00FF solid;position:fixed;">').hide();
	$(document.body).append(box);
	
	rx1 = e.pageX;
	ry1 = e.pageY;
	
	box.attr({id: 'current'}).css({
	top: e.pageY , //offsets
	left: e.pageX //offsets
	}).fadeIn();
	});
	$(document).mousemove(function(e) {
	$("#current").css({
	width:Math.abs(e.pageX - rx1), //offsets
	height:Math.abs(e.pageY - ry1) //offsets
	}).fadeIn();
	});
	
	$(document).mouseup(function() {
	$("#current").attr({ id: '' })
	});
	
	});
}

function drawCircle() {
		$(document).ready(function() {
	
	var cx1,cx2,cy1,cy2;
	$(document).mousedown(function(e) {
	$("#current").attr({ id: '' })
	box = $('<div style="border:1px #FF00FF solid;position:fixed;">').hide();
	$(document.body).append(box);
	
	cx1 = e.pageX;
	cy1 = e.pageY;
	
	box.attr({id: 'current'}).css({
	top: e.pageY , //offsets
	left: e.pageX //offsets
	}).fadeIn();
	});
	$(document).mousemove(function(e) {
	$("#current").css({
	width:Math.abs(e.pageX - cx1), //offsets
	height:Math.abs(e.pageY - cy1),//offsets
	'border-radius':Math.abs(Math.abs(e.pageX - cx1) / 2),
	'-moz-border-radius':Math.abs(Math.abs(e.pageX - cx1) / 2),
	'-webkit-border-radius':Math.abs(Math.abs(e.pageX - cx1) / 2)
	}).fadeIn();
	});
	
	$(document).mouseup(function() {
	$("#current").attr({ id: '' })
	});
	
	});
}

/*
//creating shapes
var drawNodes = []; 
var sketchpad = null; 
var start = null; 
var outline = null; 
var offset = null; 
 
$('#canvas').svg({onLoad: function(svg) { 
        sketchpad = svg; 
        var surface = svg.rect(0, 0, '100%', '100%', {id: 'surface', fill: 'white'}); 
        $(surface).mousedown(startDrag).mousemove(dragging).mouseup(endDrag); 
        resetSize(svg, '100%', '100%'); 
    } 
}); 
 
// Remember where we started 
function startDrag(event) { 
    offset = ($.browser.msie ? {left: 0, top: 0} : $('#canvas').offset()); 
    if (!$.browser.msie) { 
        offset.left -= document.documentElement.scrollLeft || document.body.scrollLeft; 
        offset.top -= document.documentElement.scrollTop || document.body.scrollTop; 
    } 
    start = {X: event.clientX - offset.left, Y: event.clientY - offset.top}; 
    event.preventDefault(); 
} 
 
// Provide feedback as we drag 
function dragging(event) { 
    if (!start) { 
        return; 
    } 
    if (!outline) { 
        outline = sketchpad.rect(0, 0, 0, 0, 
            {fill: 'none', stroke: '#c0c0c0', strokeWidth: 1, strokeDashArray: '2,2'}); 
        $(outline).mouseup(endDrag); 
    } 
    sketchpad.change(outline, {x: Math.min(event.clientX - offset.left, start.X), 
        y: Math.min(event.clientY - offset.top, start.Y), 
        width: Math.abs(event.clientX - offset.left - start.X), 
        height: Math.abs(event.clientY - offset.top - start.Y)}); 
    event.preventDefault(); 
} 
 
// Draw where we finish 
function endDrag(event) { 
    if (!start) { 
        return; 
    } 
    $(outline).remove(); 
    outline = null; 
    drawShape(start.X, start.Y, 
        event.clientX - offset.left, event.clientY - offset.top); 
    start = null; 
    event.preventDefault(); 
} 
 
// Draw the selected element on the canvas 
function drawShape(x1, y1, x2, y2) { 
    var left = Math.min(x1, x2); 
    var top = Math.min(y1, y2); 
    var right = Math.max(x1, x2); 
    var bottom = Math.max(y1, y2); 
    var settings = {fill: $('#fill').val(), stroke: $('#stroke').val(), 
        strokeWidth: $('#swidth').val()}; 
    var shape = $('#shape').val(); 
    var node = null; 
    if (shape == 'rect') { 
        node = sketchpad.rect(left, top, right - left, bottom - top, settings); 
    } 
    else if (shape == 'circle') { 
        var r = Math.min(right - left, bottom - top) / 2; 
        node = sketchpad.circle(left + r, top + r, r, settings); 
    } 
    else if (shape == 'ellipse') { 
        var rx = (right - left) / 2; 
        var ry = (bottom - top) / 2; 
        node = sketchpad.ellipse(left + rx, top + ry, rx, ry, settings); 
    } 
    else if (shape == 'line') { 
        node = sketchpad.line(x1, y1, x2, y2, settings); 
    } 
    else if (shape == 'polyline') { 
        node = sketchpad.polyline([[(x1 + x2) / 2, y1], [x2, y2], 
            [x1, (y1 + y2) / 2], [x2, (y1 + y2) / 2], [x1, y2], 
            [(x1 + x2) / 2, y1]], $.extend(settings, {fill: 'none'})); 
    } 
    else if (shape == 'polygon') { 
        node = sketchpad.polygon([[(x1 + x2) / 2, y1], [x2, y1], [x2, y2], 
            [(x1 + x2) / 2, y2], [x1, (y1 + y2) / 2]], settings); 
    } 
    drawNodes[drawNodes.length] = node; 
    $(node).mousedown(startDrag).mousemove(dragging).mouseup(endDrag); 
    $('#canvas').focus(); 
}; 
 
// Remove the last drawn element 
$('#undo').click(function() { 
    if (!drawNodes.length) { 
        return; 
    } 
    sketchpad.remove(drawNodes[drawNodes.length - 1]); 
    drawNodes.splice(drawNodes.length - 1, 1); 
}); 
 
// Clear the canvas 
$('#clear2').click(function() { 
    while (drawNodes.length) { 
        $('#undo').trigger('click'); 
    } 
}); 
 
 //Drawing Shapes
// Remember where we started
function startDrag(event) {
	offset = ($.browser.msie ? {left: 0, top: 0} : $('#canvas').offset());
	if (!$.browser.msie) {
		offset.left -= document.documentElement.scrollLeft || document.body.scrollLeft;
		offset.top -= document.documentElement.scrollTop || document.body.scrollTop;
	}
	start = {X: event.clientX - offset.left, Y: event.clientY - offset.top};
	event.preventDefault();
}

// Provide feedback as we drag
function dragging(event) {
	if (!start) {
		return;
	}
	if (!outline) {
		outline = sketchpad.rect(0, 0, 0, 0,
			{fill: 'none', stroke: '#c0c0c0', strokeWidth: 1, strokeDashArray: '2,2'});
		$(outline).mouseup(endDrag);
	}
	sketchpad.change(outline, {x: Math.min(event.clientX - offset.left, start.X),
		y: Math.min(event.clientY - offset.top, start.Y),
		width: Math.abs(event.clientX - offset.left - start.X),
		height: Math.abs(event.clientY - offset.top - start.Y)});
	event.preventDefault();
} */

// NOT FINISHED alert
function notfinishedyet() {
	alert("Oops! mythoughtjot is still in its alpha version! This functionality will be available soon!");
}

// Draw where we finish
function endDrag(event) {
	if (!start) {
		return;
	}
	$(outline).remove();
	outline = null;
	drawShape(start.X, start.Y,
		event.clientX - offset.left, event.clientY - offset.top);
	start = null;
	event.preventDefault();
}

// Draw the selected element on the canvas
function drawShape(x1, y1, x2, y2) {
	var left = Math.min(x1, x2);
	var top = Math.min(y1, y2);
	var right = Math.max(x1, x2);
	var bottom = Math.max(y1, y2);
	var settings = {fill: $('#fill').val(), stroke: $('#stroke').val(),
		strokeWidth: $('#swidth').val()};
	var shape = $('#shape').val();
	var node = null;
	if (shape == 'rect') {
		node = sketchpad.rect(left, top, right - left, bottom - top, settings);
	}
	else if (shape == 'circle') {
		var r = Math.min(right - left, bottom - top) / 2;
		node = sketchpad.circle(left + r, top + r, r, settings);
	}
	else if (shape == 'ellipse') {
		var rx = (right - left) / 2;
		var ry = (bottom - top) / 2;
		node = sketchpad.ellipse(left + rx, top + ry, rx, ry, settings);
	}
	else if (shape == 'line') {
		node = sketchpad.line(x1, y1, x2, y2, settings);
	}
	else if (shape == 'polyline') {
		node = sketchpad.polyline([[(x1 + x2) / 2, y1], [x2, y2],
			[x1, (y1 + y2) / 2], [x2, (y1 + y2) / 2], [x1, y2],
			[(x1 + x2) / 2, y1]], $.extend(settings, {fill: 'none'}));
	}
	else if (shape == 'polygon') {
		node = sketchpad.polygon([[(x1 + x2) / 2, y1], [x2, y1], [x2, y2],
			[(x1 + x2) / 2, y2], [x1, (y1 + y2) / 2]], settings);
	}
	drawNodes[drawNodes.length] = node;
	$(node).mousedown(startDrag).mousemove(dragging).mouseup(endDrag);
	$('#canvas').focus();
};

//createSomethingCool
function createIT() { 
	$("#canvas").append('<div id="canvas_container"></div> ');
	
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    
    var circle = paper.circle(100, 100, 80);  
    for(var i = 0; i < 5; i+=1) {  
    var multiplier = i*5;  
    paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier);  
} 
}  

function redo(i){
	if(i != "pencil"){
	$("#drawButton svg").remove();
	renderIcon("pencil");
	}
	if(i != "bubble"){
	$("#textButton svg").remove();
	renderIcon("bubble");
	}
	if(i != "flipv"){
	$("#shapeButton svg").remove();
	renderIcon("flipv");
	}
	if(i != "barchart"){
	$("#graphButton svg").remove();
	renderIcon("barchart");
	}
	if(i != "users"){
	$("#shareButton svg").remove();
	renderIcon("users");
	}
	if(i != "search"){
	$("#searchButton svg").remove();
	renderIcon("search");
	}
	if(i != "mail"){
	$("#messageButton svg").remove();
	renderIcon("mail");
	}
	if(i != "settings"){
	$("#canvasButton svg").remove();
	renderIcon("settings");
	}
/*
//this was going to be efficient...
var iconString = [];
iconString = ["pencil","bubble","flipv","barchart","users","search","mail","settings"];
	for(var s = 0; s < 7; s++){
		renderIcon(iconString[s]);
	}
*/
}

//render icons
function renderIcon(i) {
	var element;
var iconT;
   switch (i) {
        case "pencil": 
        iconT = "M25.31,2.872l-3.384-2.127c-0.854-0.536-1.979-0.278-2.517,0.576l-1.334,2.123l6.474,4.066l1.335-2.122C26.42,4.533,26.164,3.407,25.31,2.872zM6.555,21.786l6.474,4.066L23.581,9.054l-6.477-4.067L6.555,21.786zM5.566,26.952l-0.143,3.819l3.379-1.787l3.14-1.658l-6.246-3.925L5.566,26.952z";
        path = document.getElementById("drawButton")
        break;
        case "pen": 
        iconT = "M13.587,12.074c-0.049-0.074-0.11-0.147-0.188-0.202c-0.333-0.243-0.803-0.169-1.047,0.166c-0.244,0.336-0.167,0.805,0.167,1.048c0.303,0.22,0.708,0.167,0.966-0.091l-7.086,9.768l-2.203,7.997l6.917-4.577L26.865,4.468l-4.716-3.42l-1.52,2.096c-0.087-0.349-0.281-0.676-0.596-0.907c-0.73-0.529-1.751-0.369-2.28,0.363C14.721,6.782,16.402,7.896,13.587,12.074zM10.118,25.148L6.56,27.503l1.133-4.117L10.118,25.148zM14.309,11.861c2.183-3.225,1.975-4.099,3.843-6.962c0.309,0.212,0.664,0.287,1.012,0.269L14.309,11.861z";
        
        break;
        case "plus": 
        iconT = "M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z";
        
        break;
        case "minus": 
        iconT = "M25.979,12.896,5.979,12.896,5.979,19.562,25.979,19.562z";
        
        break;
        case "users": 
        iconT = "M21.053,20.8c-1.132-0.453-1.584-1.698-1.584-1.698s-0.51,0.282-0.51-0.51s0.51,0.51,1.02-2.548c0,0,1.414-0.397,1.132-3.68h-0.34c0,0,0.849-3.51,0-4.699c-0.85-1.189-1.189-1.981-3.058-2.548s-1.188-0.454-2.547-0.396c-1.359,0.057-2.492,0.792-2.492,1.188c0,0-0.849,0.057-1.188,0.397c-0.34,0.34-0.906,1.924-0.906,2.321s0.283,3.058,0.566,3.624l-0.337,0.113c-0.283,3.283,1.132,3.68,1.132,3.68c0.509,3.058,1.019,1.756,1.019,2.548s-0.51,0.51-0.51,0.51s-0.452,1.245-1.584,1.698c-1.132,0.452-7.416,2.886-7.927,3.396c-0.511,0.511-0.453,2.888-0.453,2.888h26.947c0,0,0.059-2.377-0.452-2.888C28.469,23.686,22.185,21.252,21.053,20.8zM8.583,20.628c-0.099-0.18-0.148-0.31-0.148-0.31s-0.432,0.239-0.432-0.432s0.432,0.432,0.864-2.159c0,0,1.199-0.336,0.959-3.119H9.538c0,0,0.143-0.591,0.237-1.334c-0.004-0.308,0.006-0.636,0.037-0.996l0.038-0.426c-0.021-0.492-0.107-0.939-0.312-1.226C8.818,9.619,8.53,8.947,6.947,8.467c-1.583-0.48-1.008-0.385-2.159-0.336C3.636,8.179,2.676,8.802,2.676,9.139c0,0-0.72,0.048-1.008,0.336c-0.271,0.271-0.705,1.462-0.757,1.885v0.281c0.047,0.653,0.258,2.449,0.469,2.872l-0.286,0.096c-0.239,2.783,0.959,3.119,0.959,3.119c0.432,2.591,0.864,1.488,0.864,2.159s-0.432,0.432-0.432,0.432s-0.383,1.057-1.343,1.439c-0.061,0.024-0.139,0.056-0.232,0.092v5.234h0.575c-0.029-1.278,0.077-2.927,0.746-3.594C2.587,23.135,3.754,22.551,8.583,20.628zM30.913,11.572c-0.04-0.378-0.127-0.715-0.292-0.946c-0.719-1.008-1.008-1.679-2.59-2.159c-1.584-0.48-1.008-0.385-2.16-0.336C24.72,8.179,23.76,8.802,23.76,9.139c0,0-0.719,0.048-1.008,0.336c-0.271,0.272-0.709,1.472-0.758,1.891h0.033l0.08,0.913c0.02,0.231,0.022,0.436,0.027,0.645c0.09,0.666,0.21,1.35,0.33,1.589l-0.286,0.096c-0.239,2.783,0.96,3.119,0.96,3.119c0.432,2.591,0.863,1.488,0.863,2.159s-0.432,0.432-0.432,0.432s-0.053,0.142-0.163,0.338c4.77,1.9,5.927,2.48,6.279,2.834c0.67,0.667,0.775,2.315,0.746,3.594h0.48v-5.306c-0.016-0.006-0.038-0.015-0.052-0.021c-0.959-0.383-1.343-1.439-1.343-1.439s-0.433,0.239-0.433-0.432s0.433,0.432,0.864-2.159c0,0,0.804-0.229,0.963-1.841v-1.227c-0.001-0.018-0.001-0.033-0.003-0.051h-0.289c0,0,0.215-0.89,0.292-1.861V11.572z";
        path = document.getElementById("shareButton")
        break;
        case "user": 
        iconT = "M20.771,12.364c0,0,0.849-3.51,0-4.699c-0.85-1.189-1.189-1.981-3.058-2.548s-1.188-0.454-2.547-0.396c-1.359,0.057-2.492,0.792-2.492,1.188c0,0-0.849,0.057-1.188,0.397c-0.34,0.34-0.906,1.924-0.906,2.321s0.283,3.058,0.566,3.624l-0.337,0.113c-0.283,3.283,1.132,3.68,1.132,3.68c0.509,3.058,1.019,1.756,1.019,2.548s-0.51,0.51-0.51,0.51s-0.452,1.245-1.584,1.698c-1.132,0.452-7.416,2.886-7.927,3.396c-0.511,0.511-0.453,2.888-0.453,2.888h26.947c0,0,0.059-2.377-0.452-2.888c-0.512-0.511-6.796-2.944-7.928-3.396c-1.132-0.453-1.584-1.698-1.584-1.698s-0.51,0.282-0.51-0.51s0.51,0.51,1.02-2.548c0,0,1.414-0.397,1.132-3.68H20.771z";
        
        break;
        case "mail": 
        iconT = "M28.516,7.167H3.482l12.517,7.108L28.516,7.167zM16.74,17.303C16.51,17.434,16.255,17.5,16,17.5s-0.51-0.066-0.741-0.197L2.5,10.06v14.773h27V10.06L16.74,17.303z";
        path = document.getElementById("messageButton")
        break;
        case "bubble": 
        iconT = "M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z";
        path = document.getElementById("textButton")
        break;
        case "view": 
        iconT = "M16,8.286C8.454,8.286,2.5,16,2.5,16s5.954,7.715,13.5,7.715c5.771,0,13.5-7.715,13.5-7.715S21.771,8.286,16,8.286zM16,20.807c-2.649,0-4.807-2.157-4.807-4.807s2.158-4.807,4.807-4.807s4.807,2.158,4.807,4.807S18.649,20.807,16,20.807zM16,13.194c-1.549,0-2.806,1.256-2.806,2.806c0,1.55,1.256,2.806,2.806,2.806c1.55,0,2.806-1.256,2.806-2.806C18.806,14.451,17.55,13.194,16,13.194z";
        
        break;
        case "noview": 
        iconT = "M11.478,17.568c-0.172-0.494-0.285-1.017-0.285-1.568c0-2.65,2.158-4.807,4.807-4.807c0.552,0,1.074,0.113,1.568,0.285l2.283-2.283C18.541,8.647,17.227,8.286,16,8.286C8.454,8.286,2.5,16,2.5,16s2.167,2.791,5.53,5.017L11.478,17.568zM23.518,11.185l-3.056,3.056c0.217,0.546,0.345,1.138,0.345,1.76c0,2.648-2.158,4.807-4.807,4.807c-0.622,0-1.213-0.128-1.76-0.345l-2.469,2.47c1.327,0.479,2.745,0.783,4.229,0.783c5.771,0,13.5-7.715,13.5-7.715S26.859,13.374,23.518,11.185zM25.542,4.917L4.855,25.604L6.27,27.02L26.956,6.332L25.542,4.917z";
        
        break;
        case "cloud": 
        iconT = "M24.345,13.904c0.019-0.195,0.03-0.392,0.03-0.591c0-3.452-2.798-6.25-6.25-6.25c-2.679,0-4.958,1.689-5.847,4.059c-0.589-0.646-1.429-1.059-2.372-1.059c-1.778,0-3.219,1.441-3.219,3.219c0,0.21,0.023,0.415,0.062,0.613c-2.372,0.391-4.187,2.436-4.187,4.918c0,2.762,2.239,5,5,5h15.875c2.762,0,5-2.238,5-5C28.438,16.362,26.672,14.332,24.345,13.904z";
        
        break;
        case "cloud2": 
        iconT = "M7.562,24.812c-3.313,0-6-2.687-6-6l0,0c0.002-2.659,1.734-4.899,4.127-5.684l0,0c0.083-2.26,1.937-4.064,4.216-4.066l0,0c0.73,0,1.415,0.19,2.01,0.517l0,0c1.266-2.105,3.57-3.516,6.208-3.517l0,0c3.947,0.002,7.157,3.155,7.248,7.079l0,0c2.362,0.804,4.062,3.034,4.064,5.671l0,0c0,3.313-2.687,6-6,6l0,0H7.562L7.562,24.812zM24.163,14.887c-0.511-0.095-0.864-0.562-0.815-1.079l0,0c0.017-0.171,0.027-0.336,0.027-0.497l0,0c-0.007-2.899-2.352-5.245-5.251-5.249l0,0c-2.249-0.002-4.162,1.418-4.911,3.41l0,0c-0.122,0.323-0.406,0.564-0.748,0.63l0,0c-0.34,0.066-0.694-0.052-0.927-0.309l0,0c-0.416-0.453-0.986-0.731-1.633-0.731l0,0c-1.225,0.002-2.216,0.993-2.22,2.218l0,0c0,0.136,0.017,0.276,0.045,0.424l0,0c0.049,0.266-0.008,0.54-0.163,0.762l0,0c-0.155,0.223-0.392,0.371-0.657,0.414l0,0c-1.9,0.313-3.352,1.949-3.35,3.931l0,0c0.004,2.209,1.792,3.995,4.001,4.001l0,0h15.874c2.209-0.006,3.994-1.792,3.999-4.001l0,0C27.438,16.854,26.024,15.231,24.163,14.887L24.163,14.887";
        
        break;
        case "unlock": 
        iconT = "M20.375,12.833h-2.209V10c0,0,0,0,0-0.001c0-2.389,1.945-4.333,4.334-4.333c2.391,0,4.335,1.944,4.335,4.333c0,0,0,0,0,0v2.834h2V9.999h-0.001c-0.001-3.498-2.836-6.333-6.334-6.333S16.166,6.502,16.166,10v2.833H3.125V25h17.25V12.833z";
        
        break;
        case "flag": 
        iconT = "M26.04,9.508c0.138-0.533,0.15-1.407,0.028-1.943l-0.404-1.771c-0.122-0.536-0.665-1.052-1.207-1.146l-3.723-0.643c-0.542-0.094-1.429-0.091-1.97,0.007l-4.033,0.726c-0.542,0.098-1.429,0.108-1.973,0.023L8.812,4.146C8.817,4.165,8.826,4.182,8.83,4.201l2.701,12.831l1.236,0.214c0.542,0.094,1.428,0.09,1.97-0.007l4.032-0.727c0.541-0.097,1.429-0.107,1.973-0.022l4.329,0.675c0.544,0.085,0.906-0.288,0.807-0.829l-0.485-2.625c-0.1-0.541-0.069-1.419,0.068-1.952L26.04,9.508zM6.667,3.636C6.126,3.75,5.78,4.279,5.894,4.819l5.763,27.378H13.7L7.852,4.409C7.736,3.867,7.207,3.521,6.667,3.636z";
        
        break;
        case "search": 
        iconT = "M29.772,26.433l-7.126-7.126c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127L29.772,26.433zM7.203,13.885c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486c-0.007,3.58-2.905,6.476-6.484,6.484C10.106,20.361,7.209,17.465,7.203,13.885z";
        path = document.getElementById("searchButton")
        break;
        case "zoomout": 
        iconT = "M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM8.854,11.884v4.001l9.665-0.001v-3.999L8.854,11.884z";
        
        break;
        case "zoomin": 
        iconT = "M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM15.687,9.051h-4v2.833H8.854v4.001h2.833v2.833h4v-2.834h2.832v-3.999h-2.833V9.051z";
        
        break;
        case "photo": 
        iconT = "M24.25,10.25H20.5v-1.5h-9.375v1.5h-3.75c-1.104,0-2,0.896-2,2v10.375c0,1.104,0.896,2,2,2H24.25c1.104,0,2-0.896,2-2V12.25C26.25,11.146,25.354,10.25,24.25,10.25zM15.812,23.499c-3.342,0-6.06-2.719-6.06-6.061c0-3.342,2.718-6.062,6.06-6.062s6.062,2.72,6.062,6.062C21.874,20.78,19.153,23.499,15.812,23.499zM15.812,13.375c-2.244,0-4.062,1.819-4.062,4.062c0,2.244,1.819,4.062,4.062,4.062c2.244,0,4.062-1.818,4.062-4.062C19.875,15.194,18.057,13.375,15.812,13.375z";
        
        break;
        case "printer": 
        iconT = "M24.569,12.125h-2.12c-0.207-1.34-1.247-2.759-2.444-3.967c-1.277-1.24-2.654-2.234-3.784-2.37c-0.062-0.008-0.124-0.014-0.198-0.015H8.594c-0.119,0-0.235,0.047-0.319,0.132c-0.083,0.083-0.132,0.2-0.132,0.32v5.9H6.069c-1.104,0-2,0.896-2,2V23h4.074v2.079c0,0.118,0.046,0.23,0.132,0.318c0.086,0.085,0.199,0.131,0.319,0.131h13.445c0.118,0,0.232-0.046,0.318-0.131s0.138-0.199,0.138-0.318V23h4.074v-8.875C26.569,13.021,25.674,12.125,24.569,12.125zM21.589,24.626H9.043V21.5h12.546V24.626zM21.589,13.921c0-0.03,0-0.063-0.003-0.096c-0.015-0.068-0.062-0.135-0.124-0.2H9.043v-6.95h6.987v0.001c0.305-0.019,0.567,0.282,0.769,0.971c0.183,0.655,0.229,1.509,0.229,2.102c0.001,0.433-0.019,0.725-0.019,0.725l-0.037,0.478l0.48,0.005c0.002,0,1.109,0.014,2.196,0.26c1.044,0.226,1.86,0.675,1.938,1.184c0.003,0.045,0.003,0.091,0.003,0.133V13.921z";
        
        break;
        case "export": 
        iconT = "M24.086,20.904c-1.805,3.113-5.163,5.212-9.023,5.219c-5.766-0.01-10.427-4.672-10.438-10.435C4.636,9.922,9.297,5.261,15.063,5.25c3.859,0.007,7.216,2.105,9.022,5.218l3.962,2.284l0.143,0.082C26.879,6.784,21.504,2.25,15.063,2.248C7.64,2.25,1.625,8.265,1.624,15.688c0.002,7.42,6.017,13.435,13.439,13.437c6.442-0.002,11.819-4.538,13.127-10.589l-0.141,0.081L24.086,20.904zM28.4,15.688l-7.15-4.129v2.297H10.275v3.661H21.25v2.297L28.4,15.688z";
        
        break;
        case "import": 
        iconT = "M15.067,2.25c-5.979,0-11.035,3.91-12.778,9.309h3.213c1.602-3.705,5.271-6.301,9.565-6.309c5.764,0.01,10.428,4.674,10.437,10.437c-0.009,5.764-4.673,10.428-10.437,10.438c-4.294-0.007-7.964-2.605-9.566-6.311H2.289c1.744,5.399,6.799,9.31,12.779,9.312c7.419-0.002,13.437-6.016,13.438-13.438C28.504,8.265,22.486,2.252,15.067,2.25zM10.918,19.813l7.15-4.126l-7.15-4.129v2.297H-0.057v3.661h10.975V19.813z";
        
        break;
        case "flip": 
        iconT = "M15.5,21.082h1.001v-2.001H15.5V21.082zM15.5,25.082h1.001v-2H15.5V25.082zM15.5,29.082h1.001v-2H15.5V29.082zM15.5,32.127h1.001v-1.045H15.5V32.127zM15.5,17.083h1.001v-2H15.5V17.083zM15.5,1.083h1.001v-2H15.5V1.083zM15.5,5.083h1.001v-2H15.5V5.083zM15.5,9.083h1.001v-2H15.5V9.083zM15.5,13.083h1.001v-2H15.5V13.083zM18.832,1.203v25.962h14.093L18.832,1.203zM19.832,5.136l11.41,21.03h-11.41V5.136zM13.113,27.165V1.203L-0.979,27.165H13.113z";
        
        break;
        case "flipv": 
        iconT = "M21.45,16.078v-1.001h-2.001v1.001H21.45zM25.45,16.078v-1.001h-2v1.001H25.45zM29.45,16.078v-1.001h-2v1.001H29.45zM32.495,16.078v-1.001H31.45v1.001H32.495zM17.451,16.078v-1.001h-2v1.001H17.451zM1.451,16.078v-1.001h-2v1.001H1.451zM5.451,16.078v-1.001h-2v1.001H5.451zM9.452,16.078v-1.001h-2v1.001H9.452zM13.452,16.078v-1.001h-2v1.001H13.452zM1.571,12.745h25.962V-1.348L1.571,12.745zM5.504,11.745l21.03-11.41v11.41H5.504zM27.533,18.464H1.571l25.962,14.093V18.464z";
        path = document.getElementById("shapeButton")
        break;
        case "barchart": 
        iconT = "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z";
        path = document.getElementById("graphButton")
        break;
        case "piechart": 
        iconT = "M15.583,15.917l1.648-10.779C16.692,5.056,16.145,5,15.583,5C9.554,5,4.666,9.888,4.666,15.917c0,6.029,4.888,10.917,10.917,10.917S26.5,21.946,26.5,15.917c0-0.256-0.021-0.507-0.038-0.759L15.583,15.917zM19.437,3.127l-1.648,10.779l10.879-0.759C28.313,8.026,24.436,3.886,19.437,3.127z";
        
        break;
        case "linechart": 
        iconT = "M3.625,25.062c-0.539-0.115-0.885-0.646-0.77-1.187l0,0L6.51,6.584l2.267,9.259l1.923-5.188l3.581,3.741l3.883-13.103l2.934,11.734l1.96-1.509l5.271,11.74c0.226,0.504,0,1.095-0.505,1.321l0,0c-0.505,0.227-1.096,0-1.322-0.504l0,0l-4.23-9.428l-2.374,1.826l-1.896-7.596l-2.783,9.393l-3.754-3.924L8.386,22.66l-1.731-7.083l-1.843,8.711c-0.101,0.472-0.515,0.794-0.979,0.794l0,0C3.765,25.083,3.695,25.076,3.625,25.062L3.625,25.062z";
        
        break;
        case "locked": 
        iconT = "M15.505,0.975c-8.02,0-14.521,6.501-14.521,14.521s6.501,14.521,14.521,14.521c8.02,0,14.521-6.501,14.521-14.521S23.525,0.975,15.505,0.975zM25.016,14.302c0.747,0,1.387,0.619,1.65,1.271l-3.317,0.045C23.601,14.942,24.252,14.302,25.016,14.302zM6.042,14.302c0.747,0,1.386,0.619,1.649,1.271l-3.317,0.045C4.626,14.942,5.278,14.302,6.042,14.302zM6.042,17.81c-0.818,0-1.508-0.343-1.715-1.096l3.446-0.063C7.588,17.435,6.883,17.81,6.042,17.81zM16.641,15.288c-0.178,0.068,1.135,5.804,1.135,5.804l-4.531,0.031c0,0,1.452-5.679,1.111-5.795c-1.326-0.452-2.279-1.708-2.279-3.187c0-1.859,1.507-3.366,3.366-3.366s3.366,1.507,3.366,3.366C18.808,13.578,17.908,14.805,16.641,15.288zM25.016,17.81c-0.817,0-1.507-0.343-1.714-1.096l3.445-0.063C26.562,17.435,25.857,17.81,25.016,17.81z";
        
        break;
        case "ipad": 
        iconT = "M25.221,1.417H6.11c-0.865,0-1.566,0.702-1.566,1.566v25.313c0,0.865,0.701,1.565,1.566,1.565h19.111c0.865,0,1.565-0.7,1.565-1.565V2.984C26.787,2.119,26.087,1.417,25.221,1.417zM15.666,29.299c-0.346,0-0.626-0.279-0.626-0.625s0.281-0.627,0.626-0.627c0.346,0,0.627,0.281,0.627,0.627S16.012,29.299,15.666,29.299zM24.376,26.855c0,0.174-0.142,0.312-0.313,0.312H7.27c-0.173,0-0.313-0.142-0.313-0.312V4.3c0-0.173,0.14-0.313,0.313-0.313h16.792c0.172,0,0.312,0.14,0.312,0.313L24.376,26.855L24.376,26.855z";
        
        break;
        case "iphone": 
        iconT = "M20.755,1H10.62C9.484,1,8.562,1.921,8.562,3.058v24.385c0,1.136,0.921,2.058,2.058,2.058h10.135c1.136,0,2.058-0.922,2.058-2.058V3.058C22.812,1.921,21.891,1,20.755,1zM14.659,3.264h2.057c0.101,0,0.183,0.081,0.183,0.18c0,0.1-0.082,0.18-0.183,0.18h-2.057c-0.1,0-0.181-0.081-0.181-0.18C14.478,3.344,14.559,3.264,14.659,3.264zM13.225,3.058c0.199,0,0.359,0.162,0.359,0.36c0,0.198-0.161,0.36-0.359,0.36c-0.2,0-0.36-0.161-0.36-0.36S13.025,3.058,13.225,3.058zM15.688,28.473c-0.796,0-1.44-0.646-1.44-1.438c0-0.799,0.645-1.439,1.44-1.439s1.44,0.646,1.44,1.439S16.483,28.473,15.688,28.473zM22.041,24.355c0,0.17-0.139,0.309-0.309,0.309H9.642c-0.17,0-0.308-0.139-0.308-0.309V6.042c0-0.17,0.138-0.309,0.308-0.309h12.09c0.17,0,0.309,0.138,0.309,0.309V24.355z";
        
        break;
        case "settings":
        iconT = "M26.834,14.693c1.816-2.088,2.181-4.938,1.193-7.334l-3.646,4.252l-3.594-0.699L19.596,7.45l3.637-4.242c-2.502-0.63-5.258,0.13-7.066,2.21c-1.907,2.193-2.219,5.229-1.039,7.693L5.624,24.04c-1.011,1.162-0.888,2.924,0.274,3.935c1.162,1.01,2.924,0.888,3.935-0.274l9.493-10.918C21.939,17.625,24.918,16.896,26.834,14.693z";
    	path = document.getElementById("canvasButton")
    	break;
    }
var icon = {
	token: iconT
    },
        x = 0,
        y = 0,
        fill = {fill: "#fff", stroke: "none"},
        stroke = {stroke: "#ffbc6c", "stroke-width": 3, "stroke-linejoin": "round", opacity: 0},
        selected,
        none = {fill: "#000", opacity: 0};
    for (var name in icon) {
        var r = Raphael(path, 40, 40),
            s = r.path(icon[name]).attr(stroke).translate(4, 4),
            Icon = r.path(icon[name]).attr(fill).translate(4, 4);
        (function (icon, path, s) {
            r.rect(0, 0, 32, 32).attr(none).click(function () {
               selected && selected.attr(fill);
               selected = icon.attr({fill: "90-#ff8e08-#002c62"});
            }).hover(function () {
                s.stop().animate({opacity: 1}, 200);
            }, function () {
                s.stop().attr({opacity: 0});
            });             
        })(Icon, icon[name], s);
        x += 37;
        if (x > 450) {
            x = 0;
            y += 37;
        }
    }
}

/*
		x = 0,
        y = 0,
        fill = {fill: "#333", stroke: "none"},
        stroke = {stroke: "#fff", "stroke-width": 3, "stroke-linejoin": "round", opacity: 0},
        selected,
        Path = document.getElementById("drawButton"),
        none = {fill: "#000", opacity: 0},
        preview = Raphael("preview", 350, 350);
    for (var name in icon) {
        var r = Raphael(x + 36, y + 36, 40, 40),
            s = r.path(icon[name]).attr(stroke).translate(4, 4),
            Icon = r.path(icon[name]).attr(fill).translate(4, 4);
        (function (icon, path, s) {
            r.rect(0, 0, 32, 32).attr(none).click(function () {
                selected && selected.attr(fill);
                selected = icon.attr({fill: "90-#0050af-#002c62"});
                Path.value = path;
                Path.select();
                preview.clear();
                path = Raphael._pathToAbsolute(path);
                var dots = [],
                    set = preview.set(),
                    shape = preview.path(path).attr({
                        fill: "#333",
                        stroke: "#333",
                        "stroke-width": 0,
                        transform: "t10,10s10,10,0,0"
                    }),
                    l;
                for (var i = 0, ii = path.length; i < ii; i++) {
                    l = path[i].length;
                    switch (path[i][0]) {
                        case "M":
                        case "C":
                        case "L":
                        case "A":
                        case "S":
                        case "Q":
                        case "T":
                            dots.push([path[i][l - 2], path[i][l - 1]]);
                        break;
                        case "H":
                            dots.push([path[i][l - 1], dots[dots.length - 1][1]]);
                        break;
                        case "V":
                            dots.push([dots[dots.length - 1][0], path[i][l - 1]]);
                        break;
                    }
                }
                for (i = 0, ii = dots.length; i < ii; i++) {
                    set.push(preview.circle(dots[i][0], dots[i][1], .2));
                }
                set.attr({
                    fill: "#aaa",
                    stroke: "#333",
                    "stroke-width": 2,
                    r: 0,
                    transform: "t10,10s10,10,0,0"
                });
                preview.rect(0, 0, 350, 350).attr({
                    fill: "#000",
                    opacity: 0
                }).hover(function () {
                    set.stop().animate({ r: .2 }, 500);
                    shape.stop().animate({
                        "stroke-width": 2,
                        "fill-opacity": .2
                    }, 500);
                }, function () {
                    set.stop().animate({ r: 0 }, 500);
                    shape.stop().animate({
                        "stroke-width": 0,
                        "fill-opacity": 1
                    }, 500);
                });
            }).hover(function () {
                s.stop().animate({opacity: 1}, 200);
            }, function () {
                s.stop().attr({opacity: 0});
            });
        })(Icon, icon[name], s);
        x += 37;
        if (x > 450) {
            x = 0;
            y += 37;
        }
    }
};
*/


//render Text for headers
function renderHeader(div, header) {
		 var paper = Raphael(div, 100, 100);
	var t = paper.text(50, 10, header);
	
	var letters = paper.print(50, 50, header, paper.getFont("Vegur"), 40);
	
	letters[4].attr({fill:"orange"});
	for (var i = 5; i < letters.length; i++) {
	  letters[i].attr({fill: "#3D5C9D", "stroke-width": "2", stroke: "#3D5C9D"});
	}

}

//change toolbar
function changeToolbar(div) {
	$(div).topZIndex( { increment: 10 } );
}

//newDrawing

function initButtons(){
			// make radios looking like buttons
    $('#modeRadio').buttonset();

    // make checkbox look like buttons
    $('#tabletCheckbox').button();

	// don't cache which radio is checked (Firefox issue)
	$('#modeRadio > input[type=radio]').attr('autocomplete', "off");
}



var drawinit = 0;
var shapeinit = 0;

function setGlobal(set) {
	switch (set) {
		case "draw":
		drawinit = 1;
		case "shape":
		shapeinit = 1;
  }
}
function initDraw() {drawinit = 1;}
function initShape() {shapeinit = 1;}

function pointless() {
		$("#canvas").bind('mousemove',function(e){ 
            $("#canvas").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY); 
	});
}

function drawSize(w, h)
{
	$("#canvas2")
	.width(w)
	.height(h)
	.ink('resize', false)
	.ink('fit', 'both', true);
}
function refresh(div)
{
	$("#canvas2")
	.fillVertically(window)
	.ink('resize');
}

function initWindow()
{
	// handle window changes properly
	window.onresize = refresh;
	window.onorientationchange = refresh;
}

function trythefuckagain(){
		// Drawing Shapes

}

//select what to do based on what was clicked

function whattodo() {
	if (drawinit)
	newDrawing();
	if (shapeinit)
	createShape();
}

//display some help dialog at the top based on what the user is doing
var c;
window.onload = function() {
	$('.help').append('<p>Select a tool to get started!<p>');
}
function defaultMessage() {
	$('.help p').remove();
	$('.help').append('<p>Select a tool to get started!<p>');
}

// draw shapes
function createShape() {
	  $("#canvas").off(anode.newDrawing())

		if (shapeinit) {
	//$('#canvas').append('<div id="svgsketch" class="svgdiv" style="width: 100%; height: 300px;"></div>');
	
		// Drawing Shapes
		var drawNodes = [];
		var sketchpad = null;
		var start = null;
		var outline = null;
		var offset = null;
		
		$('#canvas').svg({onLoad: function(svg) {
				sketchpad = svg;
				var surface = svg.rect(0, 0, '100%', '100%', {id: 'surface', fill: 'transparent'});
				$(surface).mousedown(startDrag).mousemove(dragging).mouseup(endDrag);
				resetSize(svg, '100%', '100%');
			}
		});
		
		// Remove the last drawn element
		$('#undo').click(function() {
			if (!drawNodes.length) {
				return;
			}
			sketchpad.remove(drawNodes[drawNodes.length - 1]);
			drawNodes.splice(drawNodes.length - 1, 1);
		});
		
		// Clear the canvas
		$('#clear2').click(function() {
			while (drawNodes.length) {
				$('#undo').trigger('click');
			}
		});
		
		// Convert to text
		$('#toSVG').click(function() {
			alert(sketchpad.toSVG());
		});
	shapeinit = 0;
  }
}

function dragBox() {

}

//removing table td
$(document).ready(function(){
        $('#table1 td').click(function(){
                $(this).parent().remove();
        });
});
$(document).ready(function(){
        $('#table2 td img.delete').click(function(){
                $(this).parent().parent().remove();
        });
})

