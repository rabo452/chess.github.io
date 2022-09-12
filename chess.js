<<<<<<< HEAD
// фигуры
let arr = [
  [3,5,7,9,11,7,5,3],
  [1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2],
  [4,6,8,10,12,8,6,4],
];
let reverse2 = false;
/*
reverse.onclick = function () {
  reverse2 = !reverse2;
  createdesk();
};
*/
let new_hod = 0;
let exit = false;
  let hod = true;
// создание доски
createdesk();
function createdesk() {
  if (reverse2) {
    arr.reverse();
  }
  let m=0;

  field.innerHTML = '';
  for (let i=0;i<arr.length;i++) {
    for (let y=0;y<arr[i].length;y++) {
      let div = document.createElement('div');
      div.classList.add('kv');
      div.setAttribute('trap','none');
      if (m%2 == 0) {
        div.classList.add('white');
      }
      else {
        div.classList.add('black');
      }
      m++;

      div.setAttribute('x',`${i}`);
      div.setAttribute('y',`${y}`);
      div.setAttribute('capiture','none');
      if (arr[i][y] != 0) {
  div.classList.add (`${append_figures(arr[i][y])}`);
  if (arr[i][y]%2 == 0) {
    div.setAttribute('team','white');
  }
  else {
    div.setAttribute('team','black');
  }
      }
      if (arr[i][y] == 0) {
        div.setAttribute('team','none');
      }

      field.append(div);
    }
    m++;
  }
}
/*field.querySelectorAll(`.white_soldat`).forEach((item, i) => {
  item.setAttribute('new_hodi',new_hod);
});
field.querySelectorAll(`.black_soldat`).forEach((item, i) => {
  item.setAttribute('new_hodi',new_hod);
});
*/
function append_figures(cord) {
switch (cord) {
  case 1: return 'black_soldat';
  case 2: return 'white_soldat';
  case 3: return 'black_lad';
  case 4: return 'white_lad';
  case 5: return 'black_horse';
  case 6: return 'white_horse';
  case 7: return 'black_oficer';
  case 8: return 'white_oficer';
  case 9: return 'black_queen';
  case 10: return 'white_queen';
  case 11: return 'black_king';
  case 12: return 'white_king';
  case 0: return null;
}
}
function reverse_append_figure(figure) {
  switch (figure) {
    case 'black_soldat': return 1;
    case 'white_soldat': return 2;
    case 'black_lad': return 3;
    case 'white_lad': return 4;
    case 'black_horse': return 5;
    case 'white_horse': return 6;
    case 'black_oficer': return 7;
    case 'white_oficer': return 8;
    case 'white_queen': return 10;
    case 'black_queen': return 9;
    case 'black_king': return 11;
    case 'white_king': return 12;
  }
}

function is_it_enemy(figurefrom,figureto) {
if (figurefrom == figureto) {
  return false;
}
else {
  return true;
}
}


function delete_figure(x,y) {
let figure = document.querySelector(`.kv[x="${x}"][y="${y}"]`);
figure.classList.remove('black_lad');
figure.classList.remove('black_oficer');
figure.classList.remove('black_queen');
figure.classList.remove('black_soldat');
figure.classList.remove('black_horse');
figure.classList.remove('white_lad');
figure.classList.remove('white_soldat');
figure.classList.remove('white_horse');
figure.classList.remove('white_oficer');
figure.classList.remove('white_queen');
figure.classList.remove('null');
figure.classList.remove('white_king');
figure.classList.remove('black_king');

}

field.querySelector(`.kv[y='4'][x='7']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='0'][x='7']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='0'][x='0']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='7'][x='7']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='7'][x='0']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='4'][x='0']`).setAttribute('hodi', 0);



/*function movefigure(from_x,from_y,to_x,to_y) {
if (!document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').style.backgroundColor) return;
let figure_class = document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').getAttribute('class').split(' ')[2];
let figure = document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').getAttribute('team');
let figure2 = document.querySelector('.kv[x="'+to_x +'"][y="'+to_y+'"]').getAttribute('team');
if (is_it_enemy(figure,figure2)) {
delete_figure(to_x,to_y);
delete_figure(from_x,from_y);
document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').setAttribute('team','none');
document.querySelector('.kv[x="'+to_x +'"][y="'+to_y+'"]').setAttribute('team',figure);
document.querySelector('.kv[x="'+to_x +'"][y="'+to_y+'"]').classList.add(figure_class);
arr[from_x,from_y] = 0;
arr[to_x,to_y] = reverse_append_figure(figure);
hod = !hod;

}
else {
alert('нельзя бить собственные фигуры!');
}
}*/
function trap_horses_white() {
  let white_horses = field.querySelectorAll('.white_horse');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = horse_functions(x,y);
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
        item2.setAttribute('trap','black_king');
        item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
    }
  });
  });
}

function trap_horses_black() {
  let black_horses = field.querySelectorAll('.black_horse');
  black_horses.forEach((item, i) => {
    let x = +item.getAttribute('x');
    let y = +item.getAttribute('y');
  let arr_figure = horse_functions(x,y);
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
      item.setAttribute('trap','new_white_king');
      item2.setAttribute('trap','white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
    }
  });
});
}

function horse_functions(x,y) {
  let arr_figure = [];
  let formylax, formylay,elem;
   formylax = x+2;
   formylay = y+1;
if (formylax<8&&formylay<8) {
 elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x+2;
formylay = y-1;
if (formylax<8&&formylay>=0) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x+1;
formylay = y+2;
if (formylax<8&&formylay<8) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x+1;
formylay = y-2;
if (formylax<8&&formylay>=0) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-2;
formylay = y-1;
if (formylax>=0&&formylay>=0) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-1;
formylay = y-2;
if (formylax>=0&&formylay>=0){
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-2;
formylay = y+1;
if (formylax>=0&&formylay<8) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-1;
formylay = y+2;
if (formylax>=0&&formylay<8) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
return arr_figure;
}











function horse(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = horse_functions(x,y);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
  let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
  let item2 = [];



if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange') {
      item2.push(item);

      arr_figure.splice(0,8);
    }
    if (item.getAttribute('trap') == defent_king) {
      if (item.classList.contains(defent_king)) return;
      item2.push(item);
      arr_figure.splice(0,8);
    }
  });

if(item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




  arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
         hod = !hod;
         if (team == 'white') {
           let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
           document.querySelector('#clock_black p b').innerHTML = meg;
         }else {
           let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
           document.querySelector('#clock_white p b').innerHTML = meg;
         }
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
  a++;
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
  }
    }
  else {
    alert('нельзя бить по своим');
  }
    }
  });


}
// конец лошади










// король
function trap_king_black() {
    let black_king = field.querySelector('.black_king');
    x = +black_king.getAttribute('x');
    y = +black_king.getAttribute('y');
    arr_figure = king_functions(x,y);
   arr_figure.forEach((item, i) => {
     item.setAttribute('trap','black');

   });
}
function trap_king_white() {
  let white_king = field.querySelector('.white_king');
    let x = +white_king.getAttribute('x');
    let y = +white_king.getAttribute('y');
    let arr_figure = king_functions(x,y);
    arr_figure.forEach((item, i) => {
      item.setAttribute('trap','white');
    });

}










function all_figures_trap_white() {
  trap_king_white();
  trap_horses_white();
  trap_lad_white();
  trap_oficer_white();
  trap_peshka_white();
  trap_white_queen();
}
function all_figures_trap_black() {
  trap_king_black();
  trap_horses_black();
  trap_lad_black();
  trap_oficer_black();
  trap_peshka_black();
  trap_black_queen();
}


















function king_functions(x,y) {
  let arr_figure = [];
  let formylax, formylay;

formylax = x+1;
formylay = y-1;
  if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
    arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
  }
  formylax = x-1;
  formylay = y+1;
if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
      arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
    }
    formylax = x+1;
    formylay = y+1;
  if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
        arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
      }
      formylax = x-1;
      formylay = y-1;
  if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
          arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
        }
        formylax = x;
        formylay = y-1;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
            arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
          }
          formylax = x;
          formylay = y+1;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
              arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
            }
            formylax = x+1;
            formylay = y;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
                arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
              }
              formylax = x-1;
              formylay = y;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
                  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
                }
                return arr_figure;
}





