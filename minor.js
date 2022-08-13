# Minor_Web-Page

var tl = gsap.timeline();

tl  
  .from(["#nav1","#nav2", "#cir1","#cir2", "#page1 h5"],{
    opacity:0,
    y:-30,
    duration:1,
    scale:1.3,
  })

  .from([ "#fnt h1" , "#fnt h2", "#fnt h6", ],{
    opacity:0,
    scale:1.3,
    duration:1,
    x:-60,
    delay:.2
  })

  .from("#page2 h1", {
    onStart: function (){
      $('#page2 h1').textillate({ in: { effect: 'fadeInUp' } });
    }
  })   
