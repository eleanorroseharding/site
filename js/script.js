$(document).ready(function() {
	//setImageOne();
	//#imageSwap.style.backgroundImage="url(img/blurry-bg-1.jpg)";
     $('#siteTitle').lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 2,
        "strokeColor": "#fff",
        /*"onComplete" : function() { setImageOne() }*/
    }).lazylinepainter('paint');

     $('#craftsmaster').delay(2000).fadeIn(900, 'swing', function() { setImageOne();});
    
});


/*function twoFadeIn () {
    $('#landingbgimg2').animate({opacity: 1}, 2000);
    
}

function threeFadeIn () {
   $('#landingbgimg3').animate({opacity: 1}, 2000);
}*/

function setImageOne() {
	$('#landingbgimg2').fadeIn(4000).delay(10).fadeOut(4000, function() { setImageTwo();});
}

function setImageOneWoo() {
    $('#landingbgimg2').fadeIn(4000).delay(10).fadeOut(4000, function() { setImageTwoWoo();});
}

function setImageTwo() {
	$('#landingbgimg3').fadeIn(4000).delay(10).fadeOut(4000, function() { roundTwoPrep();});
}

function setImageTwoWoo() {
    $('#landingbgimg3').fadeIn(4000).delay(10).fadeOut(4000, function() { setImageOneWoo();});
}



function roundTwoPrep() {
    $('#craftsmaster').fadeOut(250);
    $('#siteTitle').lazylinepainter('erase');
    roundTwo();
}

function roundTwo() {

     $('#titleCreative').lazylinepainter( 
     {
        "svgData": pathObj2,
        "strokeWidth": 2,
        "strokeColor": "#ffffff"
    }).lazylinepainter('paint'); 
    $('#titleCreative').append("<img src='img/strategist.png' id='creative'/>");
    $('#creative').delay(3700).fadeIn(900, 'swing', function() { setImageOneWoo();});


}

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "siteTitle": {
        "strokepath": [
            {
                "path": "M30.258,107.209h36.82c23.277,0,34.704,12.908,34.704,36.608v74.91c0,23.699-11.427,36.607-34.704,36.607   h-36.82V107.209z M53.535,128.37v105.804h13.12c7.407,0,11.851-3.809,11.851-14.39v-77.025c0-10.58-4.444-14.389-11.851-14.389   H53.535z",
                "duration": 400
            },
            {
                "path": "M116.592,107.209h23.277v148.125h-23.277V107.209z",
                "duration": 400
            },
            {
                "path": "M191.711,172.808h32.588v46.977c0,23.701-11.85,37.244-34.704,37.244s-34.704-13.543-34.704-37.244V142.76   c0-23.7,11.85-37.243,34.704-37.243s34.704,13.543,34.704,37.243v14.39h-22.007v-15.871c0-10.581-4.656-14.601-12.062-14.601   s-12.062,4.021-12.062,14.601v79.988c0,10.581,4.655,14.39,12.062,14.39c7.407,0,12.062-3.809,12.062-14.39V193.97h-10.581V172.808   z",
                "duration": 350
            },
            {
                "path": "M239.322,107.209h23.277v148.125h-23.277V107.209L239.322,107.209z",
                "duration": 300
            },
            {
                "path": "M272.754,107.209h71.947v21.161h-24.335v126.964h-23.277V128.37h-24.335V107.209z",
                "duration": 250
            },
            {
                "path": "M422.148,255.334H398.66l-4.021-26.873h-28.566l-4.021,26.873h-21.373l23.7-148.125h34.069L422.148,255.334z    M369.034,208.357h22.431l-11.215-74.909L369.034,208.357z",
                "duration": 200
            },
            {
                "path": "M432.939,107.209h23.276v126.965h38.301v21.16h-61.577V107.209z",
                "duration": 150
            }
        ],
        "dimensions": {
            "width": 1104,
            "height": 444
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
  
 
 $(document).ready(function(){ 
 $('#siteTitle').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#fff"
}).lazylinepainter('paint'); 
 });*/

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj2 = {
    "titleCreative": {
        "strokepath": [
            {
                "path": "M131.443,208.988v19.81c0,23.855-11.929,37.487-34.932,37.487c-23.004,0-34.932-13.632-34.932-37.487v-77.531   c0-23.855,11.928-37.487,34.932-37.487c23.003,0,34.932,13.632,34.932,37.487v14.483h-22.152v-15.975   c0-10.649-4.686-14.697-12.141-14.697s-12.141,4.048-12.141,14.697v80.513c0,10.65,4.686,14.484,12.141,14.484   s12.141-3.834,12.141-14.484v-21.3H131.443z",
                "duration": 800
            },
            {
                "path": "M194.701,264.58c-1.277-3.834-2.13-6.177-2.13-18.317v-23.43c0-13.846-4.687-18.957-15.336-18.957h-8.094   v60.704h-23.43V115.482h35.357c24.282,0,34.719,11.289,34.719,34.293v11.715c0,15.336-4.899,25.347-15.336,30.246   c11.715,4.898,15.549,16.188,15.549,31.736v23.004c0,7.241,0.213,12.566,2.556,18.104H194.701z M169.142,136.781v45.795h9.159   c8.732,0,14.058-3.834,14.058-15.762v-14.697c0-10.649-3.621-15.336-11.929-15.336H169.142z",
                "duration": 800
            },
            {
                "path": "M254.766,178.317h32.162v21.3h-32.162v43.664h40.469v21.3h-63.898V115.482h63.898v21.3h-40.469V178.317z",
                "duration": 600
            },
            {
                "path": "M385.547,264.58h-23.644l-4.047-27.051h-28.755l-4.047,27.051h-21.513l23.856-149.099h34.292L385.547,264.58z    M332.084,217.295h22.578l-11.289-75.401L332.084,217.295z",
                "duration": 500
            },
            {
                "path": "M381.501,115.482h72.419v21.3h-24.494V264.58h-23.43V136.781h-24.495V115.482z",
                "duration": 400
            },
            {
                "path": "M464.143,115.482h23.43V264.58h-23.43V115.482z",
                "duration": 350
            },
            {
                "path": "M539.967,237.104l17.893-121.622h21.513L556.368,264.58h-34.932l-23.004-149.099h23.644L539.967,237.104z",
                "duration": 300
            },
            {
                "path": "M613.664,178.317h32.162v21.3h-32.162v43.664h40.469v21.3h-63.898V115.482h63.898v21.3h-40.469V178.317z",
                "duration": 250
            }
        ],
        "dimensions": {
            "width": 1104,
            "height": 444
        }
    }
}; 

