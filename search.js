const rooms = [
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/monet/Select-13797755/original/99eaf04c-803b-4f84-bd04-ba56c2c31d6e?im_w=720', 
            'https://a0.muscache.com/im/pictures/monet/Select-13797755/original/721b53c0-506e-4e29-ab74-52c6702fa2e5?im_w=720', 
            'https://a0.muscache.com/im/pictures/monet/Select-13797755/original/8e11424a-f58b-47a0-8d5e-f38e854614c9?im_w=720'
        ],
        location: 'Milan, Italia',
        feedback: '4,97',
        description1: 'Viste sulla città',
        date: '06-11 feb',
        attribute: 'Host privato',
        price: '662',
        highlight:'Amato dagli ospiti'
    },

    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-1029744960591661063/original/e5b9da62-e374-4eba-95cd-2eea2286621e.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-1029744960591661063/original/2997e06b-8c52-48b4-8135-0f169a5610f2.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-1029744960591661063/original/b07f0fd7-d9b8-4b36-ad2a-013fa37d0f4c.jpeg?im_w=720'
        ],
        location: 'Milan, Italia',
        feedback: '4,87',
        description1: 'Viste sulla città',
        date: '26 feb - 02 mar',
        attribute: 'Host professionista',
        price: '141',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-43726531/original/1ed39041-f67d-4542-bbc2-12335ba9be06.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-43726531/original/3b3efc8b-8681-43ca-9bf7-b8a5b8b6ae32.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-43726531/original/15ecdb25-69fc-47ed-b11e-6ca369ea30e2.jpeg?im_w=720'
        ],
        location: "Rota d'Imagna, Italia",
        feedback: '4,89',
        description1: 'Host professionista',
        date: '26 feb - 02 mar',
        attribute: '',
        price: '98',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-957819679097220222/original/8cc705fc-114d-4616-a7e8-924553b15c43.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-957819679097220222/original/409094cc-ef4d-4c2d-9822-3e4f99bf98ce.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-957819679097220222/original/955ad55a-dd3a-4f83-a260-e85264689dcb.jpeg?im_w=720'
        ],
        location: "Como, Italia",
        feedback: '5,0',
        description1: 'Viste su: montagna, lago',
        date: '20 - 25 feb',
        attribute: 'Host professionista',
        price: '1.363',
        highlight:'Amato dagli ospiti'
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-581166462577786551/original/fafc4260-f5e1-4061-a85f-ea646f7f7c82.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-581166462577786551/original/8b7f9ff3-4a95-4602-9249-8a8fa955c788.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-581166462577786551/original/6d475714-f439-44e7-807a-92359d1eae2c.jpeg?im_w=720'
        ],
        location: "Blevio, Italia",
        feedback: '4,96',
        description1: 'Viste su: montagna, lago',
        date: '01 - 06 apr',
        attribute: 'Host privato',
        price: '165',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-25511881/original/b97aa04a-0fd9-4a2e-b69e-a1cb6784e924.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-25511881/original/ae81ebd6-cee2-4ed1-98f7-ee9b052f2351.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-25511881/original/a51f7aaa-ab12-4943-8379-d8f8120d6656.jpeg?im_w=720'
        ],
        location: "Trullo, Putignano",
        feedback: '4,95',
        description1: 'Torre dei trulli',
        date: '02 - 07 feb',
        attribute: 'Host professionista',
        price: '441',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/b7c9264d-73c9-45c3-882e-6e9577d63d68.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/062ef52a-9b4f-4301-9413-e757d1758b3f.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/e922f0c3-9a3d-4877-983a-56849ce92e18.jpg?im_w=720'
        ],
        location: "Drimnin, Regno Unito",
        feedback: '5,0',
        description1: 'Host privato',
        date: '07 - 12 ott',
        attribute: '',
        price: '233',
        highlight:'Amato dagli ospiti'
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/9e10ac8b-903d-4e54-9a23-74935f14b4a6.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-32033186/original/e21308fd-1c4b-4099-afed-af2de2e4c31b.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-32033186/original/910a22c3-442d-4afe-8f1b-4d16fbec9095.jpeg?im_w=720'
        ],
        location: "Joncherei, Francia",
        feedback: '4,88',
        description1: 'Host professionista',
        date: '07 - 12 apr',
        attribute: '',
        price: '365',
        highlight:'Amato dagli ospiti'
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/eb9b2035-139a-47d2-b4ed-55c4e939d12c.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/0f8c5262-c281-4e31-916a-e792f6250b3c.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-43578924/original/e8277876-88f3-4a07-84ba-f3dbf2787f5e.jpeg?im_w=720'
        ],
        location: "Zoagli, Italia",
        feedback: '4,78',
        description1: 'Host privato',
        date: '01 - 06 feb',
        attribute: '',
        price: '136',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-576057828363621171/original/59b6561e-d120-4670-9d6d-303746bc180d.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-576057828363621171/original/4f7c1658-39a7-4228-84b2-ed921eac1e80.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-576057828363621171/original/5072e090-2015-48e5-85f5-22e44cb0edb4.jpeg?im_w=720'
        ],
        location: "Riva, Italia",
        feedback: '4,64',
        description1: 'Host professionista',
        date: '01 - 06 feb',
        attribute: '',
        price: '2.900',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/88f04a14-aca8-48ca-b602-1aa53fd4a20d.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/f5922ae2-1941-4991-8fc1-80b816836c63.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/eadb76cb-6eba-4171-99ce-1f077daf1261.jpg?im_w=720'
        ],
        location: "Zermatt, Svizzera",
        feedback: '4,99',
        description1: 'Host professionista',
        date: '04 - 11 feb',
        attribute: '',
        price: '9.061',
        highlight:'Amato dalgli ospiti'
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/295d536e-95a1-4df3-a01e-7098590f1a2f.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/f7a53928-0b01-4efe-9407-bee0e7da68fa.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/0035d9a1-afec-4a52-a28c-88679bac593c.jpg?im_w=720'
        ],
        location: "Santorini, Grecia",
        feedback: '5,0',
        description1: 'Host professionista',
        date: '01 - 06 feb',
        attribute: '',
        price: '118',
        highlight:'Amato dalgli ospiti'
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/a63597b3-24d7-46de-a482-463c7802f1d4.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/dab81bf7-bf0f-4066-b51c-a3806f3ff03e.jpg?im_w=720', 
            'https://a0.muscache.com/im/pictures/681e72a1-0915-4d9f-a5a6-41d3ee1cb05a.jpg?im_w=720'
        ],
        location: "Trostberg, Germania",
        feedback: '5,0',
        description1: 'Host professionista',
        date: '28 mar - 02 apr',
        attribute: '',
        price: '217',
        highlight:''
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49706308/original/1be7cc9f-6544-4901-913d-936542aa5363.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49706308/original/f0ffe4a3-5ec5-4246-8537-77319a6eb65e.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49706308/original/86d123fd-6e60-4163-9680-4dee1f732243.jpeg?im_w=720'
        ],
        location: "Kalispell, Montana, Stati Uniti",
        feedback: '5,0',
        description1: 'Host professionista',
        date: '01 - 06 feb',
        attribute: '',
        price: '175',
        highlight:'Amato dagli ospiti'
    },
    {
        urlImages: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-37139014/original/d6e7e5da-55ee-43b9-9fee-859a3ea11c32.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/miso/Hosting-37139014/original/05a0edf2-b262-4d5c-baef-0d763e962abc.jpeg?im_w=720', 
            'https://a0.muscache.com/im/pictures/4a1d555d-fdf3-44fc-a69a-828177bc19d0.jpg?im_w=720'
        ],
        location: "Korsvegen, Norvegia",
        feedback: '4,92',
        description1: 'Host professionista',
        date: '05 - 10 feb',
        attribute: '',
        price: '123',
        highlight:''
    },
];