function king(x,y,trap,king) {
  let arr_figure = king_functions(x,y);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let a;
if (king == 'white_king') {
   a=  'new_white_king';
}else {
   a = 'new_black_king';
}



  arr_figure.forEach((item, i) => {
      if (item.getAttribute('trap') == trap || item.getAttribute('trap') == main_elem) return;
      if (item.style.backgroundColor == 'orange') {
 let x2 = item.getAttribute('x');
 let y2 = item.getAttribute('y');
        item.classList.add(main_elem);
        all_figures_trap_black();
  if(field.querySelectorAll(`.kv[capiture ='true']`).length > 1) {
 field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove(main_elem);

 return;
        }
          all_figures_trap_white();
        if(field.querySelectorAll(`.kv[capiture='true']`).length > 1) {
 field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove(main_elem);
          return;
        }
item.classList.remove(main_elem);
      }


            if (item.classList.contains('black')) {
        item.style.backgroundColor = 'rgb(61, 119, 49)';
      }
      else {
        item.style.backgroundColor = 'rgb(64, 209, 28)';
      }

    item.onclick = function (event) {
      if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
      let x2 = event.target.getAttribute('x');
      let y2 = event.target.getAttribute('y');
      let elem = field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
        delete_figure(x2,y2);
        event.target.classList.add(main_elem);
        event.target.setAttribute('team',main_attribute);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
           hod = !hod;
           if (trap == 'white') {
             let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
             document.querySelector('#clock_black p b').innerHTML = meg;
           }else {
             let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
             document.querySelector('#clock_white p b').innerHTML = meg;
           }
new_hod++;
           if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
             let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
 a++;
 field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
           }
      }
    else {
      alert('нельзя бить по своим');
    }
  }
  });
  if (king == 'white_king') {

  if (field.querySelector(`.kv[x='7'][y='5']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='7'][y='6']`).getAttribute('class').split(' ').length == 2) {
  if (field.querySelector(`.white_king`).getAttribute('trap') != 'white_king') {
      if (field.querySelector(`.white_king`).getAttribute('hodi') == 0) {
        if (field.querySelector(`.kv[y='7'][x='7']`).getAttribute('hodi') == 0 ) {
          if (field.querySelector(`.kv[x='7'][y='6']`).getAttribute('trap') != 'black' ) {
            field.querySelector(`.kv[y='6'][x='7']`).style.backgroundColor = 'rgb(88, 38, 128)';
            field.querySelector(`.kv[y='6'][x='7']`).onclick = function () {
if (  field.querySelector(`.kv[y='6'][x='7']`).style.backgroundColor == 'rgb(88, 38, 128)') {
  delete_figure(7,7);
  field.querySelector(`.kv[y='4'][x='7']`).classList.remove(main_elem);
  field.querySelector(`.kv[y='7'][x='7']`).setAttribute('team','none');
  field.querySelector(`.kv[y='4'][x='7']`).setAttribute('team','none');
  field.querySelector(`.kv[y='7'][x='7']`).setAttribute('hodi','1');
  field.querySelector(`.kv[y='4'][x='7']`).setAttribute('hodi','1');
  field.querySelector(`.kv[x='7'][y='6']`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x='7'][y='5']`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x='7'][y='6']`).classList.add('white_king');
  field.querySelector(`.kv[x='7'][y='5']`).classList.add('white_lad');
  hod = !hod;
  if (trap == 'white') {
    let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
    document.querySelector('#clock_black p b').innerHTML = meg;
  }else {
    let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
    document.querySelector('#clock_white p b').innerHTML = meg;
  }
  new_hod++;
}
            }
          }
        }
      }
  }

}
  if (field.querySelector(`.kv[x='7'][y='3']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='7'][y='2']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='7'][y='1']`).getAttribute('class').split(' ').length == 2) {
  if (field.querySelector(`.white_king`).getAttribute('trap') != 'white_king') {
    if (field.querySelector(`.white_king`).getAttribute('hodi') == 0) {
      if (field.querySelector(`.kv[y='0'][x='7']`).getAttribute('hodi') == 0 ) {
        if (field.querySelector(`.kv[x='7'][y='1']`).getAttribute('trap') != 'black' ) {

          field.querySelector(`.kv[y='2'][x='7']`).style.backgroundColor = 'rgb(88, 38, 128)';
          field.querySelector(`.kv[y='2'][x='7']`).onclick = function () {
            if (  field.querySelector(`.kv[y='2'][x='7']`).style.backgroundColor == 'rgb(88, 38, 128)')  {
              delete_figure(7,0);
                  field.querySelector(`.kv[y='4'][x='7']`).classList.remove(main_elem);
                field.querySelector(`.kv[y='0'][x='7']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='7']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='7']`).setAttribute('hodi','1');
                field.querySelector(`.kv[y='0'][x='7']`).setAttribute('hodi','1');
                field.querySelector(`.kv[x='7'][y='1']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='7'][y='2']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='7'][y='1']`).classList.add('white_king');
                field.querySelector(`.kv[x='7'][y='2']`).classList.add('white_lad');
            hod = !hod;
            if (trap == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
            new_hod++;
              }
            }
        }
      }
    }
  }
  }
  }

  else {

    if (field.querySelector(`.kv[x='0'][y='5']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='0'][y='6']`).getAttribute('class').split(' ').length == 2) {
    if (field.querySelector(`.black_king`).getAttribute('trap') != 'white_king') {
        if (field.querySelector(`.black_king`).getAttribute('hodi') == 0) {
          if (field.querySelector(`.kv[y='7'][x='0']`).getAttribute('hodi') == 0 ) {
            if (field.querySelector(`.kv[x='0'][y='6']`).getAttribute('trap') != 'white' ) {
              field.querySelector(`.kv[y='6'][x='0']`).style.backgroundColor = 'rgb(88, 38, 128)';
              field.querySelector(`.kv[y='6'][x='0']`).onclick = function () {
  if (  field.querySelector(`.kv[y='6'][x='0']`).style.backgroundColor == 'rgb(88, 38, 128)') {
    delete_figure(0,7);
    field.querySelector(`.kv[y='4'][x='0']`).classList.remove(main_elem);
    field.querySelector(`.kv[y='0'][x='7']`).setAttribute('team','none');
    field.querySelector(`.kv[y='4'][x='0']`).setAttribute('team','none');
    field.querySelector(`.kv[y='0'][x='7']`).setAttribute('hodi','1');
    field.querySelector(`.kv[y='4'][x='0']`).setAttribute('hodi','1');
    field.querySelector(`.kv[x='0'][y='6']`).setAttribute('team',main_attribute);
    field.querySelector(`.kv[x='0'][y='5']`).setAttribute('team',main_attribute);
    field.querySelector(`.kv[x='0'][y='6']`).classList.add('black_king');
    field.querySelector(`.kv[x='0'][y='5']`).classList.add('black_lad');
    hod = !hod;
    if (trap == 'white') {
      let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
      document.querySelector('#clock_black p b').innerHTML = meg;
    }else {
      let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
      document.querySelector('#clock_white p b').innerHTML = meg;
    }
    new_hod++;
  }
              }
            }
          }
        }
    }

  }

  if (field.querySelector(`.kv[x='0'][y='3']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='0'][y='2']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='0'][y='1']`).getAttribute('class').split(' ').length == 2) {
  if (field.querySelector(`.black_king`).getAttribute('trap') != 'black_king') {
    if (field.querySelector(`.black_king`).getAttribute('hodi') == 0) {
      if (field.querySelector(`.kv[y='0'][x='0']`).getAttribute('hodi') == 0 ) {
        if (field.querySelector(`.kv[x='0'][y='1']`).getAttribute('trap') != 'white' ) {

          field.querySelector(`.kv[y='2'][x='0']`).style.backgroundColor = 'rgb(88, 38, 128)';
          field.querySelector(`.kv[y='2'][x='0']`).onclick = function () {
            if (  field.querySelector(`.kv[y='2'][x='0']`).style.backgroundColor == 'rgb(88, 38, 128)')  {
              delete_figure(0,0);
                  field.querySelector(`.kv[y='4'][x='0']`).classList.remove(main_elem);
                field.querySelector(`.kv[y='0'][x='0']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='0']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='0']`).setAttribute('hodi','1');
                field.querySelector(`.kv[y='0'][x='0']`).setAttribute('hodi','1');
                field.querySelector(`.kv[x='0'][y='1']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='0'][y='2']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='0'][y='1']`).classList.add('black_king');
                field.querySelector(`.kv[x='0'][y='2']`).classList.add('black_lad');
            hod = !hod;
            if (trap == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
            new_hod++;
              }
            }
        }
      }
    }
  }
  }

  }
  }
// конец королю






// начало ладьи
function trap_lad_black() {
  let black_horses = field.querySelectorAll('.black_lad');
  black_horses.forEach((item, i) => {
    let x = +item.getAttribute('x');
    let y = +item.getAttribute('y');
  let arr_figure = lad_functions(x,y,'white_king');
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
      item.setAttribute('trap','new_white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';





if (+item2.getAttribute('x') == +item.getAttribute('x')) {
if (+item2.getAttribute('y') < +item.getAttribute('y')) {
  for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
    if (i == y && x == x) continue;
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
  }
}else {
  for (let i=+item.getAttribute('y'); i< +item2.getAttribute('y'); ++i) {
    if (i == y && x == x) continue;
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
  }
}
}
else {
if (+item2.getAttribute('x') < +item.getAttribute('x')) {
  for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
    if (y == y && i == x) continue;
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
  }
}
else {
  for (let i=+item.getAttribute('x'); i< +item2.getAttribute('x');++i) {
      if (y == y && i == x) continue;
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
  }
}
}
item.setAttribute('trap','new_white_king');
    }
  });
});
}

function trap_lad_white() {
  let white_horses = field.querySelectorAll('.white_lad');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = lad_functions(x,y,'black_king');
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
      item.setAttribute('trap','black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';






if (+item2.getAttribute('x') == +item.getAttribute('x')) {
if (+item2.getAttribute('y') < +item.getAttribute('y')) {
  for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
}else {
  for (let i=+item.getAttribute('y')+1; i< +item2.getAttribute('y'); ++i) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
}
}
else {
if (+item2.getAttribute('x') < +item.getAttribute('x')) {
  for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
}
else {
  for (let i=+item.getAttribute('x')+1; i< +item2.getAttribute('x');++i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
}
}
  item.setAttribute('trap','new_black_king');
    }
  });
  });
}



function lad_functions(x,y,king) {
let arr_figure = [];
  //вверх
let  x3 = x;
  x3--;
  for (let x2=x3;x2>=0;--x2) {
    let elem = document.querySelector(`.kv[x="${x2}"][y="${y}"`);
    arr_figure.push(elem);
    if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  //  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
  // вниз
  x3 = x;
  x3++;
  for (let x2=x3;x2<8;++x2) {
    let elem = document.querySelector(`.kv[x="${x2}"][y="${y}"`);
    arr_figure.push(elem);
    if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  //  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
  y3 = y;
  y3--;
  //влево
  for (let y2=y3;y2>=0;--y2) {
    let elem = document.querySelector(`.kv[x="${x}"][y="${y2}"`);
    arr_figure.push(elem);
    if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  //  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
  // вправо
  y3 = y;
  y3++;
  for (let y2=y3;y2<8;++y2) {
    let elem = document.querySelector(`.kv[x="${x}"][y="${y2}"`);
    arr_figure.push(elem);
   if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
//  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
   return arr_figure;
}




function lad(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = lad_functions(x,y,team2);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];



if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
      if (team == 'white') {
        let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
        document.querySelector('#clock_black p b').innerHTML = meg;
      }else {
        let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
        document.querySelector('#clock_white p b').innerHTML = meg;
      }
         hod = !hod;
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});


}
//офицер






function trap_oficer_white() {
  let white_horses = field.querySelectorAll('.white_oficer');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'black_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                    }
                  }


      }


  });
  });
}




function trap_oficer_black() {
  let white_horses = field.querySelectorAll('.black_oficer');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'white_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                    }
                  }


      }


  });
});
}









function oficer(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = functions_oficer(x,y,team2);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];



if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
      if (team == 'white') {
        let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
        document.querySelector('#clock_black p b').innerHTML = meg;
      }else {
        let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
        document.querySelector('#clock_white p b').innerHTML = meg;
      }
         hod = !hod;
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});

}

function functions_oficer(x,y,king) {
  let arr_figure = [];
let formylax,formylay;
formylax = x-1;
formylay = y+1;
for(;formylax>=0 && formylay<8;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax--;
formylay++;
}
formylax = x+1;
formylay = y-1;
for(;formylax<8 && formylay>=0;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
  arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax++;
formylay--;
}
formylax = x+1;
formylay = y+1;
for(;formylax<8 && formylay<8;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
  arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax++;
formylay++;
}
formylax = x-1;
formylay = y-1;
for(;formylax>=0 && formylay>=0;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
  arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax--;
formylay--;
}
  return arr_figure;
}
// конец офицер







// пешка

function trap_peshka_white() {
let peshki = field.querySelectorAll('.white_soldat');
peshki.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y = +item.getAttribute('y');
  let arr_figure = peshka_functions_white(x,y);
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
      item.setAttribute('trap','new_black_king');
      item.style.backgroundColor = 'orange';
      item.setAttribute('capiture','true');
    }
  });
});
}
function trap_peshka_black() {
  let peshki = field.querySelectorAll('.black_soldat');
  peshki.forEach((item, i) => {
    let x = +item.getAttribute('x');
    let y = +item.getAttribute('y');
    let arr_figure = peshka_functions_black(x,y);
    arr_figure.forEach((item2, i) => {
      item2.setAttribute('trap','black');
      if (item2.classList.contains('white_king')) {
        item.setAttribute('trap','new_white_king');
        item.style.backgroundColor = 'orange';
        item.setAttribute('capiture','true');
      }
    });
  });
}

function peshka_functions_white(x,y) {
  let arr_figure = [];
  let formylax = x-1;
  let formylay = y-1;
if (formylax >=0 && formylay >= 0) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
formylay = y+1;
if (formylax >=0 && formylay <8) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
if (field.querySelector(`.kv[x="${x-1}"][y="${y}"]`).getAttribute('class').split(' ').length <3) {
  arr_figure.push(field.querySelector(`.kv[x="${x-1}"][y="${y}"]`));
}
  return arr_figure;
}
function peshka_functions_black(x,y) {
  let arr_figure = [];
  let formylax = x+1;
  let formylay = y-1;
if (formylax <8 && formylay >= 0) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
formylay = y+1;
if (formylax <8 && formylay <8) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
if (field.querySelector(`.kv[x="${x+1}"][y="${y}"]`).getAttribute('class').split(' ').length <3) {
  arr_figure.push(field.querySelector(`.kv[x="${x+1}"][y="${y}"]`));
}
  return arr_figure;
}

