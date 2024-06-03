// Added anonymous participant / anonymous member in several languages used by members
// Added check of url for the main Doomsday debunked group or closed group
// instead of deleting node, replaces innerHTML by "Anonymous post - removed"
// 3rd June 2024.

function remove_container(node,n)
{
 var par=node;
 // par.textContent="anonymous";
 for(var i=0;i<n;i++)
 {
  var new_par=par.parentNode;
  if(new_par)
   par=new_par;
  else
   break;
/**
  var data_mcomponent=par.getAttribute("data-mcomponent");
  if(data_mcomponent=="MContainer")
  {
   //alert(data_mcomponent);
   par.remove();
  }
**/
 }
 par.innerHTML="Anonymous post - removed";//remove();
 par.style.removeProperty("height");
// par.remove();
 return null;
}//

function deleteAnonPosts()
{
 // alert("deleteAnonPosts");
 var origin=window.location.origin.toString();
 var url=window.location.href;
 if(url.indexOf("doomsdaydebunked")<0
   &&url.indexOf("143918142952967")<0 // closed group
   )
  return;
 let anonPosts = Array.from(document.querySelectorAll('span')).filter
(el =>
 (el.textContent === 'Anonymous participant'
 ||el.textContent ==='Anonymous member' 
 ||el.textContent ==='Participant(e) anonyme' // France
 ||el.textContent ==='Membre anonyme' // France
 ||el.textContent ==='Anonimowy uczestnik' // Poland
 ||el.textContent ==='Anonimowy członek grupy' // Poland
 ||el.textContent ==='Participante anónimo' // Spain
 ||el.textContent ==='Membro anónimo' // Spain
 ||el.textContent ==='Participante anônimo' // Brazil
 ||el.textContent ==='Membro anônimo' // Brazil
 ||el.textContent ==='Anonymous na participant' // Fillipino
 ||el.textContent ==='Anonymous na participant' // Fillipino
 ||el.textContent ==='Partecipante anonimo' // Italian
 ||el.textContent ==='Partecipante anonimo' // Italian
 ||el.textContent ==='Anonieme deelnemer' // Netherlands
 ||el.textContent ==='Anoniem lid' // Netherlands
 ||el.textContent ==='Anonymer Teilnehmer' // German
 ||el.textContent ==='Anonymes Mitglied' // German
 ||el.textContent ==='Participant anonim' // Romania
 ||el.textContent ==='Membru anonim' // Romania
 ||el.textContent ==='Participant anonim' // Latvia
 ||el.textContent ==='Anonīms dalībnieks' // Latvia
 ||el.textContent ==='Nimetön osallistuja' // Finnish
 ||el.textContent ==='Nimetön jäsen' // Finnish

/**
 ||el.textContent ==='' //
 ||el.textContent ==='' //
**/
 )
);


 for (let i = 0; i < anonPosts.length; i++) 
 {
// alert(i);
// anonPosts[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
 
  remove_container(anonPosts[i],6);
 }
}

// Delete on page scroll to workaround the "infinite page" loading
document.addEventListener('scroll', deleteAnonPosts);

// Initial purge of anon posts
deleteAnonPosts();

// test comment