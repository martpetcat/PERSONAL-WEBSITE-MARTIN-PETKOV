function toggleLists() {
  var visibleList = document.getElementById('visible-list');
  var hiddenList = document.getElementById('hidden-list');

  if (visibleList.classList.contains('hidden')) {
    // Switch to visible list
    visibleList.classList.remove('hidden');
    hiddenList.classList.add('hidden');
    document.getElementById('content1').classList.remove('hidden');
    document.getElementById('content2').classList.add('hidden');
  } else {
    // Switch to hidden list
    visibleList.classList.add('hidden');
    hiddenList.classList.remove('hidden');
    document.getElementById('content1').classList.add('hidden');
    document.getElementById('content2').classList.remove('hidden');
  }
}