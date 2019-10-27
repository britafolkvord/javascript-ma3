//Console.log out elements in JSON file

video = `[
        {
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }
]`;


var val = JSON.parse(video);
logData(val);



function logData(val){
    switch (typeof val){
        case "number":
            case "string":
                case "boolean":
                    console.log(val)
                    break;
    
        case "object":
            if (val === null){
                console.log(val);
            } else if (Array.isArray(val)){
                val.forEach(v => logData(v))
            } else {
                logData(Object.values(val))   
            }  
            break;
        default:
            console.log(val);
                    
    }
}

