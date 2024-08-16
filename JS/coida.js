

----------------------------------------------------------------------------------------------------------------------------------------------------------------

																	4-chi videodagi darslik

																	Reja:
																	1.	Qiymatlar
																	2.	O'zgaruchilar
																	
																	


1.Mavzu:					
QIYMATLAR
//	Qiymat - eng kichik ko'rinishdagi  malumot,yoki malumot bo'lagi.

	"Husniddin"
	'iskandarov'
	29
	4.99













																	

2.Mavzu:	
OZGARUVCHILAR
//	O'zgaruvchi (variable) - o'zida malum bir qiymatni saqlovchi kontainer (conainer).

//												o'zgaruvchi quti shaklida


//	O'zgaruvchini qutiga o'xshatish mumkin, Uning ichiga narsani solib,qutiga nom berib,belgilab qo'yishimiz mumkin bo'ladi. --
//	-- Keginchalik shu belgi orqalik izlab topish imkoniyatiga ega bo'lamiz.

let  ism = "Husniddin";
let familya = "Iskandarov";
let yosh = 29;
console.log(ism);
console.log(familya);
console.log(yosh);


//																	O'zgaruvchlarni elon qilish
o'zgaruvchilarni elon qilgandan so'ngina ishlatish imkoniyati mavjud.Elon
qilinmagan o'zgaruvchilarni ishltish xatolikka olib keladi.

console.log(ism);
let ism = "Husniddin";


//																	O'zgaruvchilarga nom berish

//	O'zgaruvchiularga nom berayotganda, u o'zida qanday malumot saqlashini hisobga --
//	-- olib, berilgan nom saqlayotgan malumotni ifoda etib turishi kerak.O'zgaruvchilar --
//	-- odatda( camelCase ) ko'rinishida yoziladi.


let ism = "Husniddin";   
let var1 = "Husniddin"

let userNomi = "username";
let user_nomi = "username";

//											O'zgaruvchi nomi quyidagi qoidalarga amal qilishi lozim:


1.	O'zgaruvchi nomida bo'sh joy (space) bo'lishi mumkin emas.

2.	O'zgaruvchi nomi harf,pastki chiziqcha(_) yoki dollar belgisi ($) bilan boshlanshi shart.

3.	Ozgaruvchi nomi faqatgina harf,raqam,pastki chiziqcha, yoki dollar belgisidan tashkil popishi shart.

4.	Malum bir zaxiralangan nomlarni (reserved words) o'zgaruvchi omiga berish taqiqlaniadi.

5.	O'zgaruvchi nomi ( case-sensitive ) yani katta-kichik harflarni turli xil deb qabul qiladi.


let with space = "withSpace";    //  x
let 1StartsWithNumber = "startsWithNumber"; //     x
let other@SymbolUser = "otherSymbolUser"; // 		 x
let for = "Reserved world";	//		x
let fristName = "Husniddin";
let frisTName = "Husniddin";







------------------------------------------------------------------------------------------------------------------------------------------------------------------


																		5-chi videodagi darslik

																	Reja:	
																	1.	Malumot turlari (data types)



														QIYMATLAR: 2-guruhga bolinadi ( primitive ) ( object )
1.Mazu
1. BIRINCHI QIYMAT-GURUHI: ( primitive ) turidagi qiymatlar 
// Primitive --> qiymati tog'ridan-tog'ri o'zgaruvchi murojaat qiladigan manzilda joylashadi. --
// -- Va Primitive turidagi malumot turlari 7-hil bo'ladi.

1.1		Number - // Number - sonlarni o'zida saqlovchi malumot turi.
		let age = 23;
		let price = 19.99;


1.2		String - // String - o'zida belgilar ketma-ketligini saqlovchi malumot turi.
		let firstName = 'Husniddin';


1.3		Boolean - // Boolean - mantiqiy malumot turi bo'lib faqatgina True (rost) yoki False (polg'on) qiymatini qabul qilish mumkin bo'lgan malumot turi.
	 	let isUser = true;


1.4 	Undefined - // Undefined - hali aniqlanmagan malumot turi.
		let student;


1.5 	Null - // Null - bo'sh qiymatga ega bo'lgan malumot turi.
		let school = null;


1.6 	Symbol - // Symbol - yagona (unique) va o'zgarmas qiymatga ega bo'luvchi malumot turi.
		let id = Symbol ('id');


1.7 	Biglnt - // Biglnt katta sonlarni saqlashga mo'ljallangan malumot turi.
		const alsoHuge = BigInt (9007199254740991);





//		JavaScript dynmic typing funksiyasigaega bo'lib uning yordamida o'zgaruvchi saqlovchi malumot turini ko'rsatmasdan ham qiymat saqlashimiz mumkin.--
//		-- O'zgaruvchi saqlaydigan malumot turi avtomatik tarzda aniqlanadi.


//		typeof operatoridan foydalanib o'zgaruvchi saqlayotgan malumot turini aniqlash imkoniyati mavjud.
	let age = 29;
	console.log(typeof age);															





2.Mavzu:
2. IKKINCHI QIYMAT-GURUHI: ( object ) turidagi qiymatlar 
// Object --> qiymato'zgaruvchi murojat qilgan manzilda ko'rsatilgan boshqa manzilda saqlanadi.


2.1 Function
2.2 Array
2.3 Object




------------------------------------------------------------------------------------------------------------------------------------------------------------------

															6-chi videodagi darslik
//																let,const va var

															Reja:	
															1.	Ozgaruvchilarni elon qilish
															2.	let
															3.	const
															4.	var


1.Mavzu:	
//	JavaScript dasturlash tilida o'zgaruvchilarni 3 xil usulda elon qilish imkoniyati mavjud: --
//	-- let,const va var kalit so'zlaridan foydalanib amalga oshiriladi. let va const ES6'da taqdim etlgan kalit so'zlar hisoblanadi. 





2.Mavzu:
let - dasturimiz ishlashi davomida o'zgarishi mumkin bo'lgan o'zgaruvchilarni elon qilish uchun foydalaniladi.

		let yosh = 23;
		yosh = 29;

//	Elon qilinib bo'lingan o'zgaruvchini qiymatini o'zgartirishda hech qanday kalit so'zdan foydalanilmaydi.


 

3.Mavzu:
const - dasturimiz ishlashi davomida o'zgarmaydigan o'zgaruvchilarni elon qilish uchun foydalaniladi.

const id = 'AA0';
id = 'AA1';  x    // o'zarmaydi

			const yordamida elon qilingan o'zgaruvchilar har doim boshlang'ich qiymatga ega bo'lishalri shart.





4.Mavzu:
var - ES6'ga qadar o'zgaruvchilarni elon qilish uchun ishlatilgan kalit so'z. let bilan deyarli bir xil vazifani bajaradi.


var yosh = 23;
yosh = 24;


	let va var o'xshash bo'lishiga qaramasdan ularning malum bir farqlari mavjud. var yordamida elon qilingan o'zgaruvchining ko'rinish ko'lami (scope) finksiya --
	-- darajasida bo'lsa, let esa blok darajasida ko'rinadi.


	
JavaScript yordamida hech qanday kalit so'z ko'rsatmasdan o'zgaruvchi yaratish imkoniyati mavjud lekin bu ko'rinishdagi o'zgaruvchilar yaratish tavsiya etilmaydi.

	ism = 'Ukugbek';    x
	console.log(ism);







Strict mode:
Strict mode yordamida yozayotgan ko'dimizda xatolardan qochish imkoniyati mavjud.
	
	'use strict';
	ism = 'ulugbek';
	console.log(ism);





----------------------------------------------------------------------------------------------------------------------------------------------------------------------

																  7-chi videodagi darslik	
																
																Reja:
																1.	OPERATORLAR		
																2.	Arifmetik (arifmetic) operatorlar
																3.	Solishtirish (comparison) operatorlar
																4.	Tayinlash (assignment) operatorlar
																
1.Mavzu:
1.	OPERATORLAR bir yoki bir nechta operandlar ustida amal bajaradi. Umumiy ko'rinishi quyidagicha.

//  <chap operand> operator <o'ng operand> // son1 + son2

//  <chap operand> operator // son1++

//  operator <o'ng operand // --son2



		//	JavaScript dasturlash tilida odatda quyidagi operatorlar turlari mavjud:
		
	// 1. Arifmetik (arifmetic) operatorlar
	// 2. Solishtirish (comparison) operatorlar
	// 3. Tayinlash (assignment) operatorlar
	// 4. Mantiqiy (logical) operatorlar              9-chi video darlikda ko'rsatilgan
	// 5. Uchlik (ternary) operatorlar

2.Mavzu:
2. Arifmetik (arifmetic) operatorlar   7 xil bo'ladi
//   JavaScrip dasturlash tilida Arifmetik operatorlardan foydalanib ikki operand ustida arifmetik amallar bajarish imkoniyhati mavjud.

