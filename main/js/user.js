document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});



  const AddUserButton = document.getElementById('add_user_button')
  AddUserButton.addEventListener('click', () => {
    document.querySelector('.add_user_modal').classList.add('show')
    document.querySelector('.add_user_modal_back').classList.remove('.dis-none')
  })


  document.querySelector('.add_user_modal_back').addEventListener('click', () => {
    document.querySelector('.add_user_modal').classList.remove('show')
    document.querySelector('.add_user_modal_back').classList.add('dis-none')
  })

  // setTimeout(function () {
  //   console.log("start...");
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("end...");
  //       console.log(json)

  //       let html = ""

  //       for (const user of Object) {
  //         html = html + `<tr>
  //         <td>1</td>
  //         <td>reza</td>
  //         <td>mansouri</td>
  //         <td>rema49202@gmail.com</td>
  //         <td>kermanshah</td>
  //         <td>
  //             <i class="material-icons yellow-text accent-2">create</i>
  //             <i class="material-icons deep-orange-text accent-3">delete</i>
  //         </td>
  //     </tr>`
  //       }

  //     });
  // }, 5000);


});