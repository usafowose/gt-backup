const fs = require('fs');

fs.readFile("best_things_ever.txt","utf8", (err, data) => {
    if (err) {
        console.log("BAD STUFF!!! --- ", err);
    }

    // const output = data.split(",").join('\n');
    // console.log(output);

    for (let i = 0; i < output.length; i++) {
        console.log(output[i]); 
    }
})