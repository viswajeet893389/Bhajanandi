const songs = [
    {
        id: 1,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 2,
        poster: 'img/Amogh Lila Prabhu.jpg',  
        songName: 'Messiah of Millenium<br> <div class="subtitle">Amogh Lila Prabhu</div></div>',
        songSrc: 'audio/Madhavas/Song of Gratitude __ HG Amogh Lila Prabhu __ On 125th Birth Anniversary of Shrila Prabhupada.mp3#t=00:00:05',
    },
    {
        id: 3,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Mahamantra_Beautiful Chant<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
        
    },
    {
        id: 4,
        poster: "img/Madhavas.jpg",  
        songName: 'Hare Krishna Maha Mantra - Vrindavan<br> <div class="subtitle">Madhavas</div>',
        songSrc: 'audio/Madhavas/HEART TOUCHING _ MAHA MANTRA _ BEAUTIFUL VRINDAVAN DARSHAN _ HARE KRISHNA KIRTAN - Madhavas Band.mp3',
 
    },
    {
        id: 5,
        poster: "img/Madhavas.jpg",  
        songName: 'Yadi Prabhupada Naa Hote<br> <div class="subtitle">Madhavas</div>',
        songSrc: 'audio/Madhavas/Yadi Prabhupada Naa Hote To Kya Hota - A Tribute - Gurudev Dissapearance Day (Hindi Bhajan) Madhavas.mp3',

    },
    {
        id: 6,
        poster: "img/Niranjan Swami.jpg", 
        songName: 'Jaya Radha-Madhava<br> <div class="subtitle">HH Niranjan Swami</div>',
        songSrc: 'audio/Niranjan Swami/Jaya Radha-Madhava.mp3',
  
    },
    {
        id: 7,
        poster: "img/Agam Aggarwal.jpg",
        songName: 'Madhurashtakam - Adharam Madhuram<br> <div class="subtitle">Agam Aggarwal</div></h5>',
        songSrc: 'audio/Others/Agam - Madhurashtakam _ Adharam Madhuram _ Krishna Janmashtami _ POPULAR NEW KRISHNA BHAJAN.mp3',
 
    },
    {
        id: 8,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/Tera Ramji Karenge.mp3',
  
    },

    {
        id: 9,
        poster: 'img/HG NPP.png',
        songName: 'Sikshatakam<br> <div class="subtitle">HG Naam Prem Prabhu</div>',
        songSrc:   'audio/HG Naam Prem Pr/Shikshatakam.mp3',
    },

    {
        id: 10,
        poster: 'img/SDD.png',
        songName: 'Narsimha Arti<br> <div class="subtitle">Swarupa Damodar Prabhu</div>',
        songSrc:   'audio/SDD/Namaste Narasimhaya _ Swarupa Damodar Das.mp3',
    },
    {
        id: 11,
        poster: 'img/Shivram.jpg',
        songName: 'Hare Krishna Hare Rama Kirtan<br> <div class="subtitle">Shivram Prabhu</div>',
        songSrc:   'audio/Shivram Pr/Hare Krishna Hare Rama Kirtan, Bhakti, Bhajan by Shivram Prabhu _ Krishna Consciousness _ ISKCON.mp3',
    },
    {
        id: 12,
        poster: 'img/RSP.png',  
        songName: 'Yashomati Nandan<br> <div class="subtitle">Radheshyam Prabhu</div></div>',
        songSrc: 'audio/RSP/Yashomati nandan.mpeg#t=00:00:05',
    },
    {
        id: 13,
        poster: "img/SP.jpg",  
        songName: 'Prabhupada Hare Krishna<br> <div class="subtitle">Srila Prabhupada</div>',
        songSrc: 'audio/SP/Prabhupada-Hare Krishna-kirtan.mp3#t=00:00:31',
        
    },
    {
        id: 14,
        poster: "img/Yamuna mataji.jpg",  
        songName: 'Govindam Adi Purusham<br> <div class="subtitle">Yamuna Mataji</div>',
        songSrc: 'audio/Others/GOVINDAM ADI PURSHAM.mp3#t=00:00:14',
 
    },
    {
        id: 15,
        poster: "img/Madhavas.jpg",  
        songName: 'Vrindavan Ramya Sthaan<br> <div class="subtitle">Madhavas</div>',
        songSrc: 'audio/Madhavas/Vrindavan Ramya Sthaan - The Most Beautiful & Blissful Place In This Creation Bhajan By  Madhavas.mp3',

    },
    {
        id: 16,
        poster: "img/Agam Aggarwal.jpg", 
        songName: 'Damodarashtakam <br> <div class="subtitle">Agam Aggarwal</div>',
        songSrc: 'audio/Others/Agam - Sri Damodarashtakam _ Kartik Maas Song _ ISKCON Popular Bhajan _ Hare Krishna.mp3',
  
    },
    {
        id: 17,
        poster: "img/Tarana Chaitanya Prabhu.jpg",
        songName: 'Om Namo Bhagavate Vasudevaya<br> <div class="subtitle">Tarana Chaitanya Prabhu</div></h5>',
        songSrc: 'audio/Others/Om Namo Bhagavate Vasudevaya.mp3#t=00:00:13',
 
    },
    {
        id: 18,
        poster: "img/GKD.jpg",
        songName: 'Hare Krishna GKD<br> <div class="subtitle">Govind Krsna Das</div></h5>',
        songSrc: 'audio/Others/Hare Krishna Mahamantra _ Govind Krsna Das.mp3',
  
    },

    {
        id: 19,
        poster: 'img/Vasudeva.jpg',
        songName: 'Shri Hari Stotram<br> <div class="subtitle">Unknown</div>',
        songSrc:   'audio/Others/Shri Hari Stotram _ Meaning in Hindi.mp3',
    },

    {
        id: 20,
        poster: 'img/virat.jpg',
        songName: 'Dashavatara Stotra<br> <div class="subtitle">Melbourne Devotees</div>',
        songSrc:  'audio/Others/Gita Govinda by Sri Jayadev Goswami (presented by Melbourne Devotees).mp3',
    },
    {
        id: 21,
        poster: 'img/SDD.png',
        songName: 'Sri Gurvashtakam <div class="subtitle">Swarupa Damodar Prabhu</div>',
        songSrc:   'audio/SDD/Samsara davanala (iskcon morning aarti) __.mp3',
    },
    {
        id: 22,
        poster: 'img/Shivram.jpg',  
        songName: 'Sri Krsna Caitanya Prabhu Doya Koro<br> <div class="subtitle">Shivram</div></div>',
        songSrc: 'audio/Shivram Pr/Sri Krsna Caitanya Prabhu Doya Koro _ ShivramDas.mp3',
    },
    {
        id: 23,
        poster: "img/SP.jpg",  
        songName: 'Panchatatva Pranam Mantra<br> <div class="subtitle">Srila Prabhupada</div>',
        songSrc: 'audio/SP/Jai Shri Krishna Chaitanya.mp3',
        
    },
    {
        id: 24,
        poster: "img/Madhavas.jpg",  
        songName: 'Hare Krishna Mantra-Vrindavan<br> <div class="subtitle">Madhavas</div>',
        songSrc: 'audio/Madhavas/HEART TOUCHING _ MAHA MANTRA _ BEAUTIFUL VRINDAVAN DARSHAN _ HARE KRISHNA KIRTAN - Madhavas Band.mp3',
 
    },
    {
        id: 25,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Mahamantra Beautiful Chant<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',

    },
    {
        id: 26,
        poster: 'img/Amogh Lila Prabhu.jpg',  
        songName: 'Messiah of Millenium<br> <div class="subtitle">Amogh Lila Prabhu</div></div>',
        songSrc: 'audio/Madhavas/Song of Gratitude __ HG Amogh Lila Prabhu __ On 125th Birth Anniversary of Shrila Prabhupada.mp3#t=00:00:05',
  
    },
    {
        id: 27,
        poster: "img/Agam Aggarwal.jpg",
        songName: 'Madhurashtakam - Adharam Madhuram<br> <div class="subtitle">Agam Aggarwal</div></h5>',
        songSrc: 'audio/Others/Agam - Madhurashtakam _ Adharam Madhuram _ Krishna Janmashtami _ POPULAR NEW KRISHNA BHAJAN.mp3',
 
    },
    {
        id: 28,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
  
    },

    {
        id: 29,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },
    {
        id: 30,
        poster: 'img/Radha Raman.png',
        songName: 'Radha Raman Hari<br> <div class="subtitle">Unknown</div>',
        songSrc:   'audio/Others/Radha Raman Hari Govind.mp3',
    },

    {
        id: 31,
        poster: 'img/RSP.png',
        songName: 'Vrindavana Vasi<br> <div class="subtitle">Radheshyam Prahu</div>',
        songSrc:   'audio/RSP/Vrindavana Vasi Jata Vaisnavera.mp3',
    },
    {
        id: 32,
        poster: 'img/SDD.png',  
        songName: 'Jaya Radhe Jaya Krishna<br> <div class="subtitle">Swarupa Damodar Prabhu</div>',
        songSrc: 'audio/SDD/Jaya Radhe Jaya Krishna _ Swarupa Damodar Dasa.mp3',
    },
    {
        id: 33,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Hare Krishna Mantra-Kuruksetra<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Hare Krishna Mantra-Kuruksetra.mp3',
        
    },
    {
        id: 34,
        poster: "img/Niranjan Swami.jpg",  
        songName: 'Jaya Radha Madhava<br> <div class="subtitle">HH Niranjan Swami</div>',
        songSrc: 'audio/Niranjan Swami/Jaya Radha-Madhava.mp3',
 
    },
    {
        id: 35,
        poster: "img/CM.png",  
        songName: 'Gora Pahu Na Bhajiya Mainu<br> <div class="subtitle">Ananta Nitai Prabhu</div>',
        songSrc: 'audio/Others/Gora Pahu Na Bhajiya Mainu _ Ananta Nitai Prabhu _ Vaishnava Bhajan.mp3',

    },
    {
        id: 36,
        poster: "img/SP.jpg", 
        songName: 'Govinda jaya jaya <br> <div class="subtitle">Srila Prabhupada</div>',
        songSrc: 'audio/SP/Srila Prabhupada - Govinda jaya jaya.mp3',
  
    },
    {
        id: 37,
        poster: "img/Agnideva_Pr.jpg",
        songName: 'Parama Karuna<br> <div class="subtitle">Agnideva Prabhu</div></h5>',
        songSrc: 'audio/Agnideva/Parama Karuna-Ft.HG Agnidev Prabhu and Mayuri dasi.mp3',
 
    },
    {
        id: 38,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/Tera Ramji Karenge.mp3',
  
    },

    {
        id: 39,
        poster: 'img/RSP.png',
        songName: 'Jaya Jaya Jagannatha<br> <div class="subtitle">Radheshyam Prabhu</div>',
        songSrc:   'audio/RSP/Jaya Jaya Jagannatha Sacira Nanadan   2.mp3',
    },
    {
        id: 40,
        poster: 'img/SDD.png',
        songName: 'Mama Mana Mandire<br> <div class="subtitle">Swarupa Damodar Prabhu</div>',
        songSrc:   'audio/SDD/Mama Mana Mandire _ Vaishnav songs _ Swarupa Damodar Das.mp3',
    },

    {
        id: 41,
        poster: 'img/Shivram.jpg',
        songName: 'Ohe Vaishnav Thakur<br> <div class="subtitle">Shivram Prabhu</div>',
        songSrc:   'audio/Shivram Pr/Ohe Vaishnav Thakur.mp3',
    },
    {
        id: 42,
        poster: 'img/HG NPP.png',  
        songName: 'Brahma Samhita<br> <div class="subtitle">HG Naam Prem Prabhu</div></div>',
        songSrc: 'audio/HG Naam Prem Pr/Brahma Samhita.mp3',
    },
    {
        id: 43,
        poster: "img/Radha Rani.jpg",  
        songName: 'Radhe Jaya Jaya Madhava<br> <div class="subtitle">Ananda Lila Prabhu</div>',
        songSrc: 'audio/Others/Radhe Jaya Jaya Madhava Dayite by Srila Rupa Goswami - Ananda Lila Das (Ajay Wadekar).mp3',
        
    },
    {
        id: 44,
        poster: "img/Madhavas.jpg",  
        songName: 'Yadi Prabhupada Naa Hote<br> <div class="subtitle">Madhavas</div>',
        songSrc: 'audio/Madhavas/Yadi Prabhupada Naa Hote To Kya Hota - A Tribute - Gurudev Dissapearance Day (Hindi Bhajan) Madhavas.mp3',
 
    },
    {
        id: 45,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Hari Hari biphale janama goainu<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',

    },
    {
        id: 46,
        poster: "img/Agnideva_Pr.jpg", 
        songName: 'Kirtans From The Sacred Forest <br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
  
    },
    {
        id: 47,
        poster: "img/Agnideva_Pr.jpg",
        songName: 'Parama Karuna<br> <div class="subtitle">Agnideva Prabhu</div></h5>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
 
    },
    {
        id: 48,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/तेरा राम जी करेंगे - इस भजन में छिपा है जीने का रहस्य - Madhavas Rock Band.mp3',
  
    },

    {
        id: 49,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },
    {
        id: 50,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },

    {
        id: 51,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 52,
        poster: 'img/Agnideva_Pr.jpg',  
        songName: 'Bol Hari Bol<br> <div class="subtitle">Agnideva Prabhu</div></div>',
        songSrc: 'audio/Agnideva/Bol Hari Bol.mp3',
    },
    {
        id: 53,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Mahamantra_Beautiful Chant<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
        
    },
    {
        id: 54,
        poster: "img/Madhavas.jpg",  
        songName: 'Hare Krishna Mantra-Kuruksetra<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Madhavas/HEART TOUCHING _ MAHA MANTRA _ BEAUTIFUL VRINDAVAN DARSHAN _ HARE KRISHNA KIRTAN - Madhavas Band.mp3',
 
    },
    {
        id: 55,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Hari Hari biphale janama goainu<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',

    },
    {
        id: 56,
        poster: "img/Agnideva_Pr.jpg", 
        songName: 'Kirtans From The Sacred Forest <br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
  
    },
    {
        id: 57,
        poster: "img/Agnideva_Pr.jpg",
        songName: 'Parama Karuna<br> <div class="subtitle">Agnideva Prabhu</div></h5>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
 
    },
    {
        id: 58,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/तेरा राम जी करेंगे - इस भजन में छिपा है जीने का रहस्य - Madhavas Rock Band.mp3',
  
    },

    {
        id: 59,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },

    {
        id: 60,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },
    {
        id: 61,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 62,
        poster: 'img/Agnideva_Pr.jpg',  
        songName: 'Bol Hari Bol<br> <div class="subtitle">Agnideva Prabhu</div></div>',
        songSrc: 'audio/Agnideva/Bol Hari Bol.mp3',
    },
    {
        id: 63,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Mahamantra_Beautiful Chant<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
        
    },
    {
        id: 64,
        poster: "img/Madhavas.jpg",  
        songName: 'Hare Krishna Mantra-Kuruksetra<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Madhavas/HEART TOUCHING _ MAHA MANTRA _ BEAUTIFUL VRINDAVAN DARSHAN _ HARE KRISHNA KIRTAN - Madhavas Band.mp3',
 
    },
    {
        id: 65,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Hari Hari biphale janama goainu<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',

    },
    {
        id: 66,
        poster: "img/Agnideva_Pr.jpg", 
        songName: 'Kirtans From The Sacred Forest <br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
  
    },
    {
        id: 67,
        poster: "img/Agnideva_Pr.jpg",
        songName: 'Parama Karuna<br> <div class="subtitle">Agnideva Prabhu</div></h5>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
 
    },
    {
        id: 68,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/तेरा राम जी करेंगे - इस भजन में छिपा है जीने का रहस्य - Madhavas Rock Band.mp3',
  
    },

    {
        id: 69,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },
    {
        id: 70,
        poster: 'img/Niranjan Swami.jpg',
        songName: 'Bhajahu Re Mana<br> <div class="subtitle">Niranjan Swami</div>',
        songSrc:   'audio/Niranjan Swami/Bhajahu Re Mana.mp3',
    },

    {
        id: 71,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 72,
        poster: 'img/Agnideva_Pr.jpg',  
        songName: 'Bol Hari Bol<br> <div class="subtitle">Agnideva Prabhu</div></div>',
        songSrc: 'audio/Agnideva/Bol Hari Bol.mp3',
    },
    {
        id: 73,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Mahamantra_Beautiful Chant<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
        
    },
    {
        id: 74,
        poster: "img/Madhavas.jpg",  
        songName: 'Hare Krishna Mantra-Kuruksetra<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Madhavas/HEART TOUCHING _ MAHA MANTRA _ BEAUTIFUL VRINDAVAN DARSHAN _ HARE KRISHNA KIRTAN - Madhavas Band.mp3',
 
    },
    {
        id: 75,
        poster: "img/Agnideva_Pr.jpg",  
        songName: 'Hari Hari biphale janama goainu<br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',

    },
    {
        id: 76,
        poster: "img/Agnideva_Pr.jpg", 
        songName: 'Kirtans From The Sacred Forest <br> <div class="subtitle">Agnideva Prabhu</div>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
  
    },
    {
        id: 77,
        poster: "img/Agnideva_Pr.jpg",
        songName: 'Parama Karuna<br> <div class="subtitle">Agnideva Prabhu</div></h5>',
        songSrc: 'audio/Agnideva/Mahamantra_Beautiful Chant.mp3',
 
    },
    {
        id: 78,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/तेरा राम जी करेंगे - इस भजन में छिपा है जीने का रहस्य - Madhavas Rock Band.mp3',
  
    },
    {
        id: 79,
        poster: "img/Madhavas.jpg",
        songName: 'Tera Ramji Karenge<br> <div class="subtitle">Madhavas</div></h5>',
        songSrc: 'audio/Madhavas/तेरा राम जी करेंगे - इस भजन में छिपा है जीने का रहस्य - Madhavas Rock Band.mp3',
  
    },
];

