                                                          // quelques methodes avec Objets en JS*
    

//EXEMPLES Methode Object.entries()   --> prend une key et une value

var Obj = { toto: "truc" , machin: 42 };     //-> un array contenant 2 array  [ ['toto' , 'truc'], ['machin', 42] ]
console.log(Object.entries(Obj));


// autre exemple  --> un objet semblable a un tableau 

var Obj2 = { a: 1 , b:2 , c:3 , d:4 };     // -> un array contenant 4 array [[a,1], [b:2], [c,3] [d,4]]
console.log(Object.entries(Obj2));          


// Voir MDN DOCS POUR D AUTRES EXEMPLES PLUS SPECIFIQUES 



// CONVERTIR UN OBJET EN MAP --> convertit un objet Object en un objet Map 

var Obj3 = { toto : "truc", machin: 42};
var map = new Map(Object.entries(Obj3));
console.log(map);


// 1ere methode des promise avec la methode fetch , sans async await

const promise = fetch("https://jsonplaceholder.typicode.com/todos");
promise.then( response => response.json())
.then(json => console.log(json));


// L objet natif Object et qq methodes :    on fait la methode fetch comme d hab , renvoi une promise , ensuite un .then() , avec le async await , efficace lors d appel a API

console.log(Object);

const promise01 = fetch("https://jsonplaceholder.typicode.com/users");
promise01.then( async (response) => {
                                                                            //j ' ai transformer les données de la promise en données javascript 
    console.log(response); // okay on sait que ca fonctionne via la response mnt passons a la suite 
    const data = await response.json();

    console.log(data);      // recup ttes les data 

    console.log(data[2]);   // recup l id 1 etc ...
    // console.log(JSON.stringify(data));   //-> stringify va convertir sous forme de json 
    
    console.log(Object.keys(data));
    // l objet Object.keys recup toutes les data sous formes de key et value key a gauche / value a droite ex : index key 0: 1 value  , 1:2 , ...
   
    console.log(Object.entries(data));
    // l objet Object.entries recup 
   
    console.log(Object.values(data));
    // renvoi un tableau contenant les valeurs des proprietes propres enumerables d un objet , fais le mm travail que la boucle for in
    
    //console.log(Object.defineProperty(data));
    // a check sur mdn ce que ca fait --> modifier un ou plusieurs attributs de l objet 
    
    const descriptor = Object.getOwnPropertyDescriptor(data[1], "name");
    console.log(descriptor);
    // a check sur mdn ce que ca fait --> permet d acceder aux attributs d une propriete d un objet 
    Object.defineProperty(data[1], "name" , {
        writable : true,
});


//*NB : ca change la valeur de name qui est herwin horwell en coucou car on definit writbable : true ↑ si on met false ca sera des lors interdit 

data[1].name = "coucou";
console.log(data[1].name);
});  



// question en suspens : a savoir quand utilise t 'on ces methodes ?















 

