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
});