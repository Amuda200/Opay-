document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login (replace with actual authentication logic)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'password') {
        showDashboard();
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

document.getElementById('sendMoneyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let recipient = document.getElementById('recipient').value;
    let amount = parseFloat(document.getElementById('amount').value);
    
    // Simulate sending money (replace with actual transaction logic)
    // For demonstration, just update balance and add to transaction history
    updateBalance(amount);
    addTransaction(recipient, amount);
});

function showDashboard() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('dashboard-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
    // Fetch and display balance (replace with actual balance fetching logic)
    let currentBalance = 500.00; // Replace with dynamic balance retrieval from backend
    document.getElementById('balance').innerHTML = `<h3>Your Balance: $${currentBalance.toFixed(2)}</h3>`;
}

function updateBalance(amount) {
    let currentBalanceElement = document.getElementById('balance').querySelector('h3');
    let currentBalance = parseFloat(currentBalanceElement.innerText.replace('Your Balance: $', ''));
    let newBalance = currentBalance - amount; // Assuming sending money reduces balance
    currentBalanceElement.innerText = `Your Balance: $${newBalance.toFixed(2)}`;
}

function addTransaction(recipient, amount) {
    let transactionList = document.getElementById('transactionList');
    let transactionItem = document.createElement('li');
    transactionItem.textContent = `Sent $${amount.toFixed(2)} to ${recipient}`;
    transactionList.appendChild(transactionItem);
