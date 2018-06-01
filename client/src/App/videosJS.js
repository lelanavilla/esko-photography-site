// import jquery from 'jquery';
// require('jquery-slimscroll');
// window.$ = window.jQuery = jquery;


// const $ = window.$;

// const jc =  {} ;

// (function (jc) {
//   // $.jc = $.jc || {};
//   let videoGallery={};
//   const js = videoGallery = {
//       conf: {
//           cols: 3,
//           ySpace: 400,
//           zSpace: 200,
//           tiltGrid: true,
//           minGridDeg: -10,
//           maxGridDeg: 10,
//           keyboard: true,
//           items: 'li',
//           stateHolder: 'body',
//           controls: '.control',
//           currentClass: 'current',
//           backButton: '#back',
//           loadedClass: 'loaded'
//       }
//   };
//   function VideoGallery(root, conf) {
//       var self = this, gallery = root, fire = root.add(self), items = gallery.find(conf.items), zIndex = items.length, fromGrid = true, cols = conf.cols, c = 0, r = 0;
//       $.extend(self, {
//           getItems: function () {
//               return items;
//           },
//           gridLayout: function (init) {
//               var gridInit = init || false;
//               items.each(function (i) {
//                   var that = $(this), newTop = that.outerHeight(true) * r, newLeft = that.outerWidth(true) * c;
//                   if (gridInit) {
//                       that.data('top', newTop);
//                       that.data('left', newLeft);
//                   }
//                   that.css({
//                       position: 'absolute',
//                       top: that.data('top'),
//                       left: that.data('left'),
//                       opacity: 1,
//                       zIndex: zIndex
//                   });
//                   if (c === cols - 1) {
//                       c = 0;
//                       r++;
//                   } else {
//                       c++;
//                   }
//                   zIndex--;
//               });
//               $(conf.stateHolder).removeClass('stack').addClass('grid');
//           },
//           stackLayout: function (e) {
//               e.preventDefault();
//               e.stopPropagation();
//               var ySpace = conf.ySpace, zSpace = conf.zSpace, translateY = 0, translateZ = 0, target = $(this), currentIndex = target.index(), totalDelayTime = 0;
//               if (fromGrid) {
//                   items.each(function (i) {
//                       if (i !== currentIndex) {
//                           var delay = i / 10 * 2;
//                           this.style['-webkit-transition-delay'] = delay + 's';
//                           totalDelayTime += delay;
//                       }
//                   });
//                   setTimeout(function () {
//                       items.each(function (i) {
//                           this.style['-webkit-transition-delay'] = '0s';
//                       });
//                   }, totalDelayTime);
//               }
//               $(conf.stateHolder).removeClass('grid').addClass('stack');
//               items.each(function (i) {
//                   var that = $(this);
//                   that.show();
//                   that.data('translate_y', translateY);
//                   that.data('translate_z', translateZ);
//                   translateY -= ySpace;
//                   translateZ -= zSpace;
//               });
//               items.each(function () {
//                   self.animateItem(this, ySpace * currentIndex, zSpace * currentIndex);
//               });
//               var currentItem = items.filter(':nth-child(' + (currentIndex + 1) + ')');
//               currentItem.prevAll(conf.items).css('opacity', 0).addClass('disabled');
//               currentItem.nextAll(conf.items).andSelf().css('opacity', 1).removeClass('disabled');
//           },
//           animateItem: function (obj, y, z) {
//               var that = $(obj), newY = that.data('translate_y') + y, newZ = that.data('translate_z') + z;
//               that.removeClass('current');
//               if (newZ === 0) {
//                   that.addClass('current');
//               }
//               that[0].style['-webkit-transform'] = 'translate3d(0px, ' + newY + 'px, ' + newZ + 'px)';
//               that.data('translate_y', newY).data('translate_z', newZ);
//           },
//           move: function (modify) {
//               var newIndex;
//               items.each(function () {
//                   if ($(this).hasClass(conf.currentClass)) {
//                       newIndex = $(this).index() + modify;
//                       return false;
//                   }
//               });
//               if (newIndex == items.length) {
//                   newIndex = 0;
//               } else if (newIndex < 0) {
//                   newIndex = items.length - 1;
//               }
//               items.eq(newIndex).trigger('stack');
//               var e = $.Event('onMove');
//               fire.trigger(e);
//               if (e.isDefaultPrevented()) {
//                   return self;
//               }
//           },
//           toggleVideo: function (item, video) {
//               var body = $(conf.stateHolder), that = $(item);
//               if (!body.hasClass('stack')) {
//                   return;
//               }
//               if (that.hasClass(conf.currentClass)) {
//                   var videoNode = video[0];
//                   if (body.hasClass('playing')) {
//                       videoNode.pause();
//                       videoNode.currentTime = 0;
//                       body.removeClass('playing');
//                   } else {
//                       videoNode.play();
//                       body.addClass('playing');
//                   }
//               }
//           }
//       });
//       $.each([
//           'onMove',
//           'onStart'
//       ], function (i, name) {
//           if ($.isFunction(conf[name])) {
//               $(self).bind(name, conf[name]);
//           }
//           self[name] = function (fn) {
//               if (fn) {
//                   $(self).bind(name, fn);
//               }
//               return self;
//           };
//       });
//       if (conf.tiltGrid) {
//           var leftDeg = conf.minGridDeg, rightDeg = conf.maxGridDeg, windowWidth = $(window).width(), onePerc = windowWidth / 100;
//           $(window).mousemove(function (e) {
//               if ($(conf.stateHolder).hasClass('grid')) {
//                   var mouseXPerc = parseInt(e.pageX / onePerc, null);
//                   var currentDeg = parseInt(20 / 100 * mouseXPerc, null) - 10;
//                   if (currentDeg < -4) {
//                       currentDeg = -4;
//                   }
//                   if (currentDeg > 4) {
//                       currentDeg = 4;
//                   }
//                   gallery[0].style['-webkit-transform'] = 'rotate3d(1,0,1,' + currentDeg + 'deg)';
//               }
//           });
//       }
//       if (conf.keyboard) {
//           $(window).keyup(function (e) {
//               var newIndex;
//               var modify;
//               if (e.keyCode != 38 && e.keyCode != 40) {
//                   return false;
//               } else if (e.keyCode == 38) {
//                   modify = 1;
//               } else if (e.keyCode == 40) {
//                   modify = -1;
//               }
//               self.move(modify);
//           });
//       }
//       $(conf.backButton).click(function (e) {
//           var body = $(conf.stateHolder);
//           if (!body.hasClass('grid')) {
//               e.preventDefault();
//               self.gridLayout();
//               fromGrid = true;
//           }
//       });
//       setTimeout(function () {
//           items.bind('stack', self.stackLayout).bind('click', function () {
//               $(this).trigger('stack');
//               fromGrid = false;
//           });
//           $(conf.stateHolder).addClass('init').addClass('grid');
//           self.gridLayout(true);
//       }, 600);
//       items.each(function () {
//           var that = $(this);
//           var video = that.find('video');
//           if (video.length) {
//               that.find('section').append('<span class="play"></span>');
//           }
//           that.click(function (e) {
//               self.toggleVideo(this, video);
//           });
//       });
//       $(conf.controls).click(function () {
//           var body = $(conf.stateHolder), that = $(this);
//           if (body.hasClass('playing')) {
//               items.filter('.' + conf.currentClass).find('.play').trigger('click');
//           }
//           if (that.data('modify') !== null) {
//               self.move(that.data('modify'));
//           }
//       });
//       $(window).load(function () {
//           $(conf.stateHolder).addClass(conf.loadedClass);
//           var e = $.Event('onStart');
//           fire.trigger(e);
//       });
//   }
//   $.fn.videoGallery = function (userConf) {
//       var el = this.data('videoGallery');
//       if (el) {
//           return el;
//       }
//       var conf = $.extend({}, $.jc.videoGallery.conf, userConf);
//       return this.each(function () {
//           el = new VideoGallery($(this), conf);
//           $(this).data('videoGallery', el);
//       });
//   };
// }(this.jQuery));
// $(function () {
//   var gallery = $('#gallery');
//   gallery.videoGallery();
//   var api = gallery.data('videoGallery');
//   api.onStart(function () {
//       var items = api.getItems();
//       items.each(function (i) {
//           var that = $(this);
//           setTimeout(function () {
//               var section = that.find('section');
//               if (section.length) {
//                   section.addClass('entered');
//               }
//           }, 1000 + i * 200);
//       });
//   });
// });

