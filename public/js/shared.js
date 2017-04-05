var colors = ['#CAEBF2', '#A9A9A9', '#FF3B3F', '#EFEFEF', '#96858F', '#6D7993', '#9099A2', '#D5D5D5', '#D7CEC7', '#FEDCD2', '#BFD8D2', '#DCB239'];
/**
 * Simple function to get the image path of the technology
 */
function getTechnologyPath(tech){
    if(tech.includes("Android")){
        return "./img/skills/Android_Icon.png";
    } else if(tech.includes("Java")){
        return "./img/skills/Java_Icon.png";
    } else if(tech.includes("SQL")){
        return "./img/skills/SQL_Icon.png";
    } else if(tech.includes("HTML")){
        return "./img/skills/HTML_Icon.png";
    }  else if(tech.includes("CSS")){
        return "./img/skills/CSS_Icon.png";
    } else if(tech.includes("JavaScript")){
        return "./img/skills/JS_Icon.png";
    } else if(tech.includes("BootStrap")){
        return "./img/skills/Bootstrap_Icon.png";
    } else if(tech.includes("Unity")){
        return "./img/skills/UNITY_Icon.png";
    } else if(tech.includes("CSharp")){
        return "./img/skills/CSharp_Icon.png";
    } else if(tech.includes("PHP")){
        return "./img/skills/PHP_Icon.png";
    } else {
        console.log(tech);
        return null;
    }
}

/**
 * Simple function to get random integer between the min and max value
 * @param min           : The minimal number
 * @param max           : The maximum number
 * @returns {number}    : Random Integer
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


/**
 * The function to add hover effect to the Div element
 * @param div   : The element to apply the effects on
 * @param data  : The data containing the effect
 */
function addHoverEffect(div, data){
    if(data != null){
        //Only project cells will come with data
        $(div).hover(function(){
            $(this).css("opacity", 1);
            //when mouseover, change the div content to HoverInnerDiv
            $(this).html(createProjectHoverInnerDiv(data));
        }, function(){
            $(this).css("opacity", 0.75);
            //when mouseout, change the div content back to the original InnerDiv
            $(this).html(createProjectInnerDiv(data));
        });
    } else {
        //Else if data is null, the divs will be simple cells
        //and we only need to apply mouseover opacity effect
        $(div).hover(function(){
            $(this).css("opacity", 1);
        }, function(){
            $(this).css("opacity", 0.75);
        });
    }
}

/**
 * Simple function to set the style of the element
 * @param elem  : The element to be changed
 */
function setStyle(elem, unhovered){
    //Randomly choose a color from the color pool
    var choice = getRandomInt(0, colors.length - 1);
    $(elem).css("background-color", colors[choice]);
    $(elem).css("opacity", unhovered);
}

