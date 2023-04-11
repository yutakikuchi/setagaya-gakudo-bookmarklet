javascript:(
    function(){
      set_out_plan('#out_plan_time > option', '18:00');
      set_out_plan('#out_plan_relation_code > option', '01');
      function set_out_plan(node_name, target){
        var selectElements = document.querySelectorAll('.text-left');
        for (var i = 0; i < selectElements.length; i++) {
            if(selectElements[i].className === 'text-left bg-saturday' || selectElements[i].className === 'text-left bg-closed') {
                continue;
            }
            var optionElements = selectElements[i].querySelectorAll(node_name);
            if(optionElements[0].getAttribute('selected') != 'selected') {
                continue;
            }
            optionElements[0].removeAttribute('selected');
            optionElements[0].selected = false;
            for (var j = 0; j < optionElements.length; j++) {
                if (optionElements[j].value === target) {
                    optionElements[j].setAttribute('selected', 'selected');
                    optionElements[j].selected = true;
                    selectElements[i].querySelector('#modify').setAttribute('value', 1);
                }
            }
        }
      }
    }
  )();