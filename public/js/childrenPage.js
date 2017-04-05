//Subcell Colors
var curIndex = 0;
var projects = [];

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:8000/projects', success: function(result){
            //Once retrieved data, start adding Projects divs into the website
            projects = result;
            loadProject();

        },
        error: function(jqXHR, textStatus, errorThrow){
            alert('Fail to Load from API. Website will load default project status');
            console.log(textStatus);
            console.log(errorThrow);
            projects = [
                {
                    "_id": "58c88fc67deeb9153f842f43",
                    "name": "OneClickUpload",
                    "page": "oneclickupload.htm",
                    "technology": {
                        "icons": [
                            "Android",
                            "Java",
                            "SQL"
                        ],
                        "hover": [
                            "Android",
                            "Java",
                            "SQLite Database"
                        ],
                        "proportion": {
                            "Java": 75,
                            "SQL": 25
                        }
                    },
                    "descriptions": {
                        "brief": "Android app to upload photo to multiple social media platforms simultaneously",
                        "paragraph1": "OneClickUpload is an Android app, written in Android Studio, to upload photos to multiple social media accounts at the same time. Currently, the app only implements two social media APIs (Facebook and Twitter).",
                        "paragraph2": "Android's built-in database, SQLite, is utilized in the app to persist user data such as Upload Profiles, preventing the loss of user created profiles between app closes. When the app is opened, the profile information is then retrieved from the database and being unmarshalled into objects for use."
                    },
                    "images": [
                        "/oneclickupload/OneClickUpload01.png",
                        "/oneclickupload/OneClickUpload02.png",
                        "/oneclickupload/OneClickUpload03.png",
                        "/oneclickupload/OneClickUpload04.png"
                    ]
                },
                {
                    "_id": "58c88fc67deeb9153f842f44",
                    "name": "PortfolioV1",
                    "page": "portfolio.htm",
                    "technology": {
                        "icons": [
                            "HTML5",
                            "CSS",
                            "JavaScript",
                            "BootStrap"
                        ],
                        "hover": [
                            "HTML5",
                            "CSS",
                            "JavaScript",
                            "BootStrap"
                        ],
                        "proportion": {
                            "HTML": 50,
                            "CSS": 25,
                            "JavaScript": 25
                        }
                    },
                    "descriptions": {
                        "brief": "The very first responsive Bootstrap website to serve as my web portfolio.",
                        "paragraph1": "Portfolio V1 is a website that serves as an online portfolio to host my personal information, my skill set, and my projects. The website is my very first attempt in Web Development, and throughout the development, I was able to gain entry level of knowledge in HTML, CSS, and JavaScript",
                        "paragraph2": "The website relies heavily on Twitter's Bootstrap to achieve Responsive Web Design. The Website uses JavaScript and jQuery to handle the scrolling and time change at the footer."
                    },
                    "images": [
                        "/portfolio/portfolio1.png",
                        "/portfolio/portfolio2.png",
                        "/portfolio/portfolio3.png"
                    ]
                },
                {
                    "_id": "58c88fc67deeb9153f842f45",
                    "name": "Math Riceball",
                    "page": "mathriceball.htm",
                    "technology": {
                        "icons": [
                            "Unity",
                            "CSharp"
                        ],
                        "hover": [
                            "Unity",
                            "C#",
                            "Visual Studio"
                        ],
                        "proportion": {
                            "Unity": 50,
                            "C#": 50
                        }
                    },
                    "descriptions": {
                        "brief": "An Unity Game created during 2015 Windows 10 Game Jam by a group of four students.",
                        "paragraph1": "During the 2015 Windows 10 Game Jam, a group of four students developed an Unity game within two days. Throughout the game, the player will consume various sushi that represent numbers and mathematical operators. The consumed sushi then forms a mathematical equation that the player must solve at the end",
                        "paragraph2": "The purpose of the game is to promote mental math for younger kids with basic math operations. The group and I were able to develop a fully functional game without previous Unity knowledge within just two days, and we learned to worked together, to delegate tasks effectively, and to work under a tight schedule."
                    },
                    "images": []
                },
                {
                    "_id": "58c88fc67deeb9153f842f46",
                    "name": "ParkNEat",
                    "page": "parkneat.htm",
                    "technology": {
                        "icons": [
                            "Java"
                        ],
                        "hover": [
                            "Java",
                            "NoSQL Database",
                            "Google Web Toolkit"
                        ],
                        "proportion": {
                            "Unity": 50,
                            "C#": 50
                        }
                    },
                    "descriptions": {
                        "brief": "A Web Application to display restaurants along with their ratings/comments on Google Map and nearby parking spots.",
                        "paragraph1": "ParkNEat is a web application developed using Google Web Toolkit (GWT). The web application displays nearby restaurants and parking spots near those locations. In addition, the users can see reviews and ratings of the selected restaurants by other users.",
                        "paragraph2": "ParkNEat is developed in Java and GWT framework. The application uses Yelp's API for restaurant locations and online datasets for parking spots. These types of data (along with reviews/ratings) are stored onto Google's NoSQL database for persistence. Google Map API is then used to display these data on a map."
                    },
                    "images": []
                },
                {
                    "_id": "58c88fc67deeb9153f842f47",
                    "name": "Shop Online!",
                    "page": "shoponline.htm",
                    "technology": {
                        "icons": [
                            "PHP",
                            "SQL",
                            "HTML5"
                        ],
                        "hover": [
                            "PHP",
                            "MySQL Database",
                            "HTML5"
                        ],
                        "proportion": {
                            "HTML": 40,
                            "PHP": 30,
                            "SQL": 30
                        }
                    },
                    "descriptions": {
                        "brief": "A Web Application to display restaurants along with their ratings/comments on Google Map and nearby parking spots.",
                        "paragraph1": "Shop Online! is a website made for online shopping experience (for custoemrs) and inventory management (for managers and clerks). Customers can added items (if available) to their baskets and checkout items at once. Managers or clerks can create reports of top selling items, daily sells, and inventory counts. The website also has a login system to determine user information once accounts are created.",
                        "paragraph2": "Shop Online is written in PHP and HTML, and the website uses MySQL database for data storage. The results of SQL queries are then displayed in a readable format without any modification to the results. For security, the website uses POST method in form handling to hide information from users. Passwords are encrypted with Blowfish Encryption and then stored in the database."
                    },
                    "images": []
                }
            ];
            loadProject();

        }
    })

    //Assign background color of subcells randomly.
    var elems = $(".randomColor");
    //Construct a new color array from original colors array so we can remove a color whenever
    //a cell is assigned its color
    for(var i  = 0; i < elems.length; i++){
        const element = elems[i];
        setStyle(element, 1);
    }


});