+	//    ikki operandi qo'shish			son1 + son2

-	//    o'ng tomondagi operandni chap tarafdan ayirish			son1 - son2

*	//    ikki operandni ko'paytirish				son1 * son2

/	//    chap operandni o'ng operandga bo'lish				son1 / son2

%	//    Modulus operatori. ikki operanddan qoldiqni qaytarish 			son1 % son2

++	//   Kattalashtirish (increment) operatori. Operand qiymatini 				son1 ++ son2

--	//   Kichiklashtirish (decrement) operatori. Operand qiymatini bittaga kamaytirish 				son1 -- yoki -- son2

let a = 5, b = 10;
console.log (a + b); // 15
console.log (a - b); // -5
console.log (a * b); // 50
console.log (a / b); // 0.5
console.log (a % b); // 5
console.log (a ++); // 5 (post-increment)
console.log (a);	// 6
console.log (++a);  // 7 (pre-increment)
console.log (a);	// 7
console.log (b--);	// 10 (post-decrement)
console.log (b); 	// 9 
console.log (--b);	// 8 (pre-decrement)
console.log (b);	// 8 




3.Mavzu:
3. Solishtirish (comparison) operatorlar 7 xil bo'ladi
// JavaScript dasturlash tilida comparison operatorlardan foydalanib ikki operandlarni solishtirish imkoniyati mavjud.
// Bunday operatorlar (true) yoki (false) qiymatini qaytaradi.

==	 // Turini hisobga olmagan holda ikkita operandning tengligi solishtirish		variable == variable2

===	 // Tur va qiymat boyicha ikkita operandning tengligini solishtirish		variable === variable2 

!=	 // ikki operand notengligini (teng emasligini) solishtirish		variable != variable2

>	 // chap tarafdagi qiymat o'ngdagi qiymatdan katta bo'lsa,		variable > variable2
// (true)qiymatini qaytaradi; aks holda, (false) qaytaradi.

<	 // chap tarafdagi qiymat o'ngdagi qiymatdan kichkina bo'lsa 		variable < variable2
//  (true) qiymatini qaytaradi; aks holda, (false) qaytaradi. 		

>=  // chap tarafdagi qiymat o'ngdagi qiymatdan katta yoki teng bo'lsa 		variable >= variable2
// (true) qiymatni qaytaradi; aks holda (false) qaytaradi.

<=	// chap tarafdagi qiymat o'ngdagi qiymatdan kichik yoki teng bo'lsa		variable <= variable2
// (true) qiymatini qaytaradi; aks holda (false) qaytaradi.

let a = 5, b = 10, c = '5';
const z = a;

console.log (a == c); // true
console.log (a === c); // false
console.log (a == z); // true
console.log (a === z); // true
console.log (a != b); // true
console.log (a != z); // false
console.log (a > b); // false
console.log (a < b); // true
console.log (a >= b); // false
console.log (a <= b); // true






4.Mavzu:
4. Tayinlash (assignment) operatorlar 6 xil bo'ladi
// JavaScript'dagi tayinlash operatorlaridan foydalanib --
// -- o'zgaruvchilarga qisqartma ko'rinishida yangi qiymatlar tayinlash imkoniyati mavjud.

=	//	chap operandga o'ng operand qiymatini belgilaydi. 			variable = variable2													</>

+=	//	chap va o'ng operand qiymatlarini umumlashtirib				variable += variable2
//	(qo'shib) va natijani chap operandga tayinlaydi.

-=	//	chap operand qiymatidan o'ng operand qiymatini olib				variable -= variable2
//	tashlab va natijani chap operandga tayinlaydi.

*=	//	chap va o'ng operand qiymatlarini ko'paytirib va natijani			variable *= variable2
//	chap operandga tayinlaydi.

/=	//	chap operand qiymatini o'ng operand qiymatiga bo'lib			variable /= variable2
//	va natijani chap operandga tayinlaydi.

%=	//	chap operand modulini o'ng operandga bo'linishini olib			variable %= variable2
//	va natijada chap operandga tayinlaydi.

let a = 5, b = 10, c = 15;

console.log (a);	// 5

a = b;
console.log (a);	// 10

a += b;
console.log (a);	// 20

a -= b;
console.log (b);	// 10

c *= b;
console.log (c);	// 150

c /= 5;
console.log (c);	// 30

b %= 2;
console.log (b);	// 0







																					OPERATORLAR:  // Tugashi

----------------------------------------------------------------------------------------------------------------------------------------------------------------- 

																		8-chi videodagi darslik
																		
																		Reja:
																		1.	String
																		2.	Birlashtirish (Concatenation)
																		3.	Template literals


1.Mavzu:																		
String
//	String- belgilar ketma-ketligidan tashkil topgan malumot turi hisoblanadi.Ularni bittalik ('') yoki --
//	-- ikkitlik ("") qo'shtirnoqlardan foydalanib yaratish imkoniyati mavjud.Bazi bir maxsus --
//	-- belgilardan tashkil topgan matnlarda odatda ikkitalik qo'shtirnoqlardan foydalaniladi.

let ism = "Husniddin";
console.log(ism);
let falimya = "Iskandarov";
console.log(familya);







2.Mavzu:
Birlashtirish (Concatenation)
//	Qo'shish (+) operatoridan foydalangan holda, stringlarni qo'shish ya'ni concatenation qilish imkoniyati mavjud.

let ism = 'Husniddin'
let message = 'salom' + ism ' !';
console.log (message);







3.Mavzu:
Template literals
//	ES6 template literals ko'rinishida string yaratish imkoniyatini taqdim etadi va ular --
//	-- backtick('') belgisidan foydalanib yaratiladi.
let ism = 'Husniddin';
let message = `Salom ${ism} !`;
console.log (message);





-------------------------------------------------------------------------------------------------------------------------------------------------------------------



																		9-chi videodagi darslik
																		
																		MANIQIY_OPERATORLARNI: // Boshi
    Reja;
	1.	Boolean logical (mantiq)
	2.	Logical (mantiqiy) operators

1.Mavzu:
Boolean logic (matiq)
//	dasturlar o'zida malum bir solishtirishlar orqali qaror qabul qiladi.Boolean mantiq --
//	-- algebraning bir qismi bo'lib, barcha qiymatlar True(rost) yoki False(yolg'on) --
//	-- qiymatlaridan tashkil topgan bo'ladi. Bu qiymatlar malum bir shartni tekshirishda --
// --  ishlatilinadi. Boolean logic asosiy uch operatordan tashkil topgan: AND, OR, va NOT.



AND operatori
//	Agar barcha qiymatlar True'dan tashkil topgan bo'lsa, natijaviy qiymat True bo'ladi,aks --
//	--	holda False qiymati yuzaga keladi.

Truth table

//		A 												B		 									A AND B


False											  False                                          False

False											  True											 False

True											  False											 False

True											  True											  True







OR operatori
//	Agar hech bo'lmasa bir qiymat True'dan tashkil topgan bo'lsa, natijaviy qiymat True --
//	-- bo'ladi. aks holda False qiymati yuzaga keladi.

Truth table

//		A										   	  		B											A AND B


False											  False                                          False

False											  True											 True

True											  False											 True

True											  True											 True









NOT operatori
//	Berilgan qiymat True bo'lsa False, False bo'lsa esa True qiymati yuzaga keladi --
//	-- boshqacha qilib aytganda berilgan qiymatni terkariga o'girib beradi.

Truth table

//		  A										 NOT A


False									True
True									False







Misol:

//								yosh = 10;
//								A =	yosh 18dan katta --> Yolg'on (False)
//								B = yosh 20dan kichik --> Rost (True)
//		
//								AND operatori
//								A AND B --> Yolg'on (False)
//		
//								OR operatori
//								A AND B --> Rost (True)
//		
//								NOT operatori
//								NOT A --> Rost (True)
//								NOT B -> Yolg'on (False)







2.Mavzu:
Logical (mantiqiy) operators
//	Booleon logic'ni JavaScript'da logical operators ya'ni mantiqiy operatorlar orqali --
//	-- amalga oshirish imkoniyatiga egamiz. JavaScript yuqoridagi aytib o'tilgan barcha --
//	-- operatorlarni qo'llab quvvatlaydi: AND, OR va NOT.

Mantiqiy operatorlar

//		Nomi						Belgisi						Tavsifi							Misol