//Recommended menu start
const menu_songs = [
    {
        id: 1,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 2,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 3,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 4,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 5,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 6,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 7,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },
    {
        id: 8,
        poster: 'img/Madhavas.jpg',
        songName: 'Govind Bolo<br> <div class="subtitle">Madhavas</div>',
        songSrc:   'audio/Madhavas/GOVIND BOLO.mp3',
    },]


var rand_arr = [];
while(rand_arr.length < 8){
    var r = Math.floor(Math.random() * songs.length);
    if(r>=8 && (rand_arr.indexOf(r) === -1)) rand_arr.push(r);
}       // for producing 8 random unique numbers between 0 and songs.length
console.log(rand_arr);
// for making menu_side songs random songs
let j=0;
Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    if(i<8){
        e.getElementsByTagName('img')[0].src = songs[rand_arr[j]].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[rand_arr[j]].songName;
        menu_songs[j].poster = songs[rand_arr[j]].poster;
        menu_songs[j].songName = songs[rand_arr[j]].songName;
        menu_songs[j].songSrc = songs[rand_arr[j]].songSrc;
        j++;
    }
});

for (let k = 0; k < 8; k++) {
    songs[k].poster = menu_songs[k].poster;
    songs[k].songName = menu_songs[k].songName;
    songs[k].songSrc = menu_songs[k].songSrc;
    
}

