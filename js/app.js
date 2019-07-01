const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Selects tab content item
function selectItem(e) {
    // remove border from inactive tab
    removeBorder();
    // Add border to current tab
    this.classList.add('tab-border');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Listen for Tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));