        const ctx1 = document.getElementById("chart-1").getContext("2d");
        const myChart = new Chart(ctx1, {
        type: "polarArea",
        data: {
            labels: ["Completed", "On Progress ", "Pending"],
            datasets: [
            {
                label: "# of Votes",
                data: [40, 10, 50],
                backgroundColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
        },
        });

        const ctx2 = document.getElementById("chart-2").getContext("2d");
        const myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "March", "April", "Mei", "June", "July", "Agust", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
            {
                label: "2024",
                data: [10, 50, 60, 45, 40, 35, 40, 20, 70, 90, 80, 100],
                backgroundColor: [
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(255, 206, 86, 1)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
        },
        });
