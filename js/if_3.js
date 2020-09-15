// Используя конструкцию ?, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».

// Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».



let value = prompt('Какое "официальное" название Javascript?' + "");
if (value == "Ecmascript") {
    alert("Верно!");
}else {
    alert('Не знаете, "Ecmascript"!');
}


(value == "Ecmascript") ? alert("Верно!") : alert('Не знаете, "Ecmascript"!');