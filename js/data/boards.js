/**
 * Created by Marcel on 9-7-2016.
 */
var ROLES = {
    'chair':{dutch:'voorzitter', eng:'chairman'},
    'treas':{dutch:'penningmeester', eng:'treasurer'},
    'secr':{dutch:'secretaris', eng:'secretary'},
    'act':{dutch:'activiteitencommissaris', eng:'activity supervisor'}
}
var BOARDS =[
    {
        prefixDutch: "Eerste",
        prefixEng: "First",
        durationDutch: "april 2004 - november 2005",
        durationEng: "April 2004 - November 2005",
        lefttoright:[
            {name:'Richard van den Hoven',role:'secr'},
            {name:'Hoi Ying Chan',role:'treas'},
            {name:'Merijn Donders',role:'chair'} ],
        img: 'images/besturen/1ebestuur.jpg'

    },
    {
        prefixDutch: "Tweede",
        prefixEng: "Second",
        durationDutch: "november 2005 - september 2006",
        durationEng: "November 2005 - September 2006",
        lefttoright:[
            {name:'Ruud Hawinkels',role:'secr'},
            {name:'Marieke Tjebbes',role:'chair'},
            {name:'Dorothee Wasserberg',role:'treas'} ],
        img: 'images/besturen/2ebestuur.jpg'

    },
    {
        prefixDutch: "Derde",
        prefixEng: "Third",
        durationDutch: "september 2006 - oktober 2007",
        durationEng: "September 2006 - October 2007",
        lefttoright:[
            {name:'Martijn de Groot',role:'chair'},
            {name:'Hanneke Vinke',role:'treas'},
            {name:'Gertjan Groen',role:'secr'} ],
        img: 'images/besturen/3ebestuur.jpg'

    },
    {
        prefixDutch: "Vierde",
        prefixEng: "Fourth",
        durationDutch: "oktober 2007 - oktober 2008",
        durationEng: "October 2007 - October 2008",
        lefttoright:[
            {name:'Bas Ploeger',role:'treas'},
            {name:'Martijn de Groot',role:'chair'},
            {name:'Gertjan Groen',role:'secr'} ],
        img: 'images/besturen/4ebestuur.jpg'

    },
    {
        prefixDutch: "Vijfde",
        prefixEng: "Fifth",
        durationDutch: "oktober 2008 - september 2009",
        durationEng: "October 2008 - September 2009",
        lefttoright:[
            {name:'Mark van Domburg',role:'treas'},
            {name:'Tobi Maas',role:'chair'},
            {name:'Milan Marell',role:'secr'} ],

    },
    {
        prefixDutch: "Zesde",
        prefixEng: "Sixth",
        durationDutch: "september 2009 - november 2010",
        durationEng: "September 2009 - November 2010",
        lefttoright:[
            {name:'Xixi Lu',role:'treas'},
            {name:'Alexander Janssen',role:'chair'},
            {name:'Mark Graus',role:'secr'} ],

    },
    {
        prefixDutch: "Zevende",
        prefixEng: "Seventh",
        durationDutch: "november 2010 - mei 2013",
        durationEng: "November 2010 - May 2013",
        lefttoright:[
            {name:'Laurens van der Bel',role:'chair'},
            {name:'Shahriyar Nasrmalek',role:'treas'},
            {name:'Jesse Joosten',role:'secr'} ],

    },
    {
        prefixDutch: "Achtste",
        prefixEng: "Eighth",
        durationDutch: "mei 2013 - september 2014",
        durationEng: "May 2013 - September 2014",
        lefttoright:[
            {name:'Roy Kraak',role:'chair'},
            {name:'Ruizhou Xie',role:'treas'},
            {name:'Wanda Bloemers',role:'secr'} ],
        img: 'images/besturen/8ebestuur.jpg'

    },
    {
        prefixDutch: "Negende",
        prefixEng: "Ninth",
        durationDutch: "september 2014 - september 2015",
        durationEng: "September 2014 - September 2015",
        lefttoright:[
            {name:'Fleur Petit',role:'act'},
            {name:'Sjors Turlings',role:'treas'},
            {name:'Melanie Ahn',role:'chair'},
            {name:'Arno van Lumig',role:'secr'}],
        img: 'images/besturen/9ebestuur.jpg'

    },
    {
        prefixDutch: "Tiende",
        prefixEng: "Tenth",
        durationDutch: "september 2015 - september 2016",
        durationEng: "September 2015 - September 2016",
        lefttoright:[
            {name:'Le Xuan Tung',role:'secr'},
            {name:'Nimke Verhees',role:'chair'},
            {name:'Tom Nijhof',role:'treas'},
            {name:'Weiming Yao',role:'act'}],
        img: 'images/besturen/10ebestuur.jpg'

    },
	{
        prefixDutch: "Elfde",
        prefixEng: "Eleventh",
        durationDutch: "september 2016 - september 2017",
        durationEng: "September 2016 - September 2017",
        lefttoright:[
            {name:'Mels van Broekhoven',role:'act'},
            {name:'Lucy Xiao',role:'secr'},
            {name:'Marcel Visser',role:'chair'},
            {name:'Sjors van den Elzen',role:'treas'}],
        img: 'images/besturen/11ebestuur.jpg'

    },
	{
        prefixDutch: "Twaalfde",
        prefixEng: "Twelfth",
        durationDutch: "september 2017 - september 2018",
        durationEng: "September 2017 - September 2018",
        lefttoright:[
            {name:'Leonie Schnieders',role:'secr'},
            {name:'Kelly Morales',role:'chair'},
            {name:'Lisa Koolen',role:'treas'},
            {name:'Simone van den Broek',role:'act'}],
        img: 'images/besturen/12ebestuur.jpg'

    },
	{
        prefixDutch: "Dertiende",
        prefixEng: "Thirteenth",
        durationDutch: "september 2018 - september 2019",
        durationEng: "September 2018 - September 2019",
        lefttoright:[
            {name:'Chaoyu Chen',role:'secr'},
            {name:'Robin van Renselaar',role:'chair'},
            {name:'Haiyu Wang',role:'treas'},
            {name:'Annabel van den Broek',role:'act'}],
        img: 'images/besturen/13ebestuur.jpg'

    },
    {
        prefixDutch: "Veertiende",
        prefixEng: "Fourteenth",
        durationDutch: "september 2019 - september 2020",
        durationEng: "September 2019 - September 2020",
        lefttoright:[
            {name:'Jasmijn de Vries',role:'act'},
            {name:'Bram Klaassen',role:'secr'},
            {name:'Leonie Schnieders',role:'chair'},
            {name:'Dennis Hekkers',role:'treas'}],
        img: 'images/besturen/14ebestuur.jpg'

    },
    {
        prefixDutch: "Vijftiende",
        prefixEng: "Fifteenth",
        durationDutch: "september 2020 - september 2021",
        durationEng: "September 2020 - September 2021",
        lefttoright:[
            {name:'Tom Hermans',role:'secr'},
            {name:'Florian Pans',role:'chair'},
            {name:'Folkert Jansen',role:'treas'}],
        img: 'images/besturen/15ebestuur.jpg'

    },
    {
        prefixDutch: "Zestiende",
        prefixEng: "Sixteenth",
        durationDutch: "september 2021 - september 2022",
        durationEng: "September 2021 - September 2022",
        lefttoright:[
            {name:'Joshua Janssen',role:'act'},
            {name:'Lilly van Bakel',role:'secr'},
            {name:'Aurelia van den Berg',role:'chair'},
            {name:'Robin Timmermans',role:'treas'}],
        img: 'images/besturen/16ebestuur.jpg'

    }
];
