import React from "react";

const Murojaat = () => {
  var form = document.getElementById("form");
  // var fish = document.getElementById("fish");
  // var idpass = document.getElementById("idpass");
  // var Yashashmanzili = document.getElementById("Yashashmanzili");
  // var mfynom = document.getElementById("mfynom");
  // var kochanomi = document.getElementById("kochanomi");
  // var telefonraqam = document.getElementById("telefonraqam");
  // var rasmvavidio = document.getElementById("rasmvavidio");
  // var ariza_mazmuni = document.getElementById("ariza_mazmuni");
  // var matn = document.getElementById("matn");
  // form.addEventListener("submit", function (e) {
  // e.preventDefault();

  var fish = document.getElementById("fish");
  var idpass = document.getElementById("idpass");
  var Yashashmanzili = document.getElementById("Yashashmanzili");
  var mfynom = document.getElementById("mfynom");
  var kochanomi = document.getElementById("kochanomi");
  var telefonraqam = document.getElementById("telefonraqam");
  var rasmvavidio = document.getElementById("rasmvavidio");
  var ariza_mazmuni = document.getElementById("ariza_mazmuni");
  var matn = document.getElementById("matn");

  console.log(rasmvavidio);

  fetch("https://sirdarya777.pythonanywhere.com/api/", {
    method: "POST",
    body: JSON.stringify({
      fish: fish,
      idpassport: idpass,
      Yashashmanzili: Yashashmanzili,
      mfynomi: mfynom,
      kochanomi: kochanomi,
      telefonraqami: telefonraqam,
      rasmvavidio: rasmvavidio,
      ariza_mazmuni: ariza_mazmuni,
      matn: matn,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
  // alert("Murojatingiz Hokimiyatga Yuborildi");

  return (
    <div className="flex justify-center items-center my-[100px]">
      <div className="form-container">
        <header>Murojaat Yo'llash</header>

        <form action="#" method="post" id="form">
          <div className="form first">
            <div className="details personal">
              <span className="title">Malumotlarni to`ldiring</span>

              <div className="fields">
                <div className="input-field">
                  <label>To`liq Ism</label>
                  <input
                    type="text"
                    id="fish"
                    placeholder="F.I.SH"
                    required=""
                  />
                </div>

                <div className="input-field">
                  <label>Passport ID</label>
                  <input
                    type="text"
                    id="idpass"
                    placeholder="Passport Seriya yoki ID"
                    required=""
                  />
                </div>

                <div className="input-field">
                  <label>Yashash manzili</label>
                  <select id="Yashashmanzili">
                    <option value="Guliston shaxar">Guliston shahar</option>
                    <option value="Mirzaobod tumani">Mirzaobod tumani</option>
                    <option value="Yangiyer shaxar">Yangiyer shahar</option>
                    <option value="Oqoltin tumani">Oqoltin tumani</option>
                    <option value="Sardoba tumani">Sardoba tumani</option>
                    <option value="Xovos tumani">Xovos tumani</option>
                    <option value="Guliston tumani">Guliston tumani</option>
                    {/* <option value="Guliston tumani">Guliston tumani</option> */}
                    <option value="Sayhunobod tumani">Sayhunobod tumani</option>
                    <option value="Shirin shaxar">Shirin shahar</option>
                    <option value="Boyovut tumani">Boyovut tumani</option>
                  </select>
                </div>

                <div className="input-field mfy">
                  <label>MFY nomi</label>
                  <select className="form-select" id="mfynom">
                    <option value="Boyovut">Boyovut Tumani</option>
                    <option value='"Маданият" МФЙ'>"Маданият" МФЙ</option>
                    <option value='"Ижодкор" МФЙ'>"Ижодкор" МФЙ</option>
                    <option value='"Сохил" МФЙ'>"Сохил" МФЙ</option>
                    <option value='"Беруний" МФЙ'>"Беруний" МФЙ</option>
                    <option value='"Учтургон" МФЙ'>"Учтургон" МФЙ</option>
                    <option value='"Фарход" МФЙ'>"Фарход" МФЙ</option>
                    <option value='"Наврўз" МФЙ'>"Наврўз" МФЙ</option>
                    <option value='"Маънавият" МФЙ'>"Маънавият" МФЙ</option>
                    <option value='"Сармич" МФЙ'>"Сармич" МФЙ</option>
                    <option value='"Сармич" МФЙ'>"Сармич" МФЙ</option>
                    <option value='"Жўлангар" МФЙ'>"Жўлангар" МФЙ</option>
                    <option value="А.Навоий номли МФЙ">
                      А.Навоий номли МФЙ
                    </option>
                    <option value='"Олмазор" МФЙ'>"Олмазор" МФЙ</option>
                    <option value='"Совотобод" МФЙ'>"Совотобод" МФЙ</option>
                    <option value='"Тинчлик" МФЙ'>"Тинчлик" МФЙ</option>
                    <option value='"Анорзор" МФЙ'>"Анорзор" МФЙ</option>
                    <option value='"Бекат" МФЙ'>"Бекат" МФЙ</option>
                    <option value='"Карапчи" МФЙ'>"Карапчи" МФЙ</option>
                    <option value='"Лайлаккўл" МФЙ'>"Лайлаккўл" МФЙ</option>
                    <option value='"Мукумий" МФЙ'>"Мукумий" МФЙ</option>
                    <option value='"Бобоюрт" МФЙ'>"Бобоюрт" МФЙ</option>
                    <option value='"Марказ" МФЙ'>"Марказ" МФЙ</option>
                    <option value='"Пахтакор" МФЙ'>"Пахтакор" МФЙ</option>
                    <option value='"Ўзбекистон" МФЙ'>"Ўзбекистон" МФЙ</option>
                    <option value='"Озодлик" МФЙ'>"Озодлик" МФЙ</option>
                    <option value='"Истиқлол" МФЙ'>"Истиқлол" МФЙ</option>
                    <option value='"Миришкор" МФЙ'>"Миришкор" МФЙ</option>
                    <option value='"Бунёдкор" МФЙ'>"Бунёдкор" МФЙ</option>
                    <option value="У.Юсупов номли МФЙ">
                      У.Юсупов номли МФЙ
                    </option>
                    <option value='"Янгибўстон" МФЙ'>"Янгибўстон" МФЙ</option>
                    <option value='"Дўстлик" МФЙ'>"Дўстлик" МФЙ</option>
                    <option value="С.Айний номли МФЙ">С.Айний номли МФЙ</option>
                    <option value="А.Темур номли МФЙ">А.Темур номли МФЙ</option>
                    <option value='"Гулбог" МФЙ'>"Гулбог" МФЙ</option>
                    <option value='"Ифтихор"'>"Ифтихор"</option>
                    <option value='"Янгиобод"'>"Янгиобод"</option>
                    <option value='"Зиёкор" МФЙ'>"Зиёкор" МФЙ</option>
                    <option value='"Навбахор" МФЙ'>"Навбахор" МФЙ</option>
                    <option value='"Ширин" МФЙ'>"Ширин" МФЙ</option>
                    <option value='"Янги авлод" МФЙ '>"Янги авлод" МФЙ </option>
                    <option value="Гулистон тумани">Guliston Tumani</option>
                    <option value="А.Яссавий номли МФЙ">
                      А.Яссавий номли МФЙ
                    </option>
                    <option value='"Аҳиллик" МФЙ'>"Аҳиллик" МФЙ</option>
                    <option value='"Бахмал" МФЙ'>"Бахмал" МФЙ</option>
                    <option value='"Бешбулоқ" ҚФЙ'>"Бешбулоқ" ҚФЙ</option>
                    <option value='"Бирлашган" МФЙ'>"Бирлашган" МФЙ</option>
                    <option value='"Боёвут" МФЙ'>"Боёвут" МФЙ</option>
                    <option value='"Дўстлик" МФЙ'>"Дўстлик" МФЙ</option>
                    <option value='"Зарбдор" МФЙ'>"Зарбдор" МФЙ</option>
                    <option value='"Ибрат" МФЙ'>"Ибрат" МФЙ</option>
                    <option value='"Ишонч" МФЙ'>"Ишонч" МФЙ</option>
                    <option value='"Мевазор" МФЙ'>"Мевазор" МФЙ</option>
                    <option value='"Мустақиллик" МФЙ'>"Мустақиллик" МФЙ</option>
                    <option value="А.Навоий номли МФЙ">
                      А.Навоий номли МФЙ
                    </option>
                    <option value='"Оқолтин" МФЙ'>"Оқолтин" МФЙ</option>
                    <option value='"Олтин водий" МФЙ'>"Олтин водий" МФЙ</option>
                    <option value='"Сойибобод" ҚФЙ'>"Сойибобод" ҚФЙ</option>
                    <option value='"Соҳил" МФЙ'>"Соҳил" МФЙ</option>
                    <option value='"Соҳилобод" ҚФЙ'>"Соҳилобод" ҚФЙ</option>
                    <option value='"Тажрибакор" МФЙ'>"Тажрибакор" МФЙ</option>
                    <option value='"Теракзор" МФЙ'>"Теракзор" МФЙ</option>
                    <option value='"Фурқат" МФЙ'>"Фурқат" МФЙ</option>
                    <option value="Ҳ.Олимжон номли МФЙ">
                      Ҳ.Олимжон номли МФЙ
                    </option>
                    <option value='"Чортоқ" ҚФЙ'>"Чортоқ" ҚФЙ</option>
                    <option value='"Шарқ ҳақиқати" МФЙ'>
                      "Шарқ ҳақиқати" МФЙ
                    </option>
                    <option value='"Юлдуз" МФЙ'>"Юлдуз" МФЙ</option>
                    <option value='"Иноқлик" МФЙ'>"Иноқлик" МФЙ</option>
                    <option value="Мирзаобод тумани">Mirzaobod Tumani</option>
                    <option value="“Навбахор” МФЙ">“Навбахор” МФЙ</option>
                    <option value="Йўлдошобод МФЙ">Йўлдошобод МФЙ</option>
                    <option value="Ҳақиқат МФЙ">Ҳақиқат МФЙ</option>
                    <option value="Бахористон МФЙ">Бахористон МФЙ</option>
                    <option value="“Янги Ўзбекистон” МФЙ">
                      “Янги Ўзбекистон” МФЙ
                    </option>
                    <option value="Дўнгариқ МФЙ">Дўнгариқ МФЙ</option>
                    <option value="Мирзачўл МФЙ">Мирзачўл МФЙ</option>
                    <option value="Боғистон МФЙ">Боғистон МФЙ</option>
                    <option value="Наврўз МФЙ">Наврўз МФЙ</option>
                    <option value="Нурафшон ҚФЙ">Нурафшон ҚФЙ</option>
                    <option value="Ойдин МФЙ">Ойдин МФЙ</option>
                    <option value="Дехқонобод МФЙ">Дехқонобод МФЙ</option>
                    <option value="Т.Ахмедов МФЙ">Т.Ахмедов МФЙ</option>
                    <option value="Оқолтин МФЙ">Оқолтин МФЙ</option>
                    <option value="Тошкент МФЙ">Тошкент МФЙ</option>
                    <option value="Тинчлик МФЙ">Тинчлик МФЙ</option>
                    <option value="М.Улуғбек номли МФЙ">
                      М.Улуғбек номли МФЙ
                    </option>
                    <option value="Янгихаёт МФЙ">Янгихаёт МФЙ</option>
                    <option value="Оқолтин тумани">Оқолтин тумани</option>
                    <option value="“А.Навоий” МФЙ">“А.Навоий” МФЙ</option>
                    <option value="“Саҳоват” МФЙ">“Саҳоват” МФЙ</option>
                    <option value="“Шодлик” МФЙ">“Шодлик” МФЙ</option>
                    <option value="“Кўркам диёр” МФЙ">“Кўркам диёр” МФЙ</option>
                    <option value="“Аҳиллик” МФЙ">“Аҳиллик” МФЙ</option>
                    <option value="“Бўстон” МФЙ">“Бўстон” МФЙ</option>
                    <option value="“Обод” МФЙ">“Обод” МФЙ</option>
                    <option value="“Тошкент” МФЙ">“Тошкент” МФЙ</option>
                    <option value="“Янги хаёт” МФЙ">“Янги хаёт” МФЙ</option>
                    <option value="“Мустақиллик” МФЙ">“Мустақиллик” МФЙ</option>
                    <option value="“Андижон” МФЙ">“Андижон” МФЙ</option>
                    <option value="“Янги давр” МФЙ">“Янги давр” МФЙ</option>
                    <option value="“Янги Тошкент” МФЙ">
                      “Янги Тошкент” МФЙ
                    </option>
                    <option value="Сирдарё тумани">Сирдарё тумани</option>
                    <option value='"Бахмал" МФЙ'>"Бахмал" МФЙ</option>
                    <option value='"Бунёдкор" МФЙ'>"Бунёдкор" МФЙ</option>
                    <option value='"Камолат" МФЙ'>"Камолат" МФЙ</option>
                    <option value='"Тараққиёт" МФЙ'>"Тараққиёт" МФЙ</option>
                    <option value="Улуғбек номли МФЙ"></option>
                    <option value='"Ҳикматли" МФЙ'>"Ҳикматли" МФЙ</option>
                    <option value='"Адолат" МФЙ'>"Адолат" МФЙ</option>
                    <option value='"Дўстлик" МФЙ'>"Дўстлик" МФЙ</option>
                    <option value='"Ишонч" МФЙ'>"Ишонч" МФЙ</option>
                    <option value='"Тадбиркор" МФЙ'>"Тадбиркор" МФЙ</option>
                    <option value='"Ахиллик" МФЙ'>"Ахиллик" МФЙ</option>
                    <option value='"Истиқбол" МФЙ'>"Истиқбол" МФЙ</option>
                    <option value='"Орзу" МФЙ'></option>
                    <option value='"Тинчлик" МФЙ'>"Тинчлик" МФЙ</option>
                    <option value='"Туркистон" МФЙ'>"Туркистон" МФЙ</option>
                    <option value='"Хазина" МФЙ'>"Хазина" МФЙ</option>
                    <option value='"Хазина" МФЙ'>"Хазина" МФЙ</option>
                    <option value='"Дехқонобод" МФЙ'>"Дехқонобод" МФЙ</option>
                    <option value="Навоий номли МФЙ">Навоий номли МФЙ</option>
                    <option value='"Заршунос" МФЙ'>"Заршунос" МФЙ</option>
                    <option value='"Илғор" МФЙ'>"Илғор" МФЙ</option>
                    <option value='"Интилиш" МФЙ'>"Интилиш" МФЙ</option>
                    <option value='"Қуёш" МФЙ'>"Қуёш" МФЙ</option>
                    <option value='"Наврўз" МФЙ'>"Наврўз" МФЙ</option>
                    <option value='"Оқ йўл" МФЙ'>"Оқ йўл" МФЙ</option>
                    <option value='"Фаравон" МФЙ'>"Фаравон" МФЙ</option>
                    <option value='"Фурқат" МФЙ'>"Фурқат" МФЙ</option>
                    <option value='"Шоликор" МФЙ'>"Шоликор" МФЙ</option>
                    <option value='"Элобод" МФЙ'>"Элобод" МФЙ</option>
                    <option value='"Ширин" МФЙ'>"Ширин" МФЙ</option>
                    <option value='"Ёшлик" МФЙ'>"Ёшлик" МФЙ</option>
                    <option value='"Бахор" МФЙ'>"Бахор" МФЙ</option>
                    <option value='"Бешбулоқ" МФЙ'>"Бешбулоқ" МФЙ</option>
                    <option value='"Зиёкор" МФЙ'>"Зиёкор" МФЙ</option>
                    <option value='"Исломобод" МФЙ'>"Исломобод" МФЙ</option>
                    <option value='"Матонат" МФЙ'>"Матонат" МФЙ</option>
                    <option value='"Пахтакор" МФЙ'>"Пахтакор" МФЙ</option>
                    <option value='"Оқибат" МФЙ'>"Оқибат" МФЙ</option>
                    <option value="Сайхунобод тумани">Сайхунобод тумани</option>
                    <option value='"Бахмалсой" МФЙ'>"Бахмалсой" МФЙ</option>
                    <option value='"Нурли йўл" МФЙ'>"Нурли йўл" МФЙ</option>
                    <option value='"Паймард" МФЙ'>"Паймард" МФЙ</option>
                    <option value='"Ўзбекистон" МФЙ'>"Ўзбекистон" МФЙ</option>
                    <option value='"Фаровон" МФЙ'>"Фаровон" МФЙ</option>
                    <option value='"Иттифоқ" МФЙ'>"Иттифоқ" МФЙ</option>
                    <option value='"Нуробод" МФЙ'>"Нуробод" МФЙ</option>
                    <option value='"Олғабос" МФЙ'>"Олғабос" МФЙ</option>
                    <option value='"Пахтаобод" МФЙ'>"Пахтаобод" МФЙ</option>
                    <option value='"Шодлик" МФЙ'>"Шодлик" МФЙ</option>
                    <option value='"Турон" МФЙ'>"Турон" МФЙ</option>
                    <option value='"Гулбулоқ" МФЙ'>"Гулбулоқ" МФЙ</option>
                    <option value='"Пахтакон" МФЙ'>"Пахтакон" МФЙ</option>
                    <option value='"Дўстлик" МФЙ'>"Дўстлик" МФЙ</option>
                    <option value='"Синтоб" МФЙ'>"Синтоб" МФЙ</option>
                    <option value='"Гулистон" МФЙ'>"Гулистон" МФЙ</option>
                    <option value='"Ўрикзор" МФЙ'>"Ўрикзор" МФЙ</option>
                    <option value='"Янги ҳаёт" МФЙ'>"Янги ҳаёт" МФЙ</option>
                    <option value="Сардоба тумани">Сардоба тумани</option>
                    <option value='"Юртдош" МФЙ'>"Юртдош" МФЙ</option>
                    <option value='"Дўстлик" МФЙ'>"Дўстлик" МФЙ</option>
                    <option value='"Қўрғонтепа" МФЙ'>"Қўрғонтепа" МФЙ</option>
                    <option value='"Бирлик" МФЙ'>"Бирлик" МФЙ</option>
                    <option value='"Отаюрт" МФЙ'>"Отаюрт" МФЙ</option>
                    <option value='"Янгиқишлоқ" МФЙ'>"Янгиқишлоқ" МФЙ</option>
                    <option value='"Халқобод" МФЙ'>"Халқобод" МФЙ</option>
                    <option value='"Қуйитош" МФЙ'>"Қуйитош" МФЙ</option>
                    <option value='"Наврўз" МФЙ'>"Наврўз" МФЙ</option>
                    <option value='"Файзлиобод" МФЙ'>"Файзлиобод" МФЙ</option>
                    <option value='"Пахтакор" МФЙ'>"Пахтакор" МФЙ</option>
                    <option value='"Бирлишган" МФЙ'>"Бирлишган" МФЙ</option>
                    <option value='"Зомин" МФЙ'>"Зомин" МФЙ</option>
                    <option value='"Равот" МФЙ'>"Равот" МФЙ</option>
                    <option value='"Бўстон" МФЙ'>"Бўстон" МФЙ</option>
                    <option value="Ховос тумани">Ховос тумани</option>
                    <option value="Чаманзор  МФЙ">Чаманзор МФЙ</option>
                    <option value="Истиқлол  МФЙ">Истиқлол МФЙ</option>
                    <option value="Дўстлик  МФЙ">Дўстлик МФЙ</option>
                    <option value="Тинчлик  МФЙ">Тинчлик МФЙ</option>
                    <option value="Бунёдкор  МФЙ">Бунёдкор МФЙ</option>
                    <option value="Янгиер МФЙ">Янгиер МФЙ</option>
                    <option value="Пахтакор МФЙ">Пахтакор МФЙ</option>
                    <option value="Фарход МФЙ">Фарход МФЙ</option>
                    <option value="Обод турмуш  МФЙ">Обод турмуш МФЙ</option>
                    <option value="Гулбаҳор  МФЙ">Гулбаҳор МФЙ</option>
                    <option value="Мустақилликнинг 25 йиллиги  МФЙ">
                      Мустақилликнинг 25 йиллиги МФЙ
                    </option>
                    <option value="Қайирма  МФЙ">Қайирма МФЙ</option>
                    <option value="Шарқобод  МФЙ">Шарқобод МФЙ</option>
                    <option value="Соҳибкор МФЙ">Соҳибкор МФЙ</option>
                    <option value="Қорақум МФЙ">Қорақум МФЙ</option>
                    <option value="Нурли келажак МФЙ">Нурли келажак МФЙ</option>
                    <option value="Мустақиллик  МФЙ">Мустақиллик МФЙ</option>
                    <option value="Оқчангал МФЙ">Оқчангал МФЙ</option>
                    <option value="Афросиёб МФЙ">Афросиёб МФЙ</option>
                    <option value="Ўзбекистон тўкинчилиги МФЙ">
                      Ўзбекистон тўкинчилиги МФЙ
                    </option>
                    <option value="Ховособод  МФЙ">Ховособод МФЙ</option>
                    <option value="Карвонсарой   МФЙ">Карвонсарой МФЙ</option>
                    <option value="Етти гузар  МФЙ">Етти гузар МФЙ</option>
                    <option value="Қаҳрамон МФЙ">Қаҳрамон МФЙ</option>
                    <option value="Ҳуснобод МФЙ">Ҳуснобод МФЙ</option>
                    <option value="Бўстон МФЙ">Бўстон МФЙ</option>
                    <option value="Бинокор МФЙ">Бинокор МФЙ</option>
                    <option value="Гулистон шаҳар">Гулистон шаҳар</option>
                    <option value="“Ахиллик” МФЙ">“Ахиллик” МФЙ</option>
                    <option value="“Дўстлик” МФЙ">“Дўстлик” МФЙ</option>
                    <option value="“Навбахор” МФЙ">“Навбахор” МФЙ</option>
                    <option value='"Нурафшон" МФЙ'>"Нурафшон" МФЙ</option>
                    <option value='"Сохил" МФЙ'>"Сохил" МФЙ</option>
                    <option value='"Шодлик" МФЙ'>"Шодлик" МФЙ</option>
                    <option value='"Янги хаёт" МФЙ'>"Янги хаёт" МФЙ</option>
                    <option value='"Бахт" МФЙ'>"Бахт" МФЙ</option>
                    <option value='"Бўстон" МФЙ'>"Бўстон" МФЙ</option>
                    <option value='"Буюк келажак" МФЙ'>
                      "Буюк келажак" МФЙ
                    </option>
                    <option value='"Истиқлол" МФЙ'>"Истиқлол" МФЙ</option>
                    <option value='"Улуғобод" МФЙ'>"Улуғобод" МФЙ</option>
                    <option value='"Боғишамол" МФЙ'>"Боғишамол" МФЙ</option>
                    <option value='"Намуна" МФЙ'>"Намуна" МФЙ</option>
                    <option value='"Сайқал" МФЙ'>"Сайқал" МФЙ</option>
                    <option value='"Тараққиёт" МФЙ'>"Тараққиёт" МФЙ</option>
                    <option value='"Обод юрт" МФЙ'>"Обод юрт" МФЙ</option>
                    <option value='"Бахор" МФЙ'>"Бахор" МФЙ</option>
                    <option value='"Ибратли" МФЙ'>"Ибратли" МФЙ</option>
                    <option value='"Маданият" МФЙ'>"Маданият" МФЙ</option>
                    <option value='"Маънавият" МФЙ'>"Маънавият" МФЙ</option>
                    <option value='"Нихол" МФЙ'>"Нихол" МФЙ</option>
                    <option value='"Улуғ йўл" МФЙ'>"Улуғ йўл" МФЙ</option>
                    <option value='"Юксалиш МФЙ"'>"Юксалиш МФЙ"</option>
                    <option value="Бош бошқарма">Бош бошқарма</option>
                    <option value="Янгиер шаҳар">Янгиер шаҳар</option>
                    <option value="“Бобур” МФЙ">“Бобур” МФЙ</option>
                    <option value="“Т.Малик” МФЙ">“Т.Малик” МФЙ</option>
                    <option value="“Жомий” МФЙ">“Жомий” МФЙ</option>
                    <option value="“Шукурона” МФЙ">“Шукурона” МФЙ</option>
                    <option value="Фазилат МФЙ">Фазилат МФЙ</option>
                    <option value="Давлатобод МФЙ">Давлатобод МФЙ</option>
                    <option value="Шодиёна МФЙ">Шодиёна МФЙ</option>
                    <option value="Маърифат МФЙ">Маърифат МФЙ</option>
                    <option value=" Юксалиш МФЙ"> Юксалиш МФЙ</option>
                    <option value=" Бинокор МФЙ"> Бинокор МФЙ</option>
                    <option value="Наврўзобод МФЙ">Наврўзобод МФЙ</option>
                    <option value="Ширин шаҳар">Ширин шаҳар</option>
                    <option value="“Ватанпарвар” МФЙ">“Ватанпарвар” МФЙ</option>
                    <option value="“Мирзо Улуғбек” МФЙ">
                      “Мирзо Улуғбек” МФЙ
                    </option>
                    <option value="“Бунёдкор” МФЙ">“Бунёдкор” МФЙ</option>
                    <option value="“Фарҳод” МФЙ">“Фарҳод” МФЙ</option>
                    <option value='"Дўстлик" МФЙ'>"Дўстлик" МФЙ</option>
                    <option value='"Нуробод" МФЙ'>"Нуробод" МФЙ</option>
                    <option value='"Амир Темур" МФЙ'>"Амир Темур" МФЙ</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Ko`cha nomi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kochanomi"
                    placeholder="Ko'cha nomi"
                  />
                </div>

                <div className="input-field">
                  <label>Telefon Raqam</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefonraqam"
                    placeholder="Telefon Raqam"
                  />
                </div>
              </div>
            </div>

            <div className="details ID">
              <p>
                Iltimos agar rasm yuklamoqchi bo`lsangiz{" "}
                <a href="https://prnt.sc">prnt.sc</a> ushbu web saytdan url
                oling
              </p>

              <div className="fields">
                <div class="input-field">
                  <label>Rasm Yoki Video</label>
                  <input
                    type="text"
                    id="rasmvavidio"
                    placeholder="Rasm Yoki Video"
                    value="none"
                    required=""
                  />
                </div>

                <div class="input-field mazmun">
                  <label>Ariza Mazmuni</label>
                  <select id="ariza_mazmuni">
                    <option value="суд  масалалари">Cуд масалалари</option>
                    <option value="ички ишлар  фаол.">Ички ишлар фаол.</option>
                    <option value="прокуратура фаол. оид">
                      Прокуратура фаол. оид
                    </option>
                    <option value="алимент масаласи">Алимент масаласи</option>
                    <option value="суд  ижросига оид">Суд ижросига оид</option>
                    <option value="соғлиқни сақлаш">Соғлиқни сақлаш</option>
                    <option value="пенсия ва нафақа">Пенсия ва нафақа</option>
                    <option value=" мактаб  таълими"> Мактаб таълими</option>
                    <option value="уй-жой, ер б-н таъм.">
                      Уй-жой, ер б-н таъм.
                    </option>
                    <option value="иш б-н таъминлаш">Иш б-н таъминлаш</option>
                    <option value="афв этиш масаласи">Афв этиш масаласи</option>
                    <option value="олий таълим масалалариa">
                      Олий таълим масалалариa
                    </option>
                    <option value="кредит олиш">Кредит олиш</option>
                    <option value="банк-молия  масалалари">
                      Банк-молия масалалари
                    </option>
                    <option value="газ, электр, сув, иссиқлик таъминоти">
                      Газ, электр, сув, иссиқлик таъминоти
                    </option>
                    <option value="коммунал тўловларни ҳисоблаш">
                      Коммунал тўловларни ҳисоблаш
                    </option>
                    <option value="йўл қурилиши">Йўл қурилиши</option>
                    <option value="солиқ  тўловлари">Солиқ тўловлари</option>
                    <option value="транспорт масалалари">
                      Транспорт масалалари
                    </option>
                    <option value="қурилиш  соҳаси">қурилиш соҳаси</option>
                    <option value="тадбиркорлик  ҳуқукларини бузулиши  ">
                      Тадбиркорлик ҳуқукларини бузулиши{" "}
                    </option>
                    <option value="санъ-ат, маърифат ва маданият масалалариa">
                      Санъ-ат, маърифат ва маданият масалалариa
                    </option>
                    <option value="дори-дармонга нарх-наво масаласи">
                      Дори-дармонга нарх-наво масаласи
                    </option>
                    <option value="биринчи эҳтиёж молларига нарх-наво масалалари">
                      Биринчи эҳтиёж молларига нарх-наво масалалари
                    </option>
                    <option value="давлат  хизмати фаолияти">
                      Давлат хизмати фаолияти
                    </option>
                    <option value="моддий  ёрдам  олиш">
                      Моддий ёрдам олиш
                    </option>
                    <option value="бошқа масалалар">Бошқа масалалар</option>
                  </select>
                </div>
                <div class="input-field">
                  <label>Text</label>
                  <input
                    type="text"
                    id="matn"
                    placeholder="Matn kiriting"
                    required=""
                  />
                </div>
              </div>

              <a href="/">
                <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
                  Yuborish
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Murojaat;
