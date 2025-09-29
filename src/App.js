import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [hoveredName, setHoveredName] = useState(null);

  const descriptions = {
    assata: "<strong text-[18px]> ASSATA SHAKUR. </strong>Black Liberation Army activist and political prisoner who escaped from prison in 1979 and sought asylum in Cuba in 1984. She assumed the name Assata in 1971 to relinquish her 'slave name'.",
    nehanda: "<strong> NEHANDA ABIODUN. </strong> Black Panther Party member and community organizer. She was charged in the robbery of a Brink's armored truck and later escaped to Cuba by 1990.",
    ali: "<strong> MUHAMMAD ALI. </strong> World heavyweight boxing champion and civil rights activist. Once Ali joined NOI (Nation of Islam), he changed his name to 'release him from the psychological bondage of bearing the identity of his family’s slave masters.' [AAIHS]",
    kwame: "<strong> KWAME TURE. </strong> Trinbagonian-American civil rights activist known for Pan-African and Black nationalist movements. The FBI targeted him for counterintelligence threats, which influenced Kwame's move to Ghana and eventually Guinea by 1969. It was here that he relinquinshed his born name.",
    malcolmx: "<strong> MALCOLM X. </strong> African-American leader prominent during the civil rights movement. While imprisoned, he changed his last name to signify his unknown African ancestry and decolonize his born name.",
    imani: "<strong> IMANI OBADELE. </strong> Black activist and president of the Republic of New Afrika who fought for reparations. He aimed to establish a Black-American republic in the South.",
    denali: "<strong>DENALI.</strong> The Koyukon people inhabit this area and refer to the peak as Denali. Its colonized name (from President William McKinley) was relinquished in 2016 and renamed an Athabascan name that reflected Indigenous connections to the land [Sapiens]. Fun fact: Tallest mountain peak in North America (#3 in the world) ",
    first: "<strong>FIRST PEOPLES MOUNTAIN. </strong> Originally named after Lieutenant Gustavus Cheyney Doane who led expeditions into the land and massacred Native peoples. In 2022, this land was renamed after several proposals from Native American groups.",
    uluru: "<strong>ULURU. </strong> This Australian land is home to the Pitjantjatjara, the Aboriginal people of the area. It was first named in honor of Chief Secretary of South Australia, Sir Henry Ayers. It went through an iteration of dual names, first 'Ayers Rock / Uluru' in 1993 and reversed to 'Uluru / Ayers Rock' in 2002. This was following a dual naming policy enacted in 1993 that allowed for inclusion of Aborginal names.",
    kgari: "<strong>K'GARI. </strong> Sand island in Queensland, Australia. Home to the Butchulla people. European settlers arrived to K'gari in 1847 and named it after Captain James Fraser.",
    what: "Shocked by the announcement of Assata Shakur's death on September 25, 2025, I began my research into her lineage, Cuba, and the concept of 'identification' or <i>name design</i>. In the past few decades, there's been a surge of Black and Indigenous activists and groups reclaiming native names and 'decolonizing' their given name. I wanted to document a small segment of my rabbit hole down forgotten activism and the act of reclaiming."
  };

  return (
    <div className="App">
      <header className="App-header min-h-screen flex items-center gap-20">
        <h1>freedpeople</h1>
        <div className="flex w-full gap-20">
          <div className="names w-1/3 text-[18px] space-y-8">
            <p 
              className="assata cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('assata')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Joanne Deborah Chesimard
            </p>
            <p 
              className="nehanda cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('nehanda')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Laverne Cheri Dalton
            </p>
            <p 
              className='ali cursor-pointer hover:text-blue-600 hover:line-through transition-colors'
              onMouseEnter={() => setHoveredName('ali')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Cassius Marcellus Clay
            </p>
            <p 
              className="kwame cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('kwame')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Stokely Carmichael
            </p>
            <p 
              className="malcolmx cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('malcolmx')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Malcolm Little
            </p>
            <p 
              className="imani cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('imani')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Richard Bullock Henry
            </p>
            <p 
              className="denali cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('denali')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Mount McKinley 
            </p>
            <p 
              className="first cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('first')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Mount Doane 
            </p>
            <p 
              className="uluru cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('uluru')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Ayers Rock
            </p>
            <p 
              className="kgari cursor-pointer hover:text-blue-600 hover:line-through transition-colors"
              onMouseEnter={() => setHoveredName('kgari')}
              onMouseLeave={() => setHoveredName(null)}
            >
              Fraser Island
            </p>
            <p 
              className="assata cursor-pointer hover:text-red-600 hover:underline hover:font-bold transition-colors"
              onMouseEnter={() => setHoveredName('what')}
              onMouseLeave={() => setHoveredName(null)}
            >
              so... what is this?
            </p>
          </div>
          <div className="description w-2/3 text-[20px] flex items-center">
            {hoveredName ? (
              <div className="p-6 bg-orange-100 rounded-lg">
                <p 
                  className="text-gray-700" 
                  dangerouslySetInnerHTML={{ __html: descriptions[hoveredName] }}
                ></p>
              </div>
            ) : (
              <div className="p-6 text-gray-400">
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
