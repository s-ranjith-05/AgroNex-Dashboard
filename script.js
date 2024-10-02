// Rainfall Data Chart
const rainfallCtx = document.getElementById('rainfallChart').getContext('2d');
const rainfallChart = new Chart(rainfallCtx, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Rainfall (mm)',
            data: [900, 800, 850, 870, 920, 950, 940, 910, 890, 930, 960],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Groundwater Level Chart
const groundwaterCtx = document.getElementById('groundwaterChart').getContext('2d');
const groundwaterChart = new Chart(groundwaterCtx, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'Groundwater Level (mm)',
            data: [150, 160, 170, 165, 160, 155, 150, 140, 130, 125],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

// Livestock Population Chart
const livestockCtx = document.getElementById('livestockPieChart').getContext('2d');
const livestockPieChart = new Chart(livestockCtx, {
    type: 'pie',
    data: {
        labels: ['Cattle', 'Goat', 'Sheep', 'Poultry'],
        datasets: [{
            label: 'Livestock Population',
            data: [30, 25, 20, 25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Water Usage by Livestock Chart
const waterUsageLivestockCtx = document.getElementById('waterUsageLivestockChart').getContext('2d');
const waterUsageLivestockChart = new Chart(waterUsageLivestockCtx, {
    type: 'bar',
    data: {
        labels: ['Cattle', 'Goat', 'Sheep', 'Poultry'],
        datasets: [{
            label: 'Water Usage (L/day)',
            data: [50, 10, 8, 5],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Soil Moisture Chart
const soilMoistureCtx = document.getElementById('soilMoistureChart').getContext('2d');
const soilMoistureChart = new Chart(soilMoistureCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Soil Moisture (%)',
            data: [22, 20, 18, 16, 19, 22, 23, 25, 24, 21, 20, 22],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    }
});

// Evapotranspiration Chart
const evapotranspirationCtx = document.getElementById('evapotranspirationChart').getContext('2d');
const evapotranspirationChart = new Chart(evapotranspirationCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Evapotranspiration (mm)',
            data: [1.8, 2.0, 2.2, 2.5, 2.8, 3.0, 3.2, 3.1, 2.9, 2.6, 2.3, 2.0],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Irrigation Data Chart
const irrigationCtx = document.getElementById('irrigationChart').getContext('2d');
const irrigationChart = new Chart(irrigationCtx, {
    type: 'bar',
    data: {
        labels: ['Paddy', 'Wheat', 'Sugarcane', 'Cotton', 'Groundnut'],
        datasets: [{
            label: 'Water Requirement (L/Day)',
            data: [5000, 4500, 6000, 3500, 3000],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

// Industry Water Usage Chart
const industryWaterUsageCtx = document.getElementById('industryWaterUsageChart').getContext('2d');
const industryWaterUsageChart = new Chart(industryWaterUsageCtx, {
    type: 'bar',
    data: {
        labels: ['Textile', 'Leather', 'Manufacturing', 'Paper', 'Food Processing'],
        datasets: [{
            label: 'Water Usage (Million L/day)',
            data: [50, 30, 20, 25, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});
const irrigationData = {
    labels: ['Canals', 'Tanks', 'Tube wells', 'Open wells', 'Supplementary wells', 'Other Sources'],
    datasets: [{
        label: 'Area (in ha)',
        data: [18998, 18500, 697, 42469, 797, 0], // Example data
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Data for Sources of Irrigation
const sourcesData = {
    labels: ['2012-13', '2013-14', '2014-15'],
    datasets: [{
        label: 'Canals',
        data: [5804, 17114, 18998],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }, {
        label: 'Tanks',
        data: [7163, 12895, 18500],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
    }, {
        label: 'Tube wells',
        data: [444, 294, 697],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
    }, {
        label: 'Open wells',
        data: [32526, 34648, 42469],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
    }, {
        label: 'Supplementary wells',
        data: [780, 796, 797],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
    }, {
        label: 'Other Sources',
        data: [0, 0, 0],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
    }]
};

// Configuration and creation of Irrigation Chart
const irrigationConfig = {
    type: 'bar',
    data: irrigationData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Area (ha)'
                }
            }
        }
    }
};

// Configuration and creation of Sources Chart
const sourcesConfig = {
    type: 'bar',
    data: sourcesData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Area (ha)'
                }
            }
        }
    }
};

// Render the charts
const irrigationChart1 = new Chart(
    document.getElementById('irrigationChart1'),
    irrigationConfig
);

const sourcesChart = new Chart(
    document.getElementById('sourcesChart'),
    sourcesConfig
);
const agricultureWaterRequired = [5000, 3000, 2000, 1000]; // Example data for different irrigation types
    const industryWaterRequired = [7000, 5000, 3000]; // Example data for different industries
    const domesticWaterRequired = 8000; // Total domestic water requirement

    // Bar Chart for Agriculture Water Requirements
    const ctx1 = document.getElementById('agricultureChart').getContext('2d');
    const agricultureChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Drip Irrigation', 'Sprinkler Irrigation', 'Surface Irrigation', 'Subsurface Irrigation'],
            datasets: [{
                label: 'Water Required (in m³)',
                data: agricultureWaterRequired,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Water Required (in m³)'
                    }
                }
            }
        }
    });

    // Pie Chart for Industry Water Requirements
    const ctx2 = document.getElementById('industryChart').getContext('2d');
    const industryChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Textile', 'Food Processing', 'Pharmaceuticals'],
            datasets: [{
                label: 'Water Required (in m³)',
                data: industryWaterRequired,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        }
    });

    const areas = [
        'Madurai-North', 'Madurai-South', 'Madurai-East', 'Madurai-West', 'Melur', 'Vadipatti', 
        'Thiruparankundram', 'Usilampatti', 'Peraiyur', 'Alanganallur', 'Kottampatti', 'Thirumangalam', 
        'Chellampatti', 'Sedapatti', 'T. Kallupatti', 'Kalligudi'
    ];

    // Random water requirements in cubic meters (m³)
    const waterRequirements = areas.map(() => Math.floor(Math.random() * 10000) + 1000);

    // Total water supply available for the progress bars (arbitrary value)
    const totalWaterSupply = 15000;

    // Different colors for each progress bar
    const colors = [
        '#4caf50', '#2196f3', '#ff9800', '#f44336', '#9c27b0', 
        '#00bcd4', '#e91e63', '#8bc34a', '#ffeb3b', '#795548', 
        '#673ab7', '#ff5722', '#607d8b', '#3f51b5', '#009688'
    ];

    // Create progress bars dynamically
    const progressBarsContainer = document.getElementById('progress-bars');

    areas.forEach((area, index) => {
        // Create container for each block
        const container = document.createElement('div');
        container.classList.add('progress-container');

        // Label for the block
        const label = document.createElement('div');
        label.classList.add('block-label');
        label.textContent = `${area}: ${waterRequirements[index]} m³ required`;

        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress');

        // Set progress bar color from the colors array
        progressBar.style.backgroundColor = colors[index % colors.length];

        // Calculate percentage of water requirement to total supply
        const percentage = (waterRequirements[index] / totalWaterSupply) * 100;
        progressBar.style.width = percentage + '%';
        progressBar.textContent = Math.round(percentage) + '%';

        // Append label and progress bar to container
        container.appendChild(label);
        container.appendChild(progressBar);

        // Add container to progress bar container
        progressBarsContainer.appendChild(container);
    });
    const droughtProgress = document.getElementById('drought-progress');
    const rainfallProgress = document.getElementById('rainfall-progress');
    const droughtRange = document.getElementById('drought-range');
    const rainfallRange = document.getElementById('rainfall-range');

    const impactCtx = document.getElementById('impactChart').getContext('2d');
    const impactChart = new Chart(impactCtx, {
        type: 'bar',
        data: {
            labels: ['Agriculture', 'Industry', 'Domestic'],
            datasets: [
                {
                    label: 'Drought Impact',
                    data: [0, 0, 0],
                    backgroundColor: '#ff9800',
                },
                {
                    label: 'Heavy Rainfall Impact',
                    data: [0, 0, 0],
                    backgroundColor: '#2196f3',
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                },
            },
        },
    });

    const storageCtx = document.getElementById('storageChart').getContext('2d');
    const storageChart = new Chart(storageCtx, {
        type: 'bar',
        data: {
            labels: ['Storage Capacity', 'Current Storage'],
            datasets: [
                {
                    label: 'Drought Effect',
                    data: [100, 100], // Initial storage is full
                    backgroundColor: '#ff9800',
                },
                {
                    label: 'Heavy Rainfall Effect',
                    data: [100, 0], // No current storage increase during drought
                    backgroundColor: '#2196f3',
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                },
            },
        },
    });

    droughtRange.addEventListener('input', () => {
        const droughtValue = droughtRange.value;
        droughtProgress.style.width = droughtValue + '%';
        droughtProgress.textContent = droughtValue + '%';

        // Update the impact chart based on drought value
        updateImpactChart(droughtValue, 'drought');
        updateStorageChart(droughtValue, 'drought');
    });

    rainfallRange.addEventListener('input', () => {
        const rainfallValue = rainfallRange.value;
        rainfallProgress.style.width = rainfallValue + '%';
        rainfallProgress.textContent = rainfallValue + '%';

        // Update the impact chart based on rainfall value
        updateImpactChart(rainfallValue, 'rainfall');
        updateStorageChart(rainfallValue, 'rainfall');
    });

    function updateImpactChart(value, type) {
        if (type === 'drought') {
            impactChart.data.datasets[0].data = [value * 0.6, value * 0.3, value * 0.1]; // Drought impact on Agriculture, Industry, Domestic
        } else {
            impactChart.data.datasets[1].data = [value * 0.4, value * 0.5, value * 0.1]; // Rainfall impact on Agriculture, Industry, Domestic
        }
        impactChart.update();
    }

    function updateStorageChart(value, type) {
        const maxStorage = 100; // Full storage capacity

        if (type === 'drought') {
            // As drought increases, reduce current storage
            const currentStorage = maxStorage - value; // Full storage decreases with drought
            storageChart.data.datasets[0].data[1] = currentStorage; // Update drought effect on current storage
            storageChart.data.datasets[1].data[1] = 0; // Heavy rainfall doesn't affect during drought
        } else {
            // Heavy rainfall increases current storage
            storageChart.data.datasets[0].data[1] = 0; // Drought doesn't affect current storage during rainfall
            const currentStorage = value; // Current storage increases with rainfall
            storageChart.data.datasets[1].data[1] = currentStorage; // Update heavy rainfall effect on current storage
        }
        storageChart.update();
    }