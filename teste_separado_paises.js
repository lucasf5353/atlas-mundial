const paises = [
{
  codigo: "af",
  pais: ["Afeganistão"],
  capitais: [["Cabul"]],
  gentilico: ["Afegão"],
  continente: ["Ásia"],
  itamaraty: ["República Islâmica do Afeganistão"],
  moeda: ["Afegane"],
  idiomas: [
    ["Dari", "Persa"],
    ["Pastó"]
  ]
},
{
  codigo: "za",
  pais: ["África do Sul"],
  capitais: [
    ["Bloemfontein"],
    ["Cidade do Cabo"],
    ["Pretória"]
  ],
  gentilico: ["Sul-africano"],
  continente: ["África"],
  itamaraty: ["República da África do Sul"],
  moeda: ["Rand"],
  idiomas: [
    ["Africâner"],
    ["Inglês"],
    ["Ndebele"],
    ["Xhosa"],
    ["Zulu"],
    ["Sepedi"],
    ["Soto"],
    ["Tswana"],
    ["Suázi"],
    ["Tsonga"],
    ["Venda"]
  ]
},
{
  codigo: "al",
  pais: ["Albânia"],
  capitais: [["Tirana"]],
  gentilico: ["Albanês"],
  continente: ["Europa"],
  itamaraty: ["República da Albânia"],
  moeda: ["Lek"],
  idiomas: [["Albanês"]]
},
{
  codigo: "de",
  pais: ["Alemanha"],
  capitais: [["Berlim"]],
  gentilico: ["Alemão"],
  continente: ["Europa"],
  itamaraty: ["República Federal da Alemanha"],
  moeda: ["Euro"],
  idiomas: [["Alemão"]]
},
{
  codigo: "ad",
  pais: ["Andorra"],
  capitais: [["Andorra-a-Velha", "Andorra a Velha"]],
  gentilico: ["Andorrano"],
  continente: ["Europa"],
  itamaraty: ["Principado de Andorra"],
  moeda: ["Euro"],
  idiomas: [["Catalão"]]
},
{
  codigo: "ao",
  pais: ["Angola"],
  capitais: [["Luanda"]],
  gentilico: ["Angolano"],
  continente: ["África"],
  itamaraty: ["República de Angola"],
  moeda: ["Kwanza"],
  idiomas: [["Português"]]
},
{
  codigo: "ag",
  pais: ["Antígua e Barbuda"],
  capitais: [["Saint John's", "Saint Johns"]],
  gentilico: ["Antiguano"],
  continente: ["América"],
  itamaraty: ["Antígua e Barbuda"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "sa",
  pais: ["Arábia Saudita"],
  capitais: [["Riade"]],
  gentilico: ["Saudita"],
  continente: ["Ásia"],
  itamaraty: ["Reino da Arábia Saudita"],
  moeda: ["Rial saudita", "Rial"],
  idiomas: [["Árabe"]]
},
{
  codigo: "ar",
  pais: ["Argentina"],
  capitais: [["Buenos Aires"]],
  gentilico: ["Argentino"],
  continente: ["América"],
  itamaraty: ["República Argentina"],
  moeda: ["Peso argentino", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "dz",
  pais: ["Argélia"],
  capitais: [["Argel"]],
  gentilico: ["Argelino"],
  continente: ["África"],
  itamaraty: ["República Argelina Democrática e Popular"],
  moeda: ["Dinar argelino", "Dinar"],
  idiomas: [
    ["Árabe"],
    ["Tamazight", "Amazigh"]
  ]
},
{
  codigo: "am",
  pais: ["Armênia"],
  capitais: [["Ierevan", "Yerevan"]],
  gentilico: ["Armênio"],
  continente: ["Europa e Ásia", "Ásia", "Europa"],
  itamaraty: ["República da Armênia"],
  moeda: ["Dram"],
  idiomas: [["Armênio"]]
},
{
  codigo: "au",
  pais: ["Austrália"],
  capitais: [["Camberra"]],
  gentilico: ["Australiano"],
  continente: ["Oceania"],
  itamaraty: ["Comunidade da Austrália"],
  moeda: ["Dólar australiano", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "at",
  pais: ["Áustria"],
  capitais: [["Viena"]],
  gentilico: ["Austríaco"],
  continente: ["Europa"],
  itamaraty: ["República da Áustria"],
  moeda: ["Euro"],
  idiomas: [["Alemão"]]
},
{
  codigo: "az",
  pais: ["Azerbaijão"],
  capitais: [["Bacu", "Baku"]],
  gentilico: ["Azeri"],
  continente: ["Ásia e Europa", "Ásia", "Europa"],
  itamaraty: ["República do Azerbaijão"],
  moeda: ["Manat"],
  idiomas: [["Azeri"]]
},
{
  codigo: "bs",
  pais: ["Bahamas"],
  capitais: [["Nassau"]],
  gentilico: ["Bahamense"],
  continente: ["América"],
  itamaraty: ["Comunidade das Bahamas"],
  moeda: ["Dólar das Bahamas", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "bh",
  pais: ["Bahrein"],
  capitais: [["Manama"]],
  gentilico: ["Bareinita"],
  continente: ["Ásia"],
  itamaraty: ["Reino do Bahrein"],
  moeda: ["Dinar bareinita", "Dinar"],
  idiomas: [["Árabe"]]
},
{
  codigo: "bd",
  pais: ["Bangladesh"],
  capitais: [["Daca"]],
  gentilico: ["Bangladês"],
  continente: ["Ásia"],
  itamaraty: ["República Popular de Bangladesh"],
  moeda: ["Taka"],
  idiomas: [["Bengali"]]
},
{
  codigo: "bb",
  pais: ["Barbados"],
  capitais: [["Bridgetown"]],
  gentilico: ["Barbadiano"],
  continente: ["América"],
  itamaraty: ["Barbados"],
  moeda: ["Dólar de Barbados", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "by",
  pais: ["Belarus", "Bielorrússia", "Bielorússia"],
  capitais: [["Minsk"]],
  gentilico: ["Belarusso", "Bielorrusso"],
  continente: ["Europa"],
  itamaraty: ["República da Belarus"],
  moeda: ["Rublo belarusso", "Rublo"],
  idiomas: [["Belarusso", "Bielorrusso", "Bielorusso"], ["Russo"]]
},
{
  codigo: "be",
  pais: ["Bélgica"],
  capitais: [["Bruxelas"]],
  gentilico: ["Belga"],
  continente: ["Europa"],
  itamaraty: ["Reino da Bélgica"],
  moeda: ["Euro"],
  idiomas: [
    ["Neerlandês"],
    ["Francês"],
    ["Alemão"]
  ]
},
{
  codigo: "bz",
  pais: ["Belize"],
  capitais: [["Belmopan"]],
  gentilico: ["Belizenho"],
  continente: ["América"],
  itamaraty: ["Belize"],
  moeda: ["Dólar de Belize", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "bj",
  pais: ["Benim"],
  capitais: [
    ["Cotonou"],
    ["Porto Novo"]
  ],
  gentilico: ["Beninense"],
  continente: ["África"],
  itamaraty: ["República do Benim"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "bt",
  pais: ["Butão"],
  capitais: [["Thimphu", "Thimbu"]],
  gentilico: ["Butanês"],
  continente: ["Ásia"],
  itamaraty: ["Reino do Butão"],
  moeda: ["Ngultrum"],
  idiomas: [["Dzonga"]]
},
{
  codigo: "bo",
  pais: ["Bolívia"],
  capitais: [
    ["Sucre"],
    ["La Paz"]
  ],
  gentilico: ["Boliviano"],
  continente: ["América"],
  itamaraty: ["Estado Plurinacional da Bolívia"],
  moeda: ["Boliviano"],
  idiomas: [
    ["Castelhano"],
    ["Quéchua"],
    ["Aimará"]
  ]
},
{
  codigo: "ba",
  pais: ["Bósnia e Herzegovina"],
  capitais: [["Sarajevo"]],
  gentilico: ["Bósnio"],
  continente: ["Europa"],
  itamaraty: ["Bósnia e Herzegovina"],
  moeda: ["Marco conversível"],
  idiomas: [
    ["Bósnio"],
    ["Croata"],
    ["Sérvio"]
  ]
},
{
  codigo: "bw",
  pais: ["Botsuana", "Botswana"],
  capitais: [["Gaborone"]],
  gentilico: ["Botsuanês"],
  continente: ["África"],
  itamaraty: ["República do Botsuana"],
  moeda: ["Pula"],
  idiomas: [
    ["Inglês"],
    ["Tswana"]
  ]
},
{
  codigo: "br",
  pais: ["Brasil"],
  capitais: [["Brasília"]],
  gentilico: ["Brasileiro"],
  continente: ["América"],
  itamaraty: ["República Federativa do Brasil"],
  moeda: ["Real"],
  idiomas: [["Português"]]
},
{
  codigo: "bn",
  pais: ["Brunei"],
  capitais: [["Bandar Seri Begawan"]],
  gentilico: ["Bruneano"],
  continente: ["Ásia"],
  itamaraty: ["Estado do Brunei Darussalam"],
  moeda: ["Dólar de Brunei", "Dólar"],
  idiomas: [["Malaio"]]
},
{
  codigo: "bg",
  pais: ["Bulgária"],
  capitais: [["Sófia"]],
  gentilico: ["Búlgaro"],
  continente: ["Europa"],
  itamaraty: ["República da Bulgária"],
  moeda: ["Lev"],
  idiomas: [["Búlgaro"]]
},
{
  codigo: "bf",
  pais: ["Burkina Faso", "Burquina Fasso"],
  capitais: [["Uagadugu", "Ouagadougou"]],
  gentilico: ["Burquinense"],
  continente: ["África"],
  itamaraty: ["Burkina Faso"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "bi",
  pais: ["Burundi"],
  capitais: [["Gitega"]],
  gentilico: ["Burundiano"],
  continente: ["África"],
  itamaraty: ["República do Burundi"],
  moeda: ["Franco do Burundi", "Franco"],
  idiomas: [
    ["Kirundi"],
    ["Francês"],
    ["Inglês"]
  ]
},
{
  codigo: "cv",
  pais: ["Cabo Verde"],
  capitais: [["Praia"]],
  gentilico: ["Cabo-verdiano"],
  continente: ["África"],
  itamaraty: ["República de Cabo Verde"],
  moeda: ["Escudo cabo-verdiano", "Escudo cabo verdiano"],
  idiomas: [["Português"]]
},
{
  codigo: "kh",
  pais: ["Camboja"],
  capitais: [["Phnom Penh"]],
  gentilico: ["Cambojano"],
  continente: ["Ásia"],
  itamaraty: ["Reino do Camboja"],
  moeda: ["Riel"],
  idiomas: [["Khmer"]]
},
{
  codigo: "cm",
  pais: ["Camarões"],
  capitais: [["Yaoundé", "Yaunde", "Iaunde"]],
  gentilico: ["Camaronês"],
  continente: ["África"],
  itamaraty: ["República do Cameroun", "República dos Camarões"],
  moeda: ["Franco CFA BEAC", "Franco"],
  idiomas: [
    ["Francês"],
    ["Inglês"]
  ]
},
{
  codigo: "ca",
  pais: ["Canadá", "Canada"],
  capitais: [["Ottawa"]],
  gentilico: ["Canadense"],
  continente: ["América"],
  itamaraty: ["Canadá"],
  moeda: ["Dólar canadense", "Dólar"],
  idiomas: [
    ["Inglês"],
    ["Francês"]
  ]
},
{
  codigo: "qa",
  pais: ["Catar", "Qatar"],
  capitais: [["Doha"]],
  gentilico: ["Catariano"],
  continente: ["Ásia"],
  itamaraty: ["Estado do Catar"],
  moeda: ["Rial catariano", "Rial"],
  idiomas: [["Árabe"]]
},
{
  codigo: "kz",
  pais: ["Cazaquistão"],
  capitais: [["Astana"]],
  gentilico: ["Cazaque"],
  continente: ["Ásia"],
  itamaraty: ["República do Cazaquistão"],
  moeda: ["Tenge"],
  idiomas: [
    ["Cazaque"],
    ["Russo"]
  ]
},
{
  codigo: "td",
  pais: ["Chade"],
  capitais: [["N'Djamena", "N Djamena"]],
  gentilico: ["Chadiano"],
  continente: ["África"],
  itamaraty: ["República do Chade"],
  moeda: ["Franco CFA BEAC", "Franco"],
  idiomas: [
    ["Árabe"],
    ["Francês"]
  ]
},
{
  codigo: "cl",
  pais: ["Chile"],
  capitais: [["Santiago"]],
  gentilico: ["Chileno"],
  continente: ["América"],
  itamaraty: ["República do Chile"],
  moeda: ["Peso chileno", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "cn",
  pais: ["China"],
  capitais: [["Pequim"]],
  gentilico: ["Chinês"],
  continente: ["Ásia"],
  itamaraty: ["República Popular da China"],
  moeda: ["Yuan"],
  idiomas: [["Chinês"]]
},
{
  codigo: "cy",
  pais: ["Chipre"],
  capitais: [["Nicósia", "Nicosia"]],
  gentilico: ["Cipriota"],
  continente: ["Europa"],
  itamaraty: ["República de Chipre"],
  moeda: ["Euro"],
  idiomas: [
    ["Grego"],
    ["Turco"]
  ]
},
{
  codigo: "co",
  pais: ["Colômbia"],
  capitais: [["Bogotá"]],
  gentilico: ["Colombiano"],
  continente: ["América"],
  itamaraty: ["República da Colômbia"],
  moeda: ["Peso colombiano", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "km",
  pais: ["Comores"],
  capitais: [["Moroni"]],
  gentilico: ["Comorense"],
  continente: ["África"],
  itamaraty: ["União das Comores"],
  moeda: ["Franco comoriano", "Franco"],
  idiomas: [
    ["Árabe"],
    ["Comoriano"],
    ["Francês"]
  ]
},
{
  codigo: "kr",
  pais: ["Coreia do Sul", "República da Coreia"],
  capitais: [["Seul"]],
  gentilico: ["Sul-coreano"],
  continente: ["Ásia"],
  itamaraty: ["República da Coreia"],
  moeda: ["Won sul-coreano", "Won"],
  idiomas: [["Coreano"]]
},
{
  codigo: "kp",
  pais: ["Coreia do Norte"],
  capitais: [["Pyongyang"]],
  gentilico: ["Norte-coreano"],
  continente: ["Ásia"],
  itamaraty: ["República Popular Democrática da Coreia"],
  moeda: ["Won norte-coreano", "Won"],
  idiomas: [["Coreano"]]
},
{
  codigo: "cg",
  pais: ["República do Congo"],
  capitais: [["Brazzaville"]],
  gentilico: ["Congolês"],
  continente: ["África"],
  itamaraty: ["República do Congo"],
  moeda: ["Franco CFA BEAC", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "ci",
  pais: ["Costa do Marfim"],
  capitais: [["Yamoussoukro"]],
  gentilico: ["Marfinense"],
  continente: ["África"],
  itamaraty: ["República da Côte d'Ivoire", "República da Costa do Marfim"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "cr",
  pais: ["Costa Rica"],
  capitais: [["San José"]],
  gentilico: ["Costa-riquenho"],
  continente: ["América"],
  itamaraty: ["República da Costa Rica"],
  moeda: ["Colón costa-riquenho", "Colón"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "hr",
  pais: ["Croácia"],
  capitais: [["Zagreb"]],
  gentilico: ["Croata"],
  continente: ["Europa"],
  itamaraty: ["República da Croácia"],
  moeda: ["Euro"],
  idiomas: [["Croata"]]
},
{
  codigo: "cu",
  pais: ["Cuba"],
  capitais: [["Havana"]],
  gentilico: ["Cubano"],
  continente: ["América"],
  itamaraty: ["República de Cuba"],
  moeda: ["Peso cubano", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "dk",
  pais: ["Dinamarca"],
  capitais: [["Copenhaga", "Copenhague", "Copenhagen"]],
  gentilico: ["Dinamarquês"],
  continente: ["Europa"],
  itamaraty: ["Reino da Dinamarca"],
  moeda: ["Coroa dinamarquesa", "Coroa"],
  idiomas: [["Dinamarquês"]]
},
{
  codigo: "dj",
  pais: ["Djibouti"],
  capitais: [["Djibouti"]],
  gentilico: ["Djibutiano"],
  continente: ["África"],
  itamaraty: ["República do Djibouti"],
  moeda: ["Franco djibutiano", "Franco"],
  idiomas: [
    ["Árabe"],
    ["Francês"]
  ]
},
{
  codigo: "dm",
  pais: ["Dominica"],
  capitais: [["Roseau"]],
  gentilico: ["Dominiquense"],
  continente: ["América"],
  itamaraty: ["Comunidade da Dominica"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "do",
  pais: ["República Dominicana"],
  capitais: [["Santo Domingo"]],
  gentilico: ["Dominicano"],
  continente: ["América"],
  itamaraty: ["República Dominicana"],
  moeda: ["Peso dominicano", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "eg",
  pais: ["Egito"],
  capitais: [["Cairo"]],
  gentilico: ["Egípcio"],
  continente: ["África"],
  itamaraty: ["República Árabe do Egito"],
  moeda: ["Libra egípcia", "Libra"],
  idiomas: [["Árabe"]]
},
{
  codigo: "sv",
  pais: ["El Salvador"],
  capitais: [["San Salvador"]],
  gentilico: ["Salvadorenho"],
  continente: ["América"],
  itamaraty: ["República de El Salvador"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "ae",
  pais: ["Emirados Árabes Unidos"],
  capitais: [["Abu Dabi"]],
  gentilico: ["Emiratense"],
  continente: ["Ásia"],
  itamaraty: ["Emirados Árabes Unidos"],
  moeda: ["Dirham"],
  idiomas: [["Árabe"]]
},
{
  codigo: "ec",
  pais: ["Equador"],
  capitais: [["Quito"]],
  gentilico: ["Equatoriano"],
  continente: ["América"],
  itamaraty: ["República do Equador"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "er",
  pais: ["Eritreia"],
  capitais: [["Asmara"]],
  gentilico: ["Eritreu"],
  continente: ["África"],
  itamaraty: ["Estado da Eritreia"],
  moeda: ["Nakfa"],
  idiomas: [
    ["Tigrínia"],
    ["Árabe"],
    ["Inglês"]
  ]
},
{
  codigo: "sk",
  pais: ["Eslováquia"],
  capitais: [["Bratislava"]],
  gentilico: ["Eslovaco"],
  continente: ["Europa"],
  itamaraty: ["República Eslovaca"],
  moeda: ["Euro"],
  idiomas: [["Eslovaco"]]
},
{
  codigo: "si",
  pais: ["Eslovênia"],
  capitais: [["Liubliana"]],
  gentilico: ["Esloveno"],
  continente: ["Europa"],
  itamaraty: ["República da Eslovênia"],
  moeda: ["Euro"],
  idiomas: [["Esloveno"]]
},
{
  codigo: "es",
  pais: ["Espanha"],
  capitais: [["Madri", "Madrid"]],
  gentilico: ["Espanhol"],
  continente: ["Europa"],
  itamaraty: ["Reino da Espanha"],
  moeda: ["Euro"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "us",
  pais: ["Estados Unidos", "Usa", "Eua"],
  capitais: [["Washington, D.C.", "Washington Dc"]],
  gentilico: ["Estadunidense", "Norte-americano"],
  continente: ["América"],
  itamaraty: ["Estados Unidos da América"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "ee",
  pais: ["Estônia"],
  capitais: [["Tallinn"]],
  gentilico: ["Estoniano"],
  continente: ["Europa"],
  itamaraty: ["República da Estônia"],
  moeda: ["Euro"],
  idiomas: [["Estoniano"]]
},
{
  codigo: "et",
  pais: ["Etiópia"],
  capitais: [["Adis Abeba"]],
  gentilico: ["Etíope"],
  continente: ["África"],
  itamaraty: ["República Democrática Federal da Etiópia"],
  moeda: ["Birr"],
  idiomas: [["Amárico"]]
},
{
  codigo: "sz",
  pais: ["Essuatíni", "Suazilândia"],
  capitais: [["Mbabane", "Mebabane"]],
  gentilico: ["Suázi"],
  continente: ["África"],
  itamaraty: ["Reino de Essuatíni"],
  moeda: ["Lilangeni"],
  idiomas: [["Inglês"], ["Suázi"]]
},
{
  codigo: "fj",
  pais: ["Fiji"],
  capitais: [["Suva"]],
  gentilico: ["Fijiano"],
  continente: ["Oceania"],
  itamaraty: ["República de Fiji"],
  moeda: ["Dólar fijiano", "Dólar"],
  idiomas: [["Inglês"], ["Fijiano"], ["Hindi"]]
},
{
  codigo: "ph",
  pais: ["Filipinas"],
  capitais: [["Manila"]],
  gentilico: ["Filipino"],
  continente: ["Ásia"],
  itamaraty: ["República das Filipinas"],
  moeda: ["Peso filipino", "Peso"],
  idiomas: [["Filipino"], ["Inglês"]]
},
{
  codigo: "fi",
  pais: ["Finlândia"],
  capitais: [["Helsinque"]],
  gentilico: ["Finlandês"],
  continente: ["Europa"],
  itamaraty: ["República da Finlândia"],
  moeda: ["Euro"],
  idiomas: [["Finlandês"], ["Sueco"]]
},
{
  codigo: "fr",
  pais: ["França"],
  capitais: [["Paris"]],
  gentilico: ["Francês"],
  continente: ["Europa"],
  itamaraty: ["República Francesa"],
  moeda: ["Euro"],
  idiomas: [["Francês"]]
},
{
  codigo: "ga",
  pais: ["Gabão"],
  capitais: [["Libreville"]],
  gentilico: ["Gabonês"],
  continente: ["África"],
  itamaraty: ["República Gabonesa"],
  moeda: ["Franco CFA BEAC", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "gm",
  pais: ["Gâmbia"],
  capitais: [["Banjul"]],
  gentilico: ["Gambiano"],
  continente: ["África"],
  itamaraty: ["República da Gâmbia"],
  moeda: ["Dalasi"],
  idiomas: [["Inglês"]]
},
{
  codigo: "gh",
  pais: ["Gana"],
  capitais: [["Accra"]],
  gentilico: ["Ganês"],
  continente: ["África"],
  itamaraty: ["República de Gana"],
  moeda: ["Cedi"],
  idiomas: [["Inglês"]]
},
{
  codigo: "ge",
  pais: ["Geórgia"],
  capitais: [["Tbilisi"]],
  gentilico: ["Georgiano"],
  continente: ["Ásia e Europa", "Ásia", "Europa"],
  itamaraty: ["Geórgia"],
  moeda: ["Lari"],
  idiomas: [["Georgiano"]]
},
{
  codigo: "gd",
  pais: ["Granada"],
  capitais: [["Saint George's", "Saint Georges"]],
  gentilico: ["Granadino"],
  continente: ["América"],
  itamaraty: ["Granada"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "gr",
  pais: ["Grécia"],
  capitais: [["Atenas"]],
  gentilico: ["Grego"],
  continente: ["Europa"],
  itamaraty: ["República Helênica"],
  moeda: ["Euro"],
  idiomas: [["Grego"]]
},
{
  codigo: "gt",
  pais: ["Guatemala"],
  capitais: [["Cidade da Guatemala", "Guatemala"]],
  gentilico: ["Guatemalteco"],
  continente: ["América"],
  itamaraty: ["República da Guatemala"],
  moeda: ["Quetzal"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "gy",
  pais: ["Guiana"],
  capitais: [["Georgetown"]],
  gentilico: ["Guianense"],
  continente: ["América"],
  itamaraty: ["República Cooperativa da Guiana"],
  moeda: ["Dólar da Guiana", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "gn",
  pais: ["Guiné"],
  capitais: [["Conacri"]],
  gentilico: ["Guineense"],
  continente: ["África"],
  itamaraty: ["República da Guiné"],
  moeda: ["Franco guineense", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "gw",
  pais: ["Guiné-Bissau", "Guiné Bissau"],
  capitais: [["Bissau"]],
  gentilico: ["Guineense"],
  continente: ["África"],
  itamaraty: ["República da Guiné-Bissau"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Português"]]
},
{
  codigo: "gq",
  pais: ["Guiné Equatorial"],
  capitais: [["Cidade da Paz", "Oyala"]],
  gentilico: ["Guinéu-equatoriano"],
  continente: ["África"],
  itamaraty: ["República da Guiné Equatorial"],
  moeda: ["Franco CFA BEAC", "Franco"],
  idiomas: [["Espanhol"], ["Francês"], ["Português"]]
},
{
  codigo: "ht",
  pais: ["Haiti"],
  capitais: [["Porto Príncipe"]],
  gentilico: ["Haitiano"],
  continente: ["América"],
  itamaraty: ["República do Haiti"],
  moeda: ["Gourde"],
  idiomas: [["Crioulo haitiano"], ["Francês"]]
},
{
  codigo: "hn",
  pais: ["Honduras"],
  capitais: [["Tegucigalpa"]],
  gentilico: ["Hondurenho"],
  continente: ["América"],
  itamaraty: ["República de Honduras"],
  moeda: ["Lempira"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "hu",
  pais: ["Hungria"],
  capitais: [["Budapeste"]],
  gentilico: ["Húngaro"],
  continente: ["Europa"],
  itamaraty: ["Hungria"],
  moeda: ["Forint"],
  idiomas: [["Húngaro"]]
},
{
  codigo: "ye",
  pais: ["Iêmen"],
  capitais: [["Saná"]],
  gentilico: ["Iemenita"],
  continente: ["Ásia"],
  itamaraty: ["República do Iêmen"],
  moeda: ["Rial iemenita", "Rial"],
  idiomas: [["Árabe"]]
},
{
  codigo: "mh",
  pais: ["Ilhas Marshall"],
  capitais: [["Majuro"]],
  gentilico: ["Marshalês"],
  continente: ["Oceania"],
  itamaraty: ["República das Ilhas Marshall"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"], ["Marshalês"]]
},
{
  codigo: "sb",
  pais: ["Ilhas Salomão"],
  capitais: [["Honiara"]],
  gentilico: ["Salomonense"],
  continente: ["Oceania"],
  itamaraty: ["Ilhas Salomão"],
  moeda: ["Dólar das Ilhas Salomão", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "in",
  pais: ["Índia"],
  capitais: [["Nova Délhi", "Nova Deli"]],
  gentilico: ["Indiano"],
  continente: ["Ásia"],
  itamaraty: ["República da Índia"],
  moeda: ["Rupia indiana", "Rupia"],
  idiomas: [["Hindi"], ["Inglês"]]
},
{
  codigo: "id",
  pais: ["Indonésia"],
  capitais: [["Jacarta", "Jakarta"]],
  gentilico: ["Indonésio"],
  continente: ["Ásia"],
  itamaraty: ["República da Indonésia"],
  moeda: ["Rupia indonésia", "Rupia"],
  idiomas: [["Indonésio"]]
},
{
  codigo: "ir",
  pais: ["Irã"],
  capitais: [["Teerã"]],
  gentilico: ["Iraniano"],
  continente: ["Ásia"],
  itamaraty: ["República Islâmica do Irã"],
  moeda: ["Rial iraniano", "Rial"],
  idiomas: [["Persa"]]
},
{
  codigo: "iq",
  pais: ["Iraque"],
  capitais: [["Bagdá"]],
  gentilico: ["Iraquiano"],
  continente: ["Ásia"],
  itamaraty: ["República do Iraque"],
  moeda: ["Dinar iraquiano", "Dinar"],
  idiomas: [["Árabe"], ["Curdo"]]
},
{
  codigo: "ie",
  pais: ["Irlanda"],
  capitais: [["Dublin"]],
  gentilico: ["Irlandês"],
  continente: ["Europa"],
  itamaraty: ["Irlanda"],
  moeda: ["Euro"],
  idiomas: [["Irlandês"], ["Inglês"]]
},
{
  codigo: "is",
  pais: ["Islândia"],
  capitais: [["Reiquiavique", "Reykjavík"]],
  gentilico: ["Islandês"],
  continente: ["Europa"],
  itamaraty: ["Islândia"],
  moeda: ["Coroa islandesa", "Coroa"],
  idiomas: [["Islandês"]]
},
{
  codigo: "il",
  pais: ["Israel"],
  capitais: [["Tel Aviv", "Jerusalém Ocidental"]],
  gentilico: ["Israelense"],
  continente: ["Ásia"],
  itamaraty: ["Estado de Israel"],
  moeda: ["Novo shekel israelense", "Nova shekel"],
  idiomas: [["Hebraico"]]
},
{
  codigo: "it",
  pais: ["Itália"],
  capitais: [["Roma"]],
  gentilico: ["Italiano"],
  continente: ["Europa"],
  itamaraty: ["República Italiana"],
  moeda: ["Euro"],
  idiomas: [["Italiano"]]
},
{
  codigo: "jm",
  pais: ["Jamaica"],
  capitais: [["Kingston"]],
  gentilico: ["Jamaicano"],
  continente: ["América"],
  itamaraty: ["Jamaica"],
  moeda: ["Dólar jamaicano", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "jp",
  pais: ["Japão"],
  capitais: [["Tóquio"]],
  gentilico: ["Japonês"],
  continente: ["Ásia"],
  itamaraty: ["Japão"],
  moeda: ["Iene"],
  idiomas: [["Japonês"]]
},
{
  codigo: "jo",
  pais: ["Jordânia"],
  capitais: [["Amã"]],
  gentilico: ["Jordaniano"],
  continente: ["Ásia"],
  itamaraty: ["Reino Haxemita da Jordânia"],
  moeda: ["Dinar jordaniano", "Dinar"],
  idiomas: [["Árabe"]]
},
{
  codigo: "ke",
  pais: ["Quênia"],
  capitais: [["Nairóbi", "Nairobi"]],
  gentilico: ["Queniano"],
  continente: ["África"],
  itamaraty: ["República do Quênia"],
  moeda: ["Xelim queniano", "Xelim"],
  idiomas: [["Suaíli"], ["Inglês"]]
},
{
  codigo: "ki",
  pais: ["Kiribati"],
  capitais: [["Tarawa"]],
  gentilico: ["Kiribatiano"],
  continente: ["Oceania"],
  itamaraty: ["República do Kiribati"],
  moeda: ["Dólar australiano", "Dólar"],
  idiomas: [["Inglês"], ["Gilbertês"]]
},
{
  codigo: "kw",
  pais: ["Kuwait", "Kuweit", "Koweit"],
  capitais: [["Cidade do Kuwait", "Kuwait", "Kuweit", "Koweit"]],
  gentilico: ["Kuwaitiano"],
  continente: ["Ásia"],
  itamaraty: ["Estado do Kuwait"],
  moeda: ["Dinar kuwaitiano", "Dinar"],
  idiomas: [["Árabe"]]
},
{
  codigo: "kg",
  pais: ["Quirguistão", "Quirguizistão", "República Quirguiz"],
  capitais: [["Bisqueque"]],
  gentilico: ["Quirguiz"],
  continente: ["Ásia"],
  itamaraty: ["República Quirguiz"],
  moeda: ["Som"],
  idiomas: [["Quirguiz"], ["Russo"]]
},
{
  codigo: "la",
  pais: ["Laos"],
  capitais: [["Vientiane"]],
  gentilico: ["Laociano"],
  continente: ["Ásia"],
  itamaraty: ["República Democrática Popular do Laos"],
  moeda: ["Kip"],
  idiomas: [["Laociano"]]
},
{
  codigo: "ls",
  pais: ["Lesoto"],
  capitais: [["Maseru"]],
  gentilico: ["Lesotiano"],
  continente: ["África"],
  itamaraty: ["Reino do Lesoto"],
  moeda: ["Loti"],
  idiomas: [["Soto"], ["Inglês"]]
},
{
  codigo: "lv",
  pais: ["Letônia"],
  capitais: [["Riga"]],
  gentilico: ["Letão"],
  continente: ["Europa"],
  itamaraty: ["República da Letônia"],
  moeda: ["Euro"],
  idiomas: [["Letão"]]
},
{
  codigo: "lb",
  pais: ["Líbano"],
  capitais: [["Beirute"]],
  gentilico: ["Libanês"],
  continente: ["Ásia"],
  itamaraty: ["República Libanesa"],
  moeda: ["Libra libanesa", "Libra"],
  idiomas: [["Árabe"]]
},
{
  codigo: "lr",
  pais: ["Libéria"],
  capitais: [["Monróvia", "Monrovia"]],
  gentilico: ["Liberiano"],
  continente: ["África"],
  itamaraty: ["República da Libéria"],
  moeda: ["Dólar liberiano", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "ly",
  pais: ["Líbia"],
  capitais: [["Trípoli", "Tripoli"]],
  gentilico: ["Líbio"],
  continente: ["África"],
  itamaraty: ["Estado da Líbia"],
  moeda: ["Dinar líbio", "Dinar"],
  idiomas: [["Árabe"]]
},
{
  codigo: "li",
  pais: ["Liechtenstein"],
  capitais: [["Vaduz"]],
  gentilico: ["Liechtensteinense"],
  continente: ["Europa"],
  itamaraty: ["Principado de Liechtenstein"],
  moeda: ["Franco suíço", "Franco"],
  idiomas: [["Alemão"]]
},
{
  codigo: "lt",
  pais: ["Lituânia"],
  capitais: [["Vilnius"]],
  gentilico: ["Lituano"],
  continente: ["Europa"],
  itamaraty: ["República da Lituânia"],
  moeda: ["Euro"],
  idiomas: [["Lituano"]]
},
{
  codigo: "lu",
  pais: ["Luxemburgo"],
  capitais: [["Luxemburgo"]],
  gentilico: ["Luxemburguês"],
  continente: ["Europa"],
  itamaraty: ["Grão-Ducado do Luxemburgo"],
  moeda: ["Euro"],
  idiomas: [
    ["Luxemburguês"],
    ["Francês"],
    ["Alemão"]
  ]
},
{
  codigo: "mk",
  pais: ["Macedônia do Norte"],
  capitais: [["Escópia", "Skopje"]],
  gentilico: ["Macedônio"],
  continente: ["Europa"],
  itamaraty: ["República da Macedônia do Norte"],
  moeda: ["Denar Macedônio", "Denar", "Dinar"],
  idiomas: [["Macedônio"], ["Alvanês"]]
},
{
  codigo: "mg",
  pais: ["Madagascar"],
  capitais: [["Antananarivo"]],
  gentilico: ["Malgaxe"],
  continente: ["África"],
  itamaraty: ["República de Madagascar"],
  moeda: ["Ariary"],
  idiomas: [["Malgaxe"], ["Francês"]]
},
{
  codigo: "my",
  pais: ["Malásia"],
  capitais: [["Kuala Lumpur"]],
  gentilico: ["Malaio"],
  continente: ["Ásia"],
  itamaraty: ["Malásia"],
  moeda: ["Ringgit"],
  idiomas: [["Malaio"]]
},
{
  codigo: "mw",
  pais: ["Malawi"],
  capitais: [["Lilongue", "Lilongwe"]],
  gentilico: ["Malauiano"],
  continente: ["África"],
  itamaraty: ["República do Malawi"],
  moeda: ["Kwacha"],
  idiomas: [
    ["Inglês"],
    ["Chichewa"]
  ]
},
{
  codigo: "mv",
  pais: ["Maldivas"],
  capitais: [["Malé", "Male"]],
  gentilico: ["Maldivo"],
  continente: ["Ásia"],
  itamaraty: ["República das Maldivas"],
  moeda: ["Rupia maldiva", "Rupia"],
  idiomas: [["Divehi"]]
},
{
  codigo: "ml",
  pais: ["Mali"],
  capitais: [["Bamako"]],
  gentilico: ["Maliano"],
  continente: ["África"],
  itamaraty: ["República do Mali"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "mt",
  pais: ["Malta"],
  capitais: [["Valeta"]],
  gentilico: ["Maltês"],
  continente: ["Europa"],
  itamaraty: ["República de Malta"],
  moeda: ["Euro"],
  idiomas: [
    ["Maltês"],
    ["Inglês"]
  ]
},
{
  codigo: "ma",
  pais: ["Marrocos"],
  capitais: [["Rabat"]],
  gentilico: ["Marroquino"],
  continente: ["África"],
  itamaraty: ["Reino do Marrocos"],
  moeda: ["Dirham marroquino", "Dirham"],
  idiomas: [
    ["Árabe"],
    ["Tamazight"]
  ]
},
{
  codigo: "mu",
  pais: ["Maurício"],
  capitais: [["Port Louis", "Porto Louis"]],
  gentilico: ["Mauriciano"],
  continente: ["África"],
  itamaraty: ["República de Maurício"],
  moeda: ["Rupia mauriciana", "Rupia"],
  idiomas: [["Inglês"]]
},
{
  codigo: "mr",
  pais: ["Mauritânia"],
  capitais: [["Nouakchott"]],
  gentilico: ["Mauritano"],
  continente: ["África"],
  itamaraty: ["República Islâmica da Mauritânia"],
  moeda: ["Ouguiya"],
  idiomas: [["Árabe"]]
},
{
  codigo: "mx",
  pais: ["México"],
  capitais: [["Cidade do México", "México"]],
  gentilico: ["Mexicano"],
  continente: ["América"],
  itamaraty: ["Estados Unidos Mexicanos"],
  moeda: ["Peso mexicano", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "mm",
  pais: ["Myanmar (Birmânia)", "Mianmar", "Birmânia", "Myanmar"],
  capitais: [["Naypyidaw"]],
  gentilico: ["Mianmarês"],
  continente: ["Ásia"],
  itamaraty: ["República da União de Myanmar"],
  moeda: ["Kyat"],
  idiomas: [["Birmanês"]]
},
{
  codigo: "fm",
  pais: ["Estados Federados da Micronésia", "Micronésia"],
  capitais: [["Palikir"]],
  gentilico: ["Micronésio"],
  continente: ["Oceania"],
  itamaraty: ["Estados Federados da Micronésia"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "md",
  pais: ["Moldova", "Moldavia"],
  capitais: [["Chișinău", "Quixinau"]],
  gentilico: ["Moldavo", "Moldávio", "Moldávico"],
  continente: ["Europa"],
  itamaraty: ["República da Moldova"],
  moeda: ["Leu da Moldova", "Leu"],
  idiomas: [["Romeno"]]
},
{
  codigo: "mz",
  pais: ["Moçambique"],
  capitais: [["Maputo"]],
  gentilico: ["Moçambicano"],
  continente: ["África"],
  itamaraty: ["República de Moçambique"],
  moeda: ["Metical"],
  idiomas: [["Português"]]
},
{
  codigo: "mc",
  pais: ["Mônaco"],
  capitais: [["Mônaco"]],
  gentilico: ["Monegasco"],
  continente: ["Europa"],
  itamaraty: ["Principado de Mônaco"],
  moeda: ["Euro"],
  idiomas: [["Francês"]]
},
{
  codigo: "mn",
  pais: ["Mongólia"],
  capitais: [["Ulaanbaatar", "Ulan Bator", "Ula Bator"]],
  gentilico: ["Mongol"],
  continente: ["Ásia"],
  itamaraty: ["Mongólia"],
  moeda: ["Tugrik"],
  idiomas: [["Mongol"]]
},
{
  codigo: "me",
  pais: ["Montenegro"],
  capitais: [["Podgorica"]],
  gentilico: ["Montenegrino"],
  continente: ["Europa"],
  itamaraty: ["Montenegro"],
  moeda: ["Euro"],
  idiomas: [["Montenegrino"]]
},
{
  codigo: "na",
  pais: ["Namíbia"],
  capitais: [["Windhoek (Vinduque)", "Windhoek", "Vinduque"]],
  gentilico: ["Namibiano"],
  continente: ["África"],
  itamaraty: ["República da Namíbia"],
  moeda: ["Dólar namibiano", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "nr",
  pais: ["Naoero", "Nauru"],
  capitais: [["Yaren"]],
  gentilico: ["Nauruano"],
  continente: ["Oceania"],
  itamaraty: ["República de Nauru"],
  moeda: ["Dólar australiano", "Dólar"],
  idiomas: [["Nauruano"], ["Inglês"]]
},
{
  codigo: "np",
  pais: ["Nepal"],
  capitais: [["Catmandu"]],
  gentilico: ["Nepalês"],
  continente: ["Ásia"],
  itamaraty: ["República Democrática Federal do Nepal"],
  moeda: ["Rupia nepalesa", "Rupia"],
  idiomas: [["Nepalês"]]
},
{
  codigo: "ni",
  pais: ["Nicarágua"],
  capitais: [["Managua"]],
  gentilico: ["Nicaraguense"],
  continente: ["América"],
  itamaraty: ["República da Nicarágua"],
  moeda: ["Córdoba"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "ne",
  pais: ["Níger"],
  capitais: [["Niamey"]],
  gentilico: ["Nigerino"],
  continente: ["África"],
  itamaraty: ["República do Níger"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "ng",
  pais: ["Nigéria"],
  capitais: [["Abuja"]],
  gentilico: ["Nigeriano"],
  continente: ["África"],
  itamaraty: ["República Federal da Nigéria"],
  moeda: ["Naira"],
  idiomas: [["Inglês"]]
},
{
  codigo: "no",
  pais: ["Noruega"],
  capitais: [["Oslo"]],
  gentilico: ["Norueguês"],
  continente: ["Europa"],
  itamaraty: ["Reino da Noruega"],
  moeda: ["Coroa norueguesa", "Coroa"],
  idiomas: [["Norueguês"]]
},
{
  codigo: "nz",
  pais: ["Nova Zelândia"],
  capitais: [["Wellington"]],
  gentilico: ["Neozelandês"],
  continente: ["Oceania"],
  itamaraty: ["Nova Zelândia"],
  moeda: ["Dólar da Nova Zelândia", "Dólar"],
  idiomas: [
    ["Inglês"],
    ["Maori"],
    ["Língua de Sinais da Nova Zelândia"]
  ]
},
{
  codigo: "om",
  pais: ["Omã"],
  capitais: [["Mascate"]],
  gentilico: ["Omanense"],
  continente: ["Ásia"],
  itamaraty: ["Sultanato de Omã"],
  moeda: ["Rial omanense", "Rial"],
  idiomas: [["Árabe"]]
},
{
  codigo: "nl",
  pais: ["Países Baixos (Holanda)", "Países Baixos", "Holanda"],
  capitais: [["Amsterdã"]],
  gentilico: ["Neerlandês"],
  continente: ["Europa"],
  itamaraty: ["Reino dos Países Baixos"],
  moeda: ["Euro"],
  idiomas: [
    ["Neerlandês"],
    ["Frísio"]
  ]
},
{
  codigo: "pw",
  pais: ["Palau"],
  capitais: [["N'Gerulmud", "Melekeok", "N Gerulmud"]],
  gentilico: ["Palauano"],
  continente: ["Oceania"],
  itamaraty: ["República de Palau"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [
    ["Palauano"],
    ["Inglês"]
  ]
},
{
  codigo: "pa",
  pais: ["Panamá"],
  capitais: [["Cidade do Panamá", "Panamá"]],
  gentilico: ["Panamenho"],
  continente: ["América"],
  itamaraty: ["República do Panamá"],
  moeda: ["Balboa"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "pg",
  pais: ["Papua Nova Guiné", "Papua-Nova Guiné", "Nova Guiné"],
  capitais: [["Port Moresby", "Porto Moresby"]],
  gentilico: ["Papuásio", "Papua"],
  continente: ["Oceania"],
  itamaraty: ["Estado Independente da Papua Nova Guiné"],
  moeda: ["Kina"],
  idiomas: [
    ["Inglês"],
    ["Tok Pisin"],
    ["Hiri Motu"]
  ]
},
{
  codigo: "pk",
  pais: ["Paquistão"],
  capitais: [["Islamabad"]],
  gentilico: ["Paquistanês"],
  continente: ["Ásia"],
  itamaraty: ["República Islâmica do Paquistão"],
  moeda: ["Rupia paquistanesa", "Rupia"],
  idiomas: [["Urdu"], ["Inglês"]]
},
{
  codigo: "py",
  pais: ["Paraguai"],
  capitais: [["Assunção"]],
  gentilico: ["Paraguaio"],
  continente: ["América"],
  itamaraty: ["República do Paraguai"],
  moeda: ["Guarani"],
  idiomas: [["Espanhol"], ["Guarani"]]
},
{
  codigo: "pe",
  pais: ["Peru"],
  capitais: [["Lima"]],
  gentilico: ["Peruano"],
  continente: ["América"],
  itamaraty: ["República do Peru"],
  moeda: ["Sol"],
  idiomas: [["Espanhol"], ["Quíchua"], ["Aimará"]]
},
{
  codigo: "pl",
  pais: ["Polônia"],
  capitais: [["Varsóvia"]],
  gentilico: ["Polonês"],
  continente: ["Europa"],
  itamaraty: ["República da Polônia"],
  moeda: ["Zloty"],
  idiomas: [["Polonês"]]
},
{
  codigo: "pt",
  pais: ["Portugal"],
  capitais: [["Lisboa"]],
  gentilico: ["Português"],
  continente: ["Europa"],
  itamaraty: ["República Portuguesa"],
  moeda: ["Euro"],
  idiomas: [["Português"]]
},
{
  codigo: "gb",
  pais: ["Reino Unido"],
  capitais: [["Londres"]],
  gentilico: ["Britânico"],
  continente: ["Europa"],
  itamaraty: ["Reino Unido da Grã-Bretanha e Irlanda do Norte"],
  moeda: ["Libra esterlina", "Libra"],
  idiomas: [["Inglês"]]
},
{
  codigo: "cf",
  pais: ["República Centro-Africana", "República Centro Africana", "República da África Central", "Centrafrica"],
  capitais: [["Bangui"]],
  gentilico: ["Centro-africano"],
  continente: ["África"],
  itamaraty: ["República Centro-Africana"],
  moeda: ["Franco CFA BEAC", "Franco"],
  idiomas: [["Francês"], ["Sango"]]
},
{
  codigo: "cz",
  pais: ["República Tcheca", "Chéquia"],
  capitais: [["Praga"]],
  gentilico: ["Tcheco"],
  continente: ["Europa"],
  itamaraty: ["Chéquia"],
  moeda: ["Coroa tcheca", "Coroa"],
  idiomas: [["Tcheco"]]
},
{
  codigo: "cd",
  pais: ["República Democrática do Congo"],
  capitais: [["Kinshasa"]],
  gentilico: ["Congolês"],
  continente: ["África"],
  itamaraty: ["República Democrática do Congo"],
  moeda: ["Franco congolês", "Franco"],
  idiomas: [["Francês"], ["Quicongo"], ["Lingala"], ["Suaíli"], ["Tchiluba"]]
},
{
  codigo: "ro",
  pais: ["Romênia"],
  capitais: [["Bucareste"]],
  gentilico: ["Romeno"],
  continente: ["Europa"],
  itamaraty: ["Romênia"],
  moeda: ["Leu romeno", "Leu"],
  idiomas: [["Romeno"]]
},
{
  codigo: "rw",
  pais: ["Ruanda"],
  capitais: [["Kigali"]],
  gentilico: ["Ruandês"],
  continente: ["África"],
  itamaraty: ["República de Ruanda"],
  moeda: ["Franco ruandês", "Franco"],
  idiomas: [
    ["Quiniaruanda"],
    ["Inglês"],
    ["Francês"],
    ["Suaíli"]
  ]
},
{
  codigo: "ru",
  pais: ["Rússia"],
  capitais: [["Moscou"]],
  gentilico: ["Russo"],
  continente: ["Europa e Ásia", "Europa", "Ásia"],
  itamaraty: ["Federação da Rússia"],
  moeda: ["Rublo russo", "Rublo"],
  idiomas: [["Russo"]]
},
{
  codigo: "ws",
  pais: ["Samoa"],
  capitais: [["Apia"]],
  gentilico: ["Samoano"],
  continente: ["Oceania"],
  itamaraty: ["Estado Independente da Samoa"],
  moeda: ["Tala"],
  idiomas: [["Samoano"], ["Inglês"]]
},
{
  codigo: "sm",
  pais: ["San Marino"],
  capitais: [["San Marino"]],
  gentilico: ["Samarinês"],
  continente: ["Europa"],
  itamaraty: ["República de San Marino"],
  moeda: ["Euro"],
  idiomas: [["Italiano"]]
},
{
  codigo: "lc",
  pais: ["Santa Lúcia"],
  capitais: [["Castries"]],
  gentilico: ["Santa-lucense"],
  continente: ["América"],
  itamaraty: ["Santa Lúcia"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "kn",
  pais: ["São Cristóvão e Névis"],
  capitais: [["Basseterre"]],
  gentilico: ["São-cristovense"],
  continente: ["América"],
  itamaraty: ["Federação de São Cristóvão e Névis"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "st",
  pais: ["São Tomé e Príncipe"],
  capitais: [["São Tomé"]],
  gentilico: ["São-tomense"],
  continente: ["África"],
  itamaraty: ["República Democrática de São Tomé e Príncipe"],
  moeda: ["Dobra"],
  idiomas: [["Português"]]
},
{
  codigo: "vc",
  pais: ["São Vicente e Granadinas"],
  capitais: [["Kingstown"]],
  gentilico: ["São-vicentino"],
  continente: ["América"],
  itamaraty: ["São Vicente e Granadinas"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "sc",
  pais: ["Seicheles", "Seychelles"],
  capitais: [["Victoria"]],
  gentilico: ["Seichelense"],
  continente: ["África"],
  itamaraty: ["República de Seicheles"],
  moeda: ["Rupia seichelense", "Rupia"],
  idiomas: [
    ["Crioulo seichelense"],
    ["Inglês"],
    ["Francês"]
  ]
},
{
  codigo: "sn",
  pais: ["Senegal"],
  capitais: [["Dacar"]],
  gentilico: ["Senegalês"],
  continente: ["África"],
  itamaraty: ["República do Senegal"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "rs",
  pais: ["Sérvia", "Serbia"],
  capitais: [["Belgrado"]],
  gentilico: ["Sérvio"],
  continente: ["Europa"],
  itamaraty: ["República da Sérvia"],
  moeda: ["Dinar Sérvio", "Dinar"],
  idiomas: [["Sérvio"]]
},
{
  codigo: "sl",
  pais: ["Serra Leoa"],
  capitais: [["Freetown"]],
  gentilico: ["Serra-leonês"],
  continente: ["África"],
  itamaraty: ["República de Serra Leoa"],
  moeda: ["Leone"],
  idiomas: [["Inglês"]]
},
{
  codigo: "sg",
  pais: ["Singapura"],
  capitais: [["Singapura"]],
  gentilico: ["Singapurense", "Singapuriano"],
  continente: ["Ásia"],
  itamaraty: ["República de Singapura"],
  moeda: ["Dólar de Singapura", "Dólar"],
  idiomas: [
    ["Malaio"],
    ["Mandarim"],
    ["Tâmil"],
    ["Inglês"]
  ]
},
{
  codigo: "sy",
  pais: ["Síria"],
  capitais: [["Damasco"]],
  gentilico: ["Sírio"],
  continente: ["Ásia"],
  itamaraty: ["República Árabe da Síria"],
  moeda: ["Libra síria", "Libra"],
  idiomas: [["Árabe"]]
},
{
  codigo: "so",
  pais: ["Somália"],
  capitais: [["Mogadíscio"]],
  gentilico: ["Somali", "Somaliano"],
  continente: ["África"],
  itamaraty: ["República Federal da Somália"],
  moeda: ["Xelim somali", "Xelim"],
  idiomas: [["Somali"], ["Árabe"]]
},
{
  codigo: "lk",
  pais: ["Sri Lanka"],
  ordemCapitais: true,
  capitais: [["Colombo"], ["Sri Jayawardenepura Kotte", "Kotte"]],
  gentilico: ["Sri-lankês"],
  continente: ["Ásia"],
  itamaraty: ["República Democrática Socialista do Sri Lanka"],
  moeda: ["Rupia do Sri Lanka", "Rupia"],
  idiomas: [
    ["Cingalês"],
    ["Tâmil"]
  ]
},
{
  codigo: "sd",
  pais: ["Sudão"],
  capitais: [["Cartum"]],
  gentilico: ["Sudanês"],
  continente: ["África"],
  itamaraty: ["República do Sudão"],
  moeda: ["Libra sudanesa", "Libra"],
  idiomas: [
    ["Árabe"],
    ["Inglês"]
  ]
},
{
  codigo: "ss",
  pais: ["Sudão do Sul"],
  capitais: [["Juba"]],
  gentilico: ["Sul-sudanês"],
  continente: ["África"],
  itamaraty: ["República do Sudão do Sul"],
  moeda: ["Libra sul-sudanesa", "Libra"],
  idiomas: [["Inglês"]]
},
{
  codigo: "se",
  pais: ["Suécia"],
  capitais: [["Estocolmo"]],
  gentilico: ["Sueco"],
  continente: ["Europa"],
  itamaraty: ["Reino da Suécia"],
  moeda: ["Coroa sueca", "Coroa"],
  idiomas: [["Sueco"]]
},
{
  codigo: "ch",
  pais: ["Suíça"],
  capitais: [["Berna"]],
  gentilico: ["Suíço"],
  continente: ["Europa"],
  itamaraty: ["Confederação Suíça"],
  moeda: ["Franco suíço", "Franco"],
  idiomas: [
    ["Alemão"],
    ["Francês"],
    ["Italiano"],
    ["Romanche"]
  ]
},
{
  codigo: "sr",
  pais: ["Suriname"],
  capitais: [["Paramaribo"]],
  gentilico: ["Surinamês"],
  continente: ["América"],
  itamaraty: ["República do Suriname"],
  moeda: ["Dólar surinamês", "Dólar"],
  idiomas: [["Neerlandês"]]
},
{
  codigo: "th",
  pais: ["Tailândia"],
  capitais: [["Bangkok", "Banguecoque"]],
  gentilico: ["Tailandês"],
  continente: ["Ásia"],
  itamaraty: ["Reino da Tailândia"],
  moeda: ["Baht"],
  idiomas: [["Tailandês"]]
},
{
  codigo: "tj",
  pais: ["Tajiquistão"],
  capitais: [["Dushambe", "Duchambe"]],
  gentilico: ["Tajique"],
  continente: ["Ásia"],
  itamaraty: ["República do Tajiquistão"],
  moeda: ["Somoni"],
  idiomas: [
    ["Tajique"],
    ["Russo"]
  ]
},
{
  codigo: "tz",
  pais: ["Tanzânia"],
  capitais: [["Dodoma"]],
  gentilico: ["Tanzaniano"],
  continente: ["África"],
  itamaraty: ["República Unida da Tanzânia"],
  moeda: ["Xelim tanzaniano", "Xelim"],
  idiomas: [
    ["Suaíli"],
    ["Inglês"]
  ]
},
{
  codigo: "tl",
  pais: ["Timor-Leste", "Timor Leste"],
  capitais: [["Díli"]],
  gentilico: ["Timorense"],
  continente: ["Ásia"],
  itamaraty: ["República Democrática de Timor-Leste"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [
    ["Português"],
    ["Tétum"]
  ]
},
{
  codigo: "tg",
  pais: ["Togo"],
  capitais: [["Lomé"]],
  gentilico: ["Togolês"],
  continente: ["África"],
  itamaraty: ["República Togolesa"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]]
},
{
  codigo: "to",
  pais: ["Tonga"],
  capitais: [["Nuku'alofa", "Nuku Alofa"]],
  gentilico: ["Tonganês"],
  continente: ["Oceania"],
  itamaraty: ["Reino de Tonga"],
  moeda: ["Pa'anga", "Pa anga"],
  idiomas: [
    ["Tonganês"],
    ["Inglês"]
  ]
},
{
  codigo: "tt",
  pais: ["Trinidad e Tobago"],
  capitais: [["Port of Spain", "Porto da Espanha"]],
  gentilico: ["Trinitário"],
  continente: ["América"],
  itamaraty: ["República de Trinidad e Tobago"],
  moeda: ["Dólar de Trinidad e Tobago", "Dólar"],
  idiomas: [["Inglês"]]
},
{
  codigo: "tn",
  pais: ["Tunísia"],
  capitais: [["Túnis", "Tunes"]],
  gentilico: ["Tunisiano"],
  continente: ["África"],
  itamaraty: ["República da Tunísia"],
  moeda: ["Dinar tunisiano", "Dinar"],
  idiomas: [["Árabe"]]
},
{
  codigo: "tm",
  pais: ["Turcomenistão", "Turquemenistão"],
  capitais: [["Ashgabat", "Asgabate"]],
  gentilico: ["Turcomeno"],
  continente: ["Ásia"],
  itamaraty: ["Turcomenistão"],
  moeda: ["Manat turcomeno", "Manat"],
  idiomas: [["Turcomeno"]]
},
{
  codigo: "tr",
  pais: ["Turquia"],
  capitais: [["Ancara"]],
  gentilico: ["Turco"],
  continente: ["Ásia e Europa", "Ásia", "Europa"],
  itamaraty: ["República da Turquia", "República da Türkiye"],
  moeda: ["Lira turca", "Lira"],
  idiomas: [["Turco"]]
},
{
  codigo: "tv",
  pais: ["Tuvalu"],
  capitais: [["Funafuti"]],
  gentilico: ["Tuvaluano"],
  continente: ["Oceania"],
  itamaraty: ["Tuvalu"],
  moeda: ["Dólar australiano", "Dólar"],
  idiomas: [
    ["Tuvaluano"],
    ["Inglês"]
  ]
},
{
  codigo: "ua",
  pais: ["Ucrânia"],
  capitais: [["Kiev", "Kyiv"]],
  gentilico: ["Ucraniano"],
  continente: ["Europa"],
  itamaraty: ["Ucrânia"],
  moeda: ["Hryvnia"],
  idiomas: [["Ucraniano"]]
},
{
  codigo: "ug",
  pais: ["Uganda"],
  capitais: [["Kampala"]],
  gentilico: ["Ugandês"],
  continente: ["África"],
  itamaraty: ["República de Uganda"],
  moeda: ["Xelim ugandês", "Xelim"],
  idiomas: [["Inglês"], ["Suaíli"]]
},
{
  codigo: "uy",
  pais: ["Uruguai"],
  capitais: [["Montevidéu"]],
  gentilico: ["Uruguaio"],
  continente: ["América"],
  itamaraty: ["República Oriental do Uruguai"],
  moeda: ["Peso uruguaio", "Peso"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "uz",
  pais: ["Uzbequistão"],
  capitais: [["Tashkent"]],
  gentilico: ["Usbeque"],
  continente: ["Ásia"],
  itamaraty: ["República do Uzbequistão"],
  moeda: ["Som uzbeque", "Som"],
  idiomas: [["Usbeque"]]
},
{
  codigo: "vu",
  pais: ["Vanuatu"],
  capitais: [["Porto Vila"]],
  gentilico: ["Vanuatuense"],
  continente: ["Oceania"],
  itamaraty: ["República de Vanuatu"],
  moeda: ["Vatu"],
  idiomas: [
    ["Bislama"],
    ["Inglês"],
    ["Francês"]
  ]
},
{
  codigo: "va",
  pais: ["Vaticano"],
  capitais: [["Vaticano"]],
  gentilico: ["Vaticano"],
  continente: ["Europa"],
  itamaraty: ["Estado da Cidade do Vaticano"],
  moeda: ["Euro"],
  idiomas: [["Italiano"], ["Latim"]]
},
{
  codigo: "ve",
  pais: ["Venezuela"],
  capitais: [["Caracas"]],
  gentilico: ["Venezuelano"],
  continente: ["América"],
  itamaraty: ["República Bolivariana da Venezuela"],
  moeda: ["Bolívar"],
  idiomas: [["Espanhol"]]
},
{
  codigo: "vn",
  pais: ["Vietnã"],
  capitais: [["Hanói"]],
  gentilico: ["Vietnamita"],
  continente: ["Ásia"],
  itamaraty: ["República Socialista do Vietnã"],
  moeda: ["Dong"],
  idiomas: [["Vietnamita"]]
},
{
  codigo: "zm",
  pais: ["Zâmbia"],
  capitais: [["Lusaka"]],
  gentilico: ["Zambiano"],
  continente: ["África"],
  itamaraty: ["República da Zâmbia"],
  moeda: ["Kwacha zambiano", "Kwacha"],
  idiomas: [["Inglês"]]
},
{
  codigo: "zw",
  pais: ["Zimbábue", "Zimbabwe"],
  capitais: [["Harare"]],
  gentilico: ["Zimbabuano"],
  continente: ["África"],
  itamaraty: ["República do Zimbábue"],
  moeda: ["Dólar do Zimbábue", "Dólar"],
  idiomas: [
    ["Inglês"],
    ["Chishona"],
    ["Sindebele"]
  ]
},
{
  codigo: "ps",
  pais: ["Palestina"],
  capitais: [
    ["Jerusalém Oriental"],
    ["Ramallah"]
  ],
  gentilico: ["Palestino"],
  continente: ["Ásia"],
  itamaraty: ["Estado da Palestina"],
  moeda: ["Shekel israelense", "Shekel"],
  idiomas: [["Árabe"]],
  excecao:{tipo: "Estado observador não membro da ONU", placeholder: "Estado observador não membro da ONU", semCapital: false}
},
{
  codigo: "tw",
  pais: ["Taiwan"],
  capitais: [["Taipé", "Taipei"]],
  gentilico: ["Taiwanês"],
  continente: ["Ásia"],
  itamaraty: ["Taiwan (China)"],
  moeda: ["Novo dólar taiwanês", "Novo dólar"],
  idiomas: [["Mandarim"]],
  excecao:{tipo: "Entidade política autogovernada", placeholder: "Entidade política autogovernada", semCapital: false}
},
{
  codigo: "xk",
  pais: ["Kosovo"],
  capitais: [["Pristina"]],
  gentilico: ["Kosovar"],
  continente: ["Europa"],
  itamaraty: ["República do Kosovo"],
  moeda: ["Euro"],
  idiomas: [
    ["Albanês"],
    ["Sérvio"]
  ],
  excecao:{tipo: "Estado parcialmente reconhecido", placeholder: "Estado parcialmente reconhecido", semCapital: false}
},
{
  codigo: "eh",
  pais: ["Saara Ocidental"],
  capitais: [["Laayoune", "El Aaiún"]],
  gentilico: ["Saaraoui"],
  continente: ["África"],
  itamaraty: ["Saara Ocidental"],
  moeda: ["Dirham marroquino", "Dirham"],
  idiomas: [
    ["Árabe"],
    ["Espanhol"]
  ],
  excecao:{tipo: "Território não autônomo segundo a ONU", placeholder: "Território não autônomo segundo a ONU", semCapital: false}
},
{
  codigo: "so",
  pais: ["Somaliland"],
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Somaliland.svg",
  capitais: [["Hargeisa"]],
  gentilico: ["Somalilandês"],
  continente: ["África"],
  itamaraty: ["Somaliland"],
  moeda: ["Xelim da Somaliland", "Xelim"],
  idiomas: [["Somali"], ["Árabe"]],
  excecao:{tipo: "Entidade política autodeclarada independente", placeholder: "Entidade política autodeclarada independente", semCapital: false}
},
{
  codigo: "ck",
  pais: ["Ilhas Cook"],
  capitais: [["Avarua"]],
  gentilico: ["Cookiano"],
  continente: ["Oceania"],
  itamaraty: ["Ilhas Cook"],
  moeda: ["Dólar neozelandês", "Dólar"],
  idiomas: [
    ["Inglês"],
    ["Maori das Ilhas Cook", "Maori"]
  ],
  excecao:{tipo: "Estado autônomo em livre associação com a Nova Zelândia", placeholder: "Estado autônomo em livre associação com a Nova Zelândia", semCapital: false}
},
{
  codigo: "nu",
  pais: ["Niue"],
  capitais: [["Alofi"]],
  gentilico: ["Niuiano"],
  continente: ["Oceania"],
  itamaraty: ["Niue"],
  moeda: ["Dólar neozelandês", "Dólar"],
  idiomas: [
    ["Niuiano"],
    ["Inglês"]
  ],
  excecao:{tipo: "Estado autônomo em livre associação com a Nova Zelândia", placeholder: "Estado autônomo em livre associação com a Nova Zelândia", semCapital: false}
},
{
  codigo: "ai",
  pais: ["Anguila"],
  capitais: [["The Valley"]],
  gentilico: ["Anguilano"],
  continente: ["América"],
  itamaraty: ["Anguila"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "bm",
  pais: ["Bermuda"],
  capitais: [["Hamilton"]],
  gentilico: ["Bermudense"],
  continente: ["América"],
  itamaraty: ["Bermuda"],
  moeda: ["Dólar bermudense", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "ky",
  pais: ["Ilhas Cayman"],
  capitais: [["George Town", "Georgetown"]],
  gentilico: ["Caimanês"],
  continente: ["América"],
  itamaraty: ["Ilhas Cayman"],
  moeda: ["Dólar das Ilhas Cayman", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "tc",
  pais: ["Ilhas Turcas e Caicos"],
  capitais: [["Cockburn Town"]],
  gentilico: ["Turco-caicano", "Turco caicano"],
  continente: ["América"],
  itamaraty: ["Ilhas Turcas e Caicos"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "vg",
  pais: ["Ilhas Virgens Britânicas"],
  capitais: [["Road Town"]],
  gentilico: ["Virgem-britânico", "Virgem britânico"],
  continente: ["América"],
  itamaraty: ["Ilhas Virgens Britânicas"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "ms",
  pais: ["Montserrat"],
  capitais: [["Brades"]],
  gentilico: ["Monserratense"],
  continente: ["América"],
  itamaraty: ["Montserrat"],
  moeda: ["Dólar do Caribe Oriental", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "fk",
  pais: ["Ilhas Malvinas (Ilhas Falkland)", "Ilhas Falkland", "Ilhas Malvinas"],
  capitais: [["Stanley"]],
  gentilico: ["Malvinense (Falklandês)", "Falklandês", "Malvinense"],
  continente: ["América"],
  itamaraty: ["Ilhas Malvinas"],
  moeda: ["Libra das Ilhas Malvinas", "Libra"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "pn",
  pais: ["Ilhas Pitcairn"],
  capitais: [["Adamstown"]],
  gentilico: ["Pitcairnês"],
  continente: ["Oceania"],
  itamaraty: ["Ilhas Pitcairn"],
  moeda: ["Dólar da Nova Zelândia"],
  idiomas: [["Inglês"], ["Pitcairnês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "sh",
  pais: ["Santa Helena"],
  capitais: [["Jamestown"]],
  gentilico: ["Santa helenense"],
  continente: ["África"],
  itamaraty: ["Santa Helena"],
  moeda: ["Libra de Santa Helena", "Libra"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "ac",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Ascension_Island.svg",
  pais: ["Ilha Ascensão", "Ascensão"],
  capitais: [["Georgetown"]],
  gentilico: ["Santa helenense"],
  continente: ["África"],
  itamaraty: ["Ilha Ascensão"],
  moeda: ["Libra de Santa Helena", "Libra"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "ta",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Tristan_da_Cunha.svg",
  pais: ["Tristão da Cunha"],
  capitais: [["Edimburgo dos Sete Mares"]],
  gentilico: ["Tristanita"],
  continente: ["África"],
  itamaraty: ["Tristão da Cunha"],
  moeda: ["Libra de Santa Helena", "Libra"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "gp",
  pais: ["Guadalupe"],
  capitais: [["Basse-Terre", "Basse Terre"]],
  gentilico: ["Guadalupense"],
  continente: ["América"],
  itamaraty: ["Guadalupe"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Departamento e região ultramarina da França", placeholder: "Departamento e região ultramarina da França", semCapital: false}
},
{
  codigo: "mq",
  pais: ["Martinica"],
  capitais: [["Fort-de-France", "Fort de France"]],
  gentilico: ["martinicano"],
  continente: ["América"],
  itamaraty: ["Martinica"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Coletividade territorial única da França", placeholder: "Coletividade territorial única da França", semCapital: false}
},
{
  codigo: "sx",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg",
  pais: [
    "São Martinho",
    "Saint Martin"
  ],
  capitais: [
    ["Marigot (Parte Francesa)", "Marigot"],
    ["Philipsburg (Parte Holandesa)", "Philipsburg"]
  ],
  gentilico: ["São-marinhense", "são marinhense", "são-marinense", "samarinês", "san marinense"],
  continente: ["América"],
  itamaraty: ["São Martinho"],
  moeda: ["Euro", "Florim do Caribe", "Florim"],
  idiomas: [["Francês"], ["Neerlandês", "Holandês"], ["Inglês"]],
  excecao:{tipo: "Coletividade ultramarina francesa", placeholder: "Coletividade ultramarina francesa", semCapital: false}
},
{
  codigo: "bl",
  pais: [
    "São Bartolomeu",
    "Saint Barthélemy",
    "Saint Barthelemy"
  ],
  capitais: [["Gustavia"]],
  gentilico: ["São Bartolomeense"],
  continente: ["América"],
  itamaraty: ["São Bartolomeu"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Coletividade ultramarina francesa", placeholder: "Coletividade ultramarina francesa", semCapital: false}
},
{
  codigo: "pm",
  pais: [
    "São Pedro e Miquelão",
    "São Pedro e Miquelon",
    "Saint Pierre e Miquelon"
  ],
  capitais: [["Saint-Pierre", "Saint Pierre"]],
  gentilico: ["São-pedrense", "São pedrense"],
  continente: ["América"],
  itamaraty: ["São Pedro e Miquelão"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Coletividade ultramarina francesa", placeholder: "Coletividade ultramarina francesa", semCapital: false}
},
{
  codigo: "re",
  pais: ["Reunião"],
  capitais: [["Saint-Denis", "Saint Denis"]],
  gentilico: ["Reunionense"],
  continente: ["África"],
  itamaraty: ["Reunião"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Departamento e região ultramarina da França", placeholder: "Departamento e região ultramarina da França", semCapital: false}
},
{
  codigo: "yt",
  pais: ["Mayotte"],
  capitais: [["Mamoudzou"]],
  gentilico: ["Maiotense"],
  continente: ["África"],
  itamaraty: ["Mayotte"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Departamento e região ultramarina da França", placeholder: "Departamento e região ultramarina da França", semCapital: false}
},
{
  codigo: "pf",
  pais: ["Polinésia Francesa"],
  capitais: [["Papeete"]],
  gentilico: ["Polinésio", "polinésico"],
  continente: ["Oceania"],
  itamaraty: ["Polinésia Francesa"],
  moeda: ["Franco CFP", "Franco"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Coletividade ultramarina francesa", placeholder: "Coletividade ultramarina francesa", semCapital: false}
},
{
  codigo: "nc",
  pais: ["Nova Caledônia"],
  capitais: [["Numeá", "Nouméa"]],
  gentilico: ["Neocaledônio"],
  continente: ["Oceania"],
  itamaraty: ["Nova Caledônia"],
  moeda: ["Franco CFP", "Franco"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Coletividade sui generis francesa", placeholder: "Coletividade sui generis francesa", semCapital: false}
},
{
  codigo: "wf",
  pais: ["Wallis e Futuna"],
  capitais: [["Mata Utu"]],
  gentilico: ["Wallisense"],
  continente: ["Oceania"],
  itamaraty: ["Wallis e Futuna"],
  moeda: ["Franco CFP", "Franco"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Coletividade ultramarina francesa", placeholder: "Coletividade ultramarina francesa", semCapital: false}
},
{
  codigo: "pr",
  pais: ["Porto Rico"],
  capitais: [["San Juan"]],
  gentilico: ["Porto-riquenho"],
  continente: ["América"],
  itamaraty: ["Porto Rico"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Espanhol"], ["Inglês"]],
  excecao:{tipo: "Território não incorporado dos Estados Unidos", placeholder: "Território não incorporado dos Estados Unidos", semCapital: false}
},
{
  codigo: "vi",
  pais: ["Ilhas Virgens Americanas"],
  capitais: [["Charlotte Amalie"]],
  gentilico: ["Virginense"],
  continente: ["América"],
  itamaraty: ["Ilhas Virgens Americanas"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território não incorporado dos Estados Unidos", placeholder: "Território não incorporado dos Estados Unidos", semCapital: false}
},
{
  codigo: "gu",
  pais: ["Guam"],
  capitais: [["Hagåtña"]],
  gentilico: ["Guamês"],
  continente: ["Oceania"],
  itamaraty: ["Guam"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"], ["Chamorro"]],
  excecao:{tipo: "Território não incorporado dos Estados Unidos", placeholder: "Território não incorporado dos Estados Unidos", semCapital: false}
},
{
  codigo: "as",
  pais: ["Samoa Americana"],
  capitais: [["Pago Pago"]],
  gentilico: ["Samoano", "samoense"],
  continente: ["Oceania"],
  itamaraty: ["Samoa Americana"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"], ["Samoano"]],
  excecao:{tipo: "Território não incorporado dos Estados Unidos", placeholder: "Território não incorporado dos Estados Unidos", semCapital: false}
},
{
  codigo: "mp",
  pais: ["Ilhas Marianas Setentrionais", "Marianas do Norte"],
  capitais: [["Saipan", "Saipa"]],
  gentilico: ["Norte-marianense", "Norte marianense"],
  continente: ["Oceania"],
  itamaraty: ["Ilhas Marianas Setentrionais"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"], ["Chamorro"], ["Caroliniano"]],
  excecao:{tipo: "Comunidade em união política com os Estados Unidos", placeholder: "Comunidade em união política com os Estados Unidos", semCapital: false}
},
{
  codigo: "aw",
  pais: ["Aruba"],
  capitais: [["Oranjestad"]],
  gentilico: ["Arubano"],
  continente: ["América"],
  itamaraty: ["Aruba"],
  moeda: ["Florim Arubano", "Florim"],
  idiomas: [["Neerlandês", "Holandês"], ["Papiamento"]],
  excecao:{tipo: "País constituinte do Reino dos Países Baixos", placeholder: "País constituinte do Reino dos Países Baixos", semCapital: false}
},
{
  codigo: "cw",
  pais: ["Curaçao"],
  capitais: [["Willemstad"]],
  gentilico: ["Curaçolenho"],
  continente: ["América"],
  itamaraty: ["Curaçao"],
  moeda: ["Florim do Caribe", "Florim"],
  idiomas: [["Neerlandês", "Holandês"], ["Papiamento"], ["Inglês"]],
  excecao:{tipo: "País constituinte do Reino dos Países Baixos", placeholder: "País constituinte do Reino dos Países Baixos", semCapital: false}
},
{
  codigo: "bq",
  pais: ["Bonaire"],
  capitais: [["Kralendijk"]],
  gentilico: ["Bonairense"],
  continente: ["América"],
  itamaraty: ["Bonaire"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Neerlandês", "Holandês"], ["Papiamento"], ["Inglês"]],
  excecao:{tipo: "Município especial dos Países Baixos", placeholder: "Município especial dos Países Baixos", semCapital: false}
},
{
  codigo: "sa",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Saba.svg",
  pais: ["Saba"],
  capitais: [["The Bottom"]],
  gentilico: ["Sabano"],
  continente: ["América"],
  itamaraty: ["Saba"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Neerlandês", "Holandês"], ["Inglês"]],
  excecao:{tipo: "Município especial dos Países Baixos", placeholder: "Município especial dos Países Baixos", semCapital: false}
},
{
  codigo: "se",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Sint_Eustatius.svg",
  pais: ["Santo Eustáquio"],
  capitais: [["Oranjestad"]],
  gentilico: ["Neerlandês caribenho"],
  continente: ["América"],
  itamaraty: ["Santo Eustáquio"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Neerlandês", "Holandês"], ["Inglês"]],
  excecao:{tipo: "Município especial dos Países Baixos", placeholder: "Município especial dos Países Baixos", semCapital: false}
},
{
  codigo: "gl",
  pais: ["Groenlândia"],
  capitais: [["Nuuk"]],
  gentilico: ["Groenlandês"],
  continente: ["América"],
  itamaraty: ["Groenlândia"],
  moeda: ["Coroa Dinamarquesa", "Coroa"],
  idiomas: [["Groenlandês"], ["Dinamarquês"]],
  excecao:{tipo: "País constituinte/autônomo do Reino da Dinamarca", placeholder: "País constituinte/autônomo do Reino da Dinamarca", semCapital: false}
},
{
  codigo: "fo",
  pais: ["Ilhas Faroe", "Ilhas Feroe"],
  capitais: [["Tórshavn"]],
  gentilico: ["Faroês", "feroês", "faroense"],
  continente: ["Europa"],
  itamaraty: ["Ilhas Faroe"],
  moeda: ["Coroa Faroesa", "Coroa Dinamarquesa", "Coroa"],
  idiomas: [["Feroês"], ["Dinamarquês"]],
  excecao:{tipo: "País constituinte/autônomo do Reino da Dinamarca", placeholder: "País constituinte/autônomo do Reino da Dinamarca", semCapital: false}
},
{
  codigo: "nf",
  pais: ["Ilha Norfolk"],
  capitais: [["Kingston"]],
  gentilico: ["Norfolquino", "norfolkino"],
  continente: ["Oceania"],
  itamaraty: ["Ilha Norfolk"],
  moeda: ["Dólar Australiano", "Dólar"],
  idiomas: [["Inglês"], ["Norfuk"]],
  excecao:{tipo: "Território externo da Austrália", placeholder: "Território externo da Austrália", semCapital: false}
},
{
  codigo: "cc",
  pais: ["Ilhas Cocos (Keeling)", "Ilhas Cocos"],
  capitais: [["West Island"]],
  gentilico: ["Coquense"],
  continente: ["Oceania"],
  itamaraty: ["Ilhas Cocos (Keeling)"],
  moeda: ["Dólar Australiano", "Dólar"],
  idiomas: [["Inglês"], ["Malaio Cocos"]],
  excecao:{tipo: "Território externo da Austrália", placeholder: "Território externo da Austrália", semCapital: false}
},
{
  codigo: "cx",
  pais: ["Ilha Christmas"],
  capitais: [["Flying Fish Cove"]],
  gentilico: ["Natalense"],
  continente: ["Oceania"],
  itamaraty: ["Ilha Christmas"],
  moeda: ["Dólar Australiano", "Dólar"],
  idiomas: [["Inglês"], ["Mandarim"], ["Malaio"]],
  excecao:{tipo: "Território externo da Austrália", placeholder: "Território externo da Austrália", semCapital: false}
},
{
  codigo: "tk",
  pais: ["Toquelau", "Tokelau"],
  capitais: [
    ["Atafu"],
    ["Nukunonu"],
    ["Fakaofo"]
  ],
  gentilico: ["Toquelauano"],
  continente: ["Oceania"],
  itamaraty: ["Toquelau"],
  moeda: ["Dólar da Nova Zelândia", "Dólar"],
  idiomas: [["Toquelauano"], ["Inglês"]],
  excecao:{tipo: "Território dependente da Nova Zelândia", placeholder: "Território dependente da Nova Zelândia", semCapital: false}
},
{
  codigo: "ic",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_the_Canary_Islands_%28simple%29.svg",
  pais: ["Ilhas Canárias"],
  capitais: [
    ["Santa Cruz de Tenerife"],
    ["Las Palmas de Gran Canaria"]
  ],
  gentilico: ["Canário", "canariense", "canarino"],
  continente: ["África"],
  itamaraty: ["Ilhas Canárias"],
  moeda: ["Euro"],
  idiomas: [["Espanhol"]],
  excecao:{tipo: "Comunidade autônoma da Espanha", placeholder: "Comunidade autônoma da Espanha", semCapital: false}
},
{
  codigo: "ct",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_the_Turkish_Republic_of_Northern_Cyprus.svg",
  pais: ["Chipre do Norte"],
  capitais: [["Nicósia do Norte"]],
  gentilico: ["Cipriota Turco", "norte cipriota"],
  continente: ["Ásia"],
  itamaraty: ["República Turca do Norte de Chipre"],
  moeda: ["Lira Turca", "Lira"],
  idiomas: [["Turco"]],
  excecao:{tipo: "Estado autodeclarado", placeholder: "Estado autodeclarado", semCapital: false}
},
{
  codigo: "ab",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_the_Republic_of_Abkhazia.svg",
  pais: ["Abecásia"],
  capitais: [["Sucumi", "Sukhumi"]],
  gentilico: ["Abecásio", "Abcásio"],
  continente: ["Europa"],
  itamaraty: ["Abecásia"],
  moeda: ["Rublo Russo", "Rublo"],
  idiomas: [["Abecásio", "abcázio"], ["Russo"]],
  excecao:{tipo: "Estado autodeclarado", placeholder: "Estado autodeclarado", semCapital: false}
},
{
  codigo: "os",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_South_Ossetia.svg",
  pais: ["Ossétia do Sul"],
  capitais: [["Tskhinvali"]],
  gentilico: ["Osseta", "Sul osseta", "Osseto"],
  continente: ["Ásia"],
  itamaraty: ["Ossétia do Sul"],
  moeda: ["Rublo Russo", "Rublo"],
  idiomas: [["Ossético"], ["Russo"]],
  excecao:{tipo: "Estado autodeclarado", placeholder: "Estado autodeclarado", semCapital: false}
},
{
  codigo: "pmr",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Transnistria_%28state%29.svg",
  pais: ["Transnístria"],
  capitais: [["Tiraspol"]],
  gentilico: ["Transdniestriano", "transdnístrio", "transdnistriano", "transnístrio", "transnistriano"],
  continente: ["Europa"],
  itamaraty: ["Transnístria"],
  moeda: ["Rublo Transnistriano", "Rublo"],
  idiomas: [["Russo"], ["Moldavo", "Romeno"], ["Ucraniano"]],
  excecao:{tipo: "Estado autodeclarado", placeholder: "Estado autodeclarado", semCapital: false}
},
{
  codigo: "ar",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Artsakh.svg",
  pais: ["Artsakh (Nagorno-Karabakh)", "Artsakh", "Nagorno Karabakh", "Artsaque", "Alto Carabaque"],
  capitais: [["Stepanakert", "Khankendi"]],
  gentilico: ["Alto-carabaquense", "alto carabaquense", "artsaquiano"],
  continente: ["Ásia"],
  itamaraty: ["Artsakh"],
  moeda: ["Dram Armênio", "Dram"],
  idiomas: [["Armênio"]],
  excecao:{tipo: "Entidade autodeclarada que deixou de existir de facto após 2023", placeholder: "Entidade autodeclarada", semCapital: false}
},
{
  codigo: "gs",
  pais: [
    "Ilhas Geórgia do Sul e Sandwich do Sul",
    "Ilhas Georgia e Sandwich do Sul"
  ],
  capitais: [["King Edward Point"]],
  gentilico: ["sul-georgiano"],
  continente: ["América", "Antártida"],
  itamaraty: ["Ilhas Geórgia do Sul e Sandwich do Sul"],
  moeda: ["Libra Esterlina", "Libra"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "io",
  pais: ["Território Britânico do Oceano Índico"],
  capitais: [["Diego Garcia"]],
  gentilico: ["Chagosiano (Arquipélago de Chagos)", "Chagosiano"],
  continente: ["Ásia"],
  itamaraty: ["Território Britânico do Oceano Índico"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "tf",
  pais: ["Terras Austrais e Antárticas Francesas"],
  capitais: [["Saint-Pierre", "Saint Pierre", "São Pedro"]],
  gentilico: ["Austral e antártico francês"],
  continente: ["Antártida"],
  itamaraty: ["Terras Austrais e Antárticas Francesas"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Território ultramarino francês", placeholder: "Território ultramarino francês", semCapital: false}
},
{
  codigo: "gf",
  pais: ["Guiana Francesa"],
  capitais: [["Caiena", "Cayenne"]],
  gentilico: ["Guianense"],
  continente: ["América"],
  itamaraty: ["Guiana Francesa"],
  moeda: ["Euro"],
  idiomas: [["Francês"]],
  excecao:{tipo: "Departamento e região ultramarina da França", placeholder: "Departamento e região ultramarina da França", semCapital: false}
},
{
  codigo: "im",
  pais: ["Ilha de Man"],
  capitais: [["Douglas"]],
  gentilico: ["Manês", "Manquês", "Manx"],
  continente: ["Europa"],
  itamaraty: ["Ilha de Man"],
  moeda: ["Libra Manx", "Libra"], 
  idiomas: [["Inglês"], ["Manx"]],
  excecao:{tipo: "Dependência da Coroa Britânica", placeholder: "Dependência da Coroa Britânica", semCapital: false}
},
{
  codigo: "je",
  pais: ["Jersey"],
  capitais: [["Saint Helier", "Santo Helério"]],
  gentilico: ["Jersiano"],
  continente: ["Europa"],
  itamaraty: ["Jersey"],
  moeda: ["Libra de Jersey", "Libra"],
  idiomas: [["Inglês"], ["Francês"], ["Jèrriais"]],
  excecao:{tipo: "Dependência da Coroa Britânica", placeholder: "Dependência da Coroa Britânica", semCapital: false}
},
{
  codigo: "gg",
  pais: ["Guernsey"],
  capitais: [["Saint Peter Port"]],
  gentilico: ["Guernesiano"],
  continente: ["Europa"],
  itamaraty: ["Guernsey"],
  moeda: ["Libra de Guernsey", "Libra"],
  idiomas: [["Inglês"], ["Guernesiais"]],
  excecao:{tipo: "Dependência da Coroa Britânica", placeholder: "Dependência da Coroa Britânica", semCapital: false}
},
{
  codigo: "ax",
  pais: ["Ilhas Åland"],
  capitais: [["Mariehamn"]],
  gentilico: ["alandês"],
  continente: ["Europa"],
  itamaraty: ["Ilhas Åland"],
  moeda: ["Euro"],
  idiomas: [["Sueco"]],
  excecao:{tipo: "Região Autônoma e Desmilitarizada da Finlândia", placeholder: "Região Autônoma e Desmilitarizada da Finlândia", semCapital: false}
},
{
  codigo: "gi",
  pais: ["Gibraltar"],
  capitais: [["Gibraltar"]],
  gentilico: ["Gibraltino", "gibraltarino"],
  continente: ["Europa"],
  itamaraty: ["Gibraltar"],
  moeda: ["Libra de Gibraltar", "Libra"],
  idiomas: [["Inglês"]],
  excecao:{tipo: "Território britânico ultramarino", placeholder: "Território britânico ultramarino", semCapital: false}
},
{
  codigo: "mo",
  pais: ["Macau"],
  capitais: [["Macau"]],
  gentilico: ["Macaense"],
  continente: ["Ásia"],
  itamaraty: ["Macau"],
  moeda: ["Pataca"],
  idiomas: [["Chinês"], ["Português"]],
  excecao:{tipo: "Região Administrativa Especial da República Popular da China", placeholder: "Região Administrativa Especial da República Popular da China", semCapital: false}
},
{
  codigo: "sc",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
  pais: ["Escócia"],
  capitais: [["Edimburgo"]],
  gentilico: ["Escocês"],
  continente: ["Europa"],
  itamaraty: ["Escócia"],
  moeda: ["Libra Esterlina", "Libra"],
  idiomas: [["Inglês"], ["Gaélico Escocês"], ["Escocês"]],
  excecao:{tipo: "País constituinte do Reino Unido", placeholder: "País constituinte do Reino Unido", semCapital: false}
},
{
  codigo: "sk",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Sark.svg",
  pais: ["Sark"],
  capitais: [["La Seigneurie"]],
  gentilico: ["Sarkês", "sarkesa"],
  continente: ["Europa"],
  itamaraty: ["Sark"],
  moeda: ["Libra de Guernsey", "Libra"],
  idiomas: [["Inglês"], ["Sercquiais"]],
  excecao:{tipo: "Dependência de Guernsey", placeholder: "Dependência de Guernsey", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Rapa_Nui%2C_Chile.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Ilha de Páscoa", "Rapa Nui"],
  capitais: [["Hanga Roa"]],
  gentilico: ["Pascoense", "Rapanui"],
  continente: ["América"],
  itamaraty: ["Ilha de Páscoa"],
  moeda: ["Peso Chileno", "Peso"],
  idiomas: [["Espanhol"], ["Rapanui"]],
  excecao:{tipo: "Território Insular Especial", placeholder: "Território Insular Especial", semCapital: false}
},
{
  codigo: "wl",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
  pais: ["País de Gales"],
  capitais: [["Cardiff"]],
  gentilico: ["Galês"],
  continente: ["Europa"],
  itamaraty: ["País de Gales"],
  moeda: ["Libra Esterlina", "Libra"],
  idiomas: [["Inglês"], ["Galês"]],
  excecao:{tipo: "País constituinte do Reino Unido", placeholder: "País constituinte do Reino Unido", semCapital: false}
},
{
  codigo: "ni",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg",
  pais: ["Irlanda do Norte"],
  capitais: [["Belfast"]],
  gentilico: ["Norte-irlandês"],
  continente: ["Europa"],
  itamaraty: ["Irlanda do Norte"],
  moeda: ["Libra Esterlina", "Libra"],
  idiomas: [["Inglês"], ["Irlandês"], ["Ulster Scots"]],
  excecao:{tipo: "País constituinte/parte constituinte do Reino Unido", placeholder: "País constituinte/parte constituinte do Reino Unido", semCapital: false}
},
{
  codigo: "eu",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  pais: ["União Europeia"],
  capitais: [
    ["Bruxelas"],
    ["Estrasburgo"]
  ],
  gentilico: ["Europeu"],
  continente: ["Europa"],
  itamaraty: ["União Europeia"],
  moeda: ["Euro"],
  idiomas: [],
  excecao:{tipo: "Organização Supranacional", placeholder: "Organização Supranacional", campoCapital: "Principais Centros de Decisão Política", placeholderCapital: "Centro de Decisão", semCapital: false}
},
{
  codigo: "hk",
  pais: ["Hong Kong"],
  capitais: [],
  gentilico: ["Hong-conguês"],
  continente: ["Ásia"],
  itamaraty: ["Hong Kong"],
  moeda: ["Dólar de Hong Kong", "Dólar"],
  idiomas: [["Chinês"], ["Inglês"]],
  excecao:{tipo: "Região Administrativa Especial", placeholder: "Região Administrativa Especial", semCapital: true}
},
{
  codigo: "tb",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  pais: [
    "Afeganistão (Talibã)",
    "Afeganistão", "Talibã"
  ],
  capitais: [],
  gentilico: ["Afegão"],
  continente: ["Ásia"],
  itamaraty: ["Emirado Islâmico do Afeganistão"],
  moeda: ["Afegane"],
  idiomas: [["Pachto"], ["Dari"]],
  excecao:{tipo: "Bandeira do Atual Regime", placeholder: "Bandeira do Atual Regime", semCapital: true}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tino_Rangatiratanga_Maori_sovereignty_movement_flag_%283-2%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Maori"],
  capitais: [],
  gentilico: ["Maori"],
  continente: ["Oceania"],
  itamaraty: ["Maori"],
  moeda: ["Dólar Neozelandês", "dolar"],
  idiomas: [["Te Reo Māori", "Maori"]],
  excecao:{tipo: "Símbolo Nacional de Povo Indígena", placeholder: "Símbolo Nacional de Povo Indígena", semCapital: true}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Mapuches_%281992%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Mapuche"],
  capitais: [],
  gentilico: ["Mapuche"],
  continente: ["América"],
  itamaraty: ["Mapuche"],
  moeda: ["Peso chileno", "Peso"],
  idiomas: [["Mapudungun"], ["Castelhano"]],
  excecao:{tipo: "Nação Sem Estado", placeholder: "Nação Sem Estado", semCapital: true}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/13/Flag_of_Hawaii_%281816%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Havaí"],
  capitais: [["Honolulu"]],
  gentilico: ["Havaiano"],
  continente: ["América"],
  itamaraty: ["Havaí"],
  moeda: ["Dólar dos Estados Unidos", "Dólar"],
  idiomas: [["Ingles"], ["Havaiano"]],
  excecao:{tipo: "Estado Constituinte dos Eua", placeholder: "Estado Constituinte dos Eua", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_the_Basque_Country.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["País Basco"],
  capitais: [["Vitoria-Gasteiz", "Vitoria Gasteiz"]],
  gentilico: ["Basco", "Vasco", "Euskaldun"],
  continente: ["Europa"],
  itamaraty: ["Páis Basco"],
  moeda: ["Euro"],
  idiomas: [["Basco"], ["Castelhano"], ["Francês"]],
  excecao:{tipo: "Comunidade Autónoma", placeholder: "Comunidade Autónoma", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Azad_Kashmir.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Caxemira"],
  capitais: [],
  gentilico: ["Caxemire", "caxemirense", "caxemiriano"],
  continente: ["Ásia"],
  itamaraty: ["Caxemira"],
  moeda: ["Rúpia"],
  idiomas: [["Caxemira"], ["Dogri"], ["Urdu"], ["Híndi"], ["Inglês"]],
  excecao:{tipo: "Território em Disputa Geopolítica", placeholder: "Território em Disputa Geopolítica", semCapital: true}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Tibet.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Tibete"],
  capitais: [["Lassa", "Lhasa"]],
  gentilico: ["Tibetano"],
  continente: ["Ásia"],
  itamaraty: ["Tibete"],
  moeda: ["Yuan Chinês", "Yuan"],
  idiomas: [["Tibetano"], ["Mandarim"]],
  excecao:{tipo: "Região Autônoma", placeholder: "Região Autônoma", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Balochistan_Flag.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Baluchistão"],
  capitais: [["Quetta", "Zahedan", "Zaranj"]],
  gentilico: ["Balúchi", "Baloche"],
  continente: ["Ásia"],
  itamaraty: ["Baluchistão"],
  moeda: ["Rupia", "Rial", "Afegane"],
  idiomas: [["Balúchi"], ["Brahui"], ["Sindi"]],
  excecao:{tipo: "Região Separatista", placeholder: "Região Separatista com Desejo de Autonomia", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Kokbayraq_flag.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Turquestão Oriental", "Turquestão"],
  capitais: [["Ürümqi", "Urumchi"]],
  gentilico: ["Uigur", "Uiguir", "Turquistanes", "Turquestanes"],
  continente: ["Ásia"],
  itamaraty: ["Turquestão Oriental"],
  moeda: ["Yuan", "Kashgar"],
  idiomas: [["Mandarim"], ["Uigur"]],
  excecao:{tipo: "Região Separatista", placeholder: "Região Separatista com Desejo de Autonomia", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kurdistan.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Curdistão"],
  capitais: [["Erbil (Hewlêr)", "Erbil", "Hewlêr"], ["Diyarbakir (Amed)", "Diyarbakir", "Amed"]],
  gentilico: ["Curdo"],
  continente: ["Ásia"],
  itamaraty: ["Curdistão"],
  moeda: ["Dinar", "Lira", "Libra", "Rial"],
  idiomas: [["Curdo"], ["Árabe"], ["Siríaco"]],
  excecao:{tipo: "Região de Autonomia Política Parcial", placeholder: "Região de Autonomia Política Parcial", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/6f/SFR_Yugoslavia_Flag.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Iugoslávia", "Jugoslávia "],
  capitais: [["Belgrado"]],
  gentilico: ["Iugoslavo"],
  continente: ["Europa"],
  itamaraty: ["República Socialista Federativa da Iugoslávia"],
  moeda: ["Dinar Iugoslavo", "Dinar"],
  idiomas: [["Servo Croata"], ["Esloveno"], ["Macedonio"]],
  excecao:{tipo: "Países Históricos", placeholder: "Países Históricos", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Flag_of_Tanganyika_%281923%E2%80%931961%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Tanganica"],
  capitais: [["Dar es Salaam"]],
  gentilico: ["Tanganicano"],
  continente: ["África"],
  itamaraty: ["Tanganica"],
  moeda: ["Xelim"],
  idiomas: [["Suaíli"], ["Inglês"]],
  excecao:{tipo: "País Histórico", placeholder: "País Histórico", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_Tanganyika_%281961%E2%80%931964%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Tanganica"],
  capitais: [["Dar es Salaam"]],
  gentilico: ["Tanganicano"],
  continente: ["África"],
  itamaraty: ["Tanganica"],
  moeda: ["Xelim"],
  idiomas: [["Suaíli"], ["Inglês"]],
  excecao:{tipo: "País Histórico", placeholder: "País Histórico", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Zanzibar.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Zanzibar"],
  capitais: [["Cidade de Zanzibar", "Zanzibar"]],
  gentilico: ["Zanzibarita", "zanzibarense"],
  continente: ["África"],
  itamaraty: ["Governo Revolucionário de Zanzibar", "Sultanato de Zanzibar"],
  moeda: ["Xelim Tanzaniano", "Xelim"],
  idiomas: [["Suíli", "Kiswahili"], ["Inglês"]],
  excecao:{tipo: "Região Política Semiautônoma", placeholder: "Região Política Semiautônoma", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Zaire_%281971%E2%80%931997%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Zaire"],
  capitais: [["Kinshasa"]],
  gentilico: ["Zairense"],
  continente: ["África"],
  itamaraty: ["República do Zaire"],
  moeda: ["Zaire"],
  idiomas: [["Francês"]],
  excecao:{tipo: "País Histórico", placeholder: "País Histórico", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["União Soviética"],
  capitais: [["Moscou"]],
  gentilico: ["Soviétco"],
  continente: ["Europa", "Ásia"],
  itamaraty: ["União das Repúblicas Socialistas Soviéticas"],
  moeda: ["Rublo soviético", "Rublo"],
  idiomas: [["Russo"]],
  excecao:{tipo: "País Histórico", placeholder: "País Histórico", semCapital: false}
},
{
  codigo: "un",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Organização das Nações Unidas", "ONU"],
  capitais: [
    ["Nova Iorque", "Nova York", "New York"],
    ["Genebra"]
  ],
  gentilico: [""],
  continente: [""],
  itamaraty: ["Organização das Nações Unidas"],
  moeda: [""],
  idiomas: [
    [""]
  ],
  excecao:{tipo: "Organização Internacional Intergovernamental", placeholder: "Organização Internacional Intergovernamental", campoCapital: "Principáis Centros de Tomada de Decisão", placeholderCapital: "Principáis Centros de Tomada de Decisão", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Flag_of_the_United_Arab_Republic_%281958%E2%80%931971%29%2C_Flag_of_Syria_%281980%E2%80%932024%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Síria Dinastia Assad", "Síria"],
  capitais: [],
  gentilico: ["Sírio"],
  continente: ["Ásia"],
  itamaraty: ["República Árabe da Síria"],
  moeda: ["Libra síria", "Libra"],
  idiomas: [["Árabe"]],
  excecao:{tipo: "Bandeira Antiga", placeholder: "Bandeira Antiga", semCapital: true}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Upper_Volta.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Alto Volta"],
  capitais: [["Uagadugu", "Ouagadougou"]],
  gentilico: ["Alto-Voltense", "alto voltense"],
  continente: ["África"],
  itamaraty: ["República do Alto Volta"],
  moeda: ["Franco CFA BCEAO", "Franco"],
  idiomas: [["Francês"]],
  excecao:{tipo: "País Histórico", placeholder: "País Histórico", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_the_Yemen_Arab_Republic.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Iêmen do Norte", "República Árabe do Iêmen"],
  capitais: [["Sana"]],
  gentilico: ["Norte-Iemenita", "Norte Iemenita"],
  continente: ["Ásia"],
  itamaraty: ["República Árabe do Iêmen"],
  moeda: ["Rial do Iêmen do Norte", "Rial"],
  idiomas: [["Árabe"]],
  excecao:{tipo: "País Antes da Unificação", placeholder: "País Antes da Unificação", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_South_Yemen.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Iêmen do Sul", "República Democrática Popular do Iêmen"],
  capitais: [["Áden"]],
  gentilico: ["Sul-Iemenita", "Sul Iemenita"],
  continente: ["Ásia"],
  itamaraty: ["República Democrática Popular do Iêmen"],
  moeda: ["Dinar do Iêmen do Sul", "Dinar"],
  idiomas: [["Árabe"]],
  excecao:{tipo: "País Antes da Unificação", placeholder: "País Antes da Unificação", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Acre"],
  capitais: [["Rio Branco"]],
  gentilico: ["Acriano", "Acreano"],
  continente: ["América"],
  itamaraty: ["Acre"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Alagoas"],
  capitais: [["Maceió"]],
  gentilico: ["Alagoano"],
  continente: ["América"],
  itamaraty: ["Alagoas"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Amapá"],
  capitais: [["Macapá"]],
  gentilico: ["Amapaense"],
  continente: ["América"],
  itamaraty: ["Amapá"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Amazonas"],
  capitais: [["Manaus"]],
  gentilico: ["Amazonense"],
  continente: ["América"],
  itamaraty: ["Amazonas"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Bahia"],
  capitais: [["Salvador"]],
  gentilico: ["Baiano"],
  continente: ["América"],
  itamaraty: ["Bahia"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Ceará"],
  capitais: [["Fortaleza"]],
  gentilico: ["Cearense"],
  continente: ["América"],
  itamaraty: ["Ceará"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Distrito Federal"],
  capitais: [["Brasília"]],
  gentilico: ["Brasiliense"],
  continente: ["América"],
  itamaraty: ["Distrito Federal"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Espírito Santo"],
  capitais: [["Vitória"]],
  gentilico: ["Capixaba ou espírito-santense", "espírito santense", "Capixaba"],
  continente: ["América"],
  itamaraty: ["Espírito Santo"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Goiás"],
  capitais: [["Goiânia"]],
  gentilico: ["Goiano"],
  continente: ["América"],
  itamaraty: ["Goiás"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Maranhão"],
  capitais: [["São Luís"]],
  gentilico: ["Maranhense"],
  continente: ["América"],
  itamaraty: ["Maranhão"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Mato Grosso"],
  capitais: [["Cuiabá"]],
  gentilico: ["Mato-grossense"],
  continente: ["América"],
  itamaraty: ["Mato Grosso"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Mato Grosso do Sul"],
  capitais: [["Campo Grande"]],
  gentilico: ["Sul-mato-grossense"],
  continente: ["América"],
  itamaraty: ["Mato Grosso do Sul"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Minas Gerais"],
  capitais: [["Belo Horizonte"]],
  gentilico: ["Mineiro"],
  continente: ["América"],
  itamaraty: ["Minas Gerais"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Pará"],
  capitais: [["Belém"]],
  gentilico: ["Paraense"],
  continente: ["América"],
  itamaraty: ["Pará"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "http://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Paraíba"],
  capitais: [["João Pessoa"]],
  gentilico: ["Paraibano"],
  continente: ["América"],
  itamaraty: ["Paraíba"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Paraná"],
  capitais: [["Curitiba"]],
  gentilico: ["Paranaense"],
  continente: ["América"],
  itamaraty: ["Paraná"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Pernambuco"],
  capitais: [["Recife"]],
  gentilico: ["Pernambucano"],
  continente: ["América"],
  itamaraty: ["Pernambuco"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Piauí"],
  capitais: [["Teresina"]],
  gentilico: ["Piauiense"],
  continente: ["América"],
  itamaraty: ["Piauí"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Rio de Janeiro"],
  capitais: [["Rio de Janeiro"]],
  gentilico: ["Fluminense (Carioca na capital)", "Carioca"],
  continente: ["América"],
  itamaraty: ["Rio de Janeiro"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Rio Grande do Norte"],
  capitais: [["Natal"]],
  gentilico: ["Potiguar ou norte-rio-grandense", "norte-rio-grandense"],
  continente: ["América"],
  itamaraty: ["Rio Grande do Norte"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Rio Grande do Sul"],
  capitais: [["Porto Alegre"]],
  gentilico: ["Gaúcho ou sul-rio-grandense", "Gaúcho", "sul-rio-grandense"],
  continente: ["América"],
  itamaraty: ["Rio Grande do Sul"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Rondônia"],
  capitais: [["Porto Velho"]],
  gentilico: ["Rondoniense ou rondoniano", "rondoniano", "Rondoniense"],
  continente: ["América"],
  itamaraty: ["Rondônia"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Roraima"],
  capitais: [["Boa Vista"]],
  gentilico: ["Roraimense"],
  continente: ["América"],
  itamaraty: ["Roraima"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Santa Catarina"],
  capitais: [["Florianópolis"]],
  gentilico: ["Catarinense ou barriga-verde", "barriga-verde", "Catarinense"],
  continente: ["América"],
  itamaraty: ["Santa Catarina"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["São Paulo"],
  capitais: [["São Paulo"]],
  gentilico: ["Paulista (paulistano é da capital)", "paulistano", "Paulista"],
  continente: ["América"],
  itamaraty: ["São Paulo"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Sergipe"],
  capitais: [["Aracaju"]],
  gentilico: ["Sergipano"],
  continente: ["América"],
  itamaraty: ["Sergipe"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
},
{
  codigo: "",
  bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  pais: ["Tocantins"],
  capitais: [["Palmas"]],
  gentilico: ["Tocantins"],
  continente: ["América"],
  itamaraty: ["Tocantins"],
  moeda: ["Real"],
  idiomas: [["Português"]],
  excecao:{tipo: "Estado Brasileiro", placeholder: "Estado Brasileiro", semCapital: false}
}
];