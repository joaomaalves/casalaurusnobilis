const guidePlaces = [
    {
        id: 'aldeia',
        places: [
            {
                name: 'Mercearia Tradicional',
                description: {
                    en: 'Traditional village grocery — everyday essentials and local products.',
                    pt: 'Mercearia tradicional da aldeia — produtos do dia a dia e artigos locais.'
                },
                distance: { en: 'in the village', pt: 'na aldeia' },
                driveTime: { en: 'on foot', pt: 'a pé' },
                address: 'Mercearia Tradicional, Campo, Reguengos de Monsaraz',
                websites: [
                    {
                        label: 'Google Maps',
                        url: 'https://www.google.com/maps/search/?api=1&query=Mercearia+tradicional+Campo+Reguengos+de+Monsaraz'
                    }
                ]
            },
            {
                name: 'Mini Mercado Costa',
                description: {
                    en: 'Village mini market on Rua do Forno — not listed on Google Maps.',
                    pt: 'Mini mercado da aldeia na Rua do Forno — não aparece no Google Maps.'
                },
                distance: { en: 'in the village', pt: 'na aldeia' },
                driveTime: { en: 'on foot', pt: 'a pé' },
                address: 'Rua do Forno, Campo, Reguengos de Monsaraz'
            },
            {
                name: { en: 'Traditional coffee shops', pt: 'Cafés' },
                description: {
                    en: 'The village has two traditional coffee shops for coffee and a quick bite.',
                    pt: 'A aldeia tem dois cafés para café e um lanche.'
                },
                distance: { en: 'in the village', pt: 'na aldeia' },
                driveTime: { en: 'on foot', pt: 'a pé' },
                address: 'Campo, Reguengos de Monsaraz'
            },
            {
                name: { en: 'ATM', pt: 'Multibanco' },
                description: {
                    en: 'One ATM in the village.',
                    pt: 'Um multibanco na aldeia.'
                },
                distance: { en: 'in the village', pt: 'na aldeia' },
                driveTime: { en: 'on foot', pt: 'a pé' },
                address: 'Campo, Reguengos de Monsaraz'
            }
        ]
    },
    {
        id: 'restaurants',
        places: [
            {
                name: "Monte d'Açorda",
                location: { en: 'Campinho', pt: 'Campinho' },
                description: {
                    en: 'Traditional Alentejo cooking — famous for açorda and regional dishes.',
                    pt: 'Cozinha tradicional alentejana — famosa pela açorda e pratos regionais.'
                },
                distance: '2 km',
                driveTime: '~5 min',
                address: 'Rua da Ribeira 1, 7200-517 Campinho',
                website: 'https://www.cm-reguengos-monsaraz.pt/locais/monte-dacorda/'
            },
            {
                name: 'Monte de Palaios',
                location: { en: 'Campinho', pt: 'Campinho' },
                description: {
                    en: 'Rustic Alentejo buffet — traditional starters, mains and desserts in a countryside setting.',
                    pt: 'Buffet alentejano num ambiente rústico — entradas, pratos e sobremesas tradicionais.'
                },
                distance: '2 km',
                driveTime: '~5 min',
                address: 'Campinho, 7200-207 Reguengos de Monsaraz',
                website: 'https://www.cm-reguengos-monsaraz.pt/locais/monte-de-palaios/'
            },
            {
                name: 'O Aficionado',
                location: { en: 'Amieira', pt: 'Amieira' },
                description: {
                    en: 'Popular regional restaurant — grilled fish, bacalhau and chocos fritos.',
                    pt: 'Restaurante regional muito popular — carne grelhada, bacalhau e chocos fritos.'
                },
                distance: '10 km',
                driveTime: '~14 min',
                address: 'Rua de Évora, 7220-121 Amieira',
                website: 'https://www.facebook.com/OAficionado/'
            },
            {
                name: 'Aloendro',
                location: { en: 'Reguengos', pt: 'Reguengos' },
                description: {
                    en: 'Classic Alentejo restaurant since 1997 — weddings, groups and family meals.',
                    pt: 'Restaurante alentejano clássico desde 1997 — casamentos, grupos e refeições em família.'
                },
                distance: '8 km',
                driveTime: '~12 min',
                address: 'Estrada de Évora 3-B, 7200-399 Reguengos de Monsaraz',
                website: 'https://www.facebook.com/Restaurante-Aloendro-205279579516708/'
            },
            {
                name: 'Sabores de Monsaraz',
                location: { en: 'Monsaraz', pt: 'Monsaraz' },
                description: {
                    en: 'Regional cuisine with stunning views over the Alqueva lake.',
                    pt: 'Cozinha regional com vistas deslumbrantes sobre o lago Alqueva.'
                },
                distance: '16 km',
                driveTime: '~20 min',
                address: 'Largo de São Bartolomeu, 7200-175 Monsaraz',
                website: 'https://saboresdemonsaraz.com/'
            },
            {
                name: 'Xarez',
                location: { en: 'Monsaraz', pt: 'Monsaraz' },
                description: {
                    en: 'Terrace restaurant inside the walled village — unforgettable sunsets.',
                    pt: 'Restaurante com esplanada na vila amuralhada — pores do sol inesquecíveis.'
                },
                distance: '16 km',
                driveTime: '~20 min',
                address: 'Rua de Santiago 33, 7200-175 Monsaraz',
                website: 'https://www.facebook.com/xarez.monsaraz'
            },
            {
                name: 'Pizza e Pão',
                location: { en: 'Rosário, Alandroal', pt: 'Rosário, Alandroal' },
                description: {
                    en: 'Pão & Pizza — farm-to-oven pizzas and bread in a centenary village bakery.',
                    pt: 'Pão & Pizza — pizzas e pão no forno numa padaria centenária na aldeia - a melhor Foccacia que já provámos.'
                },
                distance: '38 km',
                driveTime: '~35 min',
                address: 'Aldeia do Rosário, 7250 Alandroal',
                website: 'https://www.paopizza.com/'
            },
            {
                name: 'Herdade do Esporão',
                location: { en: 'Reguengos', pt: 'Reguengos' },
                description: {
                    en: 'Estate restaurant with terrace overlooking the vineyards — seasonal Alentejo cuisine.',
                    pt: 'Restaurante da herdade com esplanada sobre as vinhas — cozinha alentejana de época.'
                },
                distance: '7 km',
                driveTime: '~10 min',
                address: 'Apartado 31, 7200-999 Reguengos de Monsaraz',
                website: 'https://esporao.com/en/tourism/herdade-do-esporao-restaurant'
            }
        ]
    },
    {
        id: 'beaches',
        places: [
            {
                name: 'Praia Fluvial da Amieira',
                location: { en: 'Amieira', pt: 'Amieira' },
                description: {
                    en: 'The largest certified beach on Lake Alqueva — 600 m of sand, bar, restaurant and water sports.',
                    pt: 'A maior praia certificada do lago Alqueva — 600 m de areal, bar, restaurante e desportos náuticos.'
                },
                distance: '10 km',
                driveTime: '~12 min',
                address: 'Praia Fluvial da Amieira, Amieira, Portel',
                website: 'https://turismo.portel.pt/patrim%C3%B3nio/o-que-visitar/praia-fluvial-da-amieira/'
            },
            {
                name: 'Praia Fluvial do Lago',
                location: { en: 'Centro Náutico, Monsaraz', pt: 'Centro Náutico, Monsaraz' },
                description: {
                    en: 'Blue Flag river beach at the Monsaraz Nautical Centre — swimming, boat trips and paddle.',
                    pt: 'Praia fluvial com bandeira azul no Centro Náutico de Monsaraz — banhos, passeios de barco e paddle.'
                },
                distance: '14 km',
                driveTime: '~18 min',
                address: 'Centro Náutico de Monsaraz, Monsaraz',
                website: 'https://www.cm-reguengos-monsaraz.pt/locais/centro-nautico-praia-fluvial-de-monsaraz/'
            }
        ]
    },
    {
        id: 'products',
        places: [
            {
                name: 'Monsaraz',
                location: { en: 'Medieval village', pt: 'Vila medieval' },
                description: {
                    en: 'Several shops with ceramics, tapestry and local crafts — worth visiting Fabricaal and Paula Neves.',
                    pt: 'Várias lojas com cerâmica, tapeçaria e artesanato local — vale a pena visitar a Fabricaal e a Paula Neves.'
                },
                distance: '16 km',
                driveTime: '~20 min',
                address: '7200-175 Monsaraz',
                websites: [
                    { label: 'Fabricaal', url: 'https://www.fabricaal.com/en/home/' },
                    { label: 'Paula Neves', url: 'https://paulaneves.pt/' }
                ]
            },
            {
                name: 'São Pedro do Corval — Olaria',
                location: { en: 'Corval', pt: 'Corval' },
                description: {
                    en: "Portugal's largest pottery centre — over 20 artisan workshops to explore.",
                    pt: 'O maior centro oleiro de Portugal — mais de 20 olarias artesanais para explorar.'
                },
                distance: '12 km',
                driveTime: '~15 min',
                address: 'São Pedro do Corval, 7200-132 Corval',
                website: 'https://www.cm-reguengos-monsaraz.pt/visitante/artesanato/olaria-de-sao-pedro-do-corval/'
            },
            {
                name: 'Queijaria Sapata',
                location: { en: 'Reguengos', pt: 'Reguengos' },
                description: {
                    en: 'Traditional Alentejo sheep cheeses — cured, buttery and fresh.',
                    pt: 'Queijos tradicionais de ovelha alentejana — curados, amanteigados e frescos.'
                },
                distance: '8 km',
                driveTime: '~12 min',
                address: 'Estrada da Caridade, 7200-298 Reguengos de Monsaraz',
                website: 'https://queijariasapata.pt/'
            },
            {
                name: 'Mel Serra de Portel',
                location: { en: 'Amieira', pt: 'Amieira' },
                description: {
                    en: 'Family honey from the Serra de Portel — lavender honey and bee products.',
                    pt: 'Mel de produção familiar na Serra de Portel — mel de rosmaninho e produtos apícolas.'
                },
                distance: '10 km',
                driveTime: '~14 min',
                address: 'Rua da Bica 1, 7220-110 Amieira, Portel',
                website: 'https://melserraportel.pt/'
            },
            {
                name: 'Herdade do Esporão',
                location: { en: 'Reguengos', pt: 'Reguengos' },
                description: {
                    en: 'Award-winning wines and olive oil — tastings, winery tours and shop.',
                    pt: 'Vinhos e azeite premiados — provas, visitas à adega e loja.'
                },
                distance: '7 km',
                driveTime: '~10 min',
                address: 'Apartado 31, 7200-999 Reguengos de Monsaraz',
                website: 'https://esporao.com/'
            },
            {
                name: 'Ervideira',
                location: { en: 'Vendinha', pt: 'Vendinha' },
                description: {
                    en: 'Family winery — wine lounge, tastings and the famous "wine in water".',
                    pt: 'Adega familiar — wine lounge, provas e o famoso "vinho de água".'
                },
                distance: '10 km',
                driveTime: '~12 min',
                address: 'Herdade da Herdadinha, Vendinha, 7200-042 Reguengos de Monsaraz',
                website: 'https://ervideira.pt/'
            }
        ]
    },
    {
        id: 'places',
        places: [
            {
                name: 'Monsaraz',
                location: { en: 'Medieval village', pt: 'Vila medieval' },
                description: {
                    en: 'Walled hilltop village with castle, megalithic sites and views over Alqueva.',
                    pt: 'Vila medieval no topo da colina, com castelo, monumentos megalíticos e vistas sobre o Alqueva.'
                },
                distance: '16 km',
                driveTime: '~20 min',
                address: '7200-175 Monsaraz',
                website: 'https://www.monsaraz.pt/'
            },
            {
                name: 'Dark Sky Alqueva',
                location: { en: 'Cumeada', pt: 'Cumeada' },
                description: {
                    en: "World's first Starlight Tourism Destination — guided stargazing at the official observatory.",
                    pt: 'Primeiro destino turístico Starlight do mundo — observação de estrelas guiada no observatório oficial.'
                },
                distance: '12 km',
                driveTime: '~15 min',
                address: 'Cumeada, Reguengos de Monsaraz',
                website: 'https://darkskyalqueva.com/en/'
            },
            {
                name: 'Observatório do Lago Alqueva (OLA)',
                location: { en: 'Monsaraz', pt: 'Monsaraz' },
                description: {
                    en: 'Astronomical observatory in the Dark Sky Reserve — night sky tours with professional guides.',
                    pt: 'Observatório astronómico na Reserva Dark Sky — visitas guiadas ao céu noturno.'
                },
                distance: '15 km',
                driveTime: '~18 min',
                address: 'Courela da Coutada, CM 1127, 7200-175 Monsaraz',
                website: 'https://www.olagoalqueva.com/en'
            },
            {
                name: 'Amieira Marina',
                location: { en: 'Amieira', pt: 'Amieira' },
                description: {
                    en: 'Boat trips on Lake Alqueva — cruises from one hour to half a day.',
                    pt: 'Passeios de barco no lago Alqueva — cruzeiros de uma hora a meio dia.'
                },
                distance: '10 km',
                driveTime: '~13 min',
                address: 'Amieira Marina, 7220-999 Amieira',
                website: 'https://www.amieiramarina.com/'
            }
        ]
    }
];
