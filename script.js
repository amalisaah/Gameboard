var main = function() {
  $('.more-btn').on('click',(e)=>{
    $(e.currentTarget).next().toggle()
  });

  $('.share').on('click',(e)=>{
    $(e.currentTarget).next().toggle()
  });
  
  $('.notification').on('click',(e)=>{
    $(e.currentTarget).toggleClass('active')
  });

};

$(document).ready(main);