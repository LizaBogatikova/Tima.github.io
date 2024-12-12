$(document).ready(function () {
    $('#add-new').on('click', function () {
        const newNews = `
            <li class="new-list-item">
                <article class="block-preview">
                    <img class="news-photo" src="https://via.placeholder.com/150" alt="Картинка" />
                    <div>
                        <h3 class="articles-title">
                            <a href="#">Новая новость: Увлекательное обновление</a>
                        </h3>
                        <span class="platforma">Все платформы</span>
                    </div>
                </article>
            </li>`;
        $('.news-list').append(newNews);
    });

    // изменение фона таблицы при наведении мыши
    $('.tablica th').hover(
        function () {
            $(this).css('background-color', '#f0f0f0');
        },
        function () {
            $(this).css('background-color', '');
        }
    );

    // плавное появление заголовка на главной странице
    $(".gradient-title").hide().fadeIn(2000);

    // нажатие на кнопку меняет цвет текста заголовка
    $('#sort-games').on('click', function () {
        $('.title-2').css('color', 'blue');
    });
});