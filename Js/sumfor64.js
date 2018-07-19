var sum = 0;
for(var number = 2; number <= 100; number += 2)
  sum += number;
document.writeln("The sum of the even integers " + "from 2 to 100 is " + sum);
//for(var number=2; number <= 100;sum += number, number +=2);