let container = document.getElementById('container-card');


for (let i = 0;i<rooms.length;i++) {
    let div = document.createElement('div');
    div.classList = ['col-6 col-md-4 col-xl-3 '];
    div.innerHTML =`
    <div id="carousel${i}" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner rounded position-relative">
            <div class="row justify-content-between">
                <div class="col highlight-card"></div>
                <div class="col d-flex justify-content-end">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal"><i
                            class="fa-regular fa-heart text-light position-absolute favorites-icon"></i></a>
                </div>
            </div>
            <div class="carousel-item active">
                <img src="${rooms[i].urlImages[0]}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="${rooms[i].urlImages[1]}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="${rooms[i].urlImages[2]}" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel${i}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel${i}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="col-12 mt-2">
        <div class="row d-flex justify-content-between">
            <span class="col-auto description-room fw-bold">${rooms[i].location}</span>
            <span class="col-auto description-room"><i class="fa-solid fa-star"></i> ${rooms[i].feedback}</span>
        </div>
        <div class="row">
            <span class="description-room fw-light text-grey">${rooms[i].description1}</span>
        </div>
        <div class="row">
            <span class="description-room fw-light text-grey">${rooms[i].date} • ${rooms[i].attribute}</span>
        </div>
        <div class="row">
            <span class="description-room fw-bold mt-2">${rooms[i].price} € notte</span>
        </div>
    </div>`;

container.appendChild(div);
if (rooms[i].highlight !== '') {
    let div2 = document.querySelector(`#carousel${i} div.col.highlight-card`);
    div2.innerHTML=`<span class="favorites-text position-absolute fw-semibold">${rooms[i].highlight}</span>`;
}

}