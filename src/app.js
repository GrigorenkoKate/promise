/*const API_URL = "https://jsonplaceholder.typicode.com/"*/


/*const albums = fetch(API_URL + '/albums')

albums.then(
   (responce) => {
      const result = responce.json()
      result.then(data => {
         const albomsData = document.querySelector('[data-alboms]')
         data.forEach(item => {
            albomsData.insertAdjacentHTML('afterbegin', `
         <div class="albom" >
         <div class="id" > ${'Id :'}  ${item.userId} </div>
         <div class="title"> ${item.title} </div>
         </div>`)

         });
         console.log(res)
      })
   })
*/
const API_URL = "https://jsonplaceholder.typicode.com/"
const albomsData = document.querySelector('[data-alboms]')
const getData = async (url) => {
   const res = await fetch(url)
   const data = await res.json()
   return data
}


const renderAlbums = (userId, title, contener) => {

   contener.insertAdjacentHTML('beforeEnd',
      ` <div class="albom ${userId == 1 ? 'active' : ''}" >
         <div class="albom__id" > ${'Id :'}  ${userId} </div>
         <div class="albom__title"> ${title} </div>
      </div>`
   )
}


const renderPhotos = (id, url, contener) => {
   contener.insertAdjacentHTML('beforeEnd',
      `
         <div class="photo">
            <div class="photo__id">${id}</div>
            <img class="photo__img" src="${url}">         
         </div>
      `
   )
}

const renderComments = (id, email, body, contener) => {
   contener.insertAdjacentHTML('beforeEnd',
      `<div class="comments">
         <div class="comments__id">${id}</div>
         <div class="comments__email">${email}</div>
         <div class="comments__body">${body}</div>
      </div>`
   )

}

const renderTodos = (id, title, completed, contener) => {
   contener.insertAdjacentHTML('beforeEnd',
      `<div class="todos  ">
         <div class="todos__userId ">${id}</div>
         <div class="todos__title">${title}</div>
         <div class="todos__completed ${completed ? 'active' : ''}">
         ${completed ? '<img src="./src/img/icon.png" alt="">' : ''}
      </div>
      </div>`
   )

}

getData(API_URL + "/albums").then(data => {
   data.forEach(item => {
      renderAlbums(item.id, item.title, albomsData)
   })
})
getData(API_URL + "/photos").then(data => {
   data.forEach(item => {
      renderPhotos(item.id, item.url, albomsData)
   })
})
   
getData(API_URL + "/comments").then(data => {
   data.forEach(item => {
      renderComments(item.id, item.email, item.body, albomsData)
   })
})
getData(API_URL + "/todos").then(data => {
   data.forEach(item => {
      renderTodos(item.id, item.title, item.completed, albomsData)
   })
})