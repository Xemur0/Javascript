function draw(){
    var table = document.createElement('table');
    var flag = true;

    var trr = document.createElement('tr');
    var arr = [' ','A','B','C','D','E','F','G','H'];


    for(var i = 0; i<8; i++){
        var tr = document.createElement('tr');


        var tdd = document.createElement('td');
        tdd.style.width='50px';
        tdd.style.height='50px';
        tdd.innerHTML=8-i;
        tr.appendChild(tdd);

        for(var j=0; j<8; j++){

            if(j==0)
                flag=!flag;

            var td = document.createElement('td');

            td.style.width='50px';
            td.style.height='50px';
            if(flag){
                td.style.background='black';
            }else
                td.style.background='white';

            tr.appendChild(td);
            flag=!flag;
        }
        table.appendChild(tr);
    }

    for(var k = 0; k<9; k++){

        var td = document.createElement('td');
        td.style.width='50px';
        td.style.height='50px';
        td.style.background='white';
        td.innerHTML=arr[k];

        trr.appendChild(td);

    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();
