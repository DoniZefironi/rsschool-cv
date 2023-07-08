<p><b>Имя и фамилия:</b> Владислав Шаболда</p>     
<p><b>Контакты для связи:</b> https://t.me/gadza_devstvenik</p>    
<p><b>Краткая информация о себе:</b> 
<ul>
<li>Цель жизни - жить и не в чем не нуждаться.</li> 
<li>Мои сильные стороны :
    <ol>
<li>самостоятельность</li> 
        <li>стрессоустойчивость</li>
        <li>усидчиваость</li> 
        <li>креативность</li> 
        <li>пунктуальность</li> 
        <li>трудолюбие</li> 
        <li>повышенная работоспособность</li>
    </ol>
    </li>
        <li>Опыта работы - нет</li>
    <li>стремление учиться - безгранично, ради своей цели</li>
</ul>
</p>    
<p><b>Навыки:</b> Опыт в языке программирования - С#.</p>    
<b>Примеры кода:</b> 
<code>
    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Persistent Bugger.", () => 
{
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });
});
    function persistence(num) 
{
  let counter = 0;
  let digits = num.toString().split('');
  while (digits.length > 1) 
  {
    num = digits.reduce((a, b) => a * b);
    digits = num.toString().split('');
    counter++;
  }
  return counter;
}
</code>
<p><b>Опыт работы:</b> нет</p>            
<p><b>Образование:</b> Законченное среднее общее образование, сейчас являюсь студентом БРУ.</p>        
<b>Английский язык:</b> Я считаю самый низший, я начал учить английский только в этом году. Все 11 классов учил немецкий.
