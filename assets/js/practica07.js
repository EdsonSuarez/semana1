
const comprobar = (n, lugar) => {
    if(n == null){
        alert("Debe ingresar algun dato");
        return false;
    } else {
        n = n.toLowerCase();
        if(lugar == "departamento"){
            bandera = "abcde".search(n);
            if(bandera === -1){
                alert("Debe ser una opcion valida entre A-E");
                return false;
            } else {
                return true;
            };
            
        }
        if(lugar == "ciudad"){
            bandera = "abcd".search(n);
            if(bandera === -1){
                alert("Debe ser una opcion valida entre A-D");
                return false;
            } else {
                return true;
            };
            
        }
        if(lugar == "plato"){
            bandera = "abc".search(n);
            if(bandera === -1){
                alert("Debe ser una opcion valida entre A-C");
                return false;
            } else {
                return true;
            };
            
        }
        
    }
}


let departamento = prompt("Escriba la opcion correspondiente al departamento: \n A. Santander \n B. Cundinamarca \n C. Antioquia \n D. Bolivar \n E. Valle del Cauca");

if(comprobar(departamento, "departamento")){
    departamento = departamento.toLowerCase();
    if (departamento == "a"){
        let ciudad = prompt("Escriba la opcion correspondiente a la ciudad: \n A. Bucaramanga \n B. Floridablanca  \n C. zapatoca \n D. Malaga");
        if(comprobar(ciudad, "ciudad")){
            ciudad = ciudad.toLowerCase();
            if (ciudad == "a"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Changua \n B. Pepitoria  \n C. Carne Oreada");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("La Changua es una especie de caldo muy distinto a los demás. Pues este se prepara con huevo, leche, cilantro, cebolla, mantequilla, tostadas y sal. Creando así un caldo que posee todas las vitaminas y minerales que necesitas para dar inicio a tu día. Además de tener un sabor exquisito con el que quedarás fascinado.");
                    if(plato == "b") alert("Es un plato que utiliza como ingrediente principal viseras de vaca. Entiéndase con esto a partes como el hígado, riñón, tripa o la misma sangre coagulada. Todo ello mezclado con otros ingredientes y sabores que, aunque no lo creas, harán que el platillo te sepa a gloria.");
                    if(plato == "c") alert("Consiste en la preparación de un tipo de carne seca muy común de la región. La cual lleva preparándose de la misma forma en la que lo preparaban sus antepasados. La carne utilizada para esto es la carne de muchacho. La cual se marina con una combinación especial de ingredientes y se deja secar por cierto tiempo. El resultado final de esto es la Carne Oreada y se suele comer mucho en los desayunos.");
            }
        }
            if(ciudad == "b"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Obleas \n B. Panuchas  \n C. Dulce de apio");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Inicialmente era preparada sólo con la galleta y el arequipe, pero con el paso del tiempo se fue incrementando con sabores y dulces que la hacen más gustosa. Quizá hoy quiera probar a su gran amor, un matrimonio o porque no un capricho, algunos de los nombres en los que figura este producto.");
                    if(plato == "b") alert("Este dulce tiene la forma de unas pequeñas empanadas de arequipe, semi-blando, relleno de coco rayado. Otro de los tradicionales y más pedidos.");
                    if(plato == "c") alert("El apio, también conocido como arracacha. Es también uno de los dulces más pedidos, su preparación consiste en cocinarlo con un poco de piña y azúcar, para que pierda su sabor amargo, después es mezclado con arequipe hasta que se logre una consistencia homogénea y se espolvorea con azúcar blanca.");
                }
            }

            if(ciudad == "c"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Ruyas Bravas \n B. Chorotas  \n C. Carisecas");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Las ruyas son otra de las preparaciones a base de maíz, pero también se pueden preparar con ingredientes como avena de trigo o harina de tostado. En la cocina santandereana se les agregan yerbas aromáticas como guaca o perejil, y son ideales para acompañar el ajiaco, el caldo, el sancocho y la sopa.");
                    if(plato == "b") alert("Generalmente se fríe la carne o la pepitoria, se le añade el resto de los ingredientes y se revuelve y sofríe hasta obtener un guiso.");
                    if(plato == "c") alert("Es más frecuente encontrarlas en el municipio de Oiba. Tradicionalmente, se hacen empapando y moliendo maíz amarillo seco para la masa. Luego la masa se mezcla con panela, mantequilla y huevos, finalmente se modelan y hornean sobre piedras calientes en hornos de carbón hasta que se cocinan y se sirven con mantequilla.");
                }
            }

            if(ciudad == "d"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Torta con almojábanas \n B. Dulce de Grosellas  \n C. Achiote");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Para empezar se parten las almojábanas en trozos pequeños, se remojan en leche para obtener una masa suave. Aparte, se mezcla la miel (o azúcar) con la mantequilla hasta que quede cremosa, añade las yemas de huevo, adiciona la esencia de vainilla, el bocadillo cortado en cuadros, la espuma de queso, el arequipe y las almojábanas mezcladas con la leche y se reserva la mezcla.");
                    if(plato == "b") alert("Las grosellas son un fruto silvestre que se encuentran de forma natural en algunos de nuestros campos y es tradicional preparar un delicioso dulce. Es bastante ácido, por lo que hay que dedicar atención a su preparación.Para ponerlas a hervir se les hacen unos pequeños cortes y se dejan fuego lento por varias horas. Por su sabor es recomendable cambiar dos veces el agua y luego de que estén listas sacarlas.");
                    if(plato == "c") alert("El fruto de esa planta se usa para hacer arroz, sopas y guisos, desde tiempos precolombinos. Unos dicen que viene desde Mesopotamia. En Santander logró instalarse en los platos propios de la región. Se utiliza para numerosas preparaciones, pero es apetecido por su color y sabor. Se utilizan 2 cucharadas de semilla de achiote, se trituran y luego se sofríen en una taza de manteca de cerdo (o aceite), y se revuelve para que las semillas suelten el color.");
                }
            }
        }
    }
    if (departamento == "b"){
        let ciudad = prompt("Escriba la opcion correspondiente a la ciudad: \n A. Bogota \n B. Zipaquira  \n C. Soacha \n D. Girardot");
        if(comprobar(ciudad, "ciudad")){
            ciudad = ciudad.toLowerCase();
            if (ciudad == "a"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Ajiaco \n B. Sopa de pan  \n C. Roscón resobado");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Sus ingredientes son papas tradicionales y papitas colombianas, pechuga de pollo deshilachado (en algunos casos se sustituye por res o se utilizan ambos), maíz, cebolla, ajo, cilantro, aguacate, alcaparras y crema de leche.");
                    if(plato == "b") alert("Uno de los tantos tipos de sopas presentes en Cundinamarca para calentarse en los días de frío es la sopa de pan. Sus ingredientes son papa, huevos, carne de res, queso blanco, leche o crema de leche, mantequilla, cilantro y, por supuesto, el pan.");
                    if(plato == "c") alert("Hay registros que indican que este postre se consumía en el periodo colonial. Está hecho a base de harina de trigo, mantequilla, huevo y dulce de guayaba.");
            }
        }
            if(ciudad == "b"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Viudo de capaz \n B. Envuelto  \n C. Trucha con papas chorreadas");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Se trata de una sopa caliente de pescado con ingredientes frescos como verduras, tubérculos, finas hierbas y el viudo de capaz. Es muy apreciado porque es de los pocos peces de río que aún pueden pescarse en el río Magdalena.");
                    if(plato == "b") alert("Se prepara con harina de maíz, a la que se le agregan trozos de carne de res, cerdo y pollo previamente cocido y adobado, además de zanahorias, aceitunas, alcaparras y perejil.");
                    if(plato == "c") alert("La trucha es uno de los pescados más utilizados en esta región para la elaboración de distintos platos exquisitos. Uno de ellos es condimentar la trucha a la plancha con tomate, cebolla y algunas especies y acompañarla de papas chorreadas.");
                }
            }

            if(ciudad == "c"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Mazamorra chiquita \n B. Caldo de costilla  \n C. Papas Chorreadas");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Una sopa muy típica tanto del departamento de Bocayá como el de Cundinamarca. Se prepara con callos, acelgas, maíz seco, res, cebolla, frijoles y algunos otros vegetales, según la receta.");
                    if(plato == "b") alert("Muy popular en muchas regiones de Colombia, pero especialmente en la región andina, donde se sirve para desayunar. Para su elaboración normalmente se hierve agua para echarle las costillas, patatas en rodaja, cebolla, ajo y cilantro.");
                    if(plato == "c") alert("Papas chorreadas, es un plato típico originario del centro de Colombia, principalmente los departamentos de Cundinamarca y Boyacá que se puede hacer de varias formas y con distintos ingredientes.");
                }
            }

            if(ciudad == "d"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Sobrebarriga Criolla \n B. El puchero  \n C. El tamal santafereño");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Limpiar la sobrebarriga y cortarla en trozos grandes. Mezclar en la licuadora la cerveza con la cebolla, el caldo de carne, el aceite, tomillo, laurel y la salsa para carne, echarle este adobo a la sobrebarriga y dejar unas horas. Cocinar la carne en la olla a presion por 1 hora aproximadamente o hasta que este blanda. Servir la sobrebarriga con el jugo que solto.");
                    if(plato == "b") alert("Este caldo de pollo, derivado del cocido español, tiene un sabor muy particular por la conjunción de todos sus ingredientes. En él encontramos mazorcas tiernas y todos los tubérculos que tanto nos gustan en el altiplano: yuca, papa sabanera, arracacha, ibias. También aparecen orgullosos la longaniza, el cilantro, la cebolla, el tomillo. Es un emblema de la gastronomía cachaca.");
                    if(plato == "c") alert("Aunque este bocadillo envuelto por hojas se comparte con varias regiones del país, lo cierto es que cada lugar le ha puesto sus propias características al plato. En la capital, por ejemplo, se cuece la masa de maíz hasta encontrar la consistencia ideal, y se mezcla con distintas carnes como pollo");
                }
            }
        }
    }
    if (departamento == "c"){
        let ciudad = prompt("Escriba la opcion correspondiente a la ciudad: \n A. Medellin \n B. Bello  \n C. Envigado \n D. Itagui");
        if(comprobar(ciudad, "ciudad")){
            ciudad = ciudad.toLowerCase();
            if (ciudad == "a"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Bandeja paisa \n B. Aguardiente  \n C. Hogado");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Si quieres saber cuál es una de las comidas típicas de Santa Fe de Antioquia, pues sin duda es la bandeja paisa. Esta receta es muy representativa gracias a la gran variedad de contrastes y sabores que en ella puedes encontrar, tales como el dulce del plátano, la carne salada y el gusto fuerte de los frijoles.");
                    if(plato == "b") alert("La conocerás como una de las bebidas alcohólicas de Antioquia y de la más reconocidas en todo el país: es el aguardiente o guaro. Se produce por la destilación de un fermento alcohólico, como los granos, cañas o frutas. Por lo tanto, el aguardiente que probarás es el resultado del alcohol diluido en agua.");
                    if(plato == "c") alert("Servido con innumerables acompañantes como los platanitos, la yuca frita y los patacones, el hogao es una salsa o guiso hecha a base de tomate, es de las comidas vegetarianas de Antioquia. Los componentes principales con los que se prepara son los tomates y las cebollas, a los que se le añade sal, pimienta u otro condimento.");
            }
        }
            if(ciudad == "b"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Parva \n B. Piononos  \n C. Torta de choclo");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("La parva es ese grupo de panes que funge como meriendas, refrigerios y desayuno. Pueden ser dulces o saladas y son comúnmente ingeridas en horas de la tarde. Son muy famosos en la historia de la gastronomía de Antioquia, por lo que no puedes dejar de probarlos, sobretodo las de la Pandería Chipre en la ciudad de Medellín.");
                    if(plato == "b") alert("Los piononos tuvieron su origen en España, donde consisten en pequeños pasteles dulces. Sin embargo, en algunos países de Latinoamérica, los piononos pueden ser tanto dulces como salados. En Colombia se los ha adoptado al punto de ser característicos de Antioquia y su gastronomía. Si eres una persona más visual, no te preocupes, es muy común que los veas en fotos de comida antioqueña.");
                    if(plato == "c") alert("La torta de choclo es un pastel hecho a base de maíz tierno. En la antigüedad era preparado en forma de círculos parecidos a los de las arepas, pero con una forma tosca. Posteriormente, en las fiestas campesinas, se comenzó a compartir esta torta como uno de los postres tradicionales de Antioquia. ");
                }
            }

            if(ciudad == "c"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Dulce de papaya \n B. Frijoles antioqueños  \n C. Carnes asadas al carbón");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Si se habla de frutos tropicales, Latinoamérica se lleva el puesto número uno. Esto sucede gracias a las muchas frutas que pertenecen a los pueblos latinoamericanos, por sus exquisitos sabores son reconocidos como exóticos. Antioquia, con su dulce de papaya, no se queda atrás.");
                    if(plato == "b") alert("Si te apetece probar un almuerzo que tenga un color extraño, una presentación inusual y un aroma diferente, los frijoles antioqueños son tu mejor opción. Esta comida típica tiene fama de dejar al degustador con ganas de más.");
                    if(plato == "c") alert("Si buscas singularidad en platos del norte de Antioquia durante tu viaje, los perniles asados al carbón son su especialidad por el vacuno de la zona, que además resultan fáciles de preparar. En algunos casos, se necesita adobar la chuleta con un día de antelación para que los trozos asimilen el sabor.");
                }
            }

            if(ciudad == "d"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Cascos de guayaba \n B. Chorizo antioqueño  \n C.  Sancocho antioqueño");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Si se trata de representar a los postres de la región Antioquia, los cascos de guayaba no pueden faltar. Deben su nombre al aspecto final que tiene la guayaba al momento de ser servido, sumamente parecido a los cascos utilizados por conductores de motos y por los soldados de la guerra.");
                    if(plato == "b") alert("El chorizo antioqueño es conocido y preparado en muchos lugares de mundo, especialmente en Latinoamérica, aunque es originario de España. Sin embargo, los países que adoptaron este plato como propio lo han modificado naturalmente al agregarle componentes nuevos o formas de preparaciones autóctonas del país.");
                    if(plato == "c") alert("Si estás pensando en viajar a Colombia y buscas fotos de comida antioqueña, el sancocho antioqueño saldrá como primera en las opciones. Este consomé, al igual que la bandeja paisa, se encuentra peleando el puesto para la mejor comida antioqueña, ya que ambos tienen gran fama a nivel mundial.");
                }
            }
        }
    }
    if (departamento == "d"){
        let ciudad = prompt("Escriba la opcion correspondiente a la ciudad: \n A. Cartagena \n B. Turbaco  \n C. El Carmen \n D. Monpos");
        if(comprobar(ciudad, "ciudad")){
            ciudad = ciudad.toLowerCase();
            if (ciudad == "a"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Sancocho \n B. Cayeye \n C. Suero costeño");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Es el plato más popular de esta región y los hay de muchos tipos. El sancocho no es más que sopa y es muy típico a la hora del almuerzo. Se puede hacer de mondongo, de costilla, de mariscos, de guandú (un tipo de grano), de tortuga, de gallina, entre otros. Y se suele acompañar con arroz blanco, patacones, banano maduro o aguacate.");
                    if(plato == "b") alert("s un tipo de banano verde que se cocina con concha y luego se aplasta como puré. Se suele comer en el desayuno. Lo típico es mezclarlo con mantequilla o suero costeño y queso, pero en realidad se le puede poner lo que a uno se le ocurra. ¡Hasta camarones!");
                    if(plato == "c") alert("También conocido como suero atollabuey, es un lácteo, como una nata o crema de leche que puede acompañar a cualquier comida de esta región. Una vez que lo pruebes, ¡querrás untárselo a todo!");
            }
        }
            if(ciudad == "b"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Arroz de lisa \n B. Arepa de huevo     \n C. Mote de queso");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("se hace a base de lisa, un pez de mar. Se sirve en hoja de bijao y se puede acompañar con patacones, yuca, aguacate, suero costeño, huevo cocido o bollo de maíz. Se lo puede encontrar en restaurantes y también en cualquier esquina de la ciudad, gracias a los vendedores ambulantes.");
                    if(plato == "b") alert("Es una arepa frita de maíz muy popular, que lleva un huevo en su interior (como su nombre lo indica). La preparación consiste en freír la arepa previamente, abrirla, ponerle el huevo y volverla a freír. También es posible conseguirla con carne desmechada o carne molida -además del huevo");
                    if(plato == "c") alert("s otra sopa típica de la región, donde la base es el ñame y el queso costeño en cuadritos. ¡No puede faltar en tu paseo culinario!");
                }
            }

            if(ciudad == "c"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Chuzo desgranado \n B. Agua panela  \n C. Dulce de apio");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Una de las comidas rápidas típicas de Barranquilla… y una de las más adictivas también. Consiste en carnes asadas al carbón -como carne de res, pollo, chorizo y butifarra-. Lleva bollo limpio, queso costeño rallado y lechuga, todo eso bajo una capa de crujientes papas de perro caliente y algunas salsas como tártara, de piña y rosada.");
                    if(plato == "b") alert("Es una bebida súper refrescante hecha a base de panela, y se le agrega jugo de limón. Es la acompañante de la mayoría de los almuerzos en la costa caribe");
                    if(plato == "c") alert("");
                }
            }

            if(ciudad == "d"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Arroz de coco \n B. Butifarra soledeña  \n C. Boli");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("Este plato es preparado con leche de coco y se endulza con panela o azúcar. ¡Es el mejor amigo de la mojarra frita!");
                    if(plato == "b") alert("La butifarra es un embutido de carne de cerdo que se ve en cada esquina de la ciudad de Barranquilla. Se suele acompañar con limón y bollo de yuca.");
                    if(plato == "c") alert("Es una especie de helado casero, ideal para matar el calor. Existe una gran variedad de sabores y se hacen a partir de jugos de frutas, bebidas achocolatadas, combinaciones de galletas con leche, entre otros. Y también se pueden conseguir en cualquier parte de las calles costeñas, dentro de neveras de anime.");
                }
            }
        }
    }
    if (departamento == "e"){
        let ciudad = prompt("Escriba la opcion correspondiente a la ciudad: \n A. Cali \n B. Palmira  \n C. Buga \n D. Cartago");
        if(comprobar(ciudad, "ciudad")){
            ciudad = ciudad.toLowerCase();
            if (ciudad == "a"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Changua \n B. Pepitoria  \n C. Carne Oreada");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("loren");
                    if(plato == "b") alert("loren");
                    if(plato == "c") alert("loren");
            }  
        }
            if(ciudad == "b"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Obleas \n B. Panuchas  \n C. Dulce de apio");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("loren");
                    if(plato == "b") alert("loren");
                    if(plato == "c") alert("loren");
                }
            }

            if(ciudad == "c"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Obleas \n B. Panuchas  \n C. Dulce de apio");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("loren");
                    if(plato == "b") alert("loren");
                    if(plato == "c") alert("loren");
                }
            }

            if(ciudad == "d"){
                let plato = prompt("Escriba la opcion correspondiente al plato tipico: \n A. Obleas \n B. Panuchas  \n C. Dulce de apio");
                if(comprobar(plato, "plato")){
                    plato = plato.toLowerCase();
                    if(plato == "a") alert("loren");
                    if(plato == "b") alert("loren");
                    if(plato == "c") alert("loren");
                }
            }
        }
    }
} 
    