//Recommended menu end



//initilization of songs
const music =  new Audio(songs[0].songSrc);
document.getElementById('poster_master_play').src = songs[0].poster;  
document.getElementById('Kirtaniya').innerHTML = songs[0].songName;
document.getElementById('title').innerHTML = songs[0].songName;
 


//search data start

let search_results = document.getElementsByClassName('search_results')[0];

let card;
songs.forEach(element => {
    const{id, songName, poster} = element;
    card = document.createElement('a');
    card.classList.add('card');
    // card.href = "#" + id; 
    card.innerHTML = `<img src="${poster}">
    <div class="content">
      ${songName}
    </div>`;
    

    search_results.appendChild(card);
    
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let i = 8; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }

        if(input.value == 0){
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        items[i].addEventListener("mouseover", el => {
            Array.from(document.getElementsByClassName('songItem'))[i].style.background = "#010f32";
            Array.from(document.getElementsByClassName('songItem'))[i].style.border = "1px solid white" ;
        });

        items[i].addEventListener("mouseout", el => {
            Array.from(document.getElementsByClassName('songItem'))[i].style.background = "";
            Array.from(document.getElementsByClassName('songItem'))[i].style.border = "" ;
        });
        items[i].addEventListener("click", () => {
            let el = Array.from(document.getElementsByClassName('songItem'))[i];
            scrollTo(el);
        });
        
    }
});

