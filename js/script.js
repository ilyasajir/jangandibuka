let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
<<<<<<< HEAD
  doi = "Nisa";
=======
  doi = "Filzah";
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
<<<<<<< HEAD
footer.href = "https://www.instagram.com/ilyasin._/";
=======
footer.href = "https://www.instagram.com/_ilyasin_/";
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
<<<<<<< HEAD
    title: 'Hai Bocil!',
=======
    title: 'Hai fiil!',
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau ko kamu lagi sibuk banget`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
<<<<<<< HEAD
              html: `Lagi pusing banget, cape banget`,
=======
              html: `Lagi cape, lagi banyak pikiran`,
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya kamu :)').then((result) => {
                  Swal.fire(
<<<<<<< HEAD
                    'Jangan keseringan begadang!',
=======
                    'Tenang aja, gausah terlalu dipikirin!',
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat makan!',
                      '',
                      'error'
                    ).then((result) => {
<<<<<<< HEAD
                      Swal.fire('Aku dukung kamu teruuus').then((result) => {
=======
                      Swal.fire('Aku dukung kamu terus ko').then((result) => {
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
                        Swal.fire({
                          title: 'Oh iya aku mau nanya',
                          text: 'Ada sesuatu yang lagi kamu pingin ga?',
                          showDenyButton: true,
<<<<<<< HEAD
                          confirmButtonText: `Ada om`,
=======
                          confirmButtonText: `Ada`,
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
                          denyButtonText: `Ga ada ko`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
<<<<<<< HEAD
                              title: 'Mau apa? Tulis aja link CO nya',
                              input: 'text',
                              inputPlaceholder: 'link shopee atau tokopedia boleeh',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu cil'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okey cil', 'Nanti aku CO-in yaaa', 'success').then((result) => {
=======
                              title: 'Mau apa?',
                              input: 'text',
                              inputPlaceholder: 'ex: Seblak, boba, or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu dong beb'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okaaay fil', 'Hari sabtu aku bawain yaa', 'success').then((result) => {
>>>>>>> b0f797c4da2f28374661a474a27b636de3042f54
                                Swal.fire("See ya! Aku kangen ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh okedeh kalo ga ada').then((result) => {
                              Swal.fire("See ya! Aku kangen ^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
