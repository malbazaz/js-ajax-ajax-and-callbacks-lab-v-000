function showReps(){
  let repsTerm = document.getElementById("searchTerm1").value
  document.getElementById("searchTerms").innerHTML = repsTerm
}


function searchRepositories(){
  const searchT = $('#searchTerms').val()
  //  = document.getElementById("searchTerms").innerHTML
// debugger;
$.get(`https://api.github.com/search/repositories?q=${searchT}`,function(response){
  console.log("r",response)
  const list = response.items.map(r=>{
    return `<li>
  <a href=${r.html_url}>${r.name}</a>
  <p>Rep name: ${r.name}</p>
  <p>Description: ${r.description}</p>
  <img src="${r.owner.avatar_url}">
  <p> Owner name: ${r.owner.login}</p>
  <a href="#"
   data-repository="${r.name}"
   data-username="${r.owner.login}"
   onclick='getCommits(this)'> Get Commits </a>`
})
let repoList = `<ul> ${list}</ul>`
document.getElementById("results").innerHTML = repoList
  // const repos = JSON.parse(response)
  // const src = document.getElementById("repository-template").innerHTML
  // const template = Handlebars.compile(src)
  // const repoList = template(response)
}).fail(function(error) {
  displayError(error)
});
}

// function showCommits(el){
// let dataset = el.dataset
// const datarep = dataset.repository
// const name = dataset.username
//   $.get(`https://api.github.com/repos/${name}/${datarep}/commits`,function(response){
//   $("#details").html(response)
// })
//   const commits = JSON.parse(this.responseText)
//   document.getElementById("commits-template").innerHTML
//   const template = Handlebars.compile(src)
//   const commitList = template(commits)
// }
//
function displayError(error){
console.log("Hello error"+ error)
}



$(document).ready(function (){
// create search rep on click
// takes value of searchTerms text input
// queries the GitHub rep search API
});
