$(document).ready(function(){
// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

//pbar one
var pbarone_tween = TweenMax.to('#pbar1',0.5, {
  width: '95%',
  ease: Power2.EaseInOut
});

var pbarone_scene = new ScrollMagic.Scene({
  triggerElement: '#pbar1',
  triggerHook: 0.88
})
.setTween(pbarone_tween)

//pbar two
var pbartwo_tween = TweenMax.to('#pbar2',0.5, {
  width: '82%',
  ease: Power2.EaseInOut
});

var pbartwo_scene = new  ScrollMagic.Scene({
  triggerElement: '#pbar2',
  triggerHook: 0.86
})
.setTween(pbartwo_tween)

//pbar three
var pbarthree_tween = TweenMax.to('#pbar3',0.5, {
  width: '91%',
  ease: Power2.EaseInOut
});

var pbarthree_scene = new  ScrollMagic.Scene({
  triggerElement: '#pbar3',
  triggerHook: 0.84
})
.setTween(pbarthree_tween)

//pbar four
var pbarfour_tween = TweenMax.to('#pbar4',0.5, {
  width: '72%',
  ease: Power2.EaseInOut
});

var pbarfour_scene = new  ScrollMagic.Scene({
  triggerElement: '#pbar4',
  triggerHook: 0.82
})
.setTween(pbarfour_tween)

controller.addScene([
  pbarone_scene,
  pbartwo_scene,
  pbarthree_scene,
  pbarfour_scene,
]);

//fadeUp Animation
$('.fadeUp').each(function(){
  var fadeup_tween = TweenMax.fromTo($(this), 1.2,
    {
      opacity: 0,
      transform: 'translateY(50px)',
      ease: Power2.EaseInOut
    },
    {
      opacity: 1,
      transform: 'translateY(0px)',
      ease: Power2.EaseInOut
    }
  );

  var fadeup_scene = new  ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.75
  })
  .setTween(fadeup_tween)
  .addTo(controller);
})

//fadeLeft Animation
$('.fadeLeft').each(function(){
  var fadeleft_tween = TweenMax.fromTo($(this), 1.2,
    {
      opacity: 0,
      transform: 'translateX(-50px)',
      ease: Power2.EaseInOut
    },
    {
      opacity: 1,
      transform: 'translateY(0px)',
      ease: Power2.EaseInOut
    }
  );

  var fadeleft_scene = new  ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
  })
  .setTween(fadeleft_tween)
  .addTo(controller);
})

//fadeRight Animation
$('.fadeRight').each(function(){
  var faderight_tween = TweenMax.fromTo($(this), 1.2,
    {
      opacity: 0,
      transform: 'translateX(50px)',
      ease: Power2.EaseInOut
    },
    {
      opacity: 1,
      transform: 'translateY(0px)',
      ease: Power2.EaseInOut
    }
  );

  var faderight_scene = new  ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
  })
  .setTween(faderight_tween)
  .addTo(controller);
})

});