function peshka(x,y,team,defent_king) {
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];


  let team2;
  if (team == 'white') {

     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure;
  if(team == 'black') {
    arr_figure = peshka_functions_white(x,y);
    let arr_figur  = [];
    if (x == 6) {
      for (let g=1;g<=2;++g) {
        if (field.querySelector(`.kv[x='${x-g}'][y='${y}']`).getAttribute('class').split(' ').length != 2) break;
        arr_figur.push(field.querySelector(`.kv[x='${x-g}'][y='${y}']`));
      }
    }else {
      arr_figur.push(field.querySelector(`.kv[x='${x-1}'][y='${y}']`));
    }
    arr_figur.forEach((apo, i) => {
      if(apo.getAttribute('class').split(' ').length == 3) return;

        //if(field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') return;
      if (apo.classList.contains('black')) {
        apo.style.backgroundColor = 'rgb(61, 119, 49)';
      }
      else {
        apo.style.backgroundColor = 'rgb(64, 209, 28)';
      }
      apo.onclick = function (event) {
  if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
  if (defent_king == 'white_king') {
    all_figures_trap_black();

  }else {
    all_figures_trap_white();
  }



    if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
      alert('король в опасности!');
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);


  }else {

    apo.classList.add(main_elem);
    apo.setAttribute('team',main_attribute);
    if (team == 'white') {
      let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
      document.querySelector('#clock_black p b').innerHTML = meg;
    }else {
      let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
      document.querySelector('#clock_white p b').innerHTML = meg;
    }
    hod = !hod;
    new_hod++;
    document.querySelector(`.kv[x="${x}"][y="${y}"]`).removeAttribute('new_hodi');
  if (x - apo.getAttribute('x') == 2) {
      event.target.setAttribute('new_hodi', new_hod);
  }
    if(apo.getAttribute('x') == 0) {
        event.target.classList.remove(main_elem);
        event.target.classList.add('white_queen');

    }
  }
    }

    });


  }














  else {
    arr_figure = peshka_functions_black(x,y);
    let arr_figur  = [];

    if (x == 1) {
      for (let g=1;g<=2;++g) {

        if (field.querySelector(`.kv[x='${x+g}'][y='${y}']`).getAttribute('class').split(' ').length != 2) break;
        arr_figur.push(field.querySelector(`.kv[x='${x+g}'][y='${y}']`));
      }
    }else {
      arr_figur.push(field.querySelector(`.kv[x='${x+1}'][y='${y}']`));
    }

    arr_figur.forEach((apo, i) => {
        if(apo.getAttribute('class').split(' ').length == 3) return;
        if(field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') return;
        if (apo.classList.contains('black')) {
          apo.style.backgroundColor = 'rgb(61, 119, 49)';
        }
        else {
          apo.style.backgroundColor = 'rgb(64, 209, 28)';
        }
      apo.onclick = function (event) {

  if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
  if (defent_king == 'white_king') {
    all_figures_trap_black();

  }else {
    all_figures_trap_white();
  }



    if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
      alert('король в опасности!');
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);


  }else {

    apo.classList.add(main_elem);
    apo.setAttribute('team',main_attribute);
    if (team == 'white') {
      let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
      document.querySelector('#clock_black p b').innerHTML = meg;
    }else {
      let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
      document.querySelector('#clock_white p b').innerHTML = meg;
    }
    hod = !hod;
new_hod++;
document.querySelector(`.kv[x="${x}"][y="${y}"]`).removeAttribute('new_hodi');
if (apo.getAttribute('x') - x  == 2) {
  event.target.setAttribute('new_hodi', new_hod);
}







    if(apo.getAttribute('x') == 0) {
        event.target.classList.remove(main_elem);
        event.target.classList.add('white_queen');
    }
  }
    }

    });



  }














if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,2);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,2);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}



  if(team == 'black') {
  if (x-1 >0 && x+1 <8 && y-1 >0 && y+1 <8) {
    if (field.querySelector(`.kv[x='${x}'][y='${y-1}']`).getAttribute('new_hodi') == new_hod && x == 3) {
      field.querySelector(`.kv[x='${x-1}'][y='${y-1}']`).style.backgroundColor = 'green';
      field.querySelector(`.kv[x='${x-1}'][y='${y-1}']`).onclick = function (event) {
          if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
          let x2 = event.target.getAttribute('x');
          let y2 = event.target.getAttribute('y');
          if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
            let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
            delete_figure(x2,y2);
          if (defent_king == 'white_king') {
            all_figures_trap_black();

          }else {
            all_figures_trap_white();
          }

            if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
              alert('король в опасности!');
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
        field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
            }
            else {
            delete_figure(x2,y2);
            event.target.classList.add(main_elem);
            delete_figure(x,y-1);
            event.target.setAttribute('team',main_attribute);
            if (team == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
               hod = !hod;
               if (team == 'black') {
                 if(x2 == 0) {
           event.target.classList.remove(main_elem);
           event.target.classList.add('white_queen');
                 }
               }else {
                 if (x2 == 7 ) {
                     event.target.classList.remove(main_elem);
                     event.target.classList.add('black_queen');
                 }
               }
               if (team == 'white') {
                 let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
                 document.querySelector('#clock_black p b').innerHTML = meg;
               }else {
                 let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
                 document.querySelector('#clock_white p b').innerHTML = meg;
               }
               new_hod++;
               if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
                 let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
      a++;
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
               }
      }
          }
        else {
          alert('нельзя бить по своим');
        }
      }
      }
      if (field.querySelector(`.kv[x='${x}'][y='${y+1}']`).getAttribute('new_hodi') == new_hod && x == 3) {
      field.querySelector(`.kv[x='${x-1}'][y='${y+1}']`).style.backgroundColor = 'green';
      field.querySelector(`.kv[x='${x-1}'][y='${y+1}']`).onclick = function (event) {
          if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
          let x2 = event.target.getAttribute('x');
          let y2 = event.target.getAttribute('y');
          if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
            let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
            delete_figure(x2,y2);
          if (defent_king == 'white_king') {
            all_figures_trap_black();

          }else {
            all_figures_trap_white();
          }

            if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
              alert('король в опасности!');
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
        field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
            }
            else {
            delete_figure(x2,y2);
            event.target.classList.add(main_elem);
            delete_figure(x,y+1);
            event.target.setAttribute('team',main_attribute);
            if (team == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
               hod = !hod;
               if (team == 'black') {
                 if(x2 == 0) {
           event.target.classList.remove(main_elem);
           event.target.classList.add('white_queen');
                 }
               }else {
                 if (x2 == 7 ) {
                     event.target.classList.remove(main_elem);
                     event.target.classList.add('black_queen');
                 }
               }
               new_hod++;
               if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
                 let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
      a++;
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
               }
      }
          }
        else {
          alert('нельзя бить по своим');
        }
      }
      }
  }
    }
  else {
  if (x-1 >0 && x+1 <8 && y-1 >0 && y+1 <8) {
    if (field.querySelector(`.kv[x='${x}'][y='${y+1}']`).getAttribute('new_hodi') == new_hod && x == 4) {
    field.querySelector(`.kv[x='${x+1}'][y='${y+1}']`).style.backgroundColor = 'green';
    field.querySelector(`.kv[x='${x+1}'][y='${y+1}']`).onclick = function (event) {
        if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
        let x2 = event.target.getAttribute('x');
        let y2 = event.target.getAttribute('y');
        if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
          let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
          delete_figure(x2,y2);
        if (defent_king == 'white_king') {
          all_figures_trap_black();

        }else {
          all_figures_trap_white();
        }

          if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
            alert('король в опасности!');
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
          }
          else {
          delete_figure(x2,y2);
          event.target.classList.add(main_elem);
          delete_figure(x,y+1);
          event.target.setAttribute('team',main_attribute);
          if (team == 'white') {
            let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
            document.querySelector('#clock_black p b').innerHTML = meg;
          }else {
            let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
            document.querySelector('#clock_white p b').innerHTML = meg;
          }
             hod = !hod;
             if (team == 'black') {
               if(x2 == 0) {
         event.target.classList.remove(main_elem);
         event.target.classList.add('white_queen');
               }
             }else {
               if (x2 == 7 ) {
                   event.target.classList.remove(main_elem);
                   event.target.classList.add('black_queen');
               }
             }
             new_hod++;
             if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
               let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
    a++;
    field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
             }
    }
        }
      else {
        alert('нельзя бить по своим');
      }
    }
    }
    if (field.querySelector(`.kv[x='${x}'][y='${y-1}']`).getAttribute('new_hodi') == new_hod && x == 4) {
    field.querySelector(`.kv[x='${x+1}'][y='${y-1}']`).style.backgroundColor = 'green';
    field.querySelector(`.kv[x='${x+1}'][y='${y-1}']`).onclick = function (event) {
        if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
        let x2 = event.target.getAttribute('x');
        let y2 = event.target.getAttribute('y');
        if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
          let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
          delete_figure(x2,y2);
        if (defent_king == 'white_king') {
          all_figures_trap_black();

        }else {
          all_figures_trap_white();
        }

          if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
            alert('король в опасности!');
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
          }
          else {
          delete_figure(x2,y2);
          event.target.classList.add(main_elem);
          delete_figure(x,y-1);
          event.target.setAttribute('team',main_attribute);

             hod = !hod;
             if (team == 'black') {
               if(x2 == 0) {
         event.target.classList.remove(main_elem);
         event.target.classList.add('white_queen');
               }
             }else {
               if (x2 == 7 ) {
                   event.target.classList.remove(main_elem);
                   event.target.classList.add('black_queen');
               }
             }
             new_hod++;
             if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
               let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
    a++;
    field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
             }
    }
        }
      else {
        alert('нельзя бить по своим');
      }
    }
    }
  }
  }









arr_figure.forEach((item, i) => {
  if(item.getAttribute('class').split(' ').length < 3) return;
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }

  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {
      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);

         hod = !hod;
         if (team == 'black') {
           if(x2 == 0) {
     event.target.classList.remove(main_elem);
     event.target.classList.add('white_queen');
           }
         }else {
           if (x2 == 7 ) {
               event.target.classList.remove(main_elem);
               event.target.classList.add('black_queen');
           }
         }
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});

}






function trap_black_queen() {
  let white_horses = field.querySelectorAll('.black_queen');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'white_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                    }
                  }


      }


  });
});

white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y = +item.getAttribute('y');
let arr_figure = lad_functions(x,y,'white_king');
arr_figure.forEach((item2, i) => {
  item2.setAttribute('trap','black');
  if (item2.classList.contains('white_king')) {
    item.setAttribute('trap','new_white_king');
    item.setAttribute('capiture','true');
    item.style.backgroundColor = 'orange';





if (+item2.getAttribute('x') == +item.getAttribute('x')) {
if (+item2.getAttribute('y') < +item.getAttribute('y')) {
for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
  if (i == y && x == x) continue;
  document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
}
}else {
for (let i=+item.getAttribute('y'); i< +item2.getAttribute('y'); ++i) {
  if (i == y && x == x) continue;
  document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
}
}
}
else {
if (+item2.getAttribute('x') < +item.getAttribute('x')) {
for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
  if (y == y && i == x) continue;
  document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
}
}
else {
for (let i=+item.getAttribute('x'); i< +item2.getAttribute('x');++i) {
    if (y == y && i == x) continue;
  document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
}
}
}
item.setAttribute('trap','new_white_king');
  }
});
});
}



















