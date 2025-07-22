var LeafScene = function(el) {
    this.viewport = el;
    this.world = document.createElement('div');
    this.leaves = [];

    this.options = {
      numLeaves: 50,
      wind: {
        magnitude: 1.2,
        maxSpeed: 12,
        duration: 300,
        start: 0,
        speed: 0
      },
    };

    this.width = this.viewport.offsetWidth;
    this.height = this.viewport.offsetHeight;

    // animation helper
    this.timer = 0;

    this._resetLeaf = function(leaf) {

      // place leaf towards the top left
      leaf.x = this.width * 2 - Math.random()*this.width*1.75;
      leaf.y = -10;
      leaf.z = Math.random()*200;
      if (leaf.x > this.width) {
        leaf.x = this.width + 10;
        leaf.y = Math.random()*this.height/2;
      }
      // at the start, the leaf can be anywhere
      if (this.timer == 0) {
        leaf.y = Math.random()*this.height;
      }

      // Choose axis of rotation.
      // If axis is not X, chose a random static x-rotation for greater variability
      leaf.rotation.speed = Math.random()*10;
      var randomAxis = Math.random();
      if (randomAxis > 0.5) {
        leaf.rotation.axis = 'X';
      } else if (randomAxis > 0.25) {
        leaf.rotation.axis = 'Y';
        leaf.rotation.x = Math.random()*180 + 90;
      } else {
        leaf.rotation.axis = 'Z';
        leaf.rotation.x = Math.random()*360 - 180;
        // looks weird if the rotation is too fast around this axis
        leaf.rotation.speed = Math.random()*3;
      }

      // random speed
      leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
      leaf.ySpeed = Math.random() + 1.5;

      return leaf;
    }

    this._updateLeaf = function(leaf) {
      var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

      var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
      leaf.x -= xSpeed;
      leaf.y += leaf.ySpeed;
      leaf.rotation.value += leaf.rotation.speed;

      var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
      if (leaf.rotation.axis !== 'X') {
        t += ' rotateX(' + leaf.rotation.x + 'deg)';
      }
      leaf.el.style.webkitTransform = t;
      leaf.el.style.MozTransform = t;
      leaf.el.style.oTransform = t;
      leaf.el.style.transform = t;

      // reset if out of view
      if (leaf.x < -10 || leaf.y > this.height + 10) {
        this._resetLeaf(leaf);
      }
    }

    this._updateWind = function() {
      // wind follows a sine curve: asin(b*time + c) + a
      // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
      // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

      if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

        this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
        this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
        this.options.wind.start = this.timer;

        var screenHeight = this.height;

        this.options.wind.speed = function(t, y) {
          // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
          var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
          return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
        }
      }
    }
  }

  LeafScene.prototype.init = function() {

    for (var i = 0; i < this.options.numLeaves; i++) {
      var leaf = {
        el: document.createElement('div'),
        x: 0,
        y: 0,
        z: 0,
        rotation: {
          axis: 'X',
          value: 0,
          speed: 0,
          x: 0
        },
        xSpeedVariation: 0,
        ySpeed: 0,
        path: {
          type: 1,
          start: 0,

        },
        image: 1
      };
      this._resetLeaf(leaf);
      this.leaves.push(leaf);
      this.world.appendChild(leaf.el);
    }

    this.world.className = 'leaf-scene';
    this.viewport.appendChild(this.world);

    // set perspective
    this.world.style.webkitPerspective = "400px";
    this.world.style.MozPerspective = "400px";
    this.world.style.oPerspective = "400px";
    this.world.style.perspective = "400px";
    
    // reset window height/width on resize
    var self = this;
    window.onresize = function(event) {
      self.width = self.viewport.offsetWidth;
      self.height = self.viewport.offsetHeight;
    };
  }

  LeafScene.prototype.render = function() {
    this._updateWind();
    for (var i = 0; i < this.leaves.length; i++) {
      this._updateLeaf(this.leaves[i]);
    }

    this.timer++;

    requestAnimationFrame(this.render.bind(this));
  }

  
    //Audio
   var getaudio = $('#player')[0];
   audiostatus = 'off';

