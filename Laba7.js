var Name;
Name="Да будет свет!";
console.log(Name);


let a = 5;
let b = 2;
console.log('a =',a,'b =',b);

console.log('a + b =', a+b);

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());


console.log('a - b =', a-b);
console.log('a * b =', a*b);
console.log('a / b =', a/b);
console.log('a^2 =', Math.pow(a,2));
console.log('a % b =', a%b);

console.log('%c Ну да, ', 
            'color: white; background-color: #2274A5', 
            'небо синее.');
let i = 0;
console.time("Скорость загрузки");
while (i < 1000000) 
{
        i++;
}
console.timeEnd("Скорость загрузки");            