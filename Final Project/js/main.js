

$('#item1').click(function (){
  console.log('hi');
$.scrollTo('#take-me-about',1000)
})

$('#item2').click(function (){
  console.log('hi');
$.scrollTo('#take-me-education',1000)
})

$('#item3').click(function (){
  console.log('hi');
$.scrollTo('#take-me-projects',1000)
})

$('#item4').click(function (){
  console.log('hi');
$.scrollTo('#take-me-contacts',1000)
})



$('.project-container').flickity({
  cellAlign: 'left',
  contain: true,
  outoPlay: true
})
