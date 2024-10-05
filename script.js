var tl = gsap.timeline()

tl.from("#header a",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.3,
})

tl.from("#navbar li",{
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:0.2,
})

tl.from("#features .fe-box ",{
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:0.3,
   
})