function trap_white_queen() {
  let white_horses = field.querySelectorAll('.white_queen');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'black_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                    }
                  }


      }


  });
  });


  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = lad_functions(x,y,'black_king');
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
      item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';






  if (+item2.getAttribute('x') == +item.getAttribute('x')) {
  if (+item2.getAttribute('y') < +item.getAttribute('y')) {
  for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
  }else {
  for (let i=+item.getAttribute('y')+1; i< +item2.getAttribute('y'); ++i) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
  }
  }
  else {
  if (+item2.getAttribute('x') < +item.getAttribute('x')) {
  for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
  }
  else {
  for (let i=+item.getAttribute('x')+1; i< +item2.getAttribute('x');++i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
  }
  }
  item.setAttribute('trap','new_black_king');
    }
  });
  });


}

function queen(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = functions_oficer(x,y,team2);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];
let arr_figure2 = lad_functions(x,y,team2);
for(let i=0;i<arr_figure2.length;i++) {
  arr_figure.push(arr_figure2[i]);
}


if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
         hod = !hod;
         new_hod++;
         if (team == 'white') {
           let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
           document.querySelector('#clock_black p b').innerHTML = meg;
         }else {
           let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
           document.querySelector('#clock_white p b').innerHTML = meg;
         }
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});
}














//конец


field.onclick = function (event) {
if (exit) {
  return false;
}

    let target= event.target;
  if (!target.classList.contains('kv')) return;
  let b = true;
  let b1 = true;
  field.querySelectorAll('.kv').forEach((item, i) => {
    if (item.classList.contains('white_king')) b = false;
    if (item.classList.contains('black_king')) b1 = false;
    item.style.backgroundColor = '';
    item.setAttribute('trap','none');
    item.setAttribute('capiture','none');
  });
  if (b || b1) {
    alert('упс кажется я чего-то не досчитал....');
    exit = true;
    if(b) {
      alert('победа черных');
    }
    if (b1) {
      alert('победа белых');
    }
  }
    target.style.backgroundColor = 'green';
    target.onclick = function () {
      return false;
    }
  if (hod){
  all_figures_trap_black();
  }
  else {
    all_figures_trap_white();
  }

  let y =+target.getAttribute('y');
  let x =+target.getAttribute('x');



















  // шахи королям

  if (field.querySelector('.white_king').getAttribute('trap') == 'black' || field.querySelector('.white_king').getAttribute('trap') == 'white_king') {
    field.querySelector('.white_king').style.backgroundColor = 'red';
    let x = +field.querySelector('.white_king').getAttribute('x');
    let y = +field.querySelector('.white_king').getAttribute('y');
    let figure = king_functions(x,y);
let x3 = +field.querySelector(`.kv[capiture='true']`).getAttribute('x');
let y3 = +field.querySelector(`.kv[capiture='true']`).getAttribute('y');
let length = +field.querySelectorAll(`.kv[capiture='true']`).length;
    let figure2 = [];

    figure.forEach((item, i) => {
      if (item.style.backgroundColor == 'orange') {

 let x2 = item.getAttribute('x');
 let y2 = item.getAttribute('y');
        item.classList.add('white_king');
        all_figures_trap_black();
  if(field.querySelectorAll(`.kv[capiture ='true']`).length > 1) {
 field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove('white_king');
return;
        }
        item.classList.remove('white_king');
        figure2.push(item);
      }else {
      if (item.getAttribute('trap') == 'black' || item.getAttribute('team') == 'white' || item.getAttribute('trap') == 'white_king' ) {
        return;
      }
      else {
        figure2.push(item);
      }
    }});

    if (document.querySelectorAll(`.kv[capiture = true]`).length >= 2) {
  /*
  if (!target.classList.contains('white_king') ) {
    return;
  }
  */
    }


    if (figure2.length == 0 ) {
      let kap = document.querySelectorAll(`.kv[trap='white_king']`);



      trap_horses_white();
      trap_lad_white();
      trap_oficer_white();
      trap_peshka_white();
      trap_white_queen();


      let kap2 =true;
kap.forEach((item, i) => {
  if(item.getAttribute('trap') != 'white_king') {
 kap2 = false;

  }
});



  if (document.querySelectorAll(`.kv[capiture = true]`).length > 1 && kap2) {
   alert('королю белых обьявляется шах и мат!');
   exit = true;
  }





  if (document.querySelector(`.kv[capiture = 'true']`).getAttribute('trap') != 'white' && kap2) {
   alert('королю белых обьявляется шах и мат!');
   exit = true;
 }

  all_figures_trap_black();
}


  }







  if (field.querySelector('.black_king').getAttribute('trap') == 'white' || field.querySelector('.black_king').getAttribute('trap') == 'black_king') {
    field.querySelector('.black_king').style.backgroundColor = 'red';
    let x = +field.querySelector('.black_king').getAttribute('x');
    let y = +field.querySelector('.black_king').getAttribute('y');
    let figure = king_functions(x,y);
  let figure2 = [];

  figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange') {
let x2 = item.getAttribute('x');
let y2 = item.getAttribute('y');
      item.classList.add('black_king');
      all_figures_trap_white();
if(field.querySelectorAll(`.kv[capiture ='true']`).length > 1) {
field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove('black_king');
return;
      }
      figure2.push(item);
        item.classList.remove('black_king');
    }
    if (item.getAttribute('trap') == 'white' || item.getAttribute('team') == 'black' || item.getAttribute('team') == 'black_king') {
      return;
    }
    else {
      figure2.push(item);
    }

  });

if (document.querySelectorAll(`.kv[capiture = true]`).length > 1) {
/*
if (!target.classList.contains('black_king') ) {
  return;
}
*/
}
//  all_figures_trap_black();
    if (figure2.length == 1 ) {
      let kap = document.querySelectorAll(`.kv[trap='black_king']`);

      trap_horses_black();
      trap_lad_black();
      trap_oficer_black();
      trap_peshka_black();
      trap_black_queen();

      let kap2 =true;
    kap.forEach((item, i) => {
    if(item.getAttribute('trap') != 'black_king') {

    kap2 = false;
    }
    });

      if (document.querySelectorAll(`.kv[capiture = true]`).length > 1 && kap2) {
        alert('королю черных обьявляется шах и мат!');
        exit = true;
      }
  if (document.querySelector(`.kv[capiture = 'true']`).getAttribute('trap') != 'black' && kap2) {
  alert('королю черных обьявляется шах и мат!');
  exit = true;
  }

    }
all_figures_trap_white();
  }



field.querySelectorAll(`.black_soldat`).forEach((item, i) => {
  if(item.getAttribute('x') == 7) {
    item.classList.remove('black_soldat');
    item.classList.add('black_queen');
  }
});













  // конец шахов

  // ходы фигур
  if (target.classList.contains('white_horse') ) {
 if (hod) {
   horse(x,y,'black','white_king');

 }
}
if (target.classList.contains('black_horse') ) {
  if (!hod) {
    horse(x,y,'white','black_king');

  }
}
if (target.classList.contains('black_king')) {
  if (!hod) {
    king(x,y,'white','black_king');

  }
}
if (target.classList.contains('white_king')) {
   if (hod) {
  king(x,y,'black','white_king');

   }
}
if (target.classList.contains('white_lad')) {
  if(hod) {
    lad(x,y,'black','white_king');

  }
}
if (target.classList.contains('black_lad')) {
  if(!hod) {
    lad(x,y,'white','black_king');

  }
}
if (target.classList.contains('black_oficer')) {
  if(!hod) {
    oficer(x,y,'white','black_king');

  }
}

if (target.classList.contains('white_oficer')) {
  if(hod) {
    oficer(x,y,'black','white_king');

  }
}
if(target.classList.contains('white_soldat')) {
  if(hod) {
    peshka(x,y,'black','white_king');

  }
}
if(target.classList.contains('black_soldat')) {
  if(!hod) {
    peshka(x,y,'white','black_king');

  }
}
if (target.classList.contains('black_queen')) {
  if(!hod) {
    queen(x,y,'white','black_king');
  }
}
if (target.classList.contains('white_queen')) {
  if(hod) {
    queen(x,y,'black','white_king');
  }
}
}



function vremia() {
  if (  +document.querySelector('#clock_white p b').innerHTML == 0 ||  +document.querySelector('#clock_black p b').innerHTML == 0) return;
  let vremia;
  if (hod) {
    vremia = +document.querySelector('#clock_white p b').innerHTML;
  }else {
      vremia = +document.querySelector('#clock_black p b').innerHTML;
  }

  vremia--;
if (hod) {
    document.querySelector('#clock_white p b').innerHTML = vremia;
}else {
    document.querySelector('#clock_black p b').innerHTML = vremia;
}
  if (vremia == 0) {
    if(hod) {
alert('победа черных');
exit = true;
}else {
  alert('победа белых');
  exit = true;
}

  }
}
  setInterval(vremia,1000);
=======
// фигуры
let arr = [
  [3,5,7,9,11,7,5,3],
  [1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2],
  [4,6,8,10,12,8,6,4],
];
let reverse2 = false;
/*
reverse.onclick = function () {
  reverse2 = !reverse2;
  createdesk();
};
*/
let new_hod = 0;
let exit = false;
  let hod = true;
// создание доски
createdesk();
function createdesk() {
  if (reverse2) {
    arr.reverse();
  }
  let m=0;

  field.innerHTML = '';
  for (let i=0;i<arr.length;i++) {
    for (let y=0;y<arr[i].length;y++) {
      let div = document.createElement('div');
      div.classList.add('kv');
      div.setAttribute('trap','none');
      if (m%2 == 0) {
        div.classList.add('white');
      }
      else {
        div.classList.add('black');
      }
      m++;

      div.setAttribute('x',`${i}`);
      div.setAttribute('y',`${y}`);
      div.setAttribute('capiture','none');
      if (arr[i][y] != 0) {
  div.classList.add (`${append_figures(arr[i][y])}`);
  if (arr[i][y]%2 == 0) {
    div.setAttribute('team','white');
  }
  else {
    div.setAttribute('team','black');
  }
      }
      if (arr[i][y] == 0) {
        div.setAttribute('team','none');
      }

      field.append(div);
    }
    m++;
  }
}
/*field.querySelectorAll(`.white_soldat`).forEach((item, i) => {
  item.setAttribute('new_hodi',new_hod);
});
field.querySelectorAll(`.black_soldat`).forEach((item, i) => {
  item.setAttribute('new_hodi',new_hod);
});
*/
function append_figures(cord) {
switch (cord) {
  case 1: return 'black_soldat';
  case 2: return 'white_soldat';
  case 3: return 'black_lad';
  case 4: return 'white_lad';
  case 5: return 'black_horse';
  case 6: return 'white_horse';
  case 7: return 'black_oficer';
  case 8: return 'white_oficer';
  case 9: return 'black_queen';
  case 10: return 'white_queen';
  case 11: return 'black_king';
  case 12: return 'white_king';
  case 0: return null;
}
}
function reverse_append_figure(figure) {
  switch (figure) {
    case 'black_soldat': return 1;
    case 'white_soldat': return 2;
    case 'black_lad': return 3;
    case 'white_lad': return 4;
    case 'black_horse': return 5;
    case 'white_horse': return 6;
    case 'black_oficer': return 7;
    case 'white_oficer': return 8;
    case 'white_queen': return 10;
    case 'black_queen': return 9;
    case 'black_king': return 11;
    case 'white_king': return 12;
  }
}

function is_it_enemy(figurefrom,figureto) {
if (figurefrom == figureto) {
  return false;
}
else {
  return true;
}
}