function loadProject(){
    //Draw Pie Charts
    //Get the canvas DOM element
    var canvas = $(".technologyPie");
    //Get the DIV element to put legend in
    var legend = $("#technologyPieLegend");
    //Construct the PieChart object
    var piechart = new PieChart({
        //The canvas DOM object
        canvas: canvas[0],
        //The Pie Split Data
        data: getData(canvas[0].id).technology.proportion,
        //The colors to be used in the pie chart
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88"],
        //The DIV DOM object to put legends in
        legend: legend
    });
    piechart.draw();

    try{
        showImg(0);
    } catch(err){
        //Do nothing since if there's no image for project, ignore showImg(0)
    }
    $("#paragraph1").html(getData(canvas[0].id).descriptions.paragraph1);
    $("#paragraph2").html(getData(canvas[0].id).descriptions.paragraph2);
}

/**
 * Function to switch displayed image in the gallery
 * @param index :   The Index of the image to show
 */
function showImg(index){
    var imgSlide = $('.imageSlide')[0];
    var thumbnails = $('.thumbnail');
    var images = getData(imgSlide.id).images;
    if(index >= images.length){
        curIndex = index % images.length;
    } else if (index < 0){
        curIndex = images.length - 1;
    }
    imgSlide.style.opacity = 1;
    $.when($(imgSlide).fadeOut(500)).done(function(){
        imgSlide.src = 'img/projects/' + images[curIndex];
        $(imgSlide).fadeIn(500);
        for(var i = 0; i < images.length; i++){
            if(i == curIndex){
                thumbnails[curIndex].style.opacity = 1.0;
            }else {
                thumbnails[i].style.opacity = 0.5;
            }
        }});
}