//	  	Mantiqiy AND 			      &&				agar ikki operand ham Rost			true && false; // false
//														bo'lsa (true) , aks holda				
//														(false) qiymati yuzaga				
//														keladi
//	  
//		Mantiqiy OR				      ||				agar ikki operand ichidan			true || false; // true
//														hech bo'lmasa bittasi rost
//														bo'lsa (true) aks holda ya'ni
//														hammasi yolg'on bo'lgan
//														holatda (false) yuzaga keladi 
//
//		Mantiqiy NOT				  !					agar operand yolg'on				!true; // false
//														qiymatga ga bo'lsa (true)
//														aks holda (false) qiymatiga
//														ega bo'ladi

const yosh = 10;
const a = yosh > 18; // false
const b = yosh < 20; // true

// 	AND operatori
console.log (a && b); // false

//  OR operatori
console.log (a || b); // true

//  NOT operatori
console.log (!a); // true
console.log (!b); // false


Mashq
//	Foydalanuvchi Bootstrap kursini boshlash uchun HTML va CSS kurslarini tugatgan bo'lishi --
//	-- talab qilinadi. Shunday dastur yozingki foydalanuvchi HTML va CSS kurslarini tugatgan --
//	-- bo'lsa Bootstrap'ni boshlashi mumkinligini xabar bering, agar kurslardan faqatgina birini --
//	-- tugatgan bo'lsa, ikkinchisini tugatish haqida bildirib o'ting.Hali hech qaysi kurs --
//  -- boshlanmagan bo'lsa ularni boshlashni aytib o'ting.

const htmlPassed = false;
const cssPassed = true;
let message = '';

if (htmlPassed && cssPassed) {
message = 'Siz Bootstrap kursini boshlashingiz mumkin!';
}   else if (htmlPassed || cssPased) {
message = 'Iltimos ikkinchi kursni ham tugating!';
}	else {
message = 'Iltimos birinchi ikkala kursi tugatib chiqing!';
}

console.log (message);







																		MANIQIY_OPERATORLARNI: // Tugashi




------------------------------------------------------------------------------------------------------------------------------------------------------------------

																				10-chi videodagi darslik

																		Turni_(type)_Ozgartirish: // Boshi

																		Reja:
																		1.	Type conversion
																		2.	Type coercion
																		3.	Truthy va Falsy


1.Mavzu:
Type conversion
//	Type conversion - JavaScript dasturlash tilida saqlanyotgan ma'lumot turini bir --
//	-- ko'rinishdan ikkinchi ko'rinishga o'tkazish.


Number
//	Number - primitiv o'rab turuvchi obyektidan foydalanib, berilgan malumot turini son --
//	-- ko'rinishiga o'tkazish imkoniyati mavjud. Agar berilgan malumot son ko'rinishiga --
//	-- o'tkazishni imkoni bo'lsa, NaN maxsus qiymati yuzaga keladi.


const yosh = 23; // String
console.log (yosh); //	String
console.log (Number (yosh)); //	Number

console.log(yosh + 1); // 231 (Concatenation)
console.log(Numbebr(yosh) + 1) //	24

const ism = 'husiddin';
console.log(Number(ism)) //	NaN



String
//	String - primitiv //  o'rab turuvchi obyektidan foydalanib, berilgan malumot turini string --
// 	-- ko'rinishiga o'tkazish imkoniyati mavjud

const yil =2021; //	Number
console.log(yil); //	Number
console.log (String(yil)); // String









2.Mavzu:
Type coercion
//	Type coercion -  JavaScript dasturlash tilida operator turli xil qiymatlar ustida ish olib
//	-- borayotganda, ulardan birining avtomatik ravishda boshqa turga o'tishi.Boshqacha qilib aytganda --
//	-- malumot turini avtomatik ravishda bir ko'rinishdan ikkinchi ko'rinishga o'tishi. 


Avto string conversion 
console.log('Men ' + 1997 + 'chi yilda tavallud topganman');//	auto string conversion


Auto number conversion
console.log('30' - '10' - 5)// auto number conversion









3.Mavzu:
Truthy va False					
// JavaScript dasturlash tilida berilgan qiymatni Booleon ko'rinishiga o'tkazilganda, ular
// Truthy yoki False ko'rinishiga keladi,Truthy bu true yani rost qiymatiga ega bo'lgan
// malumotlar,Falsy esa false qiymatiga ega bo'lganlarga aytiladi.


//	Falsy ko'rinishiga keladigan qiymatlar 

false
0
''
undefined
null
NaN
0n


//	Falsy qiymatlar
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0n));


//	Truty ko'rinishiga keladigan qiymatlar 

'Husniddin'
29
[]
{}
'0'
'false'

// truty qiymatlari
console.log(Boolean('husniddin'));
console.log(Boolean(23));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean('0'));
console.log(Boolean('false'));





----------------------------------------------------------------------------------------------------------------------------------------------------------------------

																		11-chi videodagi darslik

																		Funksiya va uni elon qilish

																		Reja:
																		1.	Funksiya
																		2.	Funksiya declaration

1.Mavzu:
1.Funksiya
//	Funksiya - JavaScript dasturlash tilining asoslaridan biri bo'lib uning yordamida --
//	-- malum bir vazifani bajarish imkoniyati mavjud.Funksiya boshqa bir kod qisimida --
//	-- chaqirilganda ishga tushadi.Funksiya yordamida kodni qayta ishlatish imkoniyati mavjud -- 
//	-- ya'ni bir marta elon qilib, bir nechta joyda ishlatish imkoniyati mavjud. 


Umumiy ko'rinishi

function functionName(parametr1, parametr2, ..., parametrN) {
	statement 1;
	statement 2;
	statement 3;
	return output;
}

functionName (argument1, argument2, ...a, argumentN);





function meningFunksiyam(son1, son2) {
	return son1 + son2;
}

meningFunksiyam(10, 20) //	30
meningFunksiyam(30, 40) //	70
meningFunksiyam(134, 234)// 368




		Elon qilish turlari:
		1.	Function declaration
		2.	Function expression
		3.	Arrow function




1.Mavzu:
Function declaration 
//	Function declaration - funcsion kalit so'zi yordamida elon qilinadi --
//  -- va berilgan scope bo'yicha ko'rinishga ega bo'ladi.


Function functionName(parametr1, parametr2, ..., parametrN) {
	statement 1;
	statement 2;
	statement 3;
	return output;
}
functionName(argument1, argument2, ..., argumentN);




// kvadrat(2) // 4;

function kvadrat(son) {
	return son * son;
}

kvadrat(10) // 100;







2.Mavzu:








-------------------------------------------------------------------------------------------------------------------------------------------------------------------
																12-chi videodagi darslik

																Reja:
																1.	Function expression
																2.	Arrow function

																
1.Mavzu:
1.	Function expression
	//	Function expression - function kalit so'zi yordamida elon qilinadi --
	// --  va malum bir o'zgaruvchiga tenglab qo'yish orqalik elon qilinadi.--
	// -- vabu huddi Function declaration ga o'xshash bo'ladi faqat farqi biron bir o'zgaruvchiga biriktirilganida...

const functionName = function (parametr1, parametr2, ..., parametrN) {
	statement 1;
	statement 2;
	statement 3;
	return output;
}

functionName(argument1, argument2, ..., argumentN);


//	kvadrat(2) //;

const kvadrat = function(son) {
	return son * son;
}

kvadrat(10) // 100;







2.Mavzu:
	Arrow function
	//	Arrow function - (function expression) yozishning qisqaroq ko'rinishi.--
	//	-- Bunday turdagi funksiyalarni yozishni turli xil yo'llari mavjud.

	1.//	Function expressionga juda o'xshash bo'lib, --
	  //	--  faqatgina Arrow ( => ) kalit so'ziga ega bo'ladi.

	const kvadrat = (son) => {
		return son * son;
	}	
		kvadrat(10); // 100

	
	2.//	Agar funksiya tana qismi bir (qatordan)-statmentdan iborat bo'lsa,--
	  //    --  (return)  kalit so'zini yozmaslik mumkin.
	
		const kvadrat = son => son * son;

		kvadrat(10); // 100



	3.//	Agar funksiya hech qanday parametrga ega bo'lmasa
	
		const print = () => console.log("Printing...");
			console.log("Second priting");


		print(); // Printing...
	



	4.//	Ikki yoki undan ko'p parametrlarga ega bo'lgan funksiya uchun, --
	  //	-- parametrlar qavslar ichida bo'lishi shart.

		const volume = (a, b, c) => a * b * c;

		volume(1, 2, 3); // 6
		console.log(volume(1, 2, 3));









--------------------------------------------------------------------------------------------------------------------------------------------------------------------
																			13-chi videodagi darslik

																			Reja:
																			1.	Juft yoki toq
																			2.	Ikki sondan kattasi
																			3.	Berilgan sonni teskarisiga o'girish



1.Mavzu:
1.	Juft yoki toq
//	Berilgan sonni juft yoki toq ekanligini aliqlab beradigan funksiya tuzing.