function delete_figure(x,y) {
let figure = document.querySelector(`.kv[x="${x}"][y="${y}"]`);
figure.classList.remove('black_lad');
figure.classList.remove('black_oficer');
figure.classList.remove('black_queen');
figure.classList.remove('black_soldat');
figure.classList.remove('black_horse');
figure.classList.remove('white_lad');
figure.classList.remove('white_soldat');
figure.classList.remove('white_horse');
figure.classList.remove('white_oficer');
figure.classList.remove('white_queen');
figure.classList.remove('null');
figure.classList.remove('white_king');
figure.classList.remove('black_king');

}

field.querySelector(`.kv[y='4'][x='7']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='0'][x='7']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='0'][x='0']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='7'][x='7']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='7'][x='0']`).setAttribute('hodi', 0);
field.querySelector(`.kv[y='4'][x='0']`).setAttribute('hodi', 0);



/*function movefigure(from_x,from_y,to_x,to_y) {
if (!document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').style.backgroundColor) return;
let figure_class = document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').getAttribute('class').split(' ')[2];
let figure = document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').getAttribute('team');
let figure2 = document.querySelector('.kv[x="'+to_x +'"][y="'+to_y+'"]').getAttribute('team');
if (is_it_enemy(figure,figure2)) {
delete_figure(to_x,to_y);
delete_figure(from_x,from_y);
document.querySelector('.kv[x="'+from_x +'"][y="'+from_y+'"]').setAttribute('team','none');
document.querySelector('.kv[x="'+to_x +'"][y="'+to_y+'"]').setAttribute('team',figure);
document.querySelector('.kv[x="'+to_x +'"][y="'+to_y+'"]').classList.add(figure_class);
arr[from_x,from_y] = 0;
arr[to_x,to_y] = reverse_append_figure(figure);
hod = !hod;

}
else {
alert('нельзя бить собственные фигуры!');
}
}*/
function trap_horses_white() {
  let white_horses = field.querySelectorAll('.white_horse');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = horse_functions(x,y);
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
        item2.setAttribute('trap','black_king');
        item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
    }
  });
  });
}

function trap_horses_black() {
  let black_horses = field.querySelectorAll('.black_horse');
  black_horses.forEach((item, i) => {
    let x = +item.getAttribute('x');
    let y = +item.getAttribute('y');
  let arr_figure = horse_functions(x,y);
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
      item.setAttribute('trap','new_white_king');
      item2.setAttribute('trap','white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
    }
  });
});
}

function horse_functions(x,y) {
  let arr_figure = [];
  let formylax, formylay,elem;
   formylax = x+2;
   formylay = y+1;
if (formylax<8&&formylay<8) {
 elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x+2;
formylay = y-1;
if (formylax<8&&formylay>=0) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x+1;
formylay = y+2;
if (formylax<8&&formylay<8) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x+1;
formylay = y-2;
if (formylax<8&&formylay>=0) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-2;
formylay = y-1;
if (formylax>=0&&formylay>=0) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-1;
formylay = y-2;
if (formylax>=0&&formylay>=0){
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-2;
formylay = y+1;
if (formylax>=0&&formylay<8) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
formylax = x-1;
formylay = y+2;
if (formylax>=0&&formylay<8) {
   elem=field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`);
arr_figure.push(elem);
}
return arr_figure;
}











function horse(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = horse_functions(x,y);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
  let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
  let item2 = [];



if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange') {
      item2.push(item);

      arr_figure.splice(0,8);
    }
    if (item.getAttribute('trap') == defent_king) {
      if (item.classList.contains(defent_king)) return;
      item2.push(item);
      arr_figure.splice(0,8);
    }
  });

if(item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




  arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
         hod = !hod;
         if (team == 'white') {
           let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
           document.querySelector('#clock_black p b').innerHTML = meg;
         }else {
           let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
           document.querySelector('#clock_white p b').innerHTML = meg;
         }
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
  a++;
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
  }
    }
  else {
    alert('нельзя бить по своим');
  }
    }
  });


}
// конец лошади










// король
function trap_king_black() {
    let black_king = field.querySelector('.black_king');
    x = +black_king.getAttribute('x');
    y = +black_king.getAttribute('y');
    arr_figure = king_functions(x,y);
   arr_figure.forEach((item, i) => {
     item.setAttribute('trap','black');

   });
}
function trap_king_white() {
  let white_king = field.querySelector('.white_king');
    let x = +white_king.getAttribute('x');
    let y = +white_king.getAttribute('y');
    let arr_figure = king_functions(x,y);
    arr_figure.forEach((item, i) => {
      item.setAttribute('trap','white');
    });

}










function all_figures_trap_white() {
  trap_king_white();
  trap_horses_white();
  trap_lad_white();
  trap_oficer_white();
  trap_peshka_white();
  trap_white_queen();
}
function all_figures_trap_black() {
  trap_king_black();
  trap_horses_black();
  trap_lad_black();
  trap_oficer_black();
  trap_peshka_black();
  trap_black_queen();
}


















function king_functions(x,y) {
  let arr_figure = [];
  let formylax, formylay;

formylax = x+1;
formylay = y-1;
  if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
    arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
  }
  formylax = x-1;
  formylay = y+1;
if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
      arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
    }
    formylax = x+1;
    formylay = y+1;
  if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
        arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
      }
      formylax = x-1;
      formylay = y-1;
  if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
          arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
        }
        formylax = x;
        formylay = y-1;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
            arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
          }
          formylax = x;
          formylay = y+1;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
              arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
            }
            formylax = x+1;
            formylay = y;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
                arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
              }
              formylax = x-1;
              formylay = y;
    if (field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`)) {
                  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
                }
                return arr_figure;
}





function king(x,y,trap,king) {
  let arr_figure = king_functions(x,y);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let a;
if (king == 'white_king') {
   a=  'new_white_king';
}else {
   a = 'new_black_king';
}



  arr_figure.forEach((item, i) => {
      if (item.getAttribute('trap') == trap || item.getAttribute('trap') == main_elem) return;
      if (item.style.backgroundColor == 'orange') {
 let x2 = item.getAttribute('x');
 let y2 = item.getAttribute('y');
        item.classList.add(main_elem);
        all_figures_trap_black();
  if(field.querySelectorAll(`.kv[capiture ='true']`).length > 1) {
 field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove(main_elem);

 return;
        }
          all_figures_trap_white();
        if(field.querySelectorAll(`.kv[capiture='true']`).length > 1) {
 field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove(main_elem);
          return;
        }
item.classList.remove(main_elem);
      }


            if (item.classList.contains('black')) {
        item.style.backgroundColor = 'rgb(61, 119, 49)';
      }
      else {
        item.style.backgroundColor = 'rgb(64, 209, 28)';
      }

    item.onclick = function (event) {
      if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
      let x2 = event.target.getAttribute('x');
      let y2 = event.target.getAttribute('y');
      let elem = field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
        delete_figure(x2,y2);
        event.target.classList.add(main_elem);
        event.target.setAttribute('team',main_attribute);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
           hod = !hod;
           if (trap == 'white') {
             let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
             document.querySelector('#clock_black p b').innerHTML = meg;
           }else {
             let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
             document.querySelector('#clock_white p b').innerHTML = meg;
           }
new_hod++;
           if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
             let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
 a++;
 field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
           }
      }
    else {
      alert('нельзя бить по своим');
    }
  }
  });
  if (king == 'white_king') {

  if (field.querySelector(`.kv[x='7'][y='5']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='7'][y='6']`).getAttribute('class').split(' ').length == 2) {
  if (field.querySelector(`.white_king`).getAttribute('trap') != 'white_king') {
      if (field.querySelector(`.white_king`).getAttribute('hodi') == 0) {
        if (field.querySelector(`.kv[y='7'][x='7']`).getAttribute('hodi') == 0 ) {
          if (field.querySelector(`.kv[x='7'][y='6']`).getAttribute('trap') != 'black' ) {
            field.querySelector(`.kv[y='6'][x='7']`).style.backgroundColor = 'rgb(88, 38, 128)';
            field.querySelector(`.kv[y='6'][x='7']`).onclick = function () {
if (  field.querySelector(`.kv[y='6'][x='7']`).style.backgroundColor == 'rgb(88, 38, 128)') {
  delete_figure(7,7);
  field.querySelector(`.kv[y='4'][x='7']`).classList.remove(main_elem);
  field.querySelector(`.kv[y='7'][x='7']`).setAttribute('team','none');
  field.querySelector(`.kv[y='4'][x='7']`).setAttribute('team','none');
  field.querySelector(`.kv[y='7'][x='7']`).setAttribute('hodi','1');
  field.querySelector(`.kv[y='4'][x='7']`).setAttribute('hodi','1');
  field.querySelector(`.kv[x='7'][y='6']`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x='7'][y='5']`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x='7'][y='6']`).classList.add('white_king');
  field.querySelector(`.kv[x='7'][y='5']`).classList.add('white_lad');
  hod = !hod;
  if (trap == 'white') {
    let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
    document.querySelector('#clock_black p b').innerHTML = meg;
  }else {
    let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
    document.querySelector('#clock_white p b').innerHTML = meg;
  }
  new_hod++;
}
            }
          }
        }
      }
  }

}
  if (field.querySelector(`.kv[x='7'][y='3']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='7'][y='2']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='7'][y='1']`).getAttribute('class').split(' ').length == 2) {
  if (field.querySelector(`.white_king`).getAttribute('trap') != 'white_king') {
    if (field.querySelector(`.white_king`).getAttribute('hodi') == 0) {
      if (field.querySelector(`.kv[y='0'][x='7']`).getAttribute('hodi') == 0 ) {
        if (field.querySelector(`.kv[x='7'][y='1']`).getAttribute('trap') != 'black' ) {

          field.querySelector(`.kv[y='2'][x='7']`).style.backgroundColor = 'rgb(88, 38, 128)';
          field.querySelector(`.kv[y='2'][x='7']`).onclick = function () {
            if (  field.querySelector(`.kv[y='2'][x='7']`).style.backgroundColor == 'rgb(88, 38, 128)')  {
              delete_figure(7,0);
                  field.querySelector(`.kv[y='4'][x='7']`).classList.remove(main_elem);
                field.querySelector(`.kv[y='0'][x='7']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='7']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='7']`).setAttribute('hodi','1');
                field.querySelector(`.kv[y='0'][x='7']`).setAttribute('hodi','1');
                field.querySelector(`.kv[x='7'][y='1']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='7'][y='2']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='7'][y='1']`).classList.add('white_king');
                field.querySelector(`.kv[x='7'][y='2']`).classList.add('white_lad');
            hod = !hod;
            if (trap == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
            new_hod++;
              }
            }
        }
      }
    }
  }
  }
  }

  else {

    if (field.querySelector(`.kv[x='0'][y='5']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='0'][y='6']`).getAttribute('class').split(' ').length == 2) {
    if (field.querySelector(`.black_king`).getAttribute('trap') != 'white_king') {
        if (field.querySelector(`.black_king`).getAttribute('hodi') == 0) {
          if (field.querySelector(`.kv[y='7'][x='0']`).getAttribute('hodi') == 0 ) {
            if (field.querySelector(`.kv[x='0'][y='6']`).getAttribute('trap') != 'white' ) {
              field.querySelector(`.kv[y='6'][x='0']`).style.backgroundColor = 'rgb(88, 38, 128)';
              field.querySelector(`.kv[y='6'][x='0']`).onclick = function () {
  if (  field.querySelector(`.kv[y='6'][x='0']`).style.backgroundColor == 'rgb(88, 38, 128)') {
    delete_figure(0,7);
    field.querySelector(`.kv[y='4'][x='0']`).classList.remove(main_elem);
    field.querySelector(`.kv[y='0'][x='7']`).setAttribute('team','none');
    field.querySelector(`.kv[y='4'][x='0']`).setAttribute('team','none');
    field.querySelector(`.kv[y='0'][x='7']`).setAttribute('hodi','1');
    field.querySelector(`.kv[y='4'][x='0']`).setAttribute('hodi','1');
    field.querySelector(`.kv[x='0'][y='6']`).setAttribute('team',main_attribute);
    field.querySelector(`.kv[x='0'][y='5']`).setAttribute('team',main_attribute);
    field.querySelector(`.kv[x='0'][y='6']`).classList.add('black_king');
    field.querySelector(`.kv[x='0'][y='5']`).classList.add('black_lad');
    hod = !hod;
    if (trap == 'white') {
      let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
      document.querySelector('#clock_black p b').innerHTML = meg;
    }else {
      let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
      document.querySelector('#clock_white p b').innerHTML = meg;
    }
    new_hod++;
  }
              }
            }
          }
        }
    }

  }

  if (field.querySelector(`.kv[x='0'][y='3']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='0'][y='2']`).getAttribute('class').split(' ').length == 2 && field.querySelector(`.kv[x='0'][y='1']`).getAttribute('class').split(' ').length == 2) {
  if (field.querySelector(`.black_king`).getAttribute('trap') != 'black_king') {
    if (field.querySelector(`.black_king`).getAttribute('hodi') == 0) {
      if (field.querySelector(`.kv[y='0'][x='0']`).getAttribute('hodi') == 0 ) {
        if (field.querySelector(`.kv[x='0'][y='1']`).getAttribute('trap') != 'white' ) {

          field.querySelector(`.kv[y='2'][x='0']`).style.backgroundColor = 'rgb(88, 38, 128)';
          field.querySelector(`.kv[y='2'][x='0']`).onclick = function () {
            if (  field.querySelector(`.kv[y='2'][x='0']`).style.backgroundColor == 'rgb(88, 38, 128)')  {
              delete_figure(0,0);
                  field.querySelector(`.kv[y='4'][x='0']`).classList.remove(main_elem);
                field.querySelector(`.kv[y='0'][x='0']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='0']`).setAttribute('team','none');
                field.querySelector(`.kv[y='4'][x='0']`).setAttribute('hodi','1');
                field.querySelector(`.kv[y='0'][x='0']`).setAttribute('hodi','1');
                field.querySelector(`.kv[x='0'][y='1']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='0'][y='2']`).setAttribute('team',main_attribute);
                field.querySelector(`.kv[x='0'][y='1']`).classList.add('black_king');
                field.querySelector(`.kv[x='0'][y='2']`).classList.add('black_lad');
            hod = !hod;
            if (trap == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
            new_hod++;
              }
            }
        }
      }
    }
  }
  }

  }
  }