document.getElementsByClassName('song_side')[0].addEventListener("click", () => {
    search_results.style.display = "none";
    
});
document.getElementsByName('Search')[0].addEventListener("focus", () => {
    search_results.style.display = "block";
});

function scrollTo (el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;
  
    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scrollLeft = elLeft - elParentLeft;
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scrollLeft = el.offsetLeft - el.parentNode.offsetLeft;
    }
  }
//search data end



var index  = 0;
let Kirtaniya = document.getElementById('Kirtaniya');
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let download_music =  document.getElementById('download_music');
download_music.href = songs[0].songSrc;   //initial source of download

var buttonSatus = [0];
var n= 0;

//For Like Button

const LEN = songs.length;
const arrLike = new Array(LEN);
let Like = document.getElementById('Like');

arrLike.fill("LIKE");

Like.addEventListener('click', Like_toggle);

function Like_toggle(){
    if(arrLike[index] == "LIKE"){
        Like.classList.add('bi-heart-fill');
        Like.style.color = "red";
        Like.classList.remove('bi-heart');
        arrLike[index] = "LIKED";

        if(index<8){
        arrLike[rand_arr[index]] = "LIKED";
     } else {
        arrLike[rand_arr.indexOf(index)] = "LIKED";
     } 
    } else {
        Like.classList.remove('bi-heart-fill');
        Like.classList.add('bi-heart');
        arrLike[index] = "LIKE";
        Like.style.color = "#798298";

        if(index<8){
            arrLike[rand_arr[index]] = "LIKE";
         } else {
            arrLike[rand_arr.indexOf(index)] = "LIKE";
         } 
    }
}

