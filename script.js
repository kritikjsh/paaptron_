// Function to create line chart
function createLineChart(chartId, label, data, timestamps) {
    const ctx = document.getElementById(chartId).getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: timestamps,
            datasets: [
                {
                    label: label,
                    data: data,
                    fill: false,
                    borderColor: "rgba(75, 192, 192, 1)",
                    tension: 0.1,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

// Initialize Charts and Activity Log
document.addEventListener("DOMContentLoaded", () => {
    const timestamps = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
    createLineChart("temperature-chart", "Temperature (°C)", [36.5, 37, 36.8, 37.2, 36.9], timestamps);
    createLineChart("pulse-chart", "Pulse (bpm)", [75, 80, 78, 76, 79], timestamps);
    createLineChart("spo2-line-chart", "SpO2 (%)", [97, 98, 99, 96, 97], timestamps);

    const activityLogData = [
        { time: "8:00 AM", activity: "Woke Up", status: "Completed" },
        { time: "9:00 AM", activity: "Fed Breakfast", status: "Completed" },
        { time: "11:00 AM", activity: "Nap Time", status: "Ongoing" },
        { time: "1:00 PM", activity: "Playtime", status: "Upcoming" },
        { time: "3:00 PM", activity: "Lunch", status: "Upcoming" },
    ];

    const activityLogTable = document.getElementById("activity-log-table").getElementsByTagName("tbody")[0];

    activityLogData.forEach(log => {
        const row = activityLogTable.insertRow();
        const timeCell = row.insertCell(0);
        const activityCell = row.insertCell(1);
        const statusCell = row.insertCell(2);

        timeCell.textContent = log.time;
        activityCell.textContent = log.activity;
        statusCell.textContent = log.status;
    });
});