// конец королю






// начало ладьи
function trap_lad_black() {
  let black_horses = field.querySelectorAll('.black_lad');
  black_horses.forEach((item, i) => {
    let x = +item.getAttribute('x');
    let y = +item.getAttribute('y');
  let arr_figure = lad_functions(x,y,'white_king');
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
      item.setAttribute('trap','new_white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';





if (+item2.getAttribute('x') == +item.getAttribute('x')) {
if (+item2.getAttribute('y') < +item.getAttribute('y')) {
  for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
    if (i == y && x == x) continue;
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
  }
}else {
  for (let i=+item.getAttribute('y'); i< +item2.getAttribute('y'); ++i) {
    if (i == y && x == x) continue;
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
  }
}
}
else {
if (+item2.getAttribute('x') < +item.getAttribute('x')) {
  for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
    if (y == y && i == x) continue;
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
  }
}
else {
  for (let i=+item.getAttribute('x'); i< +item2.getAttribute('x');++i) {
      if (y == y && i == x) continue;
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
  }
}
}
item.setAttribute('trap','new_white_king');
    }
  });
});
}

function trap_lad_white() {
  let white_horses = field.querySelectorAll('.white_lad');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = lad_functions(x,y,'black_king');
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
      item.setAttribute('trap','black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';






if (+item2.getAttribute('x') == +item.getAttribute('x')) {
if (+item2.getAttribute('y') < +item.getAttribute('y')) {
  for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
}else {
  for (let i=+item.getAttribute('y')+1; i< +item2.getAttribute('y'); ++i) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
}
}
else {
if (+item2.getAttribute('x') < +item.getAttribute('x')) {
  for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
}
else {
  for (let i=+item.getAttribute('x')+1; i< +item2.getAttribute('x');++i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
}
}
  item.setAttribute('trap','new_black_king');
    }
  });
  });
}



function lad_functions(x,y,king) {
let arr_figure = [];
  //вверх
let  x3 = x;
  x3--;
  for (let x2=x3;x2>=0;--x2) {
    let elem = document.querySelector(`.kv[x="${x2}"][y="${y}"`);
    arr_figure.push(elem);
    if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  //  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
  // вниз
  x3 = x;
  x3++;
  for (let x2=x3;x2<8;++x2) {
    let elem = document.querySelector(`.kv[x="${x2}"][y="${y}"`);
    arr_figure.push(elem);
    if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  //  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
  y3 = y;
  y3--;
  //влево
  for (let y2=y3;y2>=0;--y2) {
    let elem = document.querySelector(`.kv[x="${x}"][y="${y2}"`);
    arr_figure.push(elem);
    if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  //  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
  // вправо
  y3 = y;
  y3++;
  for (let y2=y3;y2<8;++y2) {
    let elem = document.querySelector(`.kv[x="${x}"][y="${y2}"`);
    arr_figure.push(elem);
   if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
//  if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
  }
   return arr_figure;
}




function lad(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = lad_functions(x,y,team2);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];



if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
      if (team == 'white') {
        let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
        document.querySelector('#clock_black p b').innerHTML = meg;
      }else {
        let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
        document.querySelector('#clock_white p b').innerHTML = meg;
      }
         hod = !hod;
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});


}
//офицер






function trap_oficer_white() {
  let white_horses = field.querySelectorAll('.white_oficer');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'black_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                    }
                  }


      }


  });
  });
}




function trap_oficer_black() {
  let white_horses = field.querySelectorAll('.black_oficer');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'white_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                    }
                  }


      }


  });
});
}









function oficer(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = functions_oficer(x,y,team2);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];



if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
      if (team == 'white') {
        let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
        document.querySelector('#clock_black p b').innerHTML = meg;
      }else {
        let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
        document.querySelector('#clock_white p b').innerHTML = meg;
      }
         hod = !hod;
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});

}

function functions_oficer(x,y,king) {
  let arr_figure = [];
let formylax,formylay;
formylax = x-1;
formylay = y+1;
for(;formylax>=0 && formylay<8;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax--;
formylay++;
}
formylax = x+1;
formylay = y-1;
for(;formylax<8 && formylay>=0;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
  arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax++;
formylay--;
}
formylax = x+1;
formylay = y+1;
for(;formylax<8 && formylay<8;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
  arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax++;
formylay++;
}
formylax = x-1;
formylay = y-1;
for(;formylax>=0 && formylay>=0;) {
  let elem =field.querySelector(`.kv[x='${formylax}'][y='${formylay}']`);
  arr_figure.push(elem);
if (elem.getAttribute('class').split(' ').length > 2 && !elem.classList.contains(king)) break;
formylax--;
formylay--;
}
  return arr_figure;
}
// конец офицер







// пешка

function trap_peshka_white() {
let peshki = field.querySelectorAll('.white_soldat');
peshki.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y = +item.getAttribute('y');
  let arr_figure = peshka_functions_white(x,y);
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
      item.setAttribute('trap','new_black_king');
      item.style.backgroundColor = 'orange';
      item.setAttribute('capiture','true');
    }
  });
});
}
function trap_peshka_black() {
  let peshki = field.querySelectorAll('.black_soldat');
  peshki.forEach((item, i) => {
    let x = +item.getAttribute('x');
    let y = +item.getAttribute('y');
    let arr_figure = peshka_functions_black(x,y);
    arr_figure.forEach((item2, i) => {
      item2.setAttribute('trap','black');
      if (item2.classList.contains('white_king')) {
        item.setAttribute('trap','new_white_king');
        item.style.backgroundColor = 'orange';
        item.setAttribute('capiture','true');
      }
    });
  });
}

function peshka_functions_white(x,y) {
  let arr_figure = [];
  let formylax = x-1;
  let formylay = y-1;
if (formylax >=0 && formylay >= 0) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
formylay = y+1;
if (formylax >=0 && formylay <8) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
if (field.querySelector(`.kv[x="${x-1}"][y="${y}"]`).getAttribute('class').split(' ').length <3) {
  arr_figure.push(field.querySelector(`.kv[x="${x-1}"][y="${y}"]`));
}
  return arr_figure;
}
function peshka_functions_black(x,y) {
  let arr_figure = [];
  let formylax = x+1;
  let formylay = y-1;
if (formylax <8 && formylay >= 0) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
formylay = y+1;
if (formylax <8 && formylay <8) {
  arr_figure.push(field.querySelector(`.kv[x="${formylax}"][y="${formylay}"]`));
}
if (field.querySelector(`.kv[x="${x+1}"][y="${y}"]`).getAttribute('class').split(' ').length <3) {
  arr_figure.push(field.querySelector(`.kv[x="${x+1}"][y="${y}"]`));
}
  return arr_figure;
}

function peshka(x,y,team,defent_king) {
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];


  let team2;
  if (team == 'white') {

     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure;
  if(team == 'black') {
    arr_figure = peshka_functions_white(x,y);
    let arr_figur  = [];
    if (x == 6) {
      for (let g=1;g<=2;++g) {
        if (field.querySelector(`.kv[x='${x-g}'][y='${y}']`).getAttribute('class').split(' ').length != 2) break;
        arr_figur.push(field.querySelector(`.kv[x='${x-g}'][y='${y}']`));
      }
    }else {
      arr_figur.push(field.querySelector(`.kv[x='${x-1}'][y='${y}']`));
    }
    arr_figur.forEach((apo, i) => {
      if(apo.getAttribute('class').split(' ').length == 3) return;

        //if(field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') return;
      if (apo.classList.contains('black')) {
        apo.style.backgroundColor = 'rgb(61, 119, 49)';
      }
      else {
        apo.style.backgroundColor = 'rgb(64, 209, 28)';
      }
      apo.onclick = function (event) {
  if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
  if (defent_king == 'white_king') {
    all_figures_trap_black();

  }else {
    all_figures_trap_white();
  }



    if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
      alert('король в опасности!');
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);


  }else {

    apo.classList.add(main_elem);
    apo.setAttribute('team',main_attribute);
    if (team == 'white') {
      let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
      document.querySelector('#clock_black p b').innerHTML = meg;
    }else {
      let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
      document.querySelector('#clock_white p b').innerHTML = meg;
    }
    hod = !hod;
    new_hod++;
    document.querySelector(`.kv[x="${x}"][y="${y}"]`).removeAttribute('new_hodi');
  if (x - apo.getAttribute('x') == 2) {
      event.target.setAttribute('new_hodi', new_hod);
  }
    if(apo.getAttribute('x') == 0) {
        event.target.classList.remove(main_elem);
        event.target.classList.add('white_queen');

    }
  }
    }

    });


  }














  else {
    arr_figure = peshka_functions_black(x,y);
    let arr_figur  = [];

    if (x == 1) {
      for (let g=1;g<=2;++g) {

        if (field.querySelector(`.kv[x='${x+g}'][y='${y}']`).getAttribute('class').split(' ').length != 2) break;
        arr_figur.push(field.querySelector(`.kv[x='${x+g}'][y='${y}']`));
      }
    }else {
      arr_figur.push(field.querySelector(`.kv[x='${x+1}'][y='${y}']`));
    }

    arr_figur.forEach((apo, i) => {
        if(apo.getAttribute('class').split(' ').length == 3) return;
        if(field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') return;
        if (apo.classList.contains('black')) {
          apo.style.backgroundColor = 'rgb(61, 119, 49)';
        }
        else {
          apo.style.backgroundColor = 'rgb(64, 209, 28)';
        }
      apo.onclick = function (event) {

  if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
  document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
  if (defent_king == 'white_king') {
    all_figures_trap_black();

  }else {
    all_figures_trap_white();
  }



    if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
      alert('король в опасности!');
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);


  }else {

    apo.classList.add(main_elem);
    apo.setAttribute('team',main_attribute);
    if (team == 'white') {
      let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
      document.querySelector('#clock_black p b').innerHTML = meg;
    }else {
      let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
      document.querySelector('#clock_white p b').innerHTML = meg;
    }
    hod = !hod;
new_hod++;
document.querySelector(`.kv[x="${x}"][y="${y}"]`).removeAttribute('new_hodi');
if (apo.getAttribute('x') - x  == 2) {
  event.target.setAttribute('new_hodi', new_hod);
}







    if(apo.getAttribute('x') == 0) {
        event.target.classList.remove(main_elem);
        event.target.classList.add('white_queen');
    }
  }
    }

    });



  }