//	Function declaration
function evenOrOddDec (number) {
	if(number % 2 === 0) {
		console.log(`${number} is even`);
	} else {
		console.log(`${number} is odd`);
	}
}

evenOrOddDec (2);


//   function expression
const evenOrOddExp = function(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

evenOrOddExp (3);





//  Arrow function
const evenOrOddArrow = number => {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
evenOrOddArrow(3);








2.Mavzu:
2.Ikki sondan kattasi
//	Berilgan ikki sondan katasini qaytaradigan funksiya yozing.

//	Function declaration
function maxDec (number1, number2) {
	if (number1 >= number2) {
		return number1;
	}
	return number2;
}
console.log(maxDec(4, 5));



//  Function expression
const maxExp = function (number1, number2) {
    if (number1 >= number2) {
        return number1;
    }
    return number2;
}
console.log(maxExp(7, 6));



//  Arrow function
const maxArrow = (number1,number2) => {
    if (number1 >= number2) {
        return number1;
    } 
    return number2;
}
console.log(maxArrow(5, 6));










3.Mavzu:
3.	Berilgan sonni teskarisiga o'girish
//	Berilgan sonni teskarisiga o'girib, qaytaradigan funksiya yozing.

//	function decleration
function reverseDec (number) {
	const numberStr = String(number);
	const reverseStr = numberStr.split('').reverse('').join('');
	return Number (reverseStr);
}
console.log(reverseStr(15));




//  function expression
const reverseExp = function(number) {
    const numberStr = String(number);
    const reverseStr = numberStr.split('').reverse('').join('');
    return Number(reverseStr);
}
console.log(reverseExp(43));





//  Arrow function
const reverseArrow = number => {
    const numberStr = String(number);
    const reverseStr = numberStr.split('').reverse('').join('');
    return Number (reverseStr);
}
console.log(reverseArrow(32));


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

																14-chi videodagi darslik

																	Reja:
															0.		Array
															1.	Array yaratish
															2.	Array elementini olish
															3.	Array'ga element qo'shish
															4.	Array elementini o'zgartirish
															5.	Array elementini o'chirish 
															6.	Array uzunligini aniqlash

0.Mavzu:
0.	Array -
// Arry bu bir vaqtning o'zida bir nechta qiymatlarni o'zida saqlashi mumkin bo'lgan obyekt.--
//	-- Quyida languages nomi, 3 elementdan tashkil topgan array ko'rsatilgan.
const languages= ['js', 'java', 'go'];










1.Mavzu:
1.Array yaratish. //	2 xil usulda yaratiladi

//	1-Usul
Array literal ko'rinishida
//	Array yaratishning eng onson usuli array literal hisoblanib,to'rtburchak qavslar ([]) --
//	-- dan foydalanib yaratiladi.
const languages = ['js', 'java', 'go'];



//	2-Usul
New kalit so'zidan foydalanib yaratish.
//	JavaScript dasturlash tilidan arraylarni (new) kalit so'zidan foydalanib ham yaratish imkoniyati mavjud.
const languages = new Array('js', 'java', 'go');



//	Array o'z ichida turli xil qiyatlarni saqlashi mumkin.

1.	//	bo'sh array
	const emptyArray = [];

2.	//	sonlar arrayi
	const sonArray[1, 2, 9, -2];

3.	//	stringlar arrayi
	const stringArray = ['JavaScript', 'Java', 'Go'];

4.	//	aralash qiymatlardan tashkil topgan array
	const mixedArray = ['JavaScript', 2, false, null];










2.Mavzu:
2.	Array elementini olish
//	Array elementlarini uning index'laridan foydalanib olish mumkin.
	
		  length = 5	
<-------------------------->
	'h' 'e' 'l' 'l' 'o'
	 0   1   2   3   4

Array elementlarini raqamlanishi 0 dan boshlanadi.


const helloArray = ['h', 'e', 'l', 'l', 'o'];

//	birinchi element olish
console.log(helloArray[0]);	//	'h'

//	uchinchi element olish
console.log(helloArray[2]);	//	'e'







3.Mavzu:
3.	Array'ga element qo'shish
//	Array'ga element qo'shish uchun push() yoki unshift() array metodlaridan foydalanish mumkin.


push() //	metodi yordamida array oxiriga element qo'shish mumkin.

let languages = ['js', 'java'];
languages.push('go');
console.log(languages); //  ['js', 'java', 'go']




unshift() //	metodi yordamida array boshiga element qo'shish mumkin

let languages = ['js', 'java'];
languages.unshift('go');
console.log(languages); //	['go', 'js', 'java']







4.Mavzu:
4.	Array elementini o'zgartirish
//	Array index'laridan foydalanib,uning element qiymatini o'zgartirish imkoniyati mavjud.

let languages = ['js', 'java', 'go'];
languages[1] = 'swift';
console.log(languages); //	['js', 'swift', 'go']







5.Mavzu:
5.	Array elementini o'chirish
pop() // metodidan foydalanib array ichidagi oxirgi elementni o'chirish imkoniyati mavjud.--
//	-- Method o'chirilgan elementni qaytaradi.
let languages = ['js', 'java', 'go', 'swift'];

const deletedLanguage = languages.pop();
console.log(languages); //  ['js', 'java', 'go',]
console.log(deletedLanguage); // swift



shift() //	Metodidan foydalanib array ichidagi birinchi elementni o'chirish imkoniyati mavjud.--
//	-- Method o'chirilgan elementni qaytaradi.
let languages = ['js', 'java', 'go', 'swift']

const deletedLanguage = languages.shift();
console.log(languages); // ['java', 'go', 'swift']
console.log(deletedLanguage); // js






6.Mavzu:
6.	Array uzunligini aniqlash
//	Array uzunligi ya'ni uning ichidagi elementlar sonini aniqlash uchun (length) --
//	--  xossasidan foydalaniladi.

const languages = ['js', 'java', 'go'];
console.log(languages.length); // 3




---------------------------------------------------------------------------------------------------

					15-chi videodagi darslik

							Reja:
						Array  Methods:										  Immutable(O'zgarmas)

1.	 concat()	//	 2 yoki undan ortiq array'larni birlashtirib, --					+
				//-- natijani qaytaradi.	          

2.	 indexOf()	//	 Array'ni ichidan elementni izlab,--								+
			    //-- uning joylashgan o'rnini	(index) qaytaradi.			            

3.	 find()		 //		birinchi bo'lib shartni bajargan array elementini--              +
				 // --  qaytaradi. Array ichidagi elementni qidirishda --
				 //	--  foydalaniladi.		

4.	 findindex() //		Birinchi bo'lib shartni bajargan array elementini --			+		
				 // --  joylashga o'rnini (index) qaytaradi. Array ichidagi--
				 //	--	elementni joylashgan joyini topishda foydalaniladi.

5.	 forEach()	//	    har bir element uchun berilgan funksiyni chaqiradi.				+

6.	 map()		//		har bir massiv elementi uchun berilgan funksiyani--				+
				//	--	chaqirib, yangi array yaratadi.					

7.	 filter()	//		berilgan shartni bajargan elementlarni saralab olib,--			+
				//	--	yangi massiv yaratadi.

8.	 includes()	//		massivda ko'rsatilgan element mavjudligini tekshiradi.			+

9.	 push()		//		massiv oxiriga yangi elementni qo'shadi va massivning --		-
				// --	yangi uzunligini qaytaradi.

10.  unshift()	//		massiv boshiga yangi element qo'shadi va massivning --			-
				//	--	yangi uzunligini qaytaradi.

11.	 pop()		//		massivning oxirgi elementini olib tashlaydi va olib --			-
				//  --	tashlangan elementni qaytaradi.

12.	 shift()	//		massivning birinchi elementini olib tashlaydi va olib --		-
				//	--	tashlangan elementni qaytaradi.																		

13.	sort()		//		elementlarni alfavit tartibida,satrlar sifatida va o'sish--		-
				//	--	tartibida tartiblaydi.
			
14.	slice()		//		massivning ko'rsatilgan qismini tanlab, qaytaradi.				+

15.	splice()	//		massivdagi mavjud elementlarni olib tashlaydi yoki--			-
				//	--	almashtiradi va yoki yangi elementlarni qo'shadi.

										Misollar:

// //   concat()
const array1 = [1, 4, 11];
const array2 = [2, 3, 7];
const result = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(result); // [1, 4, 2, 3, 7]


//   find()
const foundValue = result.find(number => number === 2);
console.log(foundValue); // 2


//  filter()

const filteredValues = result.filter(number => number > 5);
console.log(filteredValues); // 7


//  map()
const mapValues = number => 'Son: ' + number;
const mappedValues = result.map(mapValues);
console.log(mappedValues); //  ['Son: 1', 'Son: 4', ...]


//	sort()
const sortValues = (number1, number2) => number1 - number2;
result.sort();
console.log(result); // [1, 2, 4, 7];










--------------------------------------------------------------------------------------------------------

										16-chi videodagi darslik

										Reja: Objekts
									0.	Objekts
									1.	Object elon qilish (yaratish)	
									2.	Object xossasini olish
									3.	Nested (ichma-ich) object'lar
									4.	Object method'lari
									
0. Mavzu: 
Objects
//	JavaScript object - bir nechta malumotlar to'plamini saqlashga imkon beruvchi --
//	--	ma'lumot turi (date-type).

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29
}
console.log(dasturchi); //	{ism: 'Husniddin', yosh 29}




1. Mavzu:
Object elon qilish (yaratish)
//	Obyektalr fuguralik qavslar ({}) yordamida yaratilinib, har bir xossani (property) --
// -- kalit:qiymat ko'rinishiga ega bo'ladi.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29
}
console.log(dasturchi);


			let person = {
		     ---------- name: 'John', ----------
	Keys----|									|-----Values
			 ---------- age: 20 ----------------
			};




2. Mavzu:
Object xossasini olish // 2-usuli mavjud:
//	Xossaning qiymatini ka'lit yordamida olish imkoniyati mavjud.


//	1-usul:
.Dot (.) belgisidan foydalanib

const dasturchi = {
	ism: 'Husniddin',
	yosh 29
}
console.log(dasturchi.ism); //	Husniddin


//	2-usul:
.Qavs ([]) belgisidan foydalanib

const dasturchi = {
	ism: 'Husniddin',
	yosh 29
}
console.log(dasturchi['ism']); //	Husniddin





3. Mavzu:
Nasted (ichma-ich) object'lar
//	Object ichida boshqa object'ni saqlashi mumkin.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29,
	manzil: {
		mamlakat: 'Uzbekistan',
		viloyat: 'XORAZM',
		uy: 7
	}
}
console.log(dasturchi.manzil);
console.log(dasturchi.manzil.viloyat);




