export const cashewGrade = [
    {
        id: 1,
        grades1: "White Wholes (WW)",
        types1: "WW-180, WW-210, WW-240, WW-320, WW- 450, WW- 500, Large White Pieces(LWP), Small White Pieces(SWP), Butts, Splits",
        grades2: "Scorched Wholes (SW)",
        types2: "SW, SW-180, SW-210, SW-240, SW-320, SW- 450, SW- 500, Scroched Splits(SS), Scroched Pieces(SP), Large Scroched Pieces(LSP), Scroched Small Pieces(SSP)"

    },

];
export const whiteWholesGrade = [
    {
        id: 1,
        grade1: "WW-180",
        gCount1: "170-180",
        grade2: "WW-210",
        gCount2: "200-210",
        grade3: "WW-240",
        gCount3: "220-240",
        grade4: "WW-320",
        gCount4: "300-320",
        grade5: "WW-450",
        gCount5: "400-450",
        grade6: "WW-500",
        gCount6: "450-500",
        colorCharacter: "White / pale ivory / light ash",
        maxMoisture: 5,
        maxBroken: 5,
        footerText: "Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shrivelled kernels also permitted provided such scraping/shrivelling does not affect the characteristic shape of the kernel."
    },
];

export const scrochedWholesGrade = [
    {
        id: 1,
        grade: "SW", gCount: "N.A",
        grade1: "SW-180", gCount1: "170-180",
        grade2: "SW-210", gCount2: "200-210",
        grade3: "SW-240", gCount3: "220-240",
        grade4: "SW-320", gCount4: "300-320",
        grade5: "SW-450", gCount5: "400-450",
        grade6: "SW-500", gCount6: "450-500",
        colorCharacter: "scorched /slightly darkened due to over-heating",
        maxMoisture: 5,
        maxBroken: 5,
        footerText: "Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shrivelled kernels also permitted provided such scraping/shrivelling does not affect the characteristic shape of the kernel."
    }
];

export const desertWholes = [
    {
        id: 1,
        grade1: "SSW", tradeName1: "Scroched Wholes Seconds",
        grade2: "DW", tradeName2: "Dessert Wholes",
        color1: "Kernels may be overscorched, immature, shriveled (Pirival), speckled (Karaniram) discoloured and light blue",
        color2: "Kernels may be deep scorched, deep brown, Deep blue, speckled, discoloured and black spotted",
        count: "N.A",
        maxMoisture: 5,
        maxBroken: 5,
        footerText: "Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity, adhering testa and objectionable extraneous matter."
    },
];

export const whitePieces = [
    {
      id:1,
      grade1:"B", tradeName1:"Butts",   
      grade2:"S", tradeName2:"Split",  
      grade3:"LWP", tradeName3:"Large White Pieces",    
      grade4:"SWP", tradeName4:"Small White Pieces",              
      grade5:"BB", tradeName5:"Baby Bits",             
      bColor:"White/pale ivory or light ash. Kernels broken cross-wise (evenly or unevenly) naturally attached",
      sColor:"White/pale ivory or light ash. Kernels Split naturally lengthwise",
      lwpColor:"White/pale ivory or light ash",
      swpColor:"White/pale ivory or light ash",
      bbColor:"do",
      count:"N.A",
      lwpDescription:" Kernels broken into more than two pieces andnot passing through 4 mesh 16 SWG sieve/4.75mm.I.S.Sieve",
      swpDescription:"Broken Kernels smaller than those described on LWP but not passing through 6 mesh 20 SWG Sieve/2.80 mm I.S. Sieve",
      bbDescription:"Plemules and broken Kernels smaller than those described as SWP but not Passing through a 10 mesh 24SWG Sieve/1.70mm I..S. Sieve",
      maxMoisture:5,
      maxBroken1:5,
      maxBroken2:"Nil",
      nlgMax1:"5(SB)",
      nlgMax2:"5(SB)/td",
      nlgMax3:"5(SW & SP together)",
      nlgMax4:"5(SB & SSP together)",
      nlgMax5:"1%(Cashew Powder)",
      remarks:"Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shrivelled kernels also permitted provided such scraping/shrivelling does not affect the characteristic shape of the kernel."
    },
];

export const scorchedPieces = [
    {
       id:1,
       grade1:"SB",
       grade2:"SS",
       grade3:"SP",
       grade4:"SSP",
       sbTradeName:"Scroched Butts",
       ssTradeName:"Scroched Splits",
       spTradeName:"Scrohed Pieces",
       sspTradeName:" Scroched Small Pieeces",
       sbColor:"Scroched ButtsKernels broken crosswise (evenly or unevenly) and naturally attached. Kernels may be scorched/slightly darkened due to over heating while roasting or drying in the drier/borma",
       ssColor:"Kernels split naturally lengthwise. Kernels may be scorched/slightly darkened due to overheating while Roasting or drying in drier/borma",
       spColor:"Kernels may be scorched/slightly darkened due to overheating while roasting or drying in drier/borma",
       sspColor:"Kernels may be scorched/slightly darkened due to overheating while roasting or drying in drier/borma",
       sbCount:"N.A",
       ssCount:"N.A",
       spCount:"Pieces passing through a mesh 16 SWG sieve/4.75 mm I.S. Sieve",
       sspCount:"Pieces smaller than SP but not passing through a 6mesh 20 SWG Sieve/2.80 mm I.S. Sieve",
       maxMoisture:5,
       maxBroken1:5,
       maxBroken2:"Nil",
       sbNLGmax:"7.5(DB)",
       ssNLGmax:"7.5(DS)",
       spNLGmax:"7.5(SSP&SPS together)",
       sspNLGmax:"5(DSP)",
       remarkText:"Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity, adhering testa and objectionable extraneous matter. Scraped and partially shrivelled kernels also permitted provided such scraping/shrivelling does not affect the characteristic shape of the kernel."
    },
];

export const dessertPieces = [
      {
        id:1,
        grade1:"SPS",
        grade2:"DP",
        sspTradeName:"Scroched Pieces Seconds",
        dpTradeName:"Dessert Pieces",
        spsColor:"Kernels may be overscorched immature, shrivelled (Pirival) speckled(Karaniram) discoloured and light blue",
        dpColor:"Kernels may be deep scorched, deep Brown, blue, speckled, discoloured and black spotted",
        spsDescription:"Kernels broken into pieces but not passing through a 4 mesh 16 SWG sieve/4.75 mm I.S. Sieve",
        dpDescription:"Kernels broken into pieces but not passing through a 4 mesh 16 SWG sieve/4.75 mm and I.S.Sieve",
        maxMoisture:5,
        maxBroken:"Nil",
        spsNLGmax:"7.5(DP & DSP Together)",
        dpNLGmax:"7.5(DSP)",
        remarksText:"Remarks: Kernels shall be completely free from infestation, insect damage, mould rancidity, adhering testa and objectionable extraneous matter.",
        nlsg:"NLSG denotes: Next Lower Size Grade. NLG denotes: Next Lower Grade."
      },
];