/**
 * Created by Marcel on 9-7-2016.
 */
var BELTS = {
    'w':{dutch:'Wit', eng:'White', c:'white'},
    'wy':{dutch:'Wit/Geel', eng:'White/Yellow', c:'white-yellow'},
    'y':{dutch:'Geel', eng:'Yellow', c:'yellow'},
    'yg':{dutch:'Geel/Groen', eng:'Yellow/Green', c:'yellow-green'},
    'g':{dutch:'Groen', eng:'Green', c:'green'},
    'gb':{dutch:'Groen/Blauw', eng:'Green/Blue', c:'green-blue'},
    'b':{dutch:'Blauw', eng:'Blue', c:'blue'},
    'br':{dutch:'Blauw/Rood', eng:'Blue/Red', c:'blue-red'},
    'r':{dutch:'Rood', eng:'Red', c:'red'},
    'rb':{dutch:'Rood/Zwart', eng:'Red/Black', c:'red-black'},
    'black':{dutch:'Zwart', eng:'Black', c:'black'},
    'dantwo':{dutch:'Tweede Dan', eng:'Second Dan', c:'dantwo'},
    'danthree':{dutch:'Derde Dan', eng:'Third Dan', c:'danthree'},
};

var BELT_EXAMS = [
    {
        dutchDate: '17 december 2022',
        engDate: 'December 17th 2022',
        belts:[
            {name: 'Hadeel Khawatmy', from: 'w', to: 'y'},
            {name: 'Iulia Lung', from: 'w', to: 'y'},
            {name: 'Leena Bannani', from: 'w', to: 'y'},
            {name: 'Aleksandra Karyakin', from: 'w', to: 'y'},
            {name: 'Max Winsemius', from: 'w', to: 'y'},
            {name: 'Suzanne van Vliet', from: 'y', to: 'g'},
            {name: 'Joshua Janssen', from: 'y', to: 'g'},
            {name: 'Sven Kuneman', from: 'yg', to: 'g'},
            {name: 'Naomie Amsing', from: 'yg', to: 'gb'},
            {name: 'Eliott Tsaramaro', from: 'g', to: 'b'},
            {name: 'Fabienne Crans', from: 'g', to: 'b'},
            {name: 'Sebastiaan van Gaans', from: 'b', to: 'br'},
            {name: 'Dennis Hekkers', from: 'br', to: 'r'},
            {name: 'Robin van Renselaar', from: 'r', to: 'rb'},
        ],
        img: 'images/exams/geslaagden2022_12_17.jfif',
        lefttoright: [
          'Robin T., Weiming, Eliott, Sven, Dennis, Robin, Joshua, Sebastiaan, Fabienne, Iulia, Aleksandra, Tung, Mels',
          'Max, Edo, Naomie, Suzanne, Tom, Hadeel, Sareh']
    },
    {
        dutchDate: 'Nationale Dan Examen 5 december 2022',
        engDate: 'National Dan Exam December 5th 2022',
        belts:[
            {name: 'Mels van Broekhoven', from: 'black', to: 'dantwo'},
            {name: 'Robin Timmermans', from: 'black', to: 'dantwo'},
        ],
        img: 'images/exams/geslaagden2022_12_05.jpg',
        lefttoright: ['Mels, Robin']
    },
    {
        dutchDate: '25 juni 2022',
        engDate: 'June 25th 2022',
        belts:[
            {name: 'Suzanne van Vliet', from: 'w', to: 'y'},
            {name: 'Nagib Twahir', from: 'w', to: 'y'},
            {name: 'Sven Kuneman', from: 'y', to: 'yg'},
            {name: 'Lilly van Bakel', from: 'y', to: 'g'},
            {name: 'Tom Hermans', from: 'y', to: 'g'},
            {name: 'Aurelia van den Berg', from: 'y', to: 'g'},
            {name: 'Florian Pans', from: 'y', to: 'g'},
            {name: 'Ilina Zdravkova', from: 'g', to: 'b'},
            {name: 'Bram Klaassen', from:'g', to:'b'},
        ],
        img: 'images/exams/geslaagden2022_06_25.jpg',
        lefttoright: ['Mels, Suzanne, Sven, Lilly, Nagib, Tom, Aurelia, Florian, Ilina, Bram, Tung, Weiming']
    },
    {
        dutchDate: 'Nationale Dan Examen 18 juni 2022',
        engDate: 'National Dan Exam June 18th 2022',
        belts:[
            {name: 'Le Xuan Tung', from: 'dantwo', to: 'danthree'},
        ],
        img: 'images/exams/geslaagden2022_06_18.jfif',
        lefttoright: ['Tung']
    },
    {
        dutchDate: '18 December 2021',
        engDate: 'December 18th 2021',
        belts:[
            {name: 'Robin van Renselaar', from: 'b', to: 'r'},
            {name: 'Dennis Hekkers', from: 'gb', to: 'br'},
            {name: 'Sebastiaan van Gaans', from: 'g', to: 'b'},
            {name: 'Edo Buijs', from: 'y', to: 'g'},
            {name: 'Chaoyu Chen', from: 'y', to: 'g'}, 
            {name: 'Ilina Zdravkova', from: 'y', to: 'g'}, 
            {name: 'Naomie Amsing', from: 'w', to: 'yg'},
            {name: 'Lilly van Bakel', from: 'w', to: 'y'},
            {name: 'Aurelia van den Berg', from: 'w', to: 'y'},
            {name: 'Seyma Günel', from: 'w', to: 'y'},
            {name: 'Folkert Jansen', from: 'w', to: 'y'},
            {name: 'Florian Pans', from: 'w', to: 'y'},
        ],
        img: 'images/exams/geslaagden2021_12_18.jpg',
        lefttoright: ['Merijn, Ilina, Tung, Florian, Aurelia, Folkert, Edo, Robin, Lilly, Sebastiaan, Seyma, Dennis, Naomie, Mels, Chaoyu']
    },
    {
        dutchDate: '7 Maart 2020',
        engDate: 'March 7th 2020',
        belts:[
            {name:'Leonie Schnieders', from:'b', to:'br'},
            {name:'Dennis Hekkers', from:'g', to:'gb'},
            {name:'Jasmijn de Vries', from:'y', to:'g'},
            {name:'Arjan Derks', from:'y', to:'g'},
            {name:'Fabienne Crans', from:'y', to:'g'},
            {name:'Sven Kuneman', from:'w', to:'y'},            
            {name:'Joshua Jansen', from:'w', to:'y'},
            {name:'Edo Buijs', from:'w', to:'y'},
            {name:'Tom Hermans', from:'w', to:'y'},
            {name:'Ilina Zdravkova', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2020_03_07.jpg',
        lefttoright: ['Tung, Melanie, Dennis, Sven, Jasmijn, Arjan, Fabienne, Joshua, Edo, Leonie, Tom, Ilina, Merijn, Mels']
    },
    {
        dutchDate: '30 Maart 2019',
        engDate: 'March 30th 2019',
        belts:[
            {name:'Jip Reinders', from:'y', to:'g'},
            {name:'Sebastiaan van Gaans', from:'y', to:'g'},
            {name:'Dennis Hekkers', from:'y', to:'g'},
            {name:'Bram Klaassen', from:'y', to:'g'},
            {name:'Jasmijn de Vries', from:'w', to:'y'},
            {name:'Jolijn Hesen', from:'w', to:'y'},
            {name:'Ahn Ngo', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2019_03_30.png',
        lefttoright: ['Tung, Merijn, Sjors, Sebastiaan, Dennis, Bram, Mels',
                        'Melanie, Jasmijn, Jolijn, Ahn, Leonie, Jie']
    },
    {
        dutchDate: 'Nationale Dan Examen 3 November 2018',
        engDate: 'National Dan Exam November 3th 2018',
        belts:[
            {name:'Mels van Broekhoven', from:'rb', to:'black'},
        ],
        img: 'images/exams/geslaagden2018_11_03.png',
        lefttoright: ['Mels']
    },
    {
        dutchDate: 'Nationale Dan Examen 16 Juni 2018',
        engDate: 'National Dan Exam June 16th 2018',
        belts:[
            {name:'Le Xuan Tung', from:'black', to:'dantwo'},
            {name:'Weiming Yao', from:'rb', to:'black'},    
        ],
        img: 'images/exams/geslaagden2018_06_16.png',
        lefttoright: ['Fleur, Weiming']
    },
    {
        dutchDate: '2 Juni 2018',
        engDate: 'June 2nd 2018',
        belts:[
            {name:'Leonie Schnieders', from:'g', to:'b'},
            {name:'Robin van Renselaar', from:'g', to:'b'},
            {name:'Fabienne Crans', from:'w', to:'y'},
            {name:'Annabel van den Broek', from:'w', to:'y'},
            {name:'Michel van Altena', from:'w', to:'y'},
            {name:'Bram Klaassen', from:'w', to:'y'},
            {name:'Fleur Petit', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2018_06_02.png',
        lefttoright: ['Merijn, Michel, Annabel, Leonie, Robin, Ab, Melanie',
                        'Bram, Fabienne, Fleur']
    },
    {
        dutchDate: '17 December 2017',
        engDate: 'December 17th 2017',
        belts:[
            {name:'Mels van Broekhoven', from:'r', to:'rb'},
            {name:'Weiming Yao', from:'r', to:'rb'},
        ],
        img: 'images/exams/geslaagden2017_12_17.png',
        lefttoright: ['Roger, Melanie, Mels, Weiming, Ab, Merijn']
    },
    {
        dutchDate: 'Nationale Dan Examen Juni 2017',
        engDate: 'National Dan Exam June 2017',
        belts:[
            {name:'Kelly Morales', from:'rb', to:'black'},
        ],
        img: 'images/exams/geslaagden2017_06_17.png',
        lefttoright: ['Kelly']
    },
    {
        dutchDate: '28 Mei 2017',
        engDate: 'May 28th 2017',
        belts:[
            {name:'Steven Ge', from:'gb', to:'br'},
            {name:'Haiyu Wang', from:'y', to:'g'},
            {name:'Leonie Schnieders', from:'y', to:'g'},
            {name:'Rens Verhees', from:'y', to:'g'},
            {name:'Ivo Bernts', from:'y', to:'g'},
            {name:'Arash Roomizadeh', from:'w', to:'y'},
            {name:'Arjan Derks', from:'w', to:'y'},
            {name:'Simone van den Broek', from:'w', to:'y'},
            {name:'Maria Cristina Pop', from:'w', to:'y'},
            {name:'Thomas Boot', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2017_05_28.jpg',
        lefttoright: ['Leonie, Ivo, Arjan, Sjors, Ricardo, Sjors','Tung, Steven, Haiyu, Rens, Arash, Simone, Maria, Thomas, Merijn, Jie']
    },
    {
        dutchDate: 'Nationale Dan Examen December 2016',
        engDate: 'National Dan Exam December 2016',
        belts:[
            {name:'Jie Chen', from:'rb', to:'black'},
            {name:'Le Xuan Tung', from:'rb', to:'black'},
        ],
        img: 'images/exams/geslaagden2016_12_17.png',
        lefttoright: ['Tung, Jie']
    },
    {
        dutchDate: '3 December 2016',
        engDate: 'December 3rd, 2016',
        belts:[
            {name:'Kelly Morales', from:'r', to:'rb'},
            {name:'Weiming Yao', from:'b', to:'r'},
            {name:'Rui Zhou Xie', from:'br', to:'r'},
            {name:'Sjors van den Elzen', from:'g', to:'gb'},
            {name:'Stiliyan Stoyanov', from:'yg', to:'gb'},
            {name:'Ricardo Elout', from:'yg', to:'gb'},
            {name:'Lisa Koolen', from:'y', to:'g'},
            {name:'Robin van Renselaar', from:'y', to:'g'},
            {name:'Lucy Xiao', from:'y', to:'g'},
            {name:'Sebastiaan van Gaans', from:'w', to:'y'},
            {name:'Jip Reijnders', from:'w', to:'y'},
            {name:'Leonie Schnieders', from:'w', to:'y'},
            {name:'Qique Wang', from:'w', to:'y'},
            {name:'Imen Mezzi', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2016_12_03.jpg',
        lefttoright: ['Merijn, Robin, Qique, Ricardo, Sebastiaan, Jip, Stiliyan, Weiming, Sjors, Leonie, Andreas',
                      'Melanie, Kelly, Lucy, Lisa, Rui Zhou']
    },
    {
        dutchDate: '8 Mei 2016',
        engDate: 'May 8th, 2016',
        belts:[
            {name:'Jie Chen', from:'r', to:'rb'},
            {name:'Le Xuan Tung', from:'r', to:'rb'},
            {name:'Mels van Broekhoven', from:'b', to:'r'},
            {name:'Rui Zhou Xie', from:'gb', to:'br'},
            {name:'Steven Ge', from:'yg', to:'gb'},
            {name:'Marcel Visser', from:'y', to:'g'},
            {name:'Domenec Bis Thobi', from:'w', to:'y'},
            {name:'Chaoyu Chen', from:'w', to:'y'},
            {name:'Lisa Koolen', from:'w', to:'y'},
            {name:'Rens Verhees', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2016_05_08.jpg',
        lefttoright: ['Jie, Melanie, Tung, Chaoyu, Andreas, Lisa, Marcel, Rens, Ruizhou, Steven, Mels, Domenec, Merijn']
    },
    {
        dutchDate: '13 December 2015',
        engDate: 'December 13th, 2015',
        belts:[
            {name:'Kelly Morales', from:'b', to:'r'},
            {name:'Sjors van den Elzen', from:'y', to:'g'},
            {name:'Nuran Sahin', from:'y', to:'g'},
            {name:'Ricardo Elout', from:'w', to:'yg'},
            {name:'Steven Ge', from:'w', to:'yg'},
            {name:'Stiliyan Stoyanov', from:'w', to:'yg'},
            {name:'Ivo Bernts', from:'w', to:'y'},
            {name:'Dennis Hekkers', from:'w', to:'y'},
            {name:'Tom Nijhof', from:'w', to:'y'},
            {name:'Robin van Renselaar', from:'w', to:'y'},
            {name:'Luuk Sachteleben', from:'w', to:'y'},
            {name:'Nimke Verhees', from:'w', to:'y'},
            {name:'Marcel Visser', from:'w', to:'y'},
            {name:'Lucy Xiao', from:'w', to:'y'},
            {name:'Haiyu Wang', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden2015_12_13.jpg',
        lefttoright: ['Merijn, Marcel, Sjors, Tom, Stiliyan, Ivo, Ricardo, Haiyu, Luuk, Steven, Mels, Andreas, Melanie, Lucy, Rui Zhou, Dennis, Robin, Nimke, Kelly, Nuran']
    },
    {
        dutchDate: '31 Mei 2015',
        engDate: 'May 31st, 2015',
        belts:[
            {name:'Le Xuan Tung', from:'b', to:'r'},
            {name:'Mels van Broekhoven', from:'g', to:'b'},
            {name:'Weiming Yao', from:'yg', to:'b'},
            {name:'Arno van Lumig', from:'y', to:'g'},
            {name:'Dan Cristian Chirascu', from:'w', to:'y'},
            {name:'Sjors van den Elzen', from:'w', to:'y'},
        ],
    },
    {
        dutchDate: '18 Mei 2014',
        engDate: 'May 18th, 2014',
        belts:[
            {name:'Jesse Joosten', from:'gb', to:'b'},
            {name:'Le Xuan Tung', from:'yg', to:'b'},
            {name:'Wanda Bloemers', from:'y', to:'g'},
            {name:'Mels van Broekhoven', from:'y', to:'g'},
            {name:'Roy Kraak', from:'y', to:'g'},
            {name:'Emanuele Russo', from:'y', to:'g'},
            {name:'Aiman Aldanova', from:'y', to:'g'},
            {name:'Robin Berghuijs', from:'w', to:'y'},
            {name:'Arno van Lumig', from:'w', to:'y'},
            {name:'Marieke Sluijmer', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden15.jpg',
        lefttoright: ['Redouane, Andreas, Jesse, Yanja, Arno, Roy, Sjors, Robin, Marieke, Emanuele, Mels, Wanda, Aiman, Melanie, Tung, Merijn']
    },
    {
        dutchDate: '10 Maart 2013',
        engDate: 'March 10th 2013',
        belts:[
            {name:'Jie Chen', from:'br', to:'r'},
            {name:'Yanja Dajsuren', from:'g', to:'gb'},
            {name:'Jesse Joosten', from:'g', to:'gb'},
            {name:'Rui Zhou Xie', from:'y', to:'g'},
            {name:'Daniel Wahyudi', from:'y', to:'g'},
            {name:'Laurens van der Bel', from:'y', to:'g'},
            {name:'Le Xuan Tung', from:'w', to:'yg'},
            {name:'Roy Kraak', from:'w', to:'y'},
            {name:'Aiman Aldanova', from:'w', to:'y'},
            {name:'Lulu Wang', from:'w', to:'y'},
            {name:'Wanda Bloemers', from:'w', to:'y'},
            {name:'Emanuele Russo', from:'w', to:'y'},
            {name:'Chiara Beltrami', from:'w', to:'y'},
            {name:'Mels van Broekhoven', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden14.jpg',
        lefttoright: ['Laurens, Roy, Daniel, Wanda, Jesse, Tung, Huyn Jin','Redouane, Ab, Mels, Chiara, Emanuele, Yanja, Jie, Lulu, Aiman, Merijn']
    },
    {
        dutchDate: '12 Juli 2012',
        engDate: 'July 12th, 2012',
        belts:[
            {name:'Jesse Joosten', from:'yg', to:'g'},
        ],
    },
    {
        dutchDate: '8 December 2011',
        engDate: 'December 8th, 2011',
        belts:[
            {name:'Alexander Andre Limas', from:'b', to:'br'},
            {name:'Jie Chen', from:'b', to:'br'},
            {name:'Jesse Joosten', from:'y', to:'yg'},
            {name:'Andres Skowron', from:'w', to:'y'},
            {name:'Rui Zhou Xie', from:'w', to:'y'},
            {name:'Daniel Wahyudi', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden12.jpg',
        lefttoright: ['Merijn, Andre, Andreas, Jesse, Daniel, Rui Zhou, Jie, Redouane']
    },
    {
        dutchDate: '24 Juni 2010',
        engDate: 'June 24th, 2010',
        belts:[
            {name:'Mark Graus', from:'y', to:'g'},
        ],
    },
    {
        dutchDate: '25 Maart 2010',
        engDate: 'March 25th, 2010',
        belts:[
            {name:'Alexander Janssen', from:'b', to:'r'},
            {name:'Xixi Lu', from:'y', to:'g'},
            {name:'Shahriyar Nasrmalek', from:'y', to:'g'},
            {name:'Yanja Dajsuren', from:'y', to:'g'},
            {name:'Jurriën Bakker', from:'w', to:'y'},
            {name:'Jesse Joosten', from:'w', to:'y'},
            {name:'Laurens van der Bel', from:'w', to:'y'},
            {name:'Richard van Baardwijk', from:'w', to:'y'},
            {name:'Luuk Spronk', from:'w', to:'y'},
            {name:'Job van der Klein', from:'w', to:'y'},
            {name:'Kawai An', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden10.jpg',
        lefttoright: ['Merijn, Marieke, Jurriën, Shahriyar, Luuk, Laurens, Kawai, Richard, Redouane',
            'Jesse, Alexander, Xixi, Yanja, Job']
    },
    {
        dutchDate: '25 Juni 2009',
        engDate: 'June 25th, 2009',
        belts:[
            {name:'Marieke Tjebbes', from:'b', to:'r'},
            {name:'Alexander Janssen', from:'g', to:'b'},
            {name:'Xixi Lu', from:'w', to:'y'},
            {name:'Joost Velterop', from:'w', to:'y'},
            {name:'Shahriyar Nasrmalek', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden09.jpg',
        lefttoright: ['Merijn, Xixi, Alexander, Shahriyar, Joost, Marieke, Richard en Redouane']
    },
    {
        dutchDate: '19 Februari 2009',
        engDate: 'Feburary 19th, 2009',
        belts:[
            {name:'Mark van Domburg', from:'w', to:'y'},
            {name:'Mark Graus', from:'w', to:'y'},
            {name:'Tobi Maas', from:'w', to:'y'},
            {name:'Wenya Zhou', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden08.jpg',
        lefttoright: ['Richard, Merijn, Mark D, Wenya, Tobi, Mark G en Redouane']
    },
    {
        dutchDate: '24 april 2008',
        engDate: 'April 24th, 2008',
        belts:[
            {name:'Bas Ploeger', from:'g', to:'b'},
        ],
    },
    {
        dutchDate: '15 Februari 2007',
        engDate: 'Feburary 15th, 2007',
        belts:[
            {name:'Marieke Tjebbes', from:'g', to:'b'},
            {name:'Hoi Ying Chan', from:'g', to:'b'},
            {name:'Gertjan Groen', from:'y', to:'g'},
            {name:'Martijn de Groot', from:'y', to:'g'},
            {name:'Joep Richter', from:'w', to:'y'},
            {name:'Vincent Giel', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden06.jpg',
        lefttoright: ['Merijn, Gertjan, Vincent, Joep, Marieke, Martijn, Hoi Ying, Richard, Redouane']
    },
    {
        dutchDate: '8 Juni 2006',
        engDate: 'June 8th, 2006',
        belts:[
            {name:'Richard van den Hoven', from:'r', to:'rb'},
            {name:'Dorothee Wasserberg', from:'br', to:'r'},
        ],
        img: 'images/exams/geslaagden05.jpg',
        lefttoright: ['Redouane, Dorothee, Richard en Merijn']
    },
    {
        dutchDate: '23 Februari 2006',
        engDate: 'February 23th, 2006',
        belts:[
            {name:'Jeroen de Klerk', from:'g', to:'b'},
            {name:'Bas Ploeger', from:'y', to:'g'},
            {name:'Niels Bakx', from:'y', to:'yg'},
            {name:'Hanneke Vinke', from:'w', to:'y'},
            {name:'Martijn de Groot', from:'w', to:'y'},
            {name:'Gertjan Groen', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden04.jpg',
        lefttoright: ['Merijn, Niels, Martijn, Bas, Gertjan, Hanneke, Jeroen, Redouane, Richard']
    },
    {
        dutchDate: '24 Februari 2005',
        engDate: 'February 24th, 2005',
        belts:[
            {name:'Dorothee Wasserberg', from:'gb', to:'br'},
            {name:'Jasper Lipsch', from:'g', to:'b'},
            {name:'Yu Hong Tam', from:'yg', to:'gb'},
            {name:'Hoi Ying Chan', from:'y', to:'g'},
            {name:'Marieke Tjebbes', from:'y', to:'g'},
            {name:'J.J. Vegas Olmos', from:'w', to:'yg'},
            {name:'Vesta', from:'w', to:'yg'},
            {name:'Michael Moussaid', from:'w', to:'y'},
            {name:'Rik Frankfort', from:'w', to:'y'},
            {name:'Fons Raemaekers', from:'w', to:'y'},
            {name:'Bas Ploeger', from:'w', to:'y'},
            {name:'Niels Bakx', from:'w', to:'y'},
        ],
        img: 'images/exams/geslaagden03.jpg',
        lefttoright: ['Merijn, Richard, Jasper, Dorothee, Bas, Michael, Niels, J.J., Fons, Redouane',
        'Vesta, Yu Hong, Marieke, Hoi Ying']
    },
    {
        dutchDate: '1 April 2004',
        engDate: 'April 1st, 2004',
        belts:[
            {name:'Dorothee Wasserberg', from:'yg', to:'gb'},
            {name:'Jasper Lipsch', from:'y', to:'g'},
            {name:'Joffry Maltha', from:'y', to:'g'},
            {name:'Yu Hong Tam', from:'w', to:'yg'},
            {name:'Marline', from:'w', to:'y'},
            {name:'Marieke Tjebbes', from:'w', to:'y'},
            {name:'Yanja Dajsuren', from:'w', to:'y'},
            {name:'Dion Boesten', from:'w', to:'y'},
            {name:'Willem-Jan van Harskamp', from:'w', to:'wy'},

        ],
        img: 'images/exams/geslaagden02.jpg',
        lefttoright: ['Merijn, Yanja, Dion, Yu Hong, Willem-Jan, Jasper',
            'Joffry, Richard, Marieke, Dorothee, Marline, Redouane']
    },
    {
        dutchDate: 'Juni 2003',
        engDate: 'June 2003',
        belts:[
            {name:'Matthijs Boerlage', from:'y', to:'g'},
            {name:'Dorothee Wasserberg', from:'w', to:'yg'},
            {name:'Hoi Ying Chan', from:'w', to:'y'},
            {name:'Jasper Lipsch', from:'w', to:'y'},
            {name:'Dah-kee Chan', from:'w', to:'y'},
            {name:'Mark Kleemans', from:'w', to:'y'},
            {name:'Martijn Wittevrongel', from:'w', to:'y'},
            {name:'Joffry Maltha', from:'w', to:'y'},
            {name:'Jan Karczkhee', from:'w', to:'y'},

        ],
        img: 'images/exams/geslaagden01.jpg',
        lefttoright: ['Redouane, ... , Dah-Kee, Joffry, Marijn, Hoi Ying, Jan, Merijn',
            'Mark, Jasper, Matthijs en Dorothee']
    },
];