/**
 * Increment or Decrement the current index of the image in the gallery
 * @param indexChange   :   The change in the index
 */
function changeImage(indexChange){
    showImg(curIndex += indexChange);
}

/**
 * The function to draw one portion of the pie chart
 * @param ctx       :   Context of the canvas
 * @param centerX   :   The X coordinate of the center of the pie chart
 * @param centerY   :   The Y coordinate of the center of the pie chart
 * @param radius    :   Radius of the pie chart
 * @param startAngle:   The starting angle of the pie slice
 * @param endAngle  :   The ending angle of the pie slice
 * @param color     :   The color of the slice
 */
function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

/**
 * The constructor of the pie chart
 * options parameters contains the following:
 *      canvas  :   The Canvas DOM object to draw PieChart in
 *      data    :   The data of the pie chart, containing the proportion of each pie slice
 *      colors  :   The colors to be used in the pie chart
 *      legend  :   The DIV DOM object to contain the legend
 */
var PieChart = function(options){
    //Saving variables
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    /**
     * The draw function of the class
     * is to draw the whole pie chart and add legends to the DIV DOM object (legend)
     */
    this.draw = function(){
        var totalValue = 0;
        var color_index = 0;
        // Summing up the total values of the pie chart
        for(var categ in this.options.data){
            var val = this.options.data[categ];
            totalValue += val;
        }

        var start_angle = 0;
        // For each pie section
        for(categ in this.options.data){
            val = this.options.data[categ];
            // Measure the angle of the section
            var slice_angle = 2 * Math.PI * val / totalValue;

            // Determine the location of the text for the section
            var pieRadius = Math.min(this.canvas.width/2, this.canvas.height/2);
            var labelX = this.canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
            var labelY = this.canvas.height/2 + (pieRadius / 2 ) * Math.sin(start_angle + slice_angle/2);

            // Draw the slice
            drawPieSlice(this.ctx, this.canvas.width/2, this.canvas.height/2, Math.min(this.canvas.width/2, this.canvas.height/2), start_angle, start_angle+slice_angle, this.colors[color_index%this.colors.length]);

            // Draw the text for the section
            var labelText = Math.round(100 * val / totalValue);
            this.ctx.fillStyle = "black";
            this.ctx.font = "bold 20px Arial";
            this.ctx.fillText(labelText + "%", labelX, labelY);

            //Increment the start_angle and color index
            start_angle += slice_angle;
            color_index++;
        }

        // If legend is included in the options
        if(this.options.legend){
            color_index = 0;
            var legendHTML = "";
            // For each section
            for(categ in this.options.data){
                // Add the color and the name of the section to the legend
                legendHTML += '<div><span style="display:inline-block;width:20px;background-color:'+this.colors[color_index++]+';">&nbsp;</span> ' + categ + '</div>';
                this.options.legend.html(legendHTML);
            }
        }
    }
}

/**
 * Simple function to get the corresponding project data with ID
 * @param id    : The ID of the Canvas DOM object
 * @returns {*} : The Project Data
 */
function getData(id){
    for(i = 0; i < projects.length; i++){
        if(id.includes(projects[i].name.replace(/[^a-z0-9+]+/gi, ''))){
            return projects[i];
        }
    }
    return null;
}