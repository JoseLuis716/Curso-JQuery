$(document).ready(function() {

    //Slider
    if (window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            auto: true,
            /* autoControls: true, */
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1200,
            responsive: true,
            pager: false //el pager hace que se muestren 3 puntos en medio 
        });
    }

    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [{
                tittle: 'Tu y el titulo 1',
                date: 'Publicado el dia ' + moment().format("dddd") + ', ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum, quam unde error nobis est praesentium reprehenderit accusamus doloribus autem at repudiandae expedita doloremque hic similique deleniti quo. Nostrum possimus architecto eaque delectus praesentium quibusdam temporibus blanditiis. Fuga reprehenderit quo, possimus repellat dolorem nam sit totam eveniet ex vero ipsam quas, laboriosam minima earum iusto adipisci laudantium officiis eius ratione ab molestias'
            },
            {
                tittle: 'Tu y el titulo 2',
                date: 'Publicado el dia ' + moment().format("dddd") + ', ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum, quam unde error nobis est praesentium reprehenderit accusamus doloribus autem at repudiandae expedita doloremque hic similique deleniti quo. Nostrum possimus architecto eaque delectus praesentium quibusdam temporibus blanditiis. Fuga reprehenderit quo, possimus repellat dolorem nam sit totam eveniet ex vero ipsam quas, laboriosam minima earum iusto adipisci laudantium officiis eius ratione ab molestias'
            },
            {
                tittle: 'Tu y el titulo 3',
                date: 'Publicado el dia ' + moment().format("dddd") + ', ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum, quam unde error nobis est praesentium reprehenderit accusamus doloribus autem at repudiandae expedita doloremque hic similique deleniti quo. Nostrum possimus architecto eaque delectus praesentium quibusdam temporibus blanditiis. Fuga reprehenderit quo, possimus repellat dolorem nam sit totam eveniet ex vero ipsam quas, laboriosam minima earum iusto adipisci laudantium officiis eius ratione ab molestias'
            },
            {
                tittle: 'Tu y el titulo 4',
                date: 'Publicado el dia ' + moment().format("dddd") + ', ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum, quam unde error nobis est praesentium reprehenderit accusamus doloribus autem at repudiandae expedita doloremque hic similique deleniti quo. Nostrum possimus architecto eaque delectus praesentium quibusdam temporibus blanditiis. Fuga reprehenderit quo, possimus repellat dolorem nam sit totam eveniet ex vero ipsam quas, laboriosam minima earum iusto adipisci laudantium officiis eius ratione ab molestias'
            },
            {
                tittle: 'Tu y el titulo 5',
                date: 'Publicado el dia ' + moment().format("dddd") + ', ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum, quam unde error nobis est praesentium reprehenderit accusamus doloribus autem at repudiandae expedita doloremque hic similique deleniti quo. Nostrum possimus architecto eaque delectus praesentium quibusdam temporibus blanditiis. Fuga reprehenderit quo, possimus repellat dolorem nam sit totam eveniet ex vero ipsam quas, laboriosam minima earum iusto adipisci laudantium officiis eius ratione ab molestias'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">
                    <h2>${item.tittle}</h2>
                    <span class="date">${item.date}</span>
                    <!-- alt + z para acomodar -->
                    <p>${item.content}.</p>
                    <a href="#" class="button-more">Leer mas</a>
                </article> 
        `;
            $("#posts").append(post);
        });
    }
    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function() {
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function() {
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function() {
        theme.attr("href", "css/blue.css");
    });

    //Scroll hacia arriba
    $(".subir").click(function(e) {

        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;

    });
    //Login fake
    $("#login form").submit(function() {
        var form_name = $("#name").val();
        localStorage.setItem("name", form_name);

    });

    var form_name = localStorage.getItem("name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong>");
        about_parrafo.append('<a href="#" id="logout">Cerrrar sesión</a>');
        $("#login").hide();
        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

});