4. Mavzu:
Object method'lar
//	Object o'z ichida funksiyalar saqlashi mumkin va ular method'ar deb nomlanadi.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29,
	salomlashish: function () {
		console.log('salom!');
	}
}
dasturchi.salomlashish();

console.log(dasturchi.salomlashish());
console.log(dasturchi.salomlashish);









---------------------------------------------------------------------------------------------------

										17-chi videodagi darslik

												Reja:
											1. Method
											2. this ka'lit so'zi
											3. Maxsus method'ar
												3.1 Object.keys()
												3.2 Object.values()


1. Mavzu:
1. Method
//	JavaScript method - funksiya qiymatiga ega bo'lgan obyekt xususiyati.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29, 
	salomlashish: function() {
		console.log('salom!');
	}
}
dasturchi.salomlashish();
console.log(dasturchi.salomlashish);




2. Mavzu:
2. this ka'lit so'zi
//	Method ichida obyektning xususiyatlarini ishlatish uchun this ka'lit so'zidan foydalaniladi.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29,
	salomlashish: function() {
		console.log('salom! Mening ismim ' + this.ism);
	}
}
dasturchi.salomlashish();








3. Mavzu:
3. Maxsus method'lar

	3.1 Object.keys()
//	Object.keys() - berilgan obyektning ka'litlar ro'yhati qaytaruvchi maxsus funksiya.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29
}

console.log(Object.keys(dasturchi)); //	['ism', 'yosh']



	3.2 Object.values()
//	Object.values() - berilgan obyektning qiymatlar ro'yhatini qaytaruvchi maxsus funksiya.

const dasturchi = {
	ism: 'Husniddin',
	yosh: 29
}
console.log(Object.values(dasturchi)); // ['Husniddin', 29]












					// qo'shimcha

					console.log(Object.entries(dasturchi)); //	[Array(2), Array(2)]




----------------------------------------------------------------------------------------------------

									18-chi videodagi darslik

											Reja:
									1. Conditional statement
									2. if statement
									3. if/else statement
									4. if/else/if statement


1.Mavzu:
1. Conditional statement
//		Conditional statement - JavaScript dasturlash tilida berilgan sharga ko'ra ma'lum bir --
// --   oqimni ishga tushirish. Boshqacha qilib aytganda berilgan sharga ko'ra ma'lum bir --
// --	harakatni bajarishga aytiladi.

Misol:
Agar foydalanuvchi ro'yhatdan o'tgan bo'lsa
	- Shaxsiy kabinetga yo'naltirish
Aks holda
    - Ro'yhatdan o'tish sahifasiga yo'naltirish
	

	
JavaScript dasturlash tilida 2 asosiy conditional statement'lar mavjud:

		1.	if - 3 qisimga bo'linadi
			
			1.1	if
			1.2	if/else
			1.2	if/else/if/else



		2.	switch






2. Mavzu:
2.	if statement
//	  if statement qavs ichida berilgan shartga ko'ra qaror qabul qiladi: agar shart rost --
// -- (true) bo'lsa if bloki ishga tushadi, aks holda blok ichidagi kod o'tkazib yuboriladi.

const number = 2;
if (number . 0) {
	console.log('berilgan son musbat');
}
console.log("if'dan keyingi qator");

													
													-
													-
													-
			Condition is true						-			Condition is false
													-	
				  let number = 2;					-				let number = -2;
			----- if (number > 0) {					-		------- if (number > 0) {	
			-										-		- 			//	code
			----->	   // code						-	 	-			
													-		-		 }	
				}									-		-
				// code after if					-		-------> //	code after if
													-
													-
													-
													



3.Mavzu:
3. if/else statement
//	  if statement shart ixtiyoriy ravishda else qismga ega bo'lishi mumkin: agar shart rost --
// -- (true) bo'lsa if bloki ishga tushadi, aks holda else bloki ishga tushadi.

const number = 2;
if (number > 0) {
	console.log('berilgan son musbat');
} else {
	console.log('berilgan son manfiy');
}



												-		
	Condition is true							-			Condition is false
												-
			 let number = 2;					-		
	-----    if	(number > 0) {					-					 let number = -2;	
	-											-			-------- if (number > 0) {		
	------------> // code						-			-			  // code
												-			-		 }	
	-------- }									-			-
	-											-			-
	-		else {								-			-------> else {		
	-	  										-			
	-			 // code						-						 // code	
	-											-			-------- }	
	-		}									-			-
	-														-		
	-										-			    -------> // code after if
	------> // code after if					-									
												-
												
												





4.Mavzu:
4. if/else/if statement
//	  if/else statement odatda ikki holatdan birini ishga tushirish uchun ishlatiladi. Agar --
// -- siz ikkitadan ko'p bo'lgn holatlarni  o'z ichiga oladigan shart yozmoqchi bo'lsangiz --
// -- if/else/if statement'dan foydalanishingiz mumkin: agar birinchi shart rost bo'lsa --
// -- birinchi blok ishga tushadi, aks holda ikkinchi blok shartga tekshiriladi.

const number = 2;
if (number > 0) {
	console.log('Berilgan son musbat');
} 	else if (number === 0) {
	console.log('Berilgan son 0');
}	else {
	console.log('Berilgan son manfiy');
}


1st Condition is true		  		2nd Condition is true 				All Condition are false

	let number = 2;						let number = 0;					let number = -2;
--- if (number > 0) {				---	if (number > 0) {			--- if (number > 0) {	
-									-								-		// code	
-									-	}							-	
-									--> else if (number == 0) {		-	}
-																	--> else if (number == 0) {
----> // code									// code				 			// code

--- }								--- }							--- }		
-	 else if (number == 0) {		-	else {						-
-			  // code				-		// code					-
-									-								--> // code after if
-	}								-	}
-	else {							-
-									---> // code after if
-	   // code 						
-	}								
-
--->// code after if






																																					:
-----------------------------------------------------------------------------------------------------

									19-chi videodagi darslik

											Reja:
										1.	switch


1. Mavzu:
1. switch 
//	  JavaScript dasturlash tilida qaror qabul qilishda switch statement'dan foydalaniladi. --
// -- switch statement berilgan ifodani baholab, shunga to'g'ri keluvchi kod blokni ishga --
// -- tushirib yuboradi.

const number = 5;
let output;

switch (number) {
	case 1:
		output = 'bir';
		break;
	case 2:
		output = 'ikki';
		break;
	case 5:
		output = 'besh';
		break;
	default:
		output = 'topilmadi';
		break;
}
console.log(`Qiymat:${output}`);



break // kalit so'zi ixtiyoriy.Agar break iborasi uchrasa, switch operatori shu qismda --
	  // -- ishni to'xtatadi. Agar break operatori ishlatilmasa, mos keladigan holatdan keyingi --
	  // -- holatlar ham ushga tushiriladi.



