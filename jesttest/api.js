


        const http = require("https");

        const options = {
            "method": "GET",
            "hostname": "weatherbit-v1-mashape.p.rapidapi.com",
            "port": null,
            "path": "/current?lon=38.5&lat=-78.5",
            "headers": {
                "x-rapidapi-key": "2af5a83168msha081b942dded4a2p13cd0ejsn6d1062e2aeb6",
                "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                "useQueryString": true
            }
        };

        const req = http.request(options, function (res) {
            const chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                const body = Buffer.concat(chunks);
                console.log(body.toString());
            });
        });

        req.end();

    