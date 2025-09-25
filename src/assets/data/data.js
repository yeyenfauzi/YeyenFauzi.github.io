export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Yeyen Sulistari',
            child: 'Putri ke-4',
            father: 'Ebeng Satibi (Alm.)',
            mother: 'Siti Suadah',
            image: './src/assets/images/cewe.png'
            instagram: 'https://www.instagram.com/ysulistari/,
            profileImage: './src/assets/images/instagram.png'
        },
        P: {
            id: 2,
            name: 'Ahmad Fauzi',
            child: 'Putra Pertama',
            father: 'Hermanto (Alm.)',
            mother: 'Titik Kartinah',
            image: './src/assets/images/cowo.png'
            instagram: 'https://www.instagram.com/ozhie_/,
            profileImage: './src/assets/images/instagram.png' 
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '25',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Oktober',
            date: '25',
            day: 'Sabtu',
            hours: {
                start: '11.00',
                finish: '13.00 WIB'
            }
        },
        address: 'Gedung Serbaguna Antarikshe Koopsau 1, Jl. Raya Pondok Gede, Kec. Makasar, Kota Jakarta Timur'
    },

    link: {
        calendar: 'https://calendar.app.google/kfFyZGZNxC4FSDNv5',
        map: 'https://maps.app.goo.gl/ugCiC4NwD4vbKxLh7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Ahmad Fauzi',
            icon: './src/assets/images/bca.png',
            rekening: '4140033109'
        },
        {
            id: 2,
            name: 'Yeyen Sulistari',
            icon: './src/assets/images/bri.png',
            rekening: '41920039600'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxQDJKB9TNX7cqGzFydVh7EtoaEoxMSGCBMpgi-bPptBZb89rogxvWG5Y5J6vLAW5qw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
