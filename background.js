chrome.action.onClicked.addListener((tab) => {

  let currentMark = chrome.bookmarks.search({'query':'SCRUM'});
  console.log(chrome.bookmarks.search({'title':'SCRUM'})['PromiseState']);
  
  try{
    chrome.bookmarks.remove(
      {'id': chrome.bookmarks.search({'query':'SCRUM'})});
      
    }
  catch(e)
  {
    console.log('No current bookmark');
  }
  chrome.bookmarks.create({
    'parentId' : "1",
    'title': 'SCRUM',
    'url': 'https://axasurion.visualstudio.com/AX7%20Core/_sprints/taskboard/Inbound%202%20team/AX7%20Core/Global/GblSpt{}/SCMSpt{}/Inbound2Spt{}',
  });
});