(function() {
  var globe = planetaryjs.planet();
  // Load our custom `autorotate` plugin; see below.
  globe.loadPlugin(autorotate(10));
  // The `earth` plugin draws the oceans and the land; it's actually
  // a combination of several separate built-in plugins.
  //
  // Note that we're loading a special TopoJSON file
  // (world-110m-withlakes.json) so we can render lakes.
  globe.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file:   'js/world-110m-withlakes.json' },
    oceans:   { fill:   '#73d1b7' },
    land:     { fill:   '#dddddd' },
    borders:  { stroke: '#cccccc' }
  }));
  // Load our custom `lakes` plugin to draw lakes; see below.
  globe.loadPlugin(lakes({
    fill: '#00beb8'
  }));
  // The `pings` plugin draws animated pings on the globe.
  globe.loadPlugin(planetaryjs.plugins.pings());
  // The `zoom` and `drag` plugins enable
  // manipulating the globe with the mouse.
  globe.loadPlugin(planetaryjs.plugins.zoom({
    scaleExtent: [100, 300]
  }));
  globe.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function() {
      this.plugins.autorotate.pause();
    },
    onDragEnd: function() {
      this.plugins.autorotate.resume();
    }
  }));
  // Set up the globe's initial scale, offset, and rotation.
  globe.projection.scale(175).translate([175, 175]).rotate([0, -10, 0]);

  // Every few hundred milliseconds, we'll draw another random ping.
  var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
  setInterval(function() {
    var lat = Math.random() * 170 - 85;
    var lng = Math.random() * 360 - 180;
    var color = colors[Math.floor(Math.random() * colors.length)];
    globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 10 });
  }, 150);

  var canvas = document.getElementById('rotatingGlobe');
  // Special code to handle high-density displays (e.g. retina, some phones)
  // In the future, Planetary.js will handle this by itself (or via a plugin).
  if (window.devicePixelRatio == 2) {
    canvas.width = 800;
    canvas.height = 800;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  // Draw that globe!
  globe.draw(canvas);

  // This plugin will automatically rotate the globe around its vertical
  // axis a configured number of degrees every second.
  function autorotate(degPerSec) {
    // Planetary.js plugins are functions that take a `planet` instance
    // as an argument...
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      // ...and configure hooks into certain pieces of its lifecycle.
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          // This plugin uses the built-in projection (provided by D3)
          // to rotate the globe each time we draw it.
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 1000;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  };

  // This plugin takes lake data from the special
  // TopoJSON we're loading and draws them on the map.
  function lakes(options) {
    options = options || {};
    var lakes = null;

    return function(planet) {
      planet.onInit(function() {
        // We can access the data loaded from the TopoJSON plugin
        // on its namespace on `planet.plugins`. We're loading a custom
        // TopoJSON file with an object called "ne_110m_lakes".
        var world = planet.plugins.topojson.world;
        lakes = topojson.feature(world, world.objects.ne_110m_lakes);
      });

      planet.onDraw(function() {
        planet.withSavedContext(function(context) {
          context.beginPath();
          planet.path.context(context)(lakes);
          context.fillStyle = options.fill || 'black';
          context.fill();
        });
      });
    };
  };
})();
 