if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,2);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,2);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}



  if(team == 'black') {
  if (x-1 >0 && x+1 <8 && y-1 >0 && y+1 <8) {
    if (field.querySelector(`.kv[x='${x}'][y='${y-1}']`).getAttribute('new_hodi') == new_hod && x == 3) {
      field.querySelector(`.kv[x='${x-1}'][y='${y-1}']`).style.backgroundColor = 'green';
      field.querySelector(`.kv[x='${x-1}'][y='${y-1}']`).onclick = function (event) {
          if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
          let x2 = event.target.getAttribute('x');
          let y2 = event.target.getAttribute('y');
          if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
            let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
            delete_figure(x2,y2);
          if (defent_king == 'white_king') {
            all_figures_trap_black();

          }else {
            all_figures_trap_white();
          }

            if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
              alert('король в опасности!');
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
        field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
            }
            else {
            delete_figure(x2,y2);
            event.target.classList.add(main_elem);
            delete_figure(x,y-1);
            event.target.setAttribute('team',main_attribute);
            if (team == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
               hod = !hod;
               if (team == 'black') {
                 if(x2 == 0) {
           event.target.classList.remove(main_elem);
           event.target.classList.add('white_queen');
                 }
               }else {
                 if (x2 == 7 ) {
                     event.target.classList.remove(main_elem);
                     event.target.classList.add('black_queen');
                 }
               }
               if (team == 'white') {
                 let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
                 document.querySelector('#clock_black p b').innerHTML = meg;
               }else {
                 let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
                 document.querySelector('#clock_white p b').innerHTML = meg;
               }
               new_hod++;
               if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
                 let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
      a++;
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
               }
      }
          }
        else {
          alert('нельзя бить по своим');
        }
      }
      }
      if (field.querySelector(`.kv[x='${x}'][y='${y+1}']`).getAttribute('new_hodi') == new_hod && x == 3) {
      field.querySelector(`.kv[x='${x-1}'][y='${y+1}']`).style.backgroundColor = 'green';
      field.querySelector(`.kv[x='${x-1}'][y='${y+1}']`).onclick = function (event) {
          if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
          let x2 = event.target.getAttribute('x');
          let y2 = event.target.getAttribute('y');
          if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
            let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
            delete_figure(x2,y2);
          if (defent_king == 'white_king') {
            all_figures_trap_black();

          }else {
            all_figures_trap_white();
          }

            if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
              alert('король в опасности!');
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
              document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
        field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
            }
            else {
            delete_figure(x2,y2);
            event.target.classList.add(main_elem);
            delete_figure(x,y+1);
            event.target.setAttribute('team',main_attribute);
            if (team == 'white') {
              let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
              document.querySelector('#clock_black p b').innerHTML = meg;
            }else {
              let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
              document.querySelector('#clock_white p b').innerHTML = meg;
            }
               hod = !hod;
               if (team == 'black') {
                 if(x2 == 0) {
           event.target.classList.remove(main_elem);
           event.target.classList.add('white_queen');
                 }
               }else {
                 if (x2 == 7 ) {
                     event.target.classList.remove(main_elem);
                     event.target.classList.add('black_queen');
                 }
               }
               new_hod++;
               if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
                 let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
      a++;
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
               }
      }
          }
        else {
          alert('нельзя бить по своим');
        }
      }
      }
  }
    }
  else {
  if (x-1 >0 && x+1 <8 && y-1 >0 && y+1 <8) {
    if (field.querySelector(`.kv[x='${x}'][y='${y+1}']`).getAttribute('new_hodi') == new_hod && x == 4) {
    field.querySelector(`.kv[x='${x+1}'][y='${y+1}']`).style.backgroundColor = 'green';
    field.querySelector(`.kv[x='${x+1}'][y='${y+1}']`).onclick = function (event) {
        if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
        let x2 = event.target.getAttribute('x');
        let y2 = event.target.getAttribute('y');
        if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
          let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
          delete_figure(x2,y2);
        if (defent_king == 'white_king') {
          all_figures_trap_black();

        }else {
          all_figures_trap_white();
        }

          if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
            alert('король в опасности!');
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
          }
          else {
          delete_figure(x2,y2);
          event.target.classList.add(main_elem);
          delete_figure(x,y+1);
          event.target.setAttribute('team',main_attribute);
          if (team == 'white') {
            let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
            document.querySelector('#clock_black p b').innerHTML = meg;
          }else {
            let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
            document.querySelector('#clock_white p b').innerHTML = meg;
          }
             hod = !hod;
             if (team == 'black') {
               if(x2 == 0) {
         event.target.classList.remove(main_elem);
         event.target.classList.add('white_queen');
               }
             }else {
               if (x2 == 7 ) {
                   event.target.classList.remove(main_elem);
                   event.target.classList.add('black_queen');
               }
             }
             new_hod++;
             if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
               let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
    a++;
    field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
             }
    }
        }
      else {
        alert('нельзя бить по своим');
      }
    }
    }
    if (field.querySelector(`.kv[x='${x}'][y='${y-1}']`).getAttribute('new_hodi') == new_hod && x == 4) {
    field.querySelector(`.kv[x='${x+1}'][y='${y-1}']`).style.backgroundColor = 'green';
    field.querySelector(`.kv[x='${x+1}'][y='${y-1}']`).onclick = function (event) {
        if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
        let x2 = event.target.getAttribute('x');
        let y2 = event.target.getAttribute('y');
        if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
          document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
          let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
          delete_figure(x2,y2);
        if (defent_king == 'white_king') {
          all_figures_trap_black();

        }else {
          all_figures_trap_white();
        }

          if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
            alert('король в опасности!');
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
            document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
      field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
          }
          else {
          delete_figure(x2,y2);
          event.target.classList.add(main_elem);
          delete_figure(x,y-1);
          event.target.setAttribute('team',main_attribute);

             hod = !hod;
             if (team == 'black') {
               if(x2 == 0) {
         event.target.classList.remove(main_elem);
         event.target.classList.add('white_queen');
               }
             }else {
               if (x2 == 7 ) {
                   event.target.classList.remove(main_elem);
                   event.target.classList.add('black_queen');
               }
             }
             new_hod++;
             if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
               let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
    a++;
    field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
             }
    }
        }
      else {
        alert('нельзя бить по своим');
      }
    }
    }
  }
  }









arr_figure.forEach((item, i) => {
  if(item.getAttribute('class').split(' ').length < 3) return;
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }

  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {
      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);

         hod = !hod;
         if (team == 'black') {
           if(x2 == 0) {
     event.target.classList.remove(main_elem);
     event.target.classList.add('white_queen');
           }
         }else {
           if (x2 == 7 ) {
               event.target.classList.remove(main_elem);
               event.target.classList.add('black_queen');
           }
         }
         new_hod++;
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});

}






function trap_black_queen() {
  let white_horses = field.querySelectorAll('.black_queen');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'white_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','black');
    if (item2.classList.contains('white_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_white_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','white_king');

                    }
                  }


      }


  });
});

white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y = +item.getAttribute('y');
let arr_figure = lad_functions(x,y,'white_king');
arr_figure.forEach((item2, i) => {
  item2.setAttribute('trap','black');
  if (item2.classList.contains('white_king')) {
    item.setAttribute('trap','new_white_king');
    item.setAttribute('capiture','true');
    item.style.backgroundColor = 'orange';





if (+item2.getAttribute('x') == +item.getAttribute('x')) {
if (+item2.getAttribute('y') < +item.getAttribute('y')) {
for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
  if (i == y && x == x) continue;
  document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
}
}else {
for (let i=+item.getAttribute('y'); i< +item2.getAttribute('y'); ++i) {
  if (i == y && x == x) continue;
  document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','white_king');
}
}
}
else {
if (+item2.getAttribute('x') < +item.getAttribute('x')) {
for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
  if (y == y && i == x) continue;
  document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
}
}
else {
for (let i=+item.getAttribute('x'); i< +item2.getAttribute('x');++i) {
    if (y == y && i == x) continue;
  document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','white_king');
}
}
}
item.setAttribute('trap','new_white_king');
  }
});
});
}



















function trap_white_queen() {
  let white_horses = field.querySelectorAll('.white_queen');
  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = functions_oficer(x,y,'black_king');
  arr_figure.forEach((item2, i) => {

    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
item2.setAttribute('trap','black');
      item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';
      let x3= x;
      let y3=y;
      let x2= +item2.getAttribute('x');
      let y2= +item2.getAttribute('y');
        if(x3<x2 && y3<y2) {
          for (;x3<x2 && y3<y2;) {
            y3++;
            x3++;
            field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

          }
        }

      x2= +item2.getAttribute('x');
       y2= +item2.getAttribute('y');
          if(x3>x2 && y3>y2) {

            for (;x3>x2 && y3>y2;) {
              y3--;
              x3--;

              field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

            }
          }

          x2= +item2.getAttribute('x');
           y2= +item2.getAttribute('y');
              if(x3<x2 && y3>y2) {
                for (;x3<x2 && y3>y2;) {
                  y3--;
                  x3++;
                  field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                }
              }

              x2= +item2.getAttribute('x');
               y2= +item2.getAttribute('y');
                  if(x3>x2 && y3<y2) {
                    for (;x3>x2 && y3<y2;) {
                      y3++;
                      x3--;
                      field.querySelector(`.kv[x='${x3}'][y='${y3}']`).setAttribute('trap','black_king');

                    }
                  }


      }


  });
  });


  white_horses.forEach((item, i) => {
  let x = +item.getAttribute('x');
  let y= +item.getAttribute('y');
  let arr_figure = lad_functions(x,y,'black_king');
  arr_figure.forEach((item2, i) => {
    item2.setAttribute('trap','white');
    if (item2.classList.contains('black_king')) {
      item.setAttribute('trap','new_black_king');
      item.setAttribute('capiture','true');
      item.style.backgroundColor = 'orange';






  if (+item2.getAttribute('x') == +item.getAttribute('x')) {
  if (+item2.getAttribute('y') < +item.getAttribute('y')) {
  for (let i=+item2.getAttribute('y'); i< +item.getAttribute('y'); ++i ) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
  }else {
  for (let i=+item.getAttribute('y')+1; i< +item2.getAttribute('y'); ++i) {
    document.querySelector(`.kv[y='${i}'][x='${x}']`).setAttribute('trap','black_king');
  }
  }
  }
  else {
  if (+item2.getAttribute('x') < +item.getAttribute('x')) {
  for (let i=+item.getAttribute('x'); i> +item2.getAttribute('x');--i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
  }
  else {
  for (let i=+item.getAttribute('x')+1; i< +item2.getAttribute('x');++i) {
    document.querySelector(`.kv[y='${y}'][x='${i}']`).setAttribute('trap','black_king');
  }
  }
  }
  item.setAttribute('trap','new_black_king');
    }
  });
  });


}

