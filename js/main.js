$(document).ready(function() {

    //Slider
    $('.galeria').bxSlider({
        auto: true,
        /* autoControls: true, */
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200,
        responsive: true,
        pager: false //el pager hace que se muestren 3 puntos en medio 
    });

    //Posts
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

});