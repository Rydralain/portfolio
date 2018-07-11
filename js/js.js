$(document).ready(function(){
  
  // activate materialize sidenav
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  // activate materialize scrollspy
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  printProject("Title", "Cool description", "http://zombievision.net");
});

const projectList = [];

function printProject(title, description, url){
  let newProject = '<div class="col s12 m6">'+
    '<div class="card teal">'+
        '<div class="card-action teal lighten-2">'+
            '<h5> <a class="black-text" href="'+url+'">'+title+'</a> </h5>'+
        '</div>'+
        '<div class="card-content">'+
            description+
        '</div>'+
    '</div>'+
  '</div>"'

  $("#projects").append(newProject);
}