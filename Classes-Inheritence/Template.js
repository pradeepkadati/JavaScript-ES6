let concString = "<h1> this is template <h1>" +
    "<p> this is description</p>" +
    "<Div> this is a region</div>";

let template = `<h1> this is template <h1> 
                <p> this is description</p>
                <Div> this is a region</div>`;
let coach = "pradeep";
let exp = 12;
let template_placeHolder = `<h1> this is your coach for JS  ${coach}<h1> 
                <p> he has about ${exp} of experience</p>
                <Div> this is a region</div>`;                

console.log(template) ;             
console.log(template_placeHolder) ; 