default // kalit so'zi ham ixtiyoriy bo'lib, agar ifoda tepada berilgan case larning hech --
		// -- biriga to'g'ri kelmasa, default blok ishga tushadi.





---------------------------------------------------------------------------------------------------------------------

									20-chi videodagi darslik

											Reja:
									1.	for
									2.	break
									3.	continue


1. Mavzu:
1.	for
//	  JavaScript dasturlash tilida for loop'idan foydalanib ma'lum bir kod blokini bir necha --
// -- bor ishga tushirish imkoniyati mavjud.

Umumiy korinish.
 
for (boshlangichIfoda; tekshirivShart; ifodaniYangilash) {
	// for kod bloki (tanasi)
} 



Boshlangich ifoda - // o'zgaruvchi(lar)ni e'lon qilish uchun yoziladi va bir marta ishga --
// -- tushadi.


Tekshiruv shart- // berilgan shart tekshiriladi va agar u rost (true) bo'lsa berilgan kod blok --
// --ishga tushuriladi, aks holda ya'ni yolg'on (false) bo'lgan holatda for loop tugatiladi.
				

Ifodani yangilash - // tekshiruv sharti rost bo'lgan holatda, boshlang'ich ifoda yangilanadi.





Misollar:
// for loop'dan foydalanib  "Salom dunyo" yozuvini 10 marta ekranga chiqaring.

for (let i = 0; i < 10; i++) {
	console.log('Salom dunyo');
}



// for loop'dan foydalanib 1 dan 10 gacha bo'lgan sonlar yig'indisini hisoblang.

let sum = 0;

for (let i = 1; i <= 10; i++) {
	sum += i;
}
console.log(`Summa: ${sum}`);







2.Mavzu:
2. break
//	  break statement yordamida berilgan ma'lum bir shart bajarilgan holatda loop'ni --
// -- to'xtatish imkoniyati mavjud.

	break;


//	1-dan  5-gacha bo'lgan sonlarni console'ga chiqaruvchi loop.
for(let i =1; i <= 5; i++) {
	// break condition
	if (i === 3) {
		break;
	}
	console.log(i);
}


								for (Infinity; condition; update) {
									// code
									if (condition to break) {
					------------------- break;
					-				}
					-				// code
					-			}
					-
					----------->
					
					
			-------------------------------------------------------------------




								while (condition) {
									// code
									if (condition to break) {
					------------------- break;
					-				}
					-				// code
					-			}
					-
					----------->					









3.Mavzu:
3. continue
//    continue statement yordamida berilgan loop'ning joriy takrorlanishi (iteratsiya) --
// -- o'tkazib yuborish imkoniyati mavjud.

	continue;


// 	  1-dan 5-gacha bo'lgan sonlarni console'ga chiqaruvchi loop --
// -- for (let i = 1; i <= 5; i++) {
	// continue condition
	if (1 === 3) {
		continue;
	}
	console.log(i);
}


															 ------------	
															 -			-
															 -			-
								for (Infinity; condition; update) {		-		
									// code								-
									if (condition to continue) {		-	
										continue;  >---------------------
									}
									// code
								}


						-----------------------------------------------------------


								------->	while (condition) {
								-				// code
								-				if (condition to continue) {
								------------------	continue;
												}
												// code
											}








---------------------------------------------------------------------------------------------------------------

									21-chi videodagi darslik
											Reja:
										1.	while
										2.	do/while
										3.	for yoki while			

												
1.Mavzu:
1. while
//	  JavaScript dasturlash tilida ma'lum bir blok kodini bir necha martta ishga tushirish --
// -- uchun while statement'dan foydalanish mumkin. U for loop bilan vazifasi deyarli bir xil --
// -- bo'lib, faqatgina yozilishida (syntax) farqi mavjud:

Umumiy ko'rinishi

while (tekshiruvSharti) {
	// qaytariladigan blok kodi (tanasi)
}


Tekshiruv sharti-// while loop berilgan tekshiruv shartini tekshirib ko'radi va agar ifoda rost--
// -- (true) bo'lsa berilgan kod blokni ishga tushuradi, aks holda o'z ishini to'xtatadi.



Misollar:

// while loop'dan "Salom dunyo" yozuvini 10 marta ekranga chiqaring.

let i = 0;

while (i > 10) {
	console.log('Salom dunyo');
	i++;
}


// while loop'dan foydalanib 1-dan 10-gacha bo'lgan sonlar yig'indisini hisoblang.

let i = 1, sum = 0;

while (i <= 10) {
	sum += i;
	i++;
}
console.log(`Summa: ${sum}`);





2.Mavzu:
2. do/while
//    do/while statement while loop'ga juda ham o'xshash bo'lib, faqatgina farqi do/while --
// -- kamida bir marta ishga tushishi kafolatlangan.

do {
	// qaytariladigan blok kodi (tanasi)
} while (tekshiruvSharti)



Misollar:
// do/while loop'dan foydalanib "Salom dunyo" yozuvini 10 marta ekranga chiqaring.

let i = 0;

do {
	console.log('Salom dunyo');
	i++;
} while (i < 10)







3.Mavzu:
3. for yoki while
//	  Agar bizga berbilgan kod blokni necha marta ishga tushirishimiz oldindan ma'lum --
// -- bo'lsa, unday holatlarda for loop'dan foydalangan maqul.

// bu 5-marta ishga tushadi
for (let i = 1; i <= 5; ++i) {
	// berilgan loop tanasi (body)
}




//    Agar bizga berilgan kod blokni necha marta ishga tushirishimiz nomalum bo'lsa, --
// -- undayholatlarda while loop'dan foydalangan ma'qul.

while (tekshiruvSharti) {
	// berilgan loop tanasi  (body)
}






																																	:
------------------------------------------------------------------------------------------------------------

									22-chi videodagi darslik
							
									Oqim boshqaruvi bo'yicha amaliyot		
							
							Reja:
							1.	Ko'rsatilgan chegaraadagi raqamni toping
							2.	Berilgan ikki son ustida arifmetik amal bajarish
							3.	Berilgan massivdagi eng katta qiymatga ega element



1.Mavzu:
1. Ko'rsatilgan chegaradagi raqamni oping
//	Kiritilgan son berilgan chegara (range) ichidaligini aniqlovchi dastur tuzing.

const inRange = (min, max, number) => {
	if (number >= min && number <= max) {
		console.log(`Berilgan ${number} va ${min} va ${max} orasida`);
	} else {
		console.log(`Berilgan son ${min} va ${max} orasida emas`);
	}
}

const minRange = 10;
const maxRange = 30;
const givenNumber = 20;

inRange(minRange, maxRange, givenNumber)





2.Mavzu:
2. Berilgan ikki son ustida arifmetik amal bajarish
//	Berilgan ikki son ustida ko'rsatilgan arifmetik amalni bajaring va natijasini console'ga --
// -- chiqaring.

const simpleCalculator = (num1, num2, oper) => [
	switch (oper) {
		case "add":
			console.log(`Yig'indisi: ${num1 + num2}`);			
			break;
		case "subtract":
			console.log(`Ayirmasi: ${num1 - num2}`);
			break;
		case "multiply":
			console.log(`Ko'paytmasi: ${num1 * num2}`);
			break;
		case "divide":
			console.log(`Bo'linmasi: ${num1 / num2}`);
			break;
		default:
			console.log('Aniqlanmagan amal');
	}
]

const a = 20;
const b = 5;	
const operation = "add";
simpleCaculator (a, b, operation);







3.Mavzu:
3. Berilgan massivdagi eng katta qiymatga ega element
// Berilgan massivdagi eng katta qiymatga ega bo'lgan elementni ekranga chiqaruvchi dastur yozing.

const getLargestElement = (array) => {
	let largest = array [0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > largest) {
			largest = array[i];
		}
	}
	return largest;
}

const nums = [6, 51, 7, 37, 673, 38, 349, 127];
const result = getLargestElement (nums);
console.log(`Eng katta element: ${result}`);








-------------------------------------------------------------------------------------------------------------------

				23-chi videodagi darslik
						Reja:
					1. DOM


1.Mavzu:
1. DOM
DOM (Document Object Model) - // dasturlash interfeysi bo'lib, u yordamida hujjatda --
// -- elementlar yaratish, o'zgartirish va o'chirish imkonini beradi. Undan tashqari, --
// -- elementlarga hodisalar (event) qo'shish orqali, sahifamizni interaktiv qilish imkoniyati --
// -- mavjud.


DOM HTML //DOM HTML hujjatini tugunlar daraxti (true of nodes) sifatida ko'radi. Tugun (node) --
// -- HTML elementini ifodalaydi

DOM // DOM brauzer tomonidan avtomatik ravishda yaratilinadi.


