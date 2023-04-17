/*
Select the last child of the <ol> tag and put it at the beginning of the list
*/

// On sélectionne l'élément ol 
let ol = document.querySelector('ol');
// On sélectionne le dernier enfant de cet élément
let lastChild = ol.lastElementChild;
// On insère le dernier enfant avant le premier
ol.insertBefore(lastChild, ol.firstElementChild); 


/*
Move the <h2> of the third section in the second one and vice-versa
*/

// On sélectionne la première section "third"
let section1 = document.getElementsByTagName('section')[1];
// On sélectionne la deuxième section "second"
let section2 = document.getElementsByTagName('section')[2];

// On sélectionne le h2 de la section "third"
let h2_third = section1.getElementsByTagName('h2')[0];
// On sélectionne le h2 de la section "second"
let h2_second = section2.getElementsByTagName('h2')[0];

//On insère le h2 de la section "second' avant le premier enfant de la section "third"
section1.insertBefore(h2_second, section1.firstChild);

// On insère le h2 de la section "third" avant le premier enfant de la section "second"
section2.insertBefore(h2_third, section2.firstChild);


/*
Delete the last section from the DOM, we don't need it anyways
*/

// On sélectionne le dernier élément "section" dans le document
// à l'aide de la pseudo classe CSS :last-of-type
let last_section = document.querySelector('section:last-of-type');

// On supprime l'élément avec removeChild qui est appelé sur le parent de l'élément
last_section.parentNode.removeChild(last_section);