function Like_SongChanged(){

        if(arrLike[index] == "LIKED"){
            Like.classList.add('bi-heart-fill');
            Like.classList.remove('bi-heart');
            Like.style.color = "red";
        } else {
            Like.classList.remove('bi-heart-fill');
            Like.classList.add('bi-heart');
            Like.style.color = "#798298";
        }
}
//Like Button End

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        index--;
        buttonSatus.push(index);
        n++;
        if(buttonSatus[n] != buttonSatus[n-1]){
            songChange();
        }

        playPause();
        Like_SongChanged();
    });
});



function songChange(){
    poster_master_play.src = songs[index].poster;
    music.src = songs[index].songSrc;   
    title.innerHTML = songs[index].songName;
    makeAllBackground();
    makeAllPlays();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, 0.2)";
    download_music.href = songs[index].songSrc;  // to change the source of download
    Kirtaniya.innerHTML = songs[index].songName;
}

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let ply = document.getElementById('ply');

ply.addEventListener('click', () => {
    playPause();
});

masterPlay.addEventListener('click', playPause);
    
    function playPause(){
        if(music.paused || music.currentTime <= 0){
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.add('bi-pause-fill');
            masterPlay.classList.remove('bi-play-fill');
            Array.from(document.getElementsByClassName('playListPlay'))[index].classList.remove('bi-play-circle-fill');
            Array.from(document.getElementsByClassName('playListPlay'))[index].classList.add('bi-pause-circle-fill');
            ply.innerHTML = "PAUSE";
        } else{
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            makeAllPlays();
            ply.innerHTML = "PLAY";
        }
    }
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    });

    
};

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
    el.classList.remove('bi-pause-circle-fill');
    el.classList.add('bi-play-circle-fill');
    });
};


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
    if(index>0){
        index--;
    } else{
        index = songs.length - 1; //Array.from(document.getElementsByClassName('songItem')).length - 1;
    }
    songChange();
    playPause();

});