Misol:
Kod

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>DOM daraxt ko'rinishi</title>
// </head>
// <body>
//     <h1>DOM daraxt ko'rinishi</h1>
// 	<h2>Bugungi darsda DOM nima ekanligini o'rganib olamiz</h2>
// </body>
// </html>






-------------------------------------------------------------------------------------------------------------

									24-chi videodagi darslik

											Reja: Element tanlab olish

										1. Element selection
										2. getElementByld()
										3. getElementsByName()
										4. getElementsByClassName()
										5. getElementByTagName()
										6. querySelector()


1.Mavzu:
1. Element selection
// -- HTML hujjatdagi elementlarni bir necha yo'l bilan tanlab olish imkoni mavjud va bular --
// -- DOM API orqali amalga oshiriladi.


Element(lar)ni tanlab olish yo'llari // 5-ta yo'li bor

1. getElementByid - // elementni iD orqali tanlab olish.
2. getElementByName - // elementlarni nomi orqali tanlab olish.
3. getElementByClassName - // elementlarni class nomi orqali tanlab olish.
4. getElementByTagName - // elementlarni tag nomi orqali tanlab olish.
5. querySelector - CSS selector orqali elementini tanlab olish.








2.Mavzu:
2. getElementBtId()
//    getElementById - metodi orqali HTML hujjatimizdagi elementni ID orqali tanlab olish --
// -- imkoniyati mavjud.

document.getElementById('idShuYergaYoziladi')






3.Mavzu:
3. getElementsByName()
//    getElementByName --metodi orqali HTML hujjatimizdagi elementlarni nomi tanlab --
// -- olish imkoniyati mavjud.

document.getElementsByName('elementNomiShuYergaYoziladi')







4.Mavzu:
4. getElementsByClassName
// getElementsByClassName - metodi orqali HTML hujjatimizdagi elementlarini class --
// -- nomi orqali tanlab olish imkoniyati mavjud.

document.getElementsByClassName('elementNomiShuYergaYoziladi')







5.Mavzu:
5. getElementsByTagName()
// -- getElementsByTagName - metodi orqali HTML hujjatimizdagi elementlarini tag nomi --
// -- orqali tanlab olish imkoniyati mavjud.

document.getElementsByTagName('tagNomiShuYergaYoziladi')






6.Mavzu:
6. querySelector
// querySelector - metodi orqali HTML hujjatimizdagi elementni CSS selktor orqali --
// -- tanlab olish imkoniyati mavjud.

document.querySelector('CSSSelektorShuYergaYoziladi')





querySelectorAll - // querySelectorAll - metodi orqali HTML hujjatimizdagi elementlarni --
// -- CSS selektor orqali tanlab olish imkoniyati mavjud.

document.querySelectorAll('CSSSelekorShuUergaYoziladi')






-------------------------------------------------------------------------------------------------------------------

									25-chi videodagi darslik
											Reja: Elementlarni o'zgartirish
										
										1. Element matnini o'zgartirish
										2. Element qiymatini o'zgartirish
										3. Element tanasini o'zgartirish 	


1.Mavzu:
1. Element matnini o'zgartirish
//    Tanlab olingan element matnini o'zgartirish uchun elementning maxsus textContent --
// -- atributidan foydalanishimiz mumkin.

const element = document.getElementById('elementId');
element.textContent = 'Yangi matn';





2.Mavzu:
2. Element qiymatini o'zgartirish
//    Tanlab olingan element qiymatini o'zgartirish uchun elementning maxsus value --
// -- attributidan foydalanishimiz mumkin.

const inputElement = document.getElementById('inputId');
inputElement.value = 25;






3.Mavzu:
3. Element tanasini o'zgartirish
//    Tanlab olingan elementni tanasini boshqa HTML element bilan almashtirish uchun --
// -- elementning innerHTML attributidan foydalanishimiz mumkin.

const element = document.getElementById('elementId');
element.innerHTML = `<h1>Sarlavha</h1>`;






------------------------------------------------------------------------------------------------------------------

									26-chi videodagi darslik

											Reja: Elementlarni qo'shish va o'chirish
										
										1. Element yaratish
										2. Element qo'shish
										3. Element o'chirish


1.Mavzu:
2. Element yaratish
//    JavaScript dasturlash tilida DOM API'ning createElement() metodini chaqirish orqali --
// -- yangi element yaratish imkoniyati mavjud.

Umumiy ko'rinishi

document.createElement(tagNomi, options)



Misol:

const paragraph = document.createElement('p');


// DOM API orqali text yaratish uchun uning createTextNode() metodidan foydalanishimiz mumkin.

const text = document.createTextNode('Bu yerda xatboshi yozilgan');








2.Mavzu:
2. Element qo'shish
// --  DOM API'ning appendChild() metodini chiqarish orqali element'larni o'zaro qo'shish --
// -- imkoniyati mavjud.
 
Umumiy ko'rinishi
element.appendChild(anotherElement)



Misol:

const paragraph = document.createElement('p');
const text = document.createTextNode('Bu yerda xatboshi yozilgan');

paragraph.appendChild(text);

------

const box = document.getElementById('box');
box.appendChild(paragraph);


//    DOM API orqali berilgan node elementning parent (ota-ona) va child (farzand) --
// -- elementlarini ko'rish imkoniyati mavjud. PArent'ni ko'rish uchun  berilgan elementning --
// -- parentElement yoki parentNode attributiga murojat qilishimiz mumkin. --
// -- Children'larni ko'rish uchun esa children yoki childNodes attributiga murojat --
// --  qilish kerak bo'ladi.

Umumiy ko'rinishi

const element = document.getElementById('element');
element.parentElement;
element.children;
-----
element.parentNode;
element.childNodes;



Misol:

const main = document.getElementById('main');

console.log(main.parentElement);
console.log(main.children);






3.Mavzu:
3. Element o'chirish
//    JavaScript dasturlash tilida DOM API'ning remove() metodini chaqirish orqali --
// -- ko'rsatilgan elementni DOM'dan olib tashlash imkoni mavjud.


Umumiy ko'rinishi
element.remove()



Misol:

const paragraph = document.getElementById('elementId');
paragraph.remove();


//    Google'ga to'g'ri qidiruv so'rovi berish orqali, sizga kerak bo'lgan DOM API'ning --
// -- metodlari haqida ko'proq ma'lumot olishingiz mumkin.




------------------------------------------------------------------------------------------------------------

											27-chi videodagi darslik

												Reja: Hodisalar (events)
										1. Event
										2. Inline event handler
										3. Inline event properties
										4. Event Listeners


1.Mavzu:
1. Event
//    Events (hodisalar) - foydalanuvchi yoki brauzerning o'zi tomonindan amalga oshirilishi --
// -- mumkin bo'lgan brauzerda sodir bo'ladigan hodisalar.

Misol uchun:
1.Sahifa yuklandi (page load) hodisasi
2.Foydalanuvchi tugmani bosish hodisasi
3.Foydalanuvchi to'ldirgan formani jo'natish hodisasi


// 	  Hodisalar yuz berganda unga javob berish (javascript funksiyani ishga tushirish) orqali --
// -- veb sahifamizni iteraktiv qilishimiz mumkin.

Elementlarga hodisalarni bog'lashni uchta usuli mavjud:

1.Inline event handlers
2.Event handler properties
3.Event listeners






2.Mavzu:
2. Inline event handler
//    Event HTML tegining atributi sifatida funksiya bilan ko'rsatilib o'tiladi va --
// -- foydalaniladigan funksiya esa script qismda yozib o'tiladi.

Umumiy ko'rinishi

<element eventName="javascriptFunction()">Content</element>


Misol:

<div>
	<h1 id="heading">Sarlavha</h1>
	<button onclick="changeHeading()">Sarlavhani o'zgartirish</button>
</div>

const changeHeading = () => {
	const heading = document.getElementById('heading');
	heading.textContent = 'Yangi sarlavha';
}




! //    Inline event'lar ishlatish onson bo'lishiga qaramay, odatda ular faqatgina o'rganish --
  // -- jarayonida ishlatib o'tiladi. Ko'p loyihalarda inline event'lar o'rniga boshqa usuldan --
  // -- foydalanishadi.








3.Mavzu:
3. Inline event properties
//    Inline event properties bundan oldingi usulga juda o'xshash bo'lib asosiy farqi, endi --
// -- hodisa ro'y berganda ishga tushadigan funksiya inline attribut ko'rinishida emas balki --
// -- tanlab olingan element uchun atrribut ko'rinishida beriladi.Ya'ni funksiya ko'rsatish --
// -- javascript dasturimizda amalga oshadi.

Umumiy ko'rinishi

const element = document.getElementById('elementId');
element.eventName = javascriptFunction;


Misol:

<div>
	<h1 id="heading">Sarlavha</h1>
	<button id="changeHeadingBtn">Sarlavhani o'zgartirish</button>
