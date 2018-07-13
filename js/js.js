$(document).ready(function(){
  
  // activate materialize sidenav
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  // activate materialize scrollspy
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  for(let value in projectList){
    printProject(projectList[value].title, projectList[value].description, projectList[value].url, projectList[value].github);
  };
});

function printProject(title, description, url, github){
  let newProject = '<div class="col s12 m6">'+
    '<div class="card teal">'+
        '<div class="card-action teal lighten-2">'+
            '<h5> <a class="black-text" href="'+url+'">'+title+'</a> </h5>'+
        '</div>'+
        '<div class="card-content">'+
            description+
            '<br /><a target="_blank" class="waves-effect waves-teal btn-flat" href="'+github+'">GitHub</a>'+
        '</div>'+
    '</div>'+
  '</div>"'

  $("#projects").append(newProject);
}