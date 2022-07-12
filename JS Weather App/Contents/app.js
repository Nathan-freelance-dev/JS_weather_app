// time dom manipulation

    function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let session = "AM";

        if(hh === 0) {
            hh = 12;
        } if (hh > 12) {
            hh = hh - 12;
            session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        let time = `${hh} : ${mm} : ${ss} ${session}`;
        
        document.querySelector(".time_dom").innerHTML = time;

        let t = setTimeout(function() {
            currentTime()
        }, 1000);
    }

    currentTime();

// fetching data from api
    // base_url and api key
    const base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
    const api_key = "f81d7d1b2c246cb833a20247183e173a";

    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
        var searchInput = document.getElementById("searchArea").value;

        if(searchInput === '') {
            alert("Please add a location")
        } else {
            fetch(`${base_url}${searchInput}&unit=metric&APPID=${api_key}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
    
                let city = document.querySelector(".city")
                let country_cd = document.querySelector(".country_cd")
                let temp_report = document.querySelector(".temp_report")
                let weather_condition = document.querySelector(".weather_condition")
                
                let weather_report_box = document.querySelector(".main_box");
    
                weather_report_box.classList.remove("d-none");
    
                city.innerHTML = result.name
                country_cd.innerHTML = result.sys.country
                temp_report.innerHTML = result.main.humidity
                weather_condition.innerHTML = result.weather[0].main;
            })
        }
    });

    