</div>


const changeHeading = () => {
	const heading = document.getElementById('heading');
	heading.textContent = 'Yangi sarlavha';
}

const btn = document.getElementById('changeHeadingBtn');
btn.onclick = changeHeading;


// 	  Inline event properties usuli bundan oldingi usulimizdan yaxshiroq bo'lganiga qaramay --
// -- uning ba'zi bir kamchiliklari mavjud: Masalan, bir vaqtning o'zida bir nechta handler --
// -- qo'shish imkoni yo'q.





4.Mavzu:
4. Event Listeners
//    Event Listner - elementdagi hodisani tinglab turadi va shu hodisa yuz berganda --
// -- kerakli funksiyani ishga tushirib yuboradi.

Umumiy ko'rinishi

element.addEventListener(eventName, javascriptFunction);


Misol:

<div>
	<h1 id="heading">Sarlavha</h1>
	<button id="changeHeadingBtn">Sarlavhani o'zgartirish</button>
</div>



const changeHeading = () => {
	const heading = document.getElementById('heading');
	heading.textContent = 'Yangi sarlavha';
}

const btn = document.getElementById('changeHeadingBtn');
btn.addEventListener('click', changeHeading);


// Loyihalarda odatda event listener'lardan foydalanishadi.





--------------------------------------------------------------------------------------------------------------------

										28-chi videodagi darslik

												Reja: Ko'p uchraydigan hodisalar

											1. Ko'p uchraydigan hodisalar



1.Mavzu:
1. Ko'p uchraydigan hodisalar
// JavaScript dasturimizda ko'pincha quyidagi hodisalar bilan birga ishlaymiz:
	1.Mouse Events
	2.From Events
	3.Keyboard Events


		1.Maus Events
		//    Maus Events - eng ko'p ishlatiladigan hodisalar qatoriga kiradi.Ular --
		// -- sichqonchaning tugmachalarini bosish yoki sichqoncha ko'rsatgichini olib borish --
		// -- va harakatlantirishga tegishli bo'lgan hodisalarni o'z ichiga oladi.


			HODISA:					TAVSIFI:

			click					Sichqoncha bosilib va qo'yib yuborilganda ishga tushadi.
			dblclick 				Elementga ikki marta bosilganda ishga tushadi.
			mouseenter 				Sichqoncha elementni ustiga kelgada ishga tushadi.
			mouseleave				Sichqoncha elementni tark etganda ishga tushadi.
			mousemove				Sichqoncha element ichida harakat qilganda ishga tushadi.


			Misol:

			const notifyDoubleClick = () => {
				console.log('Element iki marta bosildi');
			}

			const btn = document.getElementById('btn');
			btn.addEventListener('dblclick', notifyDoubleClick);






		2.Form Events
		// Form Events - forma bilan ishlaganda yuz beradigan hodisalar

			HODISA:						TAVSIFI:
			
			submit						Form jo'natilganda (submit) ishga tushadi.
			focus						Element fokus bo'lganda ishga tushadi.
			blur						Element fokus yo'qotganda ishga tushadi.






		3.Keyboard Events
		//    Keyboard Events - klaviatura tugmachasini bosish, qo'yib yuborish va tugmani --
		// -- bosib ushlab turish kabi hodisalarni o'z ichiga oladi.

			HODISA:						TAVSIFI:

			keydown						Klaviatura tugmasi bosilganda ishga tushadi.
			keyup						Klaviatura tugmasi qo'yib yuborilganda ishga tushadi.
			keypress					Klaviatura tugmasi bosilib turganda ishga tushadi.



			Misol:
			
			document.addEventListener('keydown', event => {
				console.log('key: ' + event.key);
				console.log('code: ' + event.code);
			});





----------------------------------------------------------------------------------------------------------------------

										29-chi videodagi darslik

											Reja: DOM bo'yicha amaliyot
										1. Tasodifiy sonlar generatori
										2. UI qismi
										3. Funksionallik qismi	

1.Mavzu:
1. Tasodifiy sonar generatori
// JavaScript dasturlash tilidan foydalanib,tasodifiy sonlar generatorini ishlab chiqing.






2.Mavzu:
2 UI qismi
// UI qismini tezzlatish uchun Bootstrap 5 freymvorkidan foydalanilgan.













-------------------------------------------------------------------------------------------------------------------------

30-chi videodagi darslik












-----------------------------------------------------------------------------------------------------------

31-chi videodagi darslik













-------------------------------------------------------------------------------------------------------------------------

32-chi videodagi darslik













--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

																				KALITSOZLAR:

1.	let - // let - dasturimiz ishlashi davomida o'zgarishi mumkin bo'lgan o'zgaruvchilarni e'lon qilish uchun foydalaniladi.
	let yosh = 29;
	yosh = 30; // -E'lon qilinib bo'lingan o'zgaruvchini qiymatini o'zgartirishda hech qanday kalit so'zdan foydalanilmaydi.


2,	const - // const - dasturimiz ishlashi davomida o'zgarmaydigan o'zgaruvchilarni elon qilish uchun foydalaniladi.
	const id = 'AA0'; // - const yordamida e'lon qilingan o'zgaruvchilar har doim bo'shlang'ich qiymatga ega bo'lishi shart emas.
	id = 'AA1'; X


3.	var - // var - ES6'ga qadar o'zgaruvchilarni elon qilish uchun ishlatiladigan kalit so'z.let bilan deyarli bir xil vazifani bajargan.
	var yosh = 29;
	yosh = 30;

	// let va var o'zshash bo'lishiga qaramasdan ularning malum bir farqlari mavjud. --
	// -- var yordamida e'lon qilingan o'zgaruvchilarning ko'rinish ko'lami (scope) funksiya darajasida bo'lsa, let esa blok darajada ko'rinadi.


!   // JavaScript yordamida hech qanday kalit so'zi ko'rsatmasdan o'zgaruvchi yaratish imkoniyati mavjud --
	// -- lekin bu ko'rinishdagi o'zgaruvchilar yaratish tafsiya etilmaydi.
	ism = 'Husniddin'; X
	console.log(ism);


Strict mode // Strict mode yordamida yozayotgan ko'dimizda xatolardan qochish imkoniyati mavjud.
	'use strict';
	ism = 'Husniddin';
	console.log(ism);





// O'zgaruvchilarni elon qilish -->
// JavaScript dasturlash tilida o'zgaruvchilarni 3 xil usulda elon qilish imkoniyati mavjud:--
// -- ( let ), ( const ), va ( var ) Kalit so'zlardan foydalanib amalga oshiriladi.
// -- (let) va (const) (ES6'da) taqdim etilgan kalit so'z hisoblanadi.




																OZGARUVCHILAR:

															
ism 
familya
yosh



// JavaScript dynamic ( typing ) funksiyasiga ega bo'lib, --
// -- uning yordamida o'zgaruvchi saqlovchi malumot turini ko'rsatmasdan ham qiymat saqlashimiz mumkin. -- 
// -- O'zgaruvchi saqlaydigan malumot turi avtomatik tarzda aniqlanadi.

typeof // typeof - operatoridan foydalanib o'zgaruvchi saqlayotgan malumot turini aniqlash imkoniyati mavjud.
let age = 29;
console.log (typeof age);
let firstName = 'Husniddin';
console.log (firstName);

-------------------------------------------------------------------------------------------------------------------------------------------------------------


var husWeight = 65;
var husHeight = 175;
var husBmi = husWeight / (husHeight * husHeight);
console.log(husBmi);

let tor = 'salom'/ // string
let qor = 24; // number
let sol = 22.44; // number
let go = true; // Booleon
let hu = false; // Booleon mantiqiy malumot turi
let student; // Undefined hali aliqlanmagan malumot turi
let no = null; // Null bo'sh qiymatga ega bo'lgan malumot turi
let id = Symbol('gara'); // Symbol  yagona (unique) va o'zgarmas malumot turi
const kola = BigInt(45431314643286646); // Bigint katta sonlarni saqlashga mo'ljallangan malumot turi



Primitiv

string
number 
Booleon
underfined
null
Symbol
bigint



let faro = 'salom';
let rato = 12;
let galo = 23.33;
let sdvgd = true;
let fdg = false;
let thb;
let grgesr = null;
let dsd = Symbol ('dsd');
const rgegserg = BigInt (654644634364343);



object



function

Array

Object


let fgg = 'sddgg';
let dfgr = 123;
let sdvg = 23.23;
let ardg = true;
let rhb = false;
let fdhb;
let fg = null;
let rgreg = Symbol(erga);
let rga = BigInt (23423423423423423);


let raeggerag;

let sdfsgws = null;

 let fgrg = Symbol ('fredgre');
let rgag = Bigint (564443434364346);

const vbgeg = ('rrggg');
