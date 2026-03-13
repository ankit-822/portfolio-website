function scrollProjects(){

document.getElementById("projects").scrollIntoView({

behavior:"smooth"

});

}


// Skills Chart

const ctx = document.getElementById("skillChart");

new Chart(ctx,{

type:"radar",

data:{

labels:["Python","SQL","Power BI","Machine Learning","Data Visualization"],

datasets:[{

label:"Skill Level",

data:[90,85,80,70,85],

backgroundColor:"rgba(34,197,94,0.4)",

borderColor:"lime"

}]

}

});