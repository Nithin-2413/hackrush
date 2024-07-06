document.addEventListener("DOMContentLoaded", function() {
    const ctx1 = document.getElementById('earningsChart').getContext('2d');
    const earningsChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'University Earnings',
                data: [50, 60, 70, 60, 80, 60, 90],
                borderColor: '#f9c74f',
                backgroundColor: 'rgba(249, 199, 79, 0.2)',
                fill: true,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('studentPassingChart').getContext('2d');
    const studentPassingChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Student Passing',
                data: [50, 55, 60, 65, 70, 75, 80],
                backgroundColor: '#f94144'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