function queen(x,y,team,defent_king) {
  let team2;
  if (team == 'white') {
     team2 = 'white_king';
  }
  else {
     team2 = 'black_king';
  }
  let arr_figure = functions_oficer(x,y,team2);
  let main_elem=field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('class').split(' ')[2];
let main_attribute = field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('team');
let item2 = [];
let arr_figure2 = lad_functions(x,y,team2);
for(let i=0;i<arr_figure2.length;i++) {
  arr_figure.push(arr_figure2[i]);
}


if (field.querySelector(`.${defent_king}`).style.backgroundColor == 'red') {
  arr_figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange' && item.getAttribute('team') == team) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
    if (item.getAttribute('trap') == defent_king) {
      item2.push(item);
      arr_figure.splice(0,16);
    }
  });

if (item2.length == 0) return;
  for (let i=0;i<item2.length;i++) {
    arr_figure.push(item2[i]);
  }
}




arr_figure.forEach((item, i) => {
  if (item.classList.contains('black')) {
    item.style.backgroundColor = 'rgb(61, 119, 49)';
  }
  else {
    item.style.backgroundColor = 'rgb(64, 209, 28)';
  }
  item.onclick = function (event) {
    if (!field.querySelector(`.kv[x="${x}"][y="${y}"]`).style.backgroundColor || !event.target.style.backgroundColor) return;
    let x2 = event.target.getAttribute('x');
    let y2 = event.target.getAttribute('y');
    if (is_it_enemy(main_attribute,event.target.getAttribute('team'))) {
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.remove(main_elem);
      document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team','none');
      let elem =field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).getAttribute('class').split(' ')[2];
      delete_figure(x2,y2);
    if (defent_king == 'white_king') {
      all_figures_trap_black();

    }else {
      all_figures_trap_white();
    }

      if (field.querySelector(`.kv[x='${x}'][y='${y}']`).getAttribute('trap') == defent_king ) {
        alert('король в опасности!');
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(main_elem);
        document.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('team',main_attribute);
  field.querySelector(`.kv[x="${x}"][y="${y}"]`).classList.add(elem);
      }
      else {

      delete_figure(x2,y2);
      event.target.classList.add(main_elem);
      event.target.setAttribute('team',main_attribute);
         hod = !hod;
         new_hod++;
         if (team == 'white') {
           let meg = +document.querySelector('#clock_black p b').innerHTML + 2;
           document.querySelector('#clock_black p b').innerHTML = meg;
         }else {
           let meg = +document.querySelector('#clock_white p b').innerHTML + 2;
           document.querySelector('#clock_white p b').innerHTML = meg;
         }
         if (field.querySelector(`.kv[x="${x}"][y="${y}"]`).hasAttribute('hodi')) {
           let a = +field.querySelector(`.kv[x="${x}"][y="${y}"]`).getAttribute('hodi');
a++;
field.querySelector(`.kv[x="${x}"][y="${y}"]`).setAttribute('hodi',a);
         }
}
    }
  else {
    alert('нельзя бить по своим');
  }
    }
});
}














//конец


field.onclick = function (event) {
if (exit) {
  return false;
}

    let target= event.target;
  if (!target.classList.contains('kv')) return;
  let b = true;
  let b1 = true;
  field.querySelectorAll('.kv').forEach((item, i) => {
    if (item.classList.contains('white_king')) b = false;
    if (item.classList.contains('black_king')) b1 = false;
    item.style.backgroundColor = '';
    item.setAttribute('trap','none');
    item.setAttribute('capiture','none');
  });
  if (b || b1) {
    alert('упс кажется я чего-то не досчитал....');
    exit = true;
    if(b) {
      alert('победа черных');
    }
    if (b1) {
      alert('победа белых');
    }
  }
    target.style.backgroundColor = 'green';
    target.onclick = function () {
      return false;
    }
  if (hod){
  all_figures_trap_black();
  }
  else {
    all_figures_trap_white();
  }

  let y =+target.getAttribute('y');
  let x =+target.getAttribute('x');



















  // шахи королям

  if (field.querySelector('.white_king').getAttribute('trap') == 'black' || field.querySelector('.white_king').getAttribute('trap') == 'white_king') {
    field.querySelector('.white_king').style.backgroundColor = 'red';
    let x = +field.querySelector('.white_king').getAttribute('x');
    let y = +field.querySelector('.white_king').getAttribute('y');
    let figure = king_functions(x,y);
let x3 = +field.querySelector(`.kv[capiture='true']`).getAttribute('x');
let y3 = +field.querySelector(`.kv[capiture='true']`).getAttribute('y');
let length = +field.querySelectorAll(`.kv[capiture='true']`).length;
    let figure2 = [];

    figure.forEach((item, i) => {
      if (item.style.backgroundColor == 'orange') {

 let x2 = item.getAttribute('x');
 let y2 = item.getAttribute('y');
        item.classList.add('white_king');
        all_figures_trap_black();
  if(field.querySelectorAll(`.kv[capiture ='true']`).length > 1) {
 field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove('white_king');
return;
        }
        item.classList.remove('white_king');
        figure2.push(item);
      }else {
      if (item.getAttribute('trap') == 'black' || item.getAttribute('team') == 'white' || item.getAttribute('trap') == 'white_king' ) {
        return;
      }
      else {
        figure2.push(item);
      }
    }});

    if (document.querySelectorAll(`.kv[capiture = true]`).length >= 2) {
  /*
  if (!target.classList.contains('white_king') ) {
    return;
  }
  */
    }


    if (figure2.length == 0 ) {
      let kap = document.querySelectorAll(`.kv[trap='white_king']`);



      trap_horses_white();
      trap_lad_white();
      trap_oficer_white();
      trap_peshka_white();
      trap_white_queen();


      let kap2 =true;
kap.forEach((item, i) => {
  if(item.getAttribute('trap') != 'white_king') {
 kap2 = false;

  }
});



  if (document.querySelectorAll(`.kv[capiture = true]`).length > 1 && kap2) {
   alert('королю белых обьявляется шах и мат!');
   exit = true;
  }





  if (document.querySelector(`.kv[capiture = 'true']`).getAttribute('trap') != 'white' && kap2) {
   alert('королю белых обьявляется шах и мат!');
   exit = true;
 }

  all_figures_trap_black();
}


  }







  if (field.querySelector('.black_king').getAttribute('trap') == 'white' || field.querySelector('.black_king').getAttribute('trap') == 'black_king') {
    field.querySelector('.black_king').style.backgroundColor = 'red';
    let x = +field.querySelector('.black_king').getAttribute('x');
    let y = +field.querySelector('.black_king').getAttribute('y');
    let figure = king_functions(x,y);
  let figure2 = [];

  figure.forEach((item, i) => {
    if (item.style.backgroundColor == 'orange') {
let x2 = item.getAttribute('x');
let y2 = item.getAttribute('y');
      item.classList.add('black_king');
      all_figures_trap_white();
if(field.querySelectorAll(`.kv[capiture ='true']`).length > 1) {
field.querySelector(`.kv[x="${x2}"][y="${y2}"]`).classList.remove('black_king');
return;
      }
      figure2.push(item);
        item.classList.remove('black_king');
    }
    if (item.getAttribute('trap') == 'white' || item.getAttribute('team') == 'black' || item.getAttribute('team') == 'black_king') {
      return;
    }
    else {
      figure2.push(item);
    }

  });

if (document.querySelectorAll(`.kv[capiture = true]`).length > 1) {
/*
if (!target.classList.contains('black_king') ) {
  return;
}
*/
}
//  all_figures_trap_black();
    if (figure2.length == 1 ) {
      let kap = document.querySelectorAll(`.kv[trap='black_king']`);

      trap_horses_black();
      trap_lad_black();
      trap_oficer_black();
      trap_peshka_black();
      trap_black_queen();

      let kap2 =true;
    kap.forEach((item, i) => {
    if(item.getAttribute('trap') != 'black_king') {

    kap2 = false;
    }
    });

      if (document.querySelectorAll(`.kv[capiture = true]`).length > 1 && kap2) {
        alert('королю черных обьявляется шах и мат!');
        exit = true;
      }
  if (document.querySelector(`.kv[capiture = 'true']`).getAttribute('trap') != 'black' && kap2) {
  alert('королю черных обьявляется шах и мат!');
  exit = true;
  }

    }
all_figures_trap_white();
  }



field.querySelectorAll(`.black_soldat`).forEach((item, i) => {
  if(item.getAttribute('x') == 7) {
    item.classList.remove('black_soldat');
    item.classList.add('black_queen');
  }
});













  // конец шахов

  // ходы фигур
  if (target.classList.contains('white_horse') ) {
 if (hod) {
   horse(x,y,'black','white_king');

 }
}
if (target.classList.contains('black_horse') ) {
  if (!hod) {
    horse(x,y,'white','black_king');

  }
}
if (target.classList.contains('black_king')) {
  if (!hod) {
    king(x,y,'white','black_king');

  }
}
if (target.classList.contains('white_king')) {
   if (hod) {
  king(x,y,'black','white_king');

   }
}
if (target.classList.contains('white_lad')) {
  if(hod) {
    lad(x,y,'black','white_king');

  }
}
if (target.classList.contains('black_lad')) {
  if(!hod) {
    lad(x,y,'white','black_king');

  }
}
if (target.classList.contains('black_oficer')) {
  if(!hod) {
    oficer(x,y,'white','black_king');

  }
}

if (target.classList.contains('white_oficer')) {
  if(hod) {
    oficer(x,y,'black','white_king');

  }
}
if(target.classList.contains('white_soldat')) {
  if(hod) {
    peshka(x,y,'black','white_king');

  }
}
if(target.classList.contains('black_soldat')) {
  if(!hod) {
    peshka(x,y,'white','black_king');

  }
}
if (target.classList.contains('black_queen')) {
  if(!hod) {
    queen(x,y,'white','black_king');
  }
}
if (target.classList.contains('white_queen')) {
  if(hod) {
    queen(x,y,'black','white_king');
  }
}
}



function vremia() {
  if (  +document.querySelector('#clock_white p b').innerHTML == 0 ||  +document.querySelector('#clock_black p b').innerHTML == 0) return;
  let vremia;
  if (hod) {
    vremia = +document.querySelector('#clock_white p b').innerHTML;
  }else {
      vremia = +document.querySelector('#clock_black p b').innerHTML;
  }

  vremia--;
if (hod) {
    document.querySelector('#clock_white p b').innerHTML = vremia;
}else {
    document.querySelector('#clock_black p b').innerHTML = vremia;
}
  if (vremia == 0) {
    if(hod) {
alert('победа черных');
exit = true;
}else {
  alert('победа белых');
  exit = true;
}

  }
}
  setInterval(vremia,1000);
>>>>>>> c6b1bb0b4b78e184fc3bd1bef8571cd3348e6e54
