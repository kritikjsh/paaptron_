function redirectTo(page) {
  window.location.href = page;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  sidebar.classList.toggle('active');
  content.classList.toggle('sidebar-active');
}
function redirectToEmotionAnalysis() {
  // Open the first link in the same tab
  // window.location.href = 'emotionAnalysis.html';

  // Open the second link in a new tab
  window.open('https://u77saz4v7a.execute-api.us-east-1.amazonaws.com/prod/latest-result', '_blank');
}

function redirectToLiveAnalysis() {
  // Open the first link in the same tab
  // window.location.href = 'emotionAnalysis.html';

  // Open the second link in a new tab
  window.open('https://cflcdt4v68.execute-api.us-east-1.amazonaws.com/Data/uploads', '_blank');
}

