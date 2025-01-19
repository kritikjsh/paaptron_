

// Define the API endpoint
const apiUrl = 'https://cphd0xe3m7.execute-api.eu-north-1.amazonaws.com/API/BABY'; // Replace with your API endpoint


// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Debug: Log the API response
        populateTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// Function to populate the table with data
function populateTable(data) {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows


    // Adjust for API response structure
    const items = Array.isArray(data) ? data : data.data || []; // Handle nested 'data' key if present


    items.forEach(item => {
        const row = document.createElement('tr');


        // Extract values with expected keys
        const temperature = item['Temperature (°C)'] || 'N/A';
        const pulse = item['Pulse (BPM)'] || 'N/A';
        const spO2 = item['SpO2 (%)'] || 'N/A';


        // Create table cells and populate them
        const temperatureCell = document.createElement('td');
        temperatureCell.textContent = temperature;
        row.appendChild(temperatureCell);


        const pulseCell = document.createElement('td');
        pulseCell.textContent = pulse;
        row.appendChild(pulseCell);


        const spO2Cell = document.createElement('td');
        spO2Cell.textContent = spO2;
        row.appendChild(spO2Cell);


        // Append the row to the table body
        tableBody.appendChild(row);
    });
}


// Call the fetchData function to load data when the page loads
fetchData();