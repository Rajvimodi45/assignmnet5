/*
    Assignment 5
    {Rajvi Nilesh Modi}
*/


    $(document).ready(function(){
    class ContentCard {

        constructor(title, description, categorytype) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categorytype = categorytype;


        }

    }
        var number = Math.random()
        number.toString(36); 
        let id = number.toString(36).substr(2, 9);
        let values = new ContentCard(id, 'painting','Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'canvas');
        document.getElementById("content-list").innerHTML = "<div id= content-" + values.id + "> <h4>" + values.title + "</h4><p>" + values.description + "</p><div>"+ values.categorytype + "</div></div>";
        
});