const yesBtnCtnr = document.getElementById("yes-btn-ctnr");

   $('#player').on('ended', function() {
     $('.speaker').removeClass('speakerplay');
     /*When the audio has finished playing, remove the class speakerplay*/
     audiostatus = 'off';
     /*Set the status back to off*/
   });

   $(document).ready(function () {
    yesBtnCtnr.style.visibility='hidden';
    
    // start audio when input focus ...
    $("#inputval").focus(function(){
        if (audiostatus != 'on') {
            getaudio.load();
            getaudio.play();
            // window.clearTimeout(mouseovertimer);
            audiostatus = 'on';
        }
      });

        

    $(document).on('click touchend', '#go-btn', function() {
        var valInput = document.getElementById('inputval').value;
        if (valInput != "" && valInput.toUpperCase() == "CAIRO0301") {
            const formCtnr = document.getElementById("form-ctnr");
            formCtnr.remove();

            // start leaf scene ...
            setTimeout(function () {
                var hannnd = document.getElementById("hand");
                var leaaave = document.getElementById("leave");
                hannnd.style.visibility='visible'
                leaaave.style.visibility='visible'

                var leafContainer = document.querySelector('.falling-leaves'),
                leaves = new LeafScene(leafContainer);

                leaves.init();
                leaves.render();

                var allElements = document.getElementsByTagName("id");

                for (var q = 0; q<allElements.length; q++){
                var el = allElements[q];
                if (el.id){
                window[el.id]=document.getElementById(el.id);
                }
                }

                var tl  = new TimelineMax({repeat:100,yoyo:true});
                tl.addLabel('f1')
                .from(hand, 2, {x:400,ease: Power3.easeInOut},'f1+=0')
                .from(leave, 2, {x:400,ease: Power3.easeInOut},'f1+=0')
                .to(leave, 5, {x:-200,rotation:360,scale:0.2,opacity:0,ease: Back.easeIn.config(1.2)},'f1+=2')
            }, 1000);

            // start word scene ...
            setTimeout(function () {
                wordflick();
            }, 6000);
            
        }
    
      });

      $(document).on('click touchend', '#yes-btn', function() {
        yesBtnCtnr.remove();
        var love = setInterval(function() {
            var r_num = Math.floor(Math.random() * 40) + 1;
            var r_size = Math.floor(Math.random() * 65) + 10;
            var r_left = Math.floor(Math.random() * 100) + 1;
            var r_bg = Math.floor(Math.random() * 25) + 100;
            var r_time = Math.floor(Math.random() * 5) + 5;
        
            $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");
        
            $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");
        
            $('.heart').each(function() {
                var top = $(this).css("top").replace(/[^-\d\.]/g, '');
                var width = $(this).css("width").replace(/[^-\d\.]/g, '');
                if (top <= -100 || width >= 150) {
                    $(this).detach();
                }
            });
        }, 500);
      });
  });
   


   // Word fade in

   var words = ['Greetings to a day, when you receive this message', 'This message is sent to you from Bilguun', 'Thank you for telling me such a private thing happened to your life, even you didn\'t tell to your parents ... that means a lot to me', 'Also thank you for being so strong and taking good care of yourself', 
   'That made me feel so admired and loved for you', 'I am sure you will be getting better soon :)', 'I also have some exciting news to share with you ...', 'I just got my visa approved to visit europe ... So', '...'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 35,
    speed = 55;


var wordflick = function () {
    var refreshIntervalId = setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    if (part == "...") {
        clearInterval(refreshIntervalId);
        yesBtnCtnr.style.visibility='visible'
    }
    $('.word').text(part);
  },speed);
};