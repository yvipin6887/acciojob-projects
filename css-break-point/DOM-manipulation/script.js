 const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const clearBtn = document.getElementById('clearBtn');
const errorEl = document.getElementById('error');

let count = 1;

function updateUI() {
    countEl.textContent = count;
    clearBtn.style.display = count > 0 ? 'inline-block' : 'none';
    errorEl.style.display = 'none';
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateUI();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
    count--;
    updateUI();
    } else {
    errorEl.style.display = 'block';
    }
});

clearBtn.addEventListener('click', () => {
    count = 0;
    updateUI();
});

updateUI();