next.addEventListener('click', ()=> {
    if(index > (songs.length - 1)){
        index = 0;
    } else{
        index++;
    }

    songChange();
    playPause();

});




//Slide bar

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(min1<10)
        min1 = `0${min1}`;

    if(sec1<10)
        sec1 = `0${sec1}`;

    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(min2<10)
        min2 = `0${min2}`;

    if(sec2<10)
        sec2 = `0${sec2}`;

    currentStart.innerText = `${min2}:${sec2}`;


    //for seek bar
    let progressBar = (music_curr/music_dur)*100;
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
    
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value*music.duration/100;          //actual time = (%time*total_duration)/100
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');
                
vol.addEventListener('change', () => {
    
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        }

        if(vol.value > 0 && vol.value <= 50){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        if(vol.value > 50){
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;

        music.volume = vol_a/100;
});

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=> {
        let a = shuffle.innerHTML;

        switch(a){
            case "next" : 
                shuffle.classList.add('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'repeat';
                break;
            
            case "repeat":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = 'random';
                break;

            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;

        }
});

const next_music = () => {
    if(index > (songs.length - 1)){
        index = 0;
    } else{
        index++;
    }

    songChange();
    playPause();
};

const repeat_music = () => {
    playPause();
};

const random_music = () => {
    index = Math.floor(Math.random() * songs.length);

    songChange();
    playPause();

};

//What will happen when the music will end - next, repeat, shuffle

music.addEventListener('ended', ()=> {
    let b = shuffle.innerHTML;

    switch(b) {
        case 'next':
            next_music();
            break;

        case 'repeat':
            repeat_music();
            break;
        
        case 'random':
            random_music();
            break;
    }
});




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    pop_item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    pop_item.scrollLeft -= 330;
});


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    if(